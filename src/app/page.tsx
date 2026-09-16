import {
  ProblemSection,
  TrustSection,
  WhatWeFixSection,
} from "@/components/aftho/practical-sections";
import { RevenueLeakCheck } from "@/components/aftho/revenue-leak-check";
import { SiteNav } from "@/components/aftho/site-nav";
import { ButtonLink } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="site-shell practical-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteNav />

      <main id="main-content">
        <section className="practical-hero" id="hero">
          <div className="practical-container practical-hero-grid">
            <div className="practical-hero-copy">
              <p className="practical-eyebrow">
                For contractors and local service businesses
              </p>
              <h1>Stop losing jobs you already paid to get.</h1>
              <p className="practical-lede">
                AFTHO finds where calls, quote requests, website inquiries, and
                follow-up are getting missed. Then AFTHO helps you fix the process.
              </p>
              <div className="practical-actions">
                <ButtonLink href="tel:+19477774333" variant="primary">
                  Call AFTHO
                </ButtonLink>
                <ButtonLink href="mailto:dmitry@aftho.com" variant="secondary">
                  Email AFTHO
                </ButtonLink>
              </div>
              <p className="practical-reassurance">
                Prefer to start privately? <a href="#check">Take the 2-minute Revenue Leak Check.</a>
              </p>
            </div>

            <aside className="hero-proof" aria-label="Problems AFTHO looks for">
              <p className="practical-kicker">Where jobs slip away</p>
              <ul>
                <li>Calls that reach voicemail after hours</li>
                <li>Quote requests that sit unanswered</li>
                <li>Leads nobody is clearly responsible for</li>
                <li>Estimates that never receive a follow-up</li>
              </ul>
              <p className="hero-proof-close">
                The demand was there. The next step was not.
              </p>
            </aside>
          </div>
        </section>

        <ProblemSection />
        <RevenueLeakCheck />
        <WhatWeFixSection />
        <TrustSection />
      </main>
    </div>
  );
}
