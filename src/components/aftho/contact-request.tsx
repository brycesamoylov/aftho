"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"firstName" | "businessName" | "email", string>>;

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), a[href]',
    ),
  ).filter((element) => element.tabIndex !== -1);
}

export function ContactRequest() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<FormStatus>("idle");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => firstNameRef.current?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && statusRef.current !== "submitting") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = getFocusableElements(dialogRef.current);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  function closeDialog() {
    if (status === "submitting") return;
    setOpen(false);
    setStatus("idle");
    setMessage("");
    setFieldErrors({});
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

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
      setStatus("error");
      setMessage("Please correct the highlighted fields.");
      const firstInvalid = Object.keys(errors)[0];
      form.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify({
          businessName,
          email,
          firstName,
          reason: String(data.get("reason") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your request. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("Your request was sent. Dmitry will reply from dmitry@aftho.com.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please try again or email dmitry@aftho.com.",
      );
    }
  }

  return (
    <>
      <button
        aria-haspopup="dialog"
        className="website-example-action"
        onClick={() => setOpen(true)}
        ref={triggerRef}
        type="button"
      >
        Submit request
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="contact-dialog-backdrop"
            exit={{ opacity: 0 }}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeDialog();
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              aria-describedby="contact-dialog-description"
              aria-labelledby="contact-dialog-title"
              aria-modal="true"
              className="contact-dialog"
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              ref={dialogRef}
              role="dialog"
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            >
              <div className="contact-dialog-header">
                <div>
                  <p className="practical-eyebrow">Website repair request</p>
                  <h3 id="contact-dialog-title">Tell AFTHO what needs attention.</h3>
                </div>
                <button
                  aria-label="Close request form"
                  className="contact-dialog-close"
                  disabled={status === "submitting"}
                  onClick={closeDialog}
                  type="button"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <p id="contact-dialog-description">
                Share the basics. Dmitry will review the request and reply directly.
              </p>

              {status === "success" ? (
                <div className="form-success" role="status">
                  <strong>Request sent.</strong>
                  <p>{message}</p>
                  <Button onClick={closeDialog}>Done</Button>
                </div>
              ) : (
                <form className="aftho-form" noValidate onSubmit={submitRequest}>
                  {message ? (
                    <p className="form-message form-message--error" role="alert">
                      {message}
                    </p>
                  ) : null}

                  <div className="aftho-form-grid">
                    <div className="aftho-field">
                      <label htmlFor="contact-firstName">First name <span>*</span></label>
                      <input
                        aria-describedby={fieldErrors.firstName ? "contact-firstName-error" : undefined}
                        aria-invalid={Boolean(fieldErrors.firstName)}
                        autoComplete="given-name"
                        id="contact-firstName"
                        maxLength={80}
                        name="firstName"
                        ref={firstNameRef}
                        required
                      />
                      {fieldErrors.firstName ? <p id="contact-firstName-error">{fieldErrors.firstName}</p> : null}
                    </div>

                    <div className="aftho-field">
                      <label htmlFor="contact-businessName">Business name <span>*</span></label>
                      <input
                        aria-describedby={fieldErrors.businessName ? "contact-businessName-error" : undefined}
                        aria-invalid={Boolean(fieldErrors.businessName)}
                        autoComplete="organization"
                        id="contact-businessName"
                        maxLength={120}
                        name="businessName"
                        required
                      />
                      {fieldErrors.businessName ? <p id="contact-businessName-error">{fieldErrors.businessName}</p> : null}
                    </div>
                  </div>

                  <div className="aftho-field">
                    <label htmlFor="contact-email">Email <span>*</span></label>
                    <input
                      aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                      aria-invalid={Boolean(fieldErrors.email)}
                      autoComplete="email"
                      id="contact-email"
                      inputMode="email"
                      maxLength={254}
                      name="email"
                      required
                      type="email"
                    />
                    {fieldErrors.email ? <p id="contact-email-error">{fieldErrors.email}</p> : null}
                  </div>

                  <div className="aftho-field">
                    <label htmlFor="contact-reason">What is the reason for reaching out? <em>Optional</em></label>
                    <textarea id="contact-reason" maxLength={2000} name="reason" rows={5} />
                  </div>

                  <div aria-hidden="true" className="aftho-honeypot">
                    <label htmlFor="contact-website">Website</label>
                    <input autoComplete="off" id="contact-website" name="website" tabIndex={-1} />
                  </div>

                  <div className="aftho-form-actions">
                    <Button disabled={status === "submitting"} type="submit">
                      {status === "submitting" ? "Sending request..." : "Send request"}
                    </Button>
                    <Button disabled={status === "submitting"} onClick={closeDialog} variant="text">
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
