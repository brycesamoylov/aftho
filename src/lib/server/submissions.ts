import "server-only";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS = 5;
const MAX_BODY_BYTES = 48_000;

type RateEntry = {
  count: number;
  expiresAt: number;
};

const rateEntries = new Map<string, RateEntry>();

export function requestIsTooLarge(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  return Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES;
}

export function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip")?.trim() || "local";
}

export function isRateLimited(key: string) {
  const now = Date.now();

  if (rateEntries.size > 500) {
    for (const [entryKey, entry] of rateEntries) {
      if (entry.expiresAt <= now) rateEntries.delete(entryKey);
    }
  }

  const current = rateEntries.get(key);

  if (!current || current.expiresAt <= now) {
    rateEntries.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return false;
  }

  current.count += 1;
  rateEntries.set(key, current);
  return current.count > MAX_SUBMISSIONS;
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
