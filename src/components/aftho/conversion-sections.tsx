import { EditorialAccent, EditorialHeading } from "@/components/aftho/editorial-heading";
import { SectionMeta } from "@/components/aftho/section-meta";
import { ButtonLink } from "@/components/ui/button";
import { RevealDiv, RevealListItem } from "@/components/ui/reveal";

const evidenceSteps = [
  {
    id: "01",
    label: "Observed",
    value: "A quote request reached a shared inbox.",
  },
  {
    id: "02",
    label: "Gap",
    value: "No owner or next step was visible.",
  },
  {
    id: "03",
    label: "Repair",
    value: "Assign responsibility and acknowledge receipt.",
  },
  {
    id: "04",
    label: "Measure",
    value: "Track first response, follow-up, and outcome.",
  },
];

const comparisonRows = [
  ["Start with a tool", "Start with the leak"],
  ["Automate everything", "Fix only what matters"],
  ["Add another dashboard", "Clarify the existing path"],
  ["Sell more leads", "Protect current opportunities first"],
  ["Talk in software terms", "Explain the business impact"],
  ["Build first", "Diagnose first"],
];

const faqs = [
  {
    question: "What exactly is a revenue leak audit?",
    answer:
      "It is a structured review of how an opportunity enters your business, who responds, what happens next, and whether the outcome is recorded. The goal is to find the gaps that cost time, trust, or revenue.",
  },
  {
    question: "What kinds of businesses is this for?",
    answer:
      "It is most useful for service businesses that receive calls, enquiries, quote requests, referrals, bookings, or other opportunities that move through several people or tools.",
  },
  {
    question: "Do I need special software?",
    answer:
      "No. The audit starts with the process you already have. A repair may use your current tools, simplify them, connect them, or recommend a change only when the change is useful.",
  },
  {
    question: "What if the problem is my website?",
    answer:
      "Then the website becomes part of the repair. AFTHO can improve or rebuild the customer path, including the message, mobile hierarchy, form, tracking, and what happens after submission.",
  },
  {
    question: "Do you only work with automation?",
    answer:
      "No. Sometimes the right fix is clearer ownership, a shorter form, a better handoff, or a simpler operating rule. Automation is useful only when it improves a process that already makes sense.",
  },
  {
    question: "Will you actually implement the fixes?",
    answer:
      "Yes, when the repair is within scope. That may include workflow changes, integrations, reporting, follow-up systems, or website work. The audit separates diagnosis from implementation so the reason for each change remains clear.",
  },
  {
    question: "What does an audit require from me?",
    answer:
      "Usually a focused working session, the people who understand the current process, and access to the relevant records or tools. The exact scope and access are agreed before the review begins.",
  },
  {
    question: "What happens after the audit?",
    answer:
      "You receive a visible trace of the current path, the gaps found, a prioritized repair plan, and a way to measure whether the repair worked. AFTHO can implement the plan or hand it to your team.",
  },
];

export function ConversionSections() {
  return (
    <>
      <section
        aria-labelledby="evidence-title"
        className="evidence section-standard"
        id="evidence"
      >
        <div className="page-container">
          <div className="evidence-intro editorial-grid">
            <SectionMeta as="p">06 / Evidence</SectionMeta>
            <EditorialHeading
              as="h2"
              className="evidence-heading"
              id="evidence-title"
              size="display"
            >
              A useful audit leaves evidence behind.
            </EditorialHeading>
            <div className="evidence-support">
              <p className="text-large">
                No invented results. No mystery score. The proof is a gap you
                can see, a repair you can explain, and a measure that shows
                whether it worked.
              </p>
              <SectionMeta as="p">Sample audit / Illustrative</SectionMeta>
            </div>
          </div>

          <article aria-labelledby="sample-audit-title" className="sample-audit">
            <header className="sample-audit-header">
              <div>
                <SectionMeta>Opportunity trace / 024</SectionMeta>
                <h3 id="sample-audit-title">From an unclear handoff to a measurable path.</h3>
              </div>
              <span className="sample-status">Method example</span>
            </header>

            <ol className="evidence-path">
              {evidenceSteps.map((step, index) => (
                <RevealListItem delay={index * 0.09} key={step.id}>
                  <div aria-hidden="true" className="evidence-node-row">
                    <span className="evidence-node" />
                    <span className="evidence-connector" />
                  </div>
                  <SectionMeta>{step.id} / {step.label}</SectionMeta>
                  <p>{step.value}</p>
                </RevealListItem>
              ))}
            </ol>

            <p className="evidence-condition">
              <span>Success condition</span>
              Every opportunity has an owner, a next step, and a recorded outcome.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="comparison-title"
        className="why-aftho section-standard"
        id="why-aftho"
      >
        <div className="page-container">
          <div className="comparison-intro editorial-grid">
            <SectionMeta as="p">07 / Why AFTHO</SectionMeta>
            <EditorialHeading
              as="h2"
              className="comparison-heading"
              id="comparison-title"
              size="section"
            >
              Diagnose first. <EditorialAccent>Build second.</EditorialAccent>
            </EditorialHeading>
            <p className="comparison-support text-large">
              The goal is not more software. It is a business path that works
              and can be understood.
            </p>
          </div>

          <table className="approach-table">
            <caption className="sr-only">
              Comparison of a typical tool-first approach with the AFTHO diagnostic approach.
            </caption>
            <thead>
              <tr>
                <th scope="col">Typical approach</th>
                <th scope="col">AFTHO approach</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([typical, aftho]) => (
                <tr key={typical}>
                  <td>{typical}</td>
                  <td>{aftho}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        aria-labelledby="faq-title"
        className="faq section-standard"
        id="faq"
      >
        <div className="page-container faq-layout editorial-grid">
          <div className="faq-intro">
            <SectionMeta as="p">08 / Questions</SectionMeta>
            <EditorialHeading as="h2" id="faq-title" size="section">
              The practical questions.
            </EditorialHeading>
            <p>
              Clear answers before anyone changes a process, buys software, or
              rebuilds a website.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{faq.question}</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="poster-title"
        className="poster-cta"
        id="start"
      >
        <div aria-hidden="true" className="poster-trace">
          <span />
          <span />
          <span />
          <span />
        </div>
        <RevealDiv className="page-container poster-layout">
          <SectionMeta as="p">09 / Start with the path</SectionMeta>
          <EditorialHeading
            as="h2"
            className="poster-heading"
            id="poster-title"
            size="hero"
          >
            Revenue should not <EditorialAccent>disappear quietly.</EditorialAccent>
          </EditorialHeading>
          <div className="poster-action">
            <p>
              Trace what happens between an opportunity entering your business
              and money reaching your account.
            </p>
            <ButtonLink href="#audit" variant="primary">
              Run an audit <span aria-hidden="true">↗</span>
            </ButtonLink>
          </div>
        </RevealDiv>
      </section>
    </>
  );
}
