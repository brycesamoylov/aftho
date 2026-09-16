import { EditorialAccent, EditorialHeading } from "@/components/aftho/editorial-heading";
import { SectionMeta } from "@/components/aftho/section-meta";
import { RevealArticle, RevealListItem } from "@/components/ui/reveal";

const repairGroups = [
  {
    id: "01",
    title: "Capture",
    description: "Make every opportunity enter the system cleanly.",
    capabilities: ["Website", "Landing pages", "Forms", "Calls", "Booking", "Intake"],
    path: ["Inquiry", "Contact", "Opportunity"],
    status: "Captured",
  },
  {
    id: "02",
    title: "Respond",
    description: "Shorten the gap between interest and a useful first reply.",
    capabilities: ["Acknowledgement", "Lead routing", "Notifications", "Call / text", "Response time"],
    path: ["New lead", "Acknowledged", "Owner"],
    status: "Response sent",
  },
  {
    id: "03",
    title: "Follow through",
    description: "Give every quote and callback a visible next step.",
    capabilities: ["CRM setup", "Quote follow-up", "Reminders", "Pipeline", "Ownership"],
    path: ["Quote", "Reminder", "Callback"],
    status: "Next step set",
  },
  {
    id: "04",
    title: "Measure",
    description: "Connect activity to an outcome the business can inspect.",
    capabilities: ["Dashboards", "Reporting", "Attribution", "Conversion", "Operational metrics"],
    path: ["Source", "Booking", "Outcome"],
    status: "Outcome visible",
  },
  {
    id: "05",
    title: "Connect",
    description: "Move the right information between the tools already in use.",
    capabilities: ["Integrations", "Workflow automation", "AI where useful", "Data movement", "System cleanup"],
    path: ["Form", "CRM", "Owner"],
    status: "Systems synced",
  },
];

export function CapabilitySections() {
  return (
    <>
      <section
        aria-labelledby="capabilities-title"
        className="capabilities section-standard"
        id="capabilities"
      >
        <div className="page-container">
          <div className="repair-intro editorial-grid">
            <SectionMeta as="p">04 / Repair the path</SectionMeta>
            <EditorialHeading
              as="h2"
              className="repair-heading"
              id="capabilities-title"
              size="display"
            >
              Fix the part that is actually leaking.
            </EditorialHeading>
            <p className="repair-support text-large">
              Not every gap needs a new platform. The repair might be a clearer
              form, a faster response, an assigned owner, or one useful
              connection between existing tools.
            </p>
          </div>

          <ol className="repair-groups">
            {repairGroups.map((group) => (
              <RevealListItem className="repair-group" key={group.id}>
                <span className="repair-group-id">{group.id}</span>
                <div className="repair-group-copy">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul aria-label={`${group.title} capabilities`}>
                    {group.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
                <figure className="repair-example">
                  <figcaption>
                    <SectionMeta>Example repair</SectionMeta>
                    <span>{group.status}</span>
                  </figcaption>
                  <div aria-hidden="true" className="repair-path">
                    {group.path.map((event, index) => (
                      <div className="repair-event" key={event}>
                        <span className="repair-node" />
                        <span>{event}</span>
                        {index < group.path.length - 1 ? (
                          <span className="repair-connector" />
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <p className="sr-only">
                    Example repaired path: {group.path.join(" to ")}. Status: {group.status}.
                  </p>
                </figure>
              </RevealListItem>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="websites-title"
        className="website-showcase section-cinematic"
        id="websites"
      >
        <div className="page-container">
          <div className="website-intro editorial-grid">
            <SectionMeta as="p">05 / Website repair</SectionMeta>
            <EditorialHeading
              as="h2"
              className="website-heading"
              id="websites-title"
              size="display"
            >
              Sometimes the leak <EditorialAccent>is the website.</EditorialAccent>
            </EditorialHeading>
            <p className="website-support text-large">
              We design and build websites when the website is part of the
              problem, not because every business needs another redesign.
            </p>
          </div>

          <div className="website-comparison">
            <RevealArticle className="website-state website-state--before">
              <header className="website-state-heading">
                <SectionMeta>Before / unclear path</SectionMeta>
                <h3 id="website-before-title">The action is buried.</h3>
              </header>
              <div className="website-frame">
                <div aria-hidden="true" className="website-frame-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="website-frame-content website-frame-content--before">
                  <span className="concept-label">Illustrative service website</span>
                  <h4>Everything your business needs.</h4>
                  <p>Quality service, trusted experience, and solutions made for you.</p>
                  <div aria-hidden="true" className="long-form">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="concept-action concept-action--buried">Submit request</span>
                </div>
              </div>
              <ul className="website-findings">
                <li>Vague value proposition</li>
                <li>Long contact form</li>
                <li>Unclear next step</li>
              </ul>
            </RevealArticle>

            <RevealArticle className="website-state website-state--after" delay={0.12}>
              <header className="website-state-heading">
                <SectionMeta>AFTHO / repaired path</SectionMeta>
                <h3 id="website-after-title">The next step is obvious.</h3>
              </header>
              <div className="website-frame">
                <div aria-hidden="true" className="website-frame-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="website-frame-content website-frame-content--after">
                  <span className="concept-label">Illustrative service website</span>
                  <h4>Book a site visit in one minute.</h4>
                  <p>Choose the service. Share the ZIP code. Get a confirmed next step.</p>
                  <div aria-hidden="true" className="short-form">
                    <span>Service needed</span>
                    <span>ZIP code</span>
                  </div>
                  <span className="concept-action concept-action--clear">Check availability</span>
                  <div className="website-follow-up">
                    <span>Form</span>
                    <span aria-hidden="true">→</span>
                    <span>Owner</span>
                    <span aria-hidden="true">→</span>
                    <span>Confirmation</span>
                  </div>
                </div>
              </div>
              <ul className="website-findings">
                <li>Clear value proposition</li>
                <li>Simplified form</li>
                <li>Follow-up connected</li>
              </ul>
            </RevealArticle>
          </div>

          <p className="website-close">
            When the website is the problem, <strong>we can rebuild it.</strong>
          </p>
        </div>
      </section>
    </>
  );
}
