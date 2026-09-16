import { ButtonLink } from "@/components/ui/button";

const fixes = [
  ["Missed calls", "Make sure a caller reaches a useful next step, even after hours."],
  ["Slow responses", "Get new inquiries in front of the right person quickly."],
  ["No clear owner", "Make it obvious who is responsible for every new lead."],
  ["Weak follow-up", "Keep quotes, callbacks, and second attempts from being forgotten."],
  ["Website problems", "Remove confusing forms, buried buttons, and broken contact paths."],
  ["Booking friction", "Make requesting an estimate or appointment easier to finish."],
] as const;

const comparisonRows = [
  ["Starts with software", "Starts with the missed job"],
  ["Changes everything", "Fixes the weak step"],
  ["Adds another dashboard", "Makes responsibility clear"],
  ["Builds first", "Checks first"],
] as const;

const faqs = [
  [
    "What is a Revenue Leak Check?",
    "It is a short set of practical questions about how your business handles calls, estimate requests, new inquiries, and follow-up. It points out areas worth reviewing; it is not a promise of a specific financial result.",
  ],
  [
    "What kinds of businesses is this for?",
    "AFTHO is designed for local service businesses and contractors, including plumbers, electricians, HVAC companies, roofers, landscapers, cleaners, and similar businesses that depend on calls and quote requests.",
  ],
  [
    "Do I need new software?",
    "Usually not. The first step is understanding what is actually being missed. The fix may be clearer responsibility, a better form, a reminder, or a small connection between tools you already use.",
  ],
  [
    "What if the website is the problem?",
    "Sometimes the leak is the website. If customers cannot understand the offer, request an estimate, or receive a clear next step, AFTHO can repair or rebuild that part of the path.",
  ],
  [
    "What happens after the check?",
    "You can call AFTHO for a short review of what your answers suggest. If there is a useful problem to solve, the next step is to confirm it and recommend the smallest practical fix.",
  ],
] as const;

export function ProblemSection() {
  return (
    <section className="problem-section" id="problem" aria-labelledby="problem-title">
      <div className="practical-container">
        <div className="practical-section-heading">
          <p className="practical-eyebrow">A familiar problem</p>
          <h2 id="problem-title">A customer needed help. Nobody got back to them.</h2>
          <p>
            The lead did not disappear because the work was unwanted. It disappeared
            because the next step took too long or belonged to nobody.
          </p>
        </div>

        <ol className="customer-path" aria-label="Example of a lost service job">
          <li>
            <span className="customer-path-number">01</span>
            <strong>Customer needs service</strong>
            <span>A repair or estimate cannot wait.</span>
          </li>
          <li>
            <span className="customer-path-number">02</span>
            <strong>They call or fill out a form</strong>
            <span>The inquiry reaches the business.</span>
          </li>
          <li className="customer-path-delay">
            <span className="customer-path-number">03</span>
            <strong>Still waiting after 45 minutes</strong>
            <span>No clear response and no named owner.</span>
          </li>
          <li className="customer-path-lost">
            <span className="customer-path-number">04</span>
            <strong>They call someone else</strong>
            <span>The customer needed an answer, not another message.</span>
          </li>
        </ol>

        <p className="problem-close">
          AFTHO looks between the first call and the booked job to find exactly where
          that path breaks.
        </p>
      </div>
    </section>
  );
}

export function WhatWeFixSection() {
  return (
    <section className="fixes-section" id="services" aria-labelledby="fixes-title">
      <div className="practical-container">
        <div className="practical-section-heading practical-section-heading--split">
          <div>
            <p className="practical-eyebrow">What AFTHO fixes</p>
            <h2 id="fixes-title">Fix the part that is costing you work.</h2>
          </div>
          <p>
            Not every problem needs a new platform. The right repair might be a faster
            response, a named owner, a simpler form, or one useful reminder.
          </p>
        </div>

        <dl className="fix-list">
          {fixes.map(([title, description], index) => (
            <div key={title}>
              <dt>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {title}
              </dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>

        <div className="website-repair" id="websites">
          <div className="website-repair-heading">
            <p className="practical-eyebrow">Sometimes the leak is the website</p>
            <h3>A better website makes the next step obvious.</h3>
            <p>
              AFTHO designs and rebuilds websites when the website is part of the
              problem—not because every business needs another redesign.
            </p>
          </div>

          <div className="website-before-after">
            <article className="website-example website-example--before">
              <p className="website-example-label">Before / unclear path</p>
              <h4>Everything your business needs.</h4>
              <p>Quality service and trusted experience. Contact us to learn more.</p>
              <span className="website-example-action">Submit request</span>
              <ul>
                <li>Vague promise</li>
                <li>Long contact form</li>
                <li>No clear next step</li>
              </ul>
            </article>

            <article className="website-example website-example--after">
              <p className="website-example-label">AFTHO / repaired path</p>
              <h4>Book a site visit in one minute.</h4>
              <p>Choose the service. Share the ZIP code. Get a confirmed next step.</p>
              <span className="website-example-action">Check availability</span>
              <ul>
                <li>Clear offer</li>
                <li>Shorter form</li>
                <li>Follow-up connected</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="trust-section" id="trust" aria-labelledby="trust-title">
      <div className="practical-container">
        <div className="practical-section-heading practical-section-heading--split">
          <div>
            <p className="practical-eyebrow">A practical review, not a software pitch</p>
            <h2 id="trust-title">Check first. Fix what matters.</h2>
          </div>
          <p>
            AFTHO is built for owners who want a clear explanation of what is being
            missed, why it matters, and what the smallest useful fix looks like.
          </p>
        </div>

        <div className="plain-comparison" role="table" aria-label="Typical approach compared with AFTHO">
          <div className="plain-comparison-head" role="row">
            <span role="columnheader">Typical approach</span>
            <span role="columnheader">AFTHO</span>
          </div>
          {comparisonRows.map(([typical, aftho]) => (
            <div className="plain-comparison-row" role="row" key={typical}>
              <span role="cell">{typical}</span>
              <strong role="cell">{aftho}</strong>
            </div>
          ))}
        </div>

        <div className="next-steps" aria-labelledby="next-steps-title">
          <div>
            <p className="practical-eyebrow">What happens next</p>
            <h3 id="next-steps-title">A short path from concern to answer.</h3>
          </div>
          <ol>
            <li><span>1</span><strong>Take the check</strong><p>Answer nine practical questions in about two minutes.</p></li>
            <li><span>2</span><strong>Review what it found</strong><p>See the areas most worth checking before sharing contact details.</p></li>
            <li><span>3</span><strong>Decide what to fix</strong><p>Call or email AFTHO to confirm the issue and discuss the smallest useful repair.</p></li>
          </ol>
        </div>

        <div className="practical-faq" id="faq">
          <div className="practical-faq-heading">
            <p className="practical-eyebrow">Common questions</p>
            <h3>The useful details.</h3>
          </div>
          <div className="practical-faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="practical-final-cta">
        <div className="practical-container practical-final-cta-grid">
          <div>
            <p className="practical-eyebrow">Start with the gap</p>
            <h2>Find out where the next job could be getting lost.</h2>
          </div>
          <div>
            <p>
              Take the two-minute check, or contact AFTHO to talk through what
              is happening in your business.
            </p>
            <div className="practical-actions">
              <ButtonLink href="tel:+19477774333" variant="primary">Call AFTHO</ButtonLink>
              <ButtonLink href="mailto:dmitry@aftho.com" variant="secondary">Email AFTHO</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
