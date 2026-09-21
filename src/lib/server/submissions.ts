import "server-only";

import { createHash } from "node:crypto";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const EMAIL_WINDOW_MS = 60 * 60 * 1000;
const MAX_EMAIL_DELIVERIES = 50;
const MAX_BODY_BYTES = 48_000;
const RATE_LIMIT_TIMEOUT_MS = 2_000;

const RATE_LIMIT_SCRIPT = `
local current = tonumber(redis.call("GET", KEYS[1]) or "0")
local limit = tonumber(ARGV[1])

if current >= limit then
  return {0, current}
end

current = redis.call("INCR", KEYS[1])

if current == 1 then
  redis.call("PEXPIRE", KEYS[1], ARGV[2])
end

return {1, current}
`;

type RateEntry = {
  count: number;
  expiresAt: number;
};

const rateEntries = new Map<string, RateEntry>();

function getRedisConfiguration() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim().replace(/\/+$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();

  if (!url && !token && process.env.NODE_ENV !== "production") return null;
  if (!url || !token) throw new Error("Durable rate limiting is not configured.");

  const parsedUrl = new URL(url);
  if (parsedUrl.protocol !== "https:") {
    throw new Error("Durable rate limiting requires an HTTPS endpoint.");
  }

  return { token, url };
}

function checkMemoryRateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();

  if (rateEntries.size > 500) {
    for (const [entryKey, entry] of rateEntries) {
      if (entry.expiresAt <= now) rateEntries.delete(entryKey);
    }
  }

  const current = rateEntries.get(key);

  if (!current || current.expiresAt <= now) {
    rateEntries.set(key, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  current.count += 1;
  rateEntries.set(key, current);
  return current.count > limit;
}

async function checkDurableRateLimit(key: string, limit: number, windowMs: number) {
  const configuration = getRedisConfiguration();
  if (!configuration) return checkMemoryRateLimit(key, limit, windowMs);

  const redisKey = `aftho:rate:${createHash("sha256").update(key).digest("hex")}`;
  const response = await fetch(configuration.url, {
    body: JSON.stringify(["EVAL", RATE_LIMIT_SCRIPT, 1, redisKey, limit, windowMs]),
    headers: {
      Authorization: `Bearer ${configuration.token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    signal: AbortSignal.timeout(RATE_LIMIT_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Durable rate limit service returned HTTP ${response.status}.`);
  }

  const result = (await response.json()) as { error?: unknown; result?: unknown };
  if (result.error || !Array.isArray(result.result) || typeof result.result[0] !== "number") {
    throw new Error("Durable rate limit service returned an invalid response.");
  }

  return result.result[0] !== 1;
}

async function checkRateLimit(key: string, limit: number, windowMs: number) {
  try {
    return await checkDurableRateLimit(key, limit, windowMs);
  } catch (error) {
    console.error("AFTHO durable rate limit check failed; request denied.", {
      message: error instanceof Error ? error.message : "Unknown rate limit error",
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return true;
  }
}

export function requestIsTooLarge(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  return Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES;
}

export function getClientKey(request: Request) {
  const forwarded =
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip")?.trim() || "local";
}

export function isRateLimited(key: string) {
  return checkRateLimit(`client:${key}`, MAX_SUBMISSIONS, WINDOW_MS);
}

export function isEmailDeliveryRateLimited() {
  return checkRateLimit("email-delivery:global", MAX_EMAIL_DELIVERIES, EMAIL_WINDOW_MS);
}

export function isStringOverLimit(value: unknown, maxLength: number) {
  return typeof value === "string" && value.length > maxLength;
}

export function cleanSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function cleanMultiline(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function isValidEmail(email: string) {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status });
}
