import { sendAfthoEmail } from "@/lib/server/gmail";
import {
  cleanMultiline,
  cleanSingleLine,
  getClientKey,
  isRateLimited,
  isStringOverLimit,
  isValidEmail,
  jsonError,
  requestIsTooLarge,
} from "@/lib/server/submissions";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (requestIsTooLarge(request)) {
    return jsonError("That request is too large.", 413);
  }

  if (isRateLimited(`contact:${getClientKey(request)}`)) {
    return jsonError("Too many requests. Please wait a few minutes and try again.", 429);
  }

  let body: Record<string, unknown>;

  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return jsonError("Please check the form and try again.", 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return jsonError("Please check the form and try again.", 400);
  }

  const honeypot = cleanSingleLine(body.website, 200);
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (
    isStringOverLimit(body.firstName, 80) ||
    isStringOverLimit(body.businessName, 120) ||
    isStringOverLimit(body.email, 254) ||
    isStringOverLimit(body.reason, 2_000)
  ) {
    return jsonError("One or more fields are too long. Please shorten them and try again.", 400);
  }

  const firstName = cleanSingleLine(body.firstName, 80);
  const businessName = cleanSingleLine(body.businessName, 120);
  const email = cleanSingleLine(body.email, 254).toLowerCase();
  const reason = cleanMultiline(body.reason, 2_000);

  if (!firstName || !businessName || !isValidEmail(email)) {
    return jsonError("Please complete your name, business name, and a valid email address.", 400);
  }

  const receivedAt = new Date().toISOString();
  const text = [
    "New AFTHO website inquiry",
    "",
    `First name: ${firstName}`,
    `Business: ${businessName}`,
    `Email: ${email}`,
    `Received: ${receivedAt}`,
    "",
    "Reason for reaching out:",
    reason || "Not provided",
  ].join("\n");

  try {
    await sendAfthoEmail({
      replyTo: email,
      subject: `New AFTHO Inquiry - ${businessName}`,
      text,
    });
  } catch {
    console.error("AFTHO contact email delivery failed.");
    return jsonError("We could not send your request. Please try again or email dmitry@aftho.com.", 502);
  }

  return Response.json({ ok: true });
}
