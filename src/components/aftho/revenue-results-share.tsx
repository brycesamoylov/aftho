"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type AssessmentAnswer = {
  answer: string;
  question: string;
};

type AssessmentWeakness = {
  finding: string;
  title: string;
};

type RevenueResultsShareProps = {
  answers: AssessmentAnswer[];
  weaknesses: AssessmentWeakness[];
};

type ShareState = "choice" | "form" | "declined" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"firstName" | "businessName" | "email", string>>;

export function RevenueResultsShare({ answers, weaknesses }: RevenueResultsShareProps) {
  const [state, setState] = useState<ShareState>("choice");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function shareResults(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") ?? "").trim();
    const businessName = String(data.get("businessName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const errors: FieldErrors = {};

    if (!firstName) errors.firstName = "Enter your first name.";
    if (!businessName) errors.businessName = "Enter your business name.";
    if (!email) errors.email = "Enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Enter a valid email address.";

    if (Object.keys(errors).length) {
      setFieldErrors(errors);
      setMessage("Please correct the highlighted fields.");
      setState("error");
      const firstInvalid = Object.keys(errors)[0];
      form.querySelector<HTMLElement>(`#share-${firstInvalid}`)?.focus();
      return;
    }

    setFieldErrors({});
    setMessage("");
    setState("submitting");

    try {
      const response = await fetch("/api/revenue-check", {
        body: JSON.stringify({
          answers,
          businessName,
          email,
          firstName,
          weaknesses,
          website: String(data.get("website") ?? ""),
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not share your results. Please try again.");
      }

      form.reset();
      setMessage("Your complete results were sent to AFTHO. Dmitry will reply from dmitry@aftho.com.");
      setState("success");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not share your results. Please try again or email dmitry@aftho.com.",
      );
      setState("error");
    }
  }

  return (
    <section className="results-share" aria-labelledby="results-share-title">
      {state === "success" ? (
        <div className="results-share-confirmation" role="status">
          <p className="practical-kicker">Results shared</p>
          <h4 id="results-share-title">AFTHO has the complete check.</h4>
          <p>{message}</p>
        </div>
      ) : state === "declined" ? (
        <div className="results-share-confirmation">
          <p className="practical-kicker">Kept private</p>
          <h4 id="results-share-title">Your results have not been sent.</h4>
          <p>They will remain visible here while you review them.</p>
          <Button onClick={() => setState("choice")} variant="text">Share them after all</Button>
        </div>
      ) : state === "choice" ? (
        <div className="results-share-choice">
          <div>
            <p className="practical-kicker">Optional next step</p>
            <h4 id="results-share-title">Want to share your results with AFTHO?</h4>
            <p>AFTHO will receive your full answers and the areas shown above so Dmitry can review them.</p>
          </div>
          <div className="results-share-actions">
            <Button onClick={() => setState("form")}>Yes, share results</Button>
            <Button onClick={() => setState("declined")} variant="secondary">No thanks</Button>
          </div>
        </div>
      ) : (
        <div className="results-share-form-wrap">
          <div>
            <p className="practical-kicker">Share with AFTHO</p>
            <h4 id="results-share-title">Where should Dmitry reply?</h4>
            <p>Your answers are included automatically. Only the three details below are needed.</p>
          </div>

          <form className="aftho-form" noValidate onSubmit={shareResults}>
            {message ? <p className="form-message form-message--error" role="alert">{message}</p> : null}

            <div className="aftho-form-grid">
              <div className="aftho-field">
                <label htmlFor="share-firstName">First name <span>*</span></label>
                <input
                  aria-describedby={fieldErrors.firstName ? "share-firstName-error" : undefined}
                  aria-invalid={Boolean(fieldErrors.firstName)}
                  autoComplete="given-name"
                  id="share-firstName"
                  maxLength={80}
                  name="firstName"
                  required
                />
                {fieldErrors.firstName ? <p id="share-firstName-error">{fieldErrors.firstName}</p> : null}
              </div>
              <div className="aftho-field">
                <label htmlFor="share-businessName">Business name <span>*</span></label>
                <input
                  aria-describedby={fieldErrors.businessName ? "share-businessName-error" : undefined}
                  aria-invalid={Boolean(fieldErrors.businessName)}
                  autoComplete="organization"
                  id="share-businessName"
                  maxLength={120}
                  name="businessName"
                  required
                />
                {fieldErrors.businessName ? <p id="share-businessName-error">{fieldErrors.businessName}</p> : null}
              </div>
            </div>

            <div className="aftho-field">
              <label htmlFor="share-email">Email <span>*</span></label>
              <input
                aria-describedby={fieldErrors.email ? "share-email-error" : undefined}
                aria-invalid={Boolean(fieldErrors.email)}
                autoComplete="email"
                id="share-email"
                inputMode="email"
                maxLength={254}
                name="email"
                required
                type="email"
              />
              {fieldErrors.email ? <p id="share-email-error">{fieldErrors.email}</p> : null}
            </div>

            <div aria-hidden="true" className="aftho-honeypot">
              <label htmlFor="share-website">Website</label>
              <input autoComplete="off" id="share-website" name="website" tabIndex={-1} />
            </div>

            <div className="aftho-form-actions">
              <Button disabled={state === "submitting"} type="submit">
                {state === "submitting" ? "Sharing results..." : "Share results"}
              </Button>
              <Button disabled={state === "submitting"} onClick={() => setState("choice")} variant="text">
                Back
              </Button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
