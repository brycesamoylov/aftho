import { EditorialAccent, EditorialHeading } from "@/components/aftho/editorial-heading";
import { SectionMeta } from "@/components/aftho/section-meta";
import { RevealDiv, RevealListItem } from "@/components/ui/reveal";

const hiddenSteps = [
  { id: "01", label: "First response", detail: "How long did they wait?" },
  { id: "02", label: "Ownership", detail: "Who was meant to act?" },
  { id: "03", label: "Follow-up", detail: "Did anyone check back?" },
];

const businessView = [
  ["Inquiries", "12"],
  ["Quotes", "07"],
  ["Bookings", "03"],
];

const afthoView = [
  ["Slow first responses", "04"],
  ["Unassigned opportunities", "03"],
  ["Missed callbacks", "02"],
  ["Quote without follow-up", "01"],
  ["Median first response", "+47m"],
];

const auditSteps = [
  {
    id: "001",
    label: "Observe",
    description: "Map every place an opportunity enters—from calls and referrals to forms and bookings.",
  },
  {
    id: "002",
    label: "Trace",
    description: "Follow the response, assignment, handoff, quote, follow-up, and final outcome.",
  },
  {
    id: "003",
    label: "Diagnose",
    description: "Flag delays, missing ownership, manual bottlenecks, and the parts nobody can currently measure.",
  },
  {
    id: "004",
    label: "Repair",
    description: "Recommend the smallest useful fix. A bad process should not be automated just because it can be.",
  },
  {
    id: "005",
    label: "Measure",
    description: "Define what improved: response time, completed follow-up, booking completion, or another real outcome.",
  },
];

export function NarrativeSections() {
  return (
    <>
      <section
        aria-labelledby="invisible-middle-title"
        className="invisible-middle section-cinematic"
        id="invisible-middle"
      >
        <div className="page-container">
          <div className="section-intro editorial-grid">
            <SectionMeta as="p" className="section-index">
              01 / The invisible middle
            </SectionMeta>
            <EditorialHeading
              as="h2"
              className="narrative-heading"
              id="invisible-middle-title"
              size="display"
            >
              The money usually disappears{" "}
              <EditorialAccent>between the steps.</EditorialAccent>
            </EditorialHeading>
            <p className="section-support text-large">
              Most businesses know a lead came in and a sale did not. The
              costly part is everything they cannot see in between.
            </p>
          </div>

          <figure className="visibility-map">
            <figcaption className="sr-only">
              An opportunity enters, three important business steps remain
              unknown, and no sale is recorded.
            </figcaption>
            <div className="visibility-endpoint visibility-endpoint--start">
              <SectionMeta>Opportunity in</SectionMeta>
              <strong>Lead received</strong>
              <span>11:43 AM</span>
            </div>

            <ol className="visibility-unknowns">
              {hiddenSteps.map((step, index) => (
                <RevealListItem
                  delay={index * 0.12}
                  key={step.id}
                >
                  <span className="unknown-mark" aria-hidden="true">?</span>
                  <div>
                    <SectionMeta>{step.id} / Unknown</SectionMeta>
                    <strong>{step.label}</strong>
                    <p>{step.detail}</p>
                  </div>
                </RevealListItem>
              ))}
            </ol>

            <div className="visibility-endpoint visibility-endpoint--end">
              <SectionMeta>Outcome</SectionMeta>
              <strong>No sale</strong>
              <span>Reason unknown</span>
            </div>
          </figure>

          <p className="invisible-summary">
            A missed call, slow reply, unclear handoff, broken form, or
            forgotten quote can cost more than the tool needed to fix it.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="what-aftho-sees-title"
        className="what-aftho-sees section-standard"
        id="what-aftho-sees"
      >
        <div className="page-container">
          <div className="diagnostic-intro editorial-grid">
            <SectionMeta as="p" className="section-index">
              02 / Diagnosis
            </SectionMeta>
            <EditorialHeading
              as="h2"
              className="diagnostic-heading"
              id="what-aftho-sees-title"
              size="display"
            >
              What you cannot see can still cost you.
            </EditorialHeading>
            <div className="diagnostic-note">
              <span>Illustrative business / Example data</span>
              <p>
                The totals show what happened. The trace shows where the path
                started to fail.
              </p>
            </div>
          </div>

          <div className="diagnostic-compare">
            <section aria-labelledby="business-view-title" className="compare-column">
              <div className="compare-heading">
                <SectionMeta as="p">What the business sees</SectionMeta>
                <h3 id="business-view-title">End totals</h3>
              </div>
              <dl className="metric-list metric-list--plain">
                {businessView.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section aria-labelledby="aftho-view-title" className="compare-column compare-column--trace">
              <div className="compare-heading">
                <SectionMeta as="p">What AFTHO traces</SectionMeta>
                <h3 id="aftho-view-title">The missing reasons</h3>
              </div>
              <dl className="metric-list metric-list--signal">
                {afthoView.map(([label, value], index) => (
                  <RevealDiv
                    axis="x"
                    delay={index * 0.08}
                    key={label}
                  >
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </RevealDiv>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="audit-title"
        className="audit section-cinematic"
        id="audit"
      >
        <div className="page-container audit-layout editorial-grid">
          <div className="audit-intro">
            <SectionMeta as="p">03 / AFTHO Revenue Leak Audit</SectionMeta>
            <EditorialHeading as="h2" id="audit-title" size="section">
              We trace the path. Then fix the smallest useful thing.
            </EditorialHeading>
            <p className="text-large">
              The audit turns an unclear business problem into a sequence you
              can inspect, repair, and measure.
            </p>
          </div>

          <ol className="audit-steps">
            {auditSteps.map((step, index) => (
              <RevealListItem
                delay={index * 0.08}
                key={step.id}
              >
                <span className="audit-step-id">{step.id}</span>
                <div>
                  <h3>{step.label}</h3>
                  <p>{step.description}</p>
                </div>
              </RevealListItem>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
