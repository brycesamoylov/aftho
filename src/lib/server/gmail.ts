import "server-only";

import { google } from "googleapis";

type SendAfthoEmailInput = {
  replyTo: string;
  subject: string;
  text: string;
};

type ExternalServiceError = Error & {
  code?: unknown;
  response?: {
    data?: unknown;
    status?: unknown;
    statusText?: unknown;
  };
  status?: unknown;
};

const SENSITIVE_FIELD_PATTERN =
  /authorization|cookie|credential|password|secret|token/i;

function redactSensitiveFields(value: unknown, seen = new WeakSet<object>()): unknown {
  if (!value || typeof value !== "object") return value;
  if (seen.has(value)) return "[Circular]";

  seen.add(value);

  if (Array.isArray(value)) {
    return value.map((entry) => redactSensitiveFields(entry, seen));
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [
      key,
      SENSITIVE_FIELD_PATTERN.test(key) ? "[REDACTED]" : redactSensitiveFields(entry, seen),
    ]),
  );
}

export function logEmailDeliveryError(context: string, error: unknown) {
  if (!(error instanceof Error)) {
    console.error(context, { error: redactSensitiveFields(error) });
    return;
  }

  const serviceError = error as ExternalServiceError;

  console.error(context, {
    code: serviceError.code,
    message: serviceError.message,
    name: serviceError.name,
    responseBody: redactSensitiveFields(serviceError.response?.data),
    responseStatus: serviceError.response?.status ?? serviceError.status,
    responseStatusText: serviceError.response?.statusText,
    stack: serviceError.stack,
  });
}

function requireEnvironmentValue(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required email configuration: ${name}`);
  }

  return value;
}

function safeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function base64Url(value: string) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function wrapBase64(value: string) {
  return value.match(/.{1,76}/g)?.join("\r\n") ?? value;
}

export async function sendAfthoEmail({ replyTo, subject, text }: SendAfthoEmailInput) {
  const clientId = requireEnvironmentValue("GOOGLE_CLIENT_ID");
  const clientSecret = requireEnvironmentValue("GOOGLE_CLIENT_SECRET");
  const refreshToken = requireEnvironmentValue("GOOGLE_REFRESH_TOKEN");
  const from = safeHeader(requireEnvironmentValue("AFTHO_MAIL_FROM"));
  const to = safeHeader(requireEnvironmentValue("AFTHO_MAIL_TO"));
  const encodedSubject = Buffer.from(safeHeader(subject)).toString("base64");
  const encodedBody = wrapBase64(Buffer.from(text).toString("base64"));

  const message = [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${safeHeader(replyTo)}`,
    `Subject: =?UTF-8?B?${encodedSubject}?=`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    encodedBody,
  ].join("\r\n");

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  const gmail = google.gmail({ auth, version: "v1" });
  await gmail.users.messages.send({
    requestBody: { raw: base64Url(message) },
    userId: "me",
  });
}
