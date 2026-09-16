"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button, ButtonLink } from "@/components/ui/button";

type Category = "calls" | "website" | "ownership" | "response" | "followup";

type Answer = {
  label: string;
  score: number;
};

type Question = {
  id: string;
  question: string;
  help?: string;
  category?: Category;
  answers: Answer[];
};

const categoryCopy: Record<Category, { title: string; finding: string }> = {
  calls: {
    title: "Missed and after-hours calls",
    finding:
      "Some callers may reach voicemail without a clear next step or a reliable handoff to the right person.",
  },
  website: {
    title: "Website estimate requests",
    finding:
      "Customers may not have a quick, obvious way to request an estimate online and know what happens next.",
  },
  ownership: {
    title: "Who owns the response",
    finding:
      "A new inquiry can wait when responsibility changes from day to day or depends on whoever notices it first.",
  },
  response: {
    title: "Speed and prioritization",
    finding:
      "New inquiries may be waiting longer than customers expect, without a consistent way to spot the most urgent jobs.",
  },
  followup: {
    title: "Callbacks and quote follow-up",
    finding:
      "Second attempts and quote follow-ups may depend on memory instead of a clear reminder and next step.",
  },
};

const questions: Question[] = [
  {
    id: "after-hours",
    category: "calls",
    question: "What happens when someone calls after hours?",
    answers: [
      { label: "A person or answering service responds", score: 0 },
      { label: "The call is forwarded to someone on duty", score: 0 },
      { label: "They reach voicemail", score: 1 },
      { label: "It varies or I am not sure", score: 2 },
    ],
  },
  {
    id: "online-estimate",
    category: "website",
    question: "Can a customer request an estimate online?",
    answers: [
      { label: "Yes, through a short and clear form", score: 0 },
      { label: "Yes, but the form is long or general", score: 1 },
      { label: "They have to call or email us", score: 2 },
      { label: "I am not sure how well it works", score: 1 },
    ],
  },
  {
    id: "inquiry-receiver",
    category: "ownership",
    question: "Who receives new website inquiries?",
    answers: [
      { label: "A named person or assigned team", score: 0 },
      { label: "A shared inbox", score: 1 },
      { label: "Whoever happens to notice first", score: 2 },
      { label: "I am not sure", score: 2 },
    ],
  },
  {
    id: "response-owner",
    category: "ownership",
    question: "Who is responsible for responding to a new lead?",
    answers: [
      { label: "One clearly assigned person", score: 0 },
      { label: "It depends on the day or job type", score: 1 },
      { label: "There is no single owner", score: 2 },
      { label: "I am not sure", score: 2 },
    ],
  },
  {
    id: "response-time",
    category: "response",
    question: "How quickly are new inquiries normally contacted?",
    answers: [
      { label: "Within 15 minutes", score: 0 },
      { label: "Within an hour", score: 0 },
      { label: "Within a few hours", score: 1 },
      { label: "The next day or later", score: 2 },
      { label: "We do not track it", score: 2 },
    ],
  },
  {
    id: "priority",
    category: "response",
    question: "How do you decide which new leads need attention first?",
    answers: [
      { label: "We use clear rules such as urgency or job type", score: 0 },
      { label: "We usually work in the order they arrive", score: 1 },
      { label: "Whoever sees the lead decides", score: 2 },
      { label: "We do not have a consistent process", score: 2 },
    ],
  },
  {
    id: "second-attempt",
    category: "followup",
    question: "What happens if the customer does not answer the first time?",
    answers: [
      { label: "A second attempt is scheduled", score: 0 },
      { label: "Someone makes a note to try again", score: 1 },
      { label: "There is usually no second attempt", score: 2 },
      { label: "It depends on who handled the lead", score: 2 },
    ],
  },
  {
    id: "quote-followup",
    category: "followup",
    question: "How are sent estimates and quotes followed up?",
    answers: [
      { label: "A reminder and owner are set every time", score: 0 },
      { label: "We add a calendar note or task manually", score: 1 },
      { label: "Someone usually remembers", score: 2 },
      { label: "Follow-up is inconsistent", score: 2 },
    ],
  },
  {
    id: "volume",
    question: "Roughly how many new inquiries do you receive in a typical month?",
    help: "This gives context only. It does not change your result.",
    answers: [
      { label: "Fewer than 20", score: 0 },
      { label: "20–50", score: 0 },
      { label: "51–100", score: 0 },
      { label: "More than 100", score: 0 },
      { label: "I am not sure", score: 0 },
    ],
  },
];

export function RevenueLeakCheck() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const focusRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const question = questions[step];
  const selectedAnswer = question ? answers[question.id] : undefined;

  const findings = useMemo(() => {
    const scores: Record<Category, number> = {
      calls: 0,
      website: 0,
      ownership: 0,
      response: 0,
      followup: 0,
    };

    questions.forEach((item) => {
      if (!item.category) return;
      const answerIndex = answers[item.id];
      if (answerIndex === undefined) return;
      scores[item.category] += item.answers[answerIndex]?.score ?? 0;
    });

    return (Object.entries(scores) as Array<[Category, number]>)
      .filter(([, score]) => score > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([category, score]) => ({ category, score, ...categoryCopy[category] }));
  }, [answers]);

  useEffect(() => {
    if (step > 0 || showResults) {
      focusRef.current?.focus({ preventScroll: true });
      focusRef.current?.scrollIntoView({ block: "start" });
    }
  }, [step, showResults]);

  function nextQuestion() {
    if (selectedAnswer === undefined) return;
    if (step === questions.length - 1) {
      setShowResults(true);
      return;
    }
    setStep((current) => current + 1);
  }

  function previousQuestion() {
    if (showResults) {
      setShowResults(false);
      setStep(questions.length - 1);
      return;
    }
    setStep((current) => Math.max(0, current - 1));
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setShowResults(false);
  }

  return (
    <section className="leak-check-section" id="check" aria-labelledby="check-title">
      <div className="practical-container leak-check-layout">
        <div className="leak-check-intro">
          <p className="practical-eyebrow">2-minute Revenue Leak Check</p>
          <h2 id="check-title">See where jobs may be slipping through.</h2>
          <p>
            Answer a few plain questions about calls, estimate requests, and
            follow-up. You will see useful observations before deciding whether to
            contact anyone.
          </p>
          <ul>
            <li>No login</li>
            <li>No software recommendation</li>
            <li>Results shown immediately</li>
          </ul>
        </div>

        <div className="leak-check-card">
          {!showResults ? (
            <>
              <div className="check-progress-row">
                <span>Question {step + 1} of {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <progress max={questions.length} value={step + 1}>
                Question {step + 1} of {questions.length}
              </progress>

              <AnimatePresence mode="wait">
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  className="check-question"
                  exit={shouldReduceMotion ? undefined : { opacity: 0, x: -8 }}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
                  key={question.id}
                  ref={focusRef}
                  tabIndex={-1}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
                >
                  <fieldset aria-describedby={question.help ? `${question.id}-help` : undefined}>
                    <legend>
                      <span className="check-question-title" id={`${question.id}-title`}>
                        {question.question}
                      </span>
                    </legend>
                    {question.help ? (
                      <p className="check-question-help" id={`${question.id}-help`}>
                        {question.help}
                      </p>
                    ) : null}
                    <div className="check-answers">
                      {question.answers.map((answer, index) => (
                        <label className="check-answer" key={answer.label}>
                          <input
                            checked={selectedAnswer === index}
                            name={question.id}
                            onChange={() =>
                              setAnswers((current) => ({ ...current, [question.id]: index }))
                            }
                            type="radio"
                            value={index}
                          />
                          <span>{answer.label}</span>
                          <span aria-hidden="true" className="check-answer-mark" />
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </motion.div>
              </AnimatePresence>

              <div className="check-controls">
                <Button disabled={step === 0} onClick={previousQuestion} variant="secondary">
                  Back
                </Button>
                <Button disabled={selectedAnswer === undefined} onClick={nextQuestion}>
                  {step === questions.length - 1 ? "See my results" : "Next question"}
                </Button>
              </div>
            </>
          ) : (
            <div className="check-results" aria-live="polite" ref={focusRef} tabIndex={-1}>
              <p className="practical-kicker">Your initial result</p>
              <h3>
                {findings.length > 0
                  ? `We found ${findings.length} ${findings.length === 1 ? "area" : "areas"} worth looking at.`
                  : "Your answers show a solid starting point."}
              </h3>
              <p className="check-results-note">
                This is based only on your answers. A full review would confirm what
                is actually happening.
              </p>

              {findings.length > 0 ? (
                <ol className="finding-list">
                  {findings.map((finding, index) => (
                    <li key={finding.category}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{finding.title}</strong>
                        <p>{finding.finding}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="all-clear-note">
                  The next useful step is confirming that the process works the same
                  way during busy periods, after hours, and when the usual person is away.
                </p>
              )}

              <div className="check-result-actions">
                <ButtonLink href="tel:+19477774333" variant="primary">
                  Call AFTHO
                </ButtonLink>
                <ButtonLink href="mailto:dmitry@aftho.com" variant="secondary">
                  Email AFTHO
                </ButtonLink>
                <Button onClick={previousQuestion} variant="secondary">Review my answers</Button>
                <Button onClick={restart} variant="text">Start again</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
