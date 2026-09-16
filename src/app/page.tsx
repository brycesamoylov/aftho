import { EditorialAccent, EditorialHeading } from "@/components/aftho/editorial-heading";
import { CapabilitySections } from "@/components/aftho/capability-sections";
import { ConversionSections } from "@/components/aftho/conversion-sections";
import { RevenueTrace } from "@/components/aftho/revenue-trace";
import { NarrativeSections } from "@/components/aftho/narrative-sections";
import { SectionMeta } from "@/components/aftho/section-meta";
import { SiteNav } from "@/components/aftho/site-nav";
import { SectionIndex } from "@/components/aftho/section-index";
import { ButtonLink } from "@/components/ui/button";
import { RevealDiv } from "@/components/ui/reveal";

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />
      <SectionIndex />

      <main id="main-content">
        <section className="hero" id="hero">
          <div className="page-container">
            <div className="hero-meta">
              <SectionMeta>AFTHO / Business system diagnostics</SectionMeta>
              <span className="hero-status">
                <span aria-hidden="true" className="status-dot" />
                Trace ready
              </span>
            </div>

            <div className="hero-grid editorial-grid">
              <RevealDiv className="hero-heading">
                <EditorialHeading as="h1" className="hero-title" size="hero">
                  <span className="hero-title-line">Revenue is leaking</span>{" "}
                  <EditorialAccent>somewhere.</EditorialAccent>
                </EditorialHeading>
                <p className="hero-answer">We find where.</p>
              </RevealDiv>

              <RevealDiv className="hero-copy" delay={0.14}>
                <p className="text-large">
                  AFTHO traces what happens between an opportunity entering your
                  business and money reaching your account.
                </p>
                <div className="hero-actions">
                  <ButtonLink href="#trace" variant="primary">
                    Run an audit <span aria-hidden="true">↗</span>
                  </ButtonLink>
                  <ButtonLink href="#invisible-middle" variant="secondary">
                    See the trace
                  </ButtonLink>
                </div>
              </RevealDiv>
            </div>

            <RevenueTrace />
          </div>
        </section>
        <NarrativeSections />
        <CapabilitySections />
        <ConversionSections />
      </main>
    </div>
  );
}
