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

  if (isRateLimited(`revenue-check:${getClientKey(request)}`)) {
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

  const firstName = cleanSingleLine(body.firstName, 80);
  const businessName = cleanSingleLine(body.businessName, 120);
  const email = cleanSingleLine(body.email, 254).toLowerCase();
  const rawAnswers: unknown[] = Array.isArray(body.answers) ? body.answers : [];
  const rawWeaknesses: unknown[] = Array.isArray(body.weaknesses) ? body.weaknesses : [];

  const answerRecords = rawAnswers.map((entry) =>
    entry && typeof entry === "object" && !Array.isArray(entry)
      ? (entry as Record<string, unknown>)
      : {},
  );
  const weaknessRecords = rawWeaknesses.map((entry) =>
    entry && typeof entry === "object" && !Array.isArray(entry)
      ? (entry as Record<string, unknown>)
      : {},
  );
  const answers = answerRecords.slice(0, 9).map((entry) => ({
    answer: cleanSingleLine(entry.answer, 300),
    question: cleanSingleLine(entry.question, 300),
  }));
  const weaknesses = weaknessRecords.slice(0, 5).map((entry) => ({
    finding: cleanMultiline(entry.finding, 700),
    title: cleanSingleLine(entry.title, 180),
  }));

  if (
    isStringOverLimit(body.firstName, 80) ||
    isStringOverLimit(body.businessName, 120) ||
    isStringOverLimit(body.email, 254) ||
    !firstName ||
    !businessName ||
    !isValidEmail(email) ||
    rawAnswers.length !== 9 ||
    rawWeaknesses.length > 5 ||
    answers.some((entry) => !entry.question || !entry.answer || entry.answer === "Not answered") ||
    weaknesses.some((entry) => !entry.title || !entry.finding) ||
    answerRecords.some(
      (entry) => isStringOverLimit(entry.question, 300) || isStringOverLimit(entry.answer, 300),
    ) ||
    weaknessRecords.some(
      (entry) => isStringOverLimit(entry.title, 180) || isStringOverLimit(entry.finding, 700),
    )
  ) {
    return jsonError("Please complete the form and finish every question before sharing results.", 400);
  }

  const receivedAt = new Date().toISOString();
  const answerText = answers
    .map((entry, index) => `${index + 1}. ${entry.question}\nAnswer: ${entry.answer}`)
    .join("\n\n");
  const weaknessText = weaknesses.length
    ? weaknesses
        .map((entry, index) => `${index + 1}. ${entry.title}\n${entry.finding}`)
        .join("\n\n")
    : "No scored weaknesses were identified from the submitted answers.";
  const text = [
    "AFTHO Revenue Leak Check results",
    "",
    `First name: ${firstName}`,
    `Business: ${businessName}`,
    `Email: ${email}`,
    `Received: ${receivedAt}`,
    "",
    "Calculated areas to review:",
    weaknessText,
    "",
    "Complete question and answer list:",
    answerText,
  ].join("\n");

  try {
    await sendAfthoEmail({
      replyTo: email,
      subject: `AFTHO Revenue Leak Check - ${businessName}`,
      text,
    });
  } catch {
    console.error("AFTHO Revenue Leak Check email delivery failed.");
    return jsonError("We could not share your results. Please try again or email dmitry@aftho.com.", 502);
  }

  return Response.json({ ok: true });
}
