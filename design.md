# AFTHO Website Design System & Implementation Specification

## 2026 audience repositioning — current homepage direction

This section supersedes later homepage guidance wherever the two conflict.

AFTHO primarily serves small local service businesses and contractors. The
homepage must explain the offer in plain English within the first viewport:
AFTHO finds where calls, inquiries, estimates, and potential jobs are being
lost, then helps fix the responsible part of the process.

The current homepage uses six focused sections:

1. A direct hero for local service businesses.
2. One concrete example of how a job is lost.
3. A two-minute interactive Revenue Leak Check that gives value before asking
   for contact information.
4. A concise explanation of what AFTHO fixes, including the existing website
   before/after concept.
5. Trust, process, comparison, and a clear explanation of what happens next.
6. A personal founder introduction, followed by FAQ and a clear call or review action.

The founder section sits between “What happens next” and “Common questions.” It
uses the founder portrait with first-person copy and does not use the numbered
procedural rhythm.

Current public contact details:

- Phone: 313-364-9986
- Email: dmitry@aftho.com

Visual direction:

- white and cool-neutral surfaces
- dark navy-charcoal text
- restrained blue for primary actions and active states
- red only for a detected problem
- highly readable sans-serif typography and larger body copy
- conventional navigation and buttons
- modest spacing instead of cinematic section depth
- monospace limited to short labels and progress metadata
- the trace retained as a simple explanatory line, not a technical dashboard

The homepage should not use a persistent section rail, full-screen poster CTA,
server-style event logs, or long scrollytelling. Motion is limited to short
state changes that clarify questionnaire progress or cause and effect.

Primary CTA language is `Take the 2-minute Revenue Leak Check`. Website work
remains a secondary repair capability under `Sometimes the leak is the
website.`

The website before/after example uses a real intake form for `Submit request`
and the AFTHO Google Calendar booking link for `Check availability`; neither
control should be presented as a dead button.

> **Document purpose:** This file is the authoritative design and UX specification for the AFTHO website.
>
> **Primary audience:** Codex and any human designer/developer working on the site.
>
> **Core instruction:** Do not treat this as a moodboard. Treat it as an implementation contract. When design decisions are ambiguous, follow the priority rules in this document rather than defaulting to generic SaaS or agency patterns.

---

# 0. Executive Design Directive

AFTHO must feel like a **diagnostic instrument for businesses**, not an AI agency, generic automation consultancy, business coach, SaaS startup, or freelance web studio.

The central idea is:

> **Opportunity enters a business system. Revenue leaks through gaps. AFTHO finds those gaps, shows where they occur, and helps repair them.**

The website should make this idea **visible and experiential**.

A visitor should understand, without needing to read a long explanation, that AFTHO traces what happens between:

**incoming opportunity → response → handoff → follow-up → booking/quote → conversion → revenue**

The website itself should feel like AFTHO is already **observing, tracing, diagnosing, and clarifying a system**.

The primary commercial narrative is the **missed-revenue / opportunity-leak audit**.

Website design/development is an important secondary capability and should be visible enough to demonstrate craft and broaden the offer, but it must not make AFTHO look like a conventional web-design agency.

---

# 1. Design Reference Hierarchy

Use the following sites as **art-direction references**, not cloning targets.

Do not copy their branded assets, copywriting, illustrations, exact layouts, or proprietary content.

Study them for principles: hierarchy, composition, movement, spacing, interaction, information architecture, typography, and conversion strategy.

## 1.1 Fabrica — Primary Art Direction Reference

**URL:** https://fabrica.framer.media/

**Influence weight:** ~40%

Use Fabrica primarily for:

- Brand-first presentation
- Editorial composition
- Oversized typography
- Dramatic scale contrast
- Monochrome restraint
- Section numbering
- Small technical/editorial metadata
- Large branded wordmark moments
- Asymmetric layouts
- Premium whitespace
- Image and type relationships
- “Designed publication” feeling rather than “template” feeling
- Strong section transitions
- Pages that feel art-directed rather than assembled from components

### Fabrica principles to translate into AFTHO

AFTHO should use large editorial statements such as:

- `AFTHO®`
- `Revenue is leaking somewhere.`
- `We find where.`
- `Opportunity in. Revenue out. What happened between?`

These should be paired with tiny system labels such as:

- `AFTHO / TRACE 001`
- `SYSTEM STATUS`
- `OPPORTUNITY ID 024`
- `RESPONSE DELAY +47M`
- `LEAK DETECTED`
- `PATH / WEB → CRM → FOLLOW-UP`
- `001 / OBSERVE`
- `002 / TRACE`
- `003 / REPAIR`
- `004 / MEASURE`

The contrast between **enormous type** and **small structured metadata** is a major part of the visual identity.

### Do not copy from Fabrica

Do not make AFTHO look like a portfolio studio.

Avoid:

- Project-grid-first homepage structure
- Fashion/editorial imagery with no business meaning
- Huge image galleries simply because they look premium
- Agency pricing structures as the main story
- Team-centric storytelling too early
- Decorative photography that does not reinforce AFTHO's system/diagnostic concept

---

## 1.2 Whenevr — Restraint, Typography, and UI Polish Reference

**URL:** https://whenevr.framer.website/

**Influence weight:** ~25%

Use Whenevr primarily for:

- Spacious composition
- Clear hierarchy
- Editorial headline treatment
- Confident simplicity
- Large sans-serif typography
- Selective italic/editorial accent typography
- Product-like micro-UI inside a marketing site
- Minimal but meaningful cards
- Simple CTAs
- Polished service/process communication
- Restrained motion
- Strong final CTA treatment
- Short, human section headings
- Showing a process instead of merely listing it

### Whenevr principles to translate into AFTHO

The page should never feel crowded merely because space exists.

Use whitespace as a deliberate component.

Prefer:

> **Find where your business is losing revenue.**

over:

> “We help small and medium businesses leverage intelligent automation, data, CRM systems, AI, custom websites, and strategic digital transformation to streamline workflows and maximize revenue.”

Use a second typeface or italic style **sparingly** to create editorial emphasis.

Possible examples:

> Revenue is leaking *somewhere.*

> The problem is usually *between the steps.*

> Your website may not be broken. *The handoff might be.*

Do not italicize every headline.

### Product-like micro UI

Marketing sections may contain small interface objects such as:

- live status indicators
- trace IDs
- response timers
- lead states
- timestamps
- channel labels
- diagnostic flags
- subtle segmented controls
- before/after state toggles
- audit status
- issue severity
- small progress paths

These elements should make AFTHO feel operational and real.

### Do not copy from Whenevr

Avoid:

- Subscription-agency language
- Excessive white cards
- Generic design-service tags
- Using its exact typography pairing
- Reproducing its layout one-for-one
- Making AFTHO feel like a design subscription service

---

## 1.3 Drospecta — Product/System Storytelling Reference

**URL:** https://drospecta.framer.website/

**Influence weight:** ~20%

Use Drospecta primarily for:

- Showing a business function visually
- Product-style feature demonstrations
- Pairing concise copy with visual system states
- Breaking a large promise into concrete workflows
- Turning abstract features into visible behavior
- Using UI screenshots/representations as proof of function
- Segmented problem explanations
- Revenue-oriented storytelling

### Drospecta principles to translate into AFTHO

AFTHO should not merely say:

- Faster follow-up
- Better CRM
- Automated workflows
- Better website
- Improved visibility

Instead, show what those things mean.

Example:

```text
11:43 AM     Quote request submitted
11:43 AM     Opportunity created
11:51 AM     No response
12:28 PM     No response
01:06 PM     Lead inactive

AFTHO FLAG:
Response delay exceeded threshold.

Estimated issue:
High-intent opportunity received no first-touch response.
```

Then show a repaired state:

```text
11:43 AM     Quote request submitted
11:43 AM     Opportunity created
11:43 AM     SMS acknowledgement sent
11:44 AM     CRM owner assigned
11:48 AM     Callback scheduled

STATUS:
Opportunity retained.
```

This is stronger than a generic feature card saying “Automated Follow-Up.”

### Do not copy from Drospecta

Avoid:

- Generic SaaS dashboard hero
- Giant browser mockup as the first visual
- Pretending AFTHO is software if the service is not yet software
- Feature overload
- Persona tabs that do not serve the current audience
- Blue/purple SaaS gradients
- “AI platform” positioning

---

## 1.4 Conversion — Persuasion and Proof Reference

**URL:** https://conversion.framer.media/?via=hxmzaehsan

**Influence weight:** ~15%

Use Conversion primarily for:

- Sales hierarchy
- Proof placement
- Before/after contrast
- Comparison sections
- Outcome-led copy
- Clear process
- Strong CTA repetition
- Results becoming visual anchors
- Reducing uncertainty before the final CTA

### Conversion principles to translate into AFTHO

Create visual contrasts such as:

### What most businesses see

- Calls
- Form submissions
- Quotes
- Appointments
- Customers

### What AFTHO traces

- unanswered calls
- response delays
- manual handoffs
- follow-up gaps
- abandoned quotes
- untracked opportunities
- poor attribution
- conversion blind spots

Or:

### Without a trace

`Lead came in → ??? → no sale`

### With AFTHO

`Lead → response → owner → follow-up → quote → outcome`

AFTHO should make the invisible middle visible.

### Do not copy from Conversion

Avoid:

- Aggressive growth-agency aesthetics
- Excessive glow
- Overpromising metrics
- Ads-agency tone
- “Skyrocket your business” language
- Fake case-study metrics
- Manufactured social proof

---

# 2. Reference Priority Rule

When references conflict, use this hierarchy:

1. **AFTHO brand concept**
2. **Clarity and user comprehension**
3. **Fabrica art direction**
4. **Whenevr restraint/polish**
5. **Drospecta system visualization**
6. **Conversion persuasion**
7. Existing template conventions
8. Developer convenience

Never compromise the AFTHO concept just to preserve a generic component.

---

# 3. Brand Positioning

## 3.1 AFTHO is

- Diagnostic
- Precise
- Observant
- Calm
- Modern
- Technically capable
- Business-literate
- Outcome-oriented
- Curious
- Clear
- Premium without being flashy
- Serious without being corporate
- Sophisticated without becoming inaccessible

## 3.2 AFTHO is not

- An “AI agency”
- A chatbot company
- A digital-marketing agency
- A generic automation service
- A business coach
- A hype-driven growth agency
- A cheap web-design shop
- A futuristic cyberpunk brand
- A venture-backed SaaS imitation
- A dashboard template
- A collection of trendy component effects

## 3.3 Emotional target

The user should feel:

> “They understand how a business actually loses opportunities.”

then:

> “They can probably see problems I am too close to notice.”

then:

> “This seems concrete and low-risk enough to investigate.”

then:

> “I want to know what they would find in my business.”

---

# 4. Core Narrative

The homepage should behave like a story.

## Stage A — The opportunity arrives

A prospect calls, submits a form, sends a message, asks for a quote, or attempts to book.

Everything appears normal.

## Stage B — Something breaks

The problem is not necessarily dramatic.

It may be:

- a missed call
- delayed response
- no automatic acknowledgement
- a lead written down instead of logged
- nobody owning the next step
- a quote never followed up
- contact form routed poorly
- scheduling friction
- weak mobile website
- broken page
- no analytics
- unclear call-to-action
- slow load time
- customer having to repeat information
- data spread across systems

## Stage C — Revenue disappears

The opportunity does not convert.

The company often sees only:

`No sale.`

It does not see why.

## Stage D — AFTHO traces the path

AFTHO reconstructs what happened.

The interface becomes clearer.

Events become ordered.

Leaks are flagged.

Unknown areas become visible.

## Stage E — Repair

AFTHO recommends or implements the right fixes.

Possible fixes can include:

- website redesign
- landing page improvement
- better contact flow
- call handling
- booking
- CRM
- automated acknowledgements
- follow-up
- lead routing
- quoting
- reminders
- dashboards
- reporting
- integrations
- AI where genuinely useful

The tool is secondary.

**The broken business path is primary.**

## Stage F — Measure

The visitor sees the new state:

- fewer unknowns
- faster response
- clearer ownership
- trackable handoffs
- measurable outcomes

---

# 5. Primary Homepage Concept

## Working concept name

**The Revenue Trace**

The visitor should experience one representative opportunity moving through a business.

The line/path should act as a subtle recurring visual motif across multiple sections.

Do not overdo this.

It should feel sophisticated, not like a video game.

---

# 6. Homepage Information Architecture

Recommended structure:

1. Navigation
2. Hero / initial trace
3. The invisible middle
4. Revenue leak diagnostic visualization
5. “What AFTHO sees”
6. Audit process
7. Repair/capabilities
8. Website capability showcase
9. Before/after trace
10. Proof/results/case studies when real data exists
11. Why AFTHO / comparison
12. FAQ
13. Final poster CTA
14. Footer

This can evolve, but the story order should remain:

**problem → visibility → diagnosis → repair → evidence → action**

Do not lead with a services grid.

---

# 7. Navigation

## Desktop

Recommended:

```text
AFTHO®          How it works   What we find   Websites   About        Run an audit ↗
```

Possible alternates:

- The Audit
- Problems We Find
- Systems
- Web
- Work

Keep total visible navigation items low.

### CTA

Primary nav CTA:

`Run an audit ↗`

Alternative:

`Find the leaks ↗`

Avoid:

- Get Started
- Learn More
- Contact Us
- Transform Your Business
- Book Discovery Call

unless used in secondary contexts.

## Navigation style

- Minimal
- No oversized pill container unless visually justified
- No glassmorphism navbar by default
- No giant dropdown menu initially
- Light background at top if hero is light
- May invert over dark sections
- Sticky only if it remains visually quiet
- Transition should be subtle

---

# 8. Hero Specification

The hero is the most important visual and conceptual section.

## 8.1 Hero goal

Within approximately five seconds, a small-business owner should understand:

1. AFTHO finds lost revenue/opportunity gaps.
2. AFTHO is not just another web/AI agency.
3. There is a concrete next step: an audit.

## 8.2 Hero composition

Preferred composition:

- minimal navigation
- small system metadata
- giant editorial headline
- one short explanatory sentence
- primary CTA
- optional secondary CTA
- large diagnostic visual / opportunity trace occupying lower hero
- abundant negative space

Suggested hierarchy:

```text
AFTHO / BUSINESS SYSTEM DIAGNOSTICS
TRACE STATUS: READY

Revenue is leaking
somewhere.

We find where.

AFTHO traces what happens between an opportunity entering your business
and revenue reaching your account.

[ Run an audit ↗ ]    [ See how it works ]

             ↓
        diagnostic trace visual
```

Copy is directional, not locked.

## 8.3 Hero typography

The hero headline should be huge.

Desktop target:

- roughly 9–15vw depending on line count
- should feel architectural
- should dominate the viewport
- avoid excessively tight tracking that harms readability
- use carefully tuned line-height

Mobile:

- still large
- preserve hierarchy
- do not shrink into conventional 44px startup typography
- target roughly 14–18vw where practical

## 8.4 Editorial emphasis

Use italic/editorial type selectively.

Example:

`Revenue is leaking *somewhere.*`

or

`We find *where.*`

Do not use a script font.

Do not use high-fashion serif everywhere.

---

# 9. Hero Diagnostic Animation

## 9.1 Purpose

The hero animation must communicate the business concept.

It must not exist only to impress.

## 9.2 Base scenario

Create one abstract “opportunity.”

Example label:

`OPPORTUNITY / 024`

Channel:

`WEB QUOTE`

Value could remain unknown initially:

`EST. VALUE / —`

Path:

```text
WEB
 ↓
FORM
 ↓
INBOX
 ↓
OWNER
 ↓
FOLLOW-UP
 ↓
QUOTE
 ↓
OUTCOME
```

The trace begins normally.

Then:

```text
11:43:02 FORM SUBMITTED
11:43:03 EMAIL RECEIVED
11:43:03 OWNER / UNASSIGNED
11:58:17 NO RESPONSE
12:28:41 NO RESPONSE
```

A warning state appears:

`LEAK DETECTED`

or:

`RESPONSE GAP +45M`

The trace line fades or breaks at the problem.

## 9.3 Motion behavior

Recommended:

1. Opportunity node enters.
2. Path draws smoothly.
3. Event labels appear as the trace passes them.
4. A delay counter begins.
5. Line slows.
6. Diagnostic flag appears.
7. Remaining path becomes uncertain/dim.
8. Scroll transitions into explanation.

Motion should feel like:

- instrumentation
- monitoring
- controlled sequencing

not:

- confetti
- arcade animation
- particle explosion
- neon sci-fi HUD

## 9.4 Technical treatment

Possible techniques:

- SVG paths
- CSS transforms
- `stroke-dashoffset`
- Motion/Framer Motion
- GSAP ScrollTrigger if already in project or justified
- IntersectionObserver for lightweight reveals

Prefer SVG/CSS over canvas/WebGL unless there is a clear need.

Avoid adding heavy dependencies solely for one effect.

## 9.5 Accessibility

If `prefers-reduced-motion: reduce`:

- render final state immediately
- preserve all information
- no required animation for comprehension
- disable continuous movement
- replace motion-driven sequence with static labeled trace

---

# 10. Section: The Invisible Middle

## Concept

Most businesses know:

- lead came in
- sale happened or did not happen

They have poor visibility into the sequence in between.

## Visual

Use a large horizontal or vertical trace:

```text
OPPORTUNITY IN
      │
      ├──── ?
      │
      ├──── ?
      │
      ├──── ?
      │
REVENUE OUT
```

Then gradually reveal missing steps.

Possible headline:

> **The money usually disappears between the steps.**

Supporting copy:

> A missed call, slow reply, unclear handoff, broken form, forgotten quote, or invisible follow-up gap can cost more than the tool needed to fix it.

Keep copy short.

## Interaction

On scroll, question marks can resolve into concrete events.

Do not use a carousel here.

---

# 11. Section: What AFTHO Sees

Use Conversion's contrast logic but with Fabrica's visual language.

Possible split layout:

```text
WHAT YOU SEE                         WHAT AFTHO TRACES

12 leads                             4 response delays
7 quotes                             3 unassigned leads
3 bookings                           2 missed callbacks
                                     1 abandoned quote
                                     47 min median first response
```

Use made-up values only if clearly labeled as **illustrative**.

Never present invented data as AFTHO customer results.

Better labels:

`DEMO TRACE`
`ILLUSTRATIVE BUSINESS`
`EXAMPLE DATA`

## Design

Left side: normal business events.

Right side: instrument-like trace.

The AFTHO side may have more structure/metadata but should remain readable to older/nontechnical business owners.

---

# 12. The Audit

The audit should feel productized.

## 12.1 Naming

Preferred:

**AFTHO Revenue Leak Audit**

Possible alternatives:

- Opportunity Trace
- Revenue Path Audit
- Business Flow Audit

Do not overcomplicate naming.

## 12.2 Audit stages

Recommended:

### `001 / OBSERVE`

Map how opportunity enters.

Examples:

- Calls
- Website
- Forms
- Messages
- Referrals
- Booking
- Walk-in or inbound requests if relevant

### `002 / TRACE`

Follow what happens next.

Examples:

- response
- assignment
- handoff
- scheduling
- quote
- follow-up
- close/loss

### `003 / DIAGNOSE`

Flag friction and blind spots.

Examples:

- delays
- dropped handoffs
- unclear ownership
- duplicate work
- missing tracking
- bad web UX
- manual bottlenecks

### `004 / REPAIR`

Recommend the smallest useful fix.

The site should emphasize:

> Do not automate a bad process simply because it can be automated.

### `005 / MEASURE`

Define whether the fix worked.

Examples:

- first-response time
- unanswered leads
- booking completion
- quote follow-up
- conversion
- manual time saved

---

# 13. Capabilities Section

Do not use a generic “Our Services” six-card grid.

Group capabilities by what part of the revenue path they improve.

## 13.1 Capture

- Website
- Landing pages
- Forms
- Calls
- Booking
- Intake

## 13.2 Respond

- Automatic acknowledgement
- Lead routing
- Notifications
- Call/text workflows
- Response-time improvements

## 13.3 Follow Through

- CRM setup
- Quote follow-up
- Reminders
- Pipeline visibility
- Ownership

## 13.4 Measure

- Dashboards
- Reporting
- Attribution
- Conversion visibility
- Operational metrics

## 13.5 Connect

- Integrations
- Workflow automation
- AI where useful
- Data movement
- System cleanup

Each group should have one visual example rather than many icons.

---

# 14. Website Services Positioning

AFTHO should visibly demonstrate web skill without diluting the diagnostic offer.

## Key framing

Do not say:

> We also build websites.

Frame websites as one possible source of revenue leakage and one possible repair.

Example:

> **Sometimes the leak is the website.**

Then show:

- confusing mobile layout
- buried CTA
- slow contact flow
- weak form
- outdated trust signals
- poor local SEO structure
- broken analytics
- weak follow-through after submission

Then transition to:

> When the website is the problem, we can rebuild it.

This allows AFTHO to show strong website work while preserving its larger positioning.

## Website showcase UI

A before/after interface can work well.

Possible tabs:

`BEFORE`
`AFTHO`

or draggable comparison if accessible.

Show improvements such as:

- clearer hierarchy
- more obvious CTA
- simplified form
- faster load
- mobile redesign
- better follow-up path

Do not make the whole site a website-design portfolio.

---

# 15. Visual System

## 15.1 Color philosophy

Base palette should be heavily neutral.

Recommended conceptual distribution:

- 70–85% neutral light/dark
- 10–20% secondary neutral
- 5–10% diagnostic accent

The accent color must have meaning.

Use it for:

- active opportunity
- detected issue
- system status
- line trace
- interactive focus
- CTA selectively

Do not sprinkle accent color randomly.

## 15.2 Light vs dark

The site should use contrast intentionally.

Possible cadence:

1. light editorial hero
2. light/neutral explanation
3. dark diagnostic section
4. light audit process
5. dark or high-contrast system demonstration
6. light website/capability area
7. near-black final CTA

Avoid alternating black/white every single section.

## 15.3 Accent color

Do not default to:

- electric blue SaaS
- purple AI gradient
- neon cyan
- orange growth-agency glow

Test a distinctive accent that remains legible and serious.

Possible families to explore:

- signal red / vermilion
- acidic chartreuse in tiny doses
- industrial safety amber
- deep cobalt
- technical green

Choose one based on final brand exploration.

The color should feel like a **diagnostic signal**, not decoration.

---

# 16. Typography

## 16.1 Typography architecture

Use at most three roles:

1. **Primary grotesk/sans** — headlines and most UI
2. **Editorial accent** — sparse italic/serif emphasis
3. **Mono/technical face** — optional metadata and diagnostics

Do not use three equally loud fonts.

## 16.2 Primary sans

Desired traits:

- modern
- precise
- high readability
- strong at massive sizes
- not overly geometric/playful
- not instantly recognizable as generic startup branding

Potential categories:

- neo-grotesk
- Swiss-influenced sans
- contemporary humanist grotesk

Use licensed/available fonts appropriate to the project.

## 16.3 Editorial accent

Desired:

- intelligent
- restrained
- italic looks strong
- readable
- creates contrast with sans

Use only for selected words or short lines.

## 16.4 Mono

Use for:

- timestamps
- labels
- trace IDs
- issue metadata
- small metrics
- system states

Do not use monospaced text for body copy.

---

# 17. Type Scale

Use fluid typography with `clamp()` when possible.

Conceptual sizes:

```css
--text-xs:   clamp(0.70rem, 0.68rem + 0.10vw, 0.78rem);
--text-sm:   clamp(0.82rem, 0.78rem + 0.15vw, 0.94rem);
--text-base: clamp(1rem, 0.96rem + 0.18vw, 1.125rem);
--text-lg:   clamp(1.2rem, 1.1rem + 0.45vw, 1.55rem);
--text-xl:   clamp(1.6rem, 1.3rem + 1.1vw, 2.4rem);
--text-2xl:  clamp(2.4rem, 1.8rem + 2.5vw, 4.8rem);
--text-hero: clamp(4rem, 8vw, 10rem);
```

These are starting points, not mandatory values.

Tune by visual result.

---

# 18. Spacing System

Whitespace is a core part of the design.

Use a consistent spacing scale.

Recommended section vertical rhythm:

Desktop:

- compact section: ~96–128px
- normal section: ~144–192px
- cinematic/editorial section: ~180–280px

Mobile:

- compact: ~64px
- normal: ~80–112px
- major: ~112–144px

Avoid every section using identical top/bottom padding.

Intentional rhythm matters.

---

# 19. Grid

Use a flexible editorial grid.

Recommended:

- Desktop: 12 columns
- Tablet: 8 columns
- Mobile: 4 columns

Max width should allow giant type to breathe.

Possible content max:

`1440px–1600px`

Text reading widths should remain smaller:

`55–72ch`

Do not center every section.

Use asymmetry:

- headline spans 7 columns
- metadata spans 2
- visual begins on column 5
- explanatory body offset from heading

This helps avoid template appearance.

---

# 20. Borders, Radius, and Shadows

## Borders

Prefer:

- thin 1px neutral borders
- subtle opacity
- stronger borders only for active diagnostic states

## Radius

Do not round everything.

Suggested:

- small controls: modest radius
- buttons: moderate or pill only if brand system supports it
- large editorial containers: small-to-medium radius
- full-bleed sections: often no radius

Avoid default `rounded-3xl` everywhere.

## Shadows

Use minimally.

Prefer:

- border separation
- contrast
- layering
- background tonal shifts

over giant SaaS shadows.

---

# 21. Buttons

## Primary CTA

Examples:

- `Run an audit ↗`
- `Find the leaks ↗`
- `Trace my business ↗`

Recommended treatment:

- high contrast
- simple rectangular/pill hybrid depending brand
- clear hover state
- arrow motion no more than a few pixels
- strong focus ring
- no glowing aura by default

## Secondary CTA

Examples:

- `See how it works`
- `View a sample trace`
- `Explore websites`

Do not create five button styles.

---

# 22. Motion Design System

Motion must have a reason.

## 22.1 Motion principles

Every animation should do at least one of these:

- reveal hierarchy
- clarify a process
- communicate state
- reinforce causality
- orient the user
- reward interaction
- support the AFTHO diagnostic metaphor

If an animation does none of these, remove it.

## 22.2 Motion vocabulary

Preferred:

- mask reveals
- translate Y
- opacity fades
- line drawing
- node activation
- counter updates
- subtle scale
- clip-path reveals
- sticky scroll sequencing
- horizontal trace movement
- text staggering
- state transitions
- smooth section inversion
- slow marquee only where content genuinely benefits

Avoid:

- random floating
- mouse-follow blobs
- excessive parallax
- 3D card tilt everywhere
- constant cursor effects
- spinning icons
- bounce easing
- gratuitous magnetic buttons
- continuous decorative particles
- scroll-jacking
- overlong intro animation

## 22.3 Timing

Micro:

`120–220ms`

Standard transition:

`250–450ms`

Editorial reveal:

`500–900ms`

Long process animation:

can span scroll progress rather than fixed time.

Prefer ease curves that feel controlled.

Avoid excessive springiness.

## 22.4 Scroll behavior

Do not hijack native scroll.

If using Lenis or another smoothing library:

- confirm it materially improves feel
- preserve accessibility
- do not introduce lag
- disable when reduced motion is enabled
- test trackpad and mouse wheel behavior

---

# 23. Sticky Storytelling

A single sticky diagnostic section is encouraged.

Example:

Left side remains sticky:

```text
TRACE / 001
A customer asked for a quote.
```

Right side evolves:

1. form submitted
2. inbox receives it
3. nobody assigned
4. timer increases
5. opportunity cools
6. AFTHO flags leak

Then left headline updates:

```text
TRACE / 002
The problem was not demand.
It was the handoff.
```

Do not make the entire website sticky-scrollytelling.

Use it once as a signature moment.

---

# 24. Diagnostic UI Language

Use consistent state vocabulary.

Possible statuses:

- RECEIVED
- ACTIVE
- PENDING
- UNASSIGNED
- DELAYED
- MISSED
- UNKNOWN
- LOST
- RECOVERED
- RESOLVED

Severity:

- INFO
- WATCH
- LEAK
- CRITICAL

Use very carefully. Do not make small businesses feel like they are operating a nuclear reactor.

Plain-English explanation must always accompany technical labels.

Example:

```text
LEAK / RESPONSE DELAY

The customer waited 47 minutes before anyone replied.
```

Better than:

```text
ERR_02 / INBOUND LATENCY THRESHOLD BREACH
```

---

# 25. Icons

Use icons sparingly.

Prefer:

- simple line icons
- directional arrows
- status circles
- small channel marks
- phone/form/calendar/message symbols when useful

Avoid:

- one colorful icon per feature card
- giant abstract icons
- AI sparkle icon as generic decoration
- robot icons
- brain icons

---

# 26. Imagery

AFTHO does not need constant stock photography.

Preferred visual hierarchy:

1. custom system diagrams
2. interface demonstrations
3. website work
4. actual customer/business imagery when real
5. abstract art only when conceptually meaningful

Avoid generic:

- people pointing at laptops
- smiling office team
- handshake
- robot
- AI brain
- holographic dashboards
- stock call-center agent

---

# 27. Copy Style

## 27.1 Voice

Copy should be:

- plain English
- concise
- observant
- slightly provocative
- practical
- confident
- non-hype
- business-oriented
- understandable to a nontechnical owner

## 27.2 Preferred sentence style

> Your business may not need more leads. It may be losing the ones it already has.

> The problem is often between the steps.

> A lead came in. A sale did not. What happened in between?

> Sometimes the leak is the website.

> Sometimes nobody followed up.

> Sometimes nobody can tell.

## 27.3 Avoid

- unlock
- revolutionize
- game-changing
- cutting-edge
- leverage AI
- next-generation
- seamless synergy
- supercharge
- skyrocket
- transform your business
- empower
- 10x
- future-proof
- AI-powered everything

unless there is a concrete, defensible reason.

---

# 28. Section Headings

Avoid generic labels as primary headings.

Bad:

- Our Services
- Why Choose Us
- Our Process
- Solutions
- Features

Better:

- `The problem is usually between the steps.`
- `What you cannot see can still cost you.`
- `We trace the path.`
- `Fix the leak, not everything.`
- `Sometimes the website is the leak.`
- `Know what happened to every opportunity.`

Small metadata labels can still say:

`CAPABILITIES`
`PROCESS`
`WEB`
`AUDIT`

---

# 29. Before/After System Story

Create one clear transformation.

## Before

```text
WEB FORM
   ↓
GENERAL INBOX
   ↓
?
   ↓
CALLBACK
   ↓
?
   ↓
NO SALE
```

Metadata:

- First response: unknown
- Owner: unknown
- Follow-up: unknown
- Outcome reason: unknown

## After

```text
WEB FORM
   ↓
CRM
   ↓
OWNER ASSIGNED
   ↓
ACKNOWLEDGEMENT
   ↓
CALLBACK
   ↓
FOLLOW-UP
   ↓
OUTCOME
```

Metadata:

- First response: 4m
- Owner: assigned
- Follow-up: scheduled
- Outcome: tracked

Animate from messy to clear only if accessible.

---

# 30. Proof Strategy

Do not fake proof.

Until AFTHO has verified client metrics, use:

- founder background/credibility where appropriate
- process clarity
- real demos
- sample audits clearly labeled as examples
- actual website work
- prototypes
- honest qualitative outcomes
- methodology
- before/after systems where based on real work

When real client proof exists, prioritize:

- response-time changes
- number of missed opportunities found
- booking completion
- follow-up completion
- reduction in manual steps
- conversion lift
- hours saved

Do not emphasize vanity metrics.

---

# 31. Case Study Format

When real cases exist:

```text
CASE / 001
Business type: [industry]
Problem: [observable gap]
Trace: [what happened]
Repair: [what changed]
Result: [verified outcome]
```

Keep it concrete.

Use a timeline/trace rather than a generic case-study card if possible.

---

# 32. “Why AFTHO” Comparison

Inspired by Conversion's comparison pattern, but avoid attacking competitors.

Possible comparison:

| Typical approach | AFTHO approach |
|---|---|
| Start with a tool | Start with the leak |
| Automate everything | Fix only what matters |
| Add another dashboard | Clarify the existing path |
| Sell more leads | Protect current opportunities first |
| Talk in software terms | Explain the business impact |
| Build first | Diagnose first |

This section should be visually simple and extremely readable.

---

# 33. FAQ

FAQ should remove objections rather than repeat marketing.

Suggested questions:

- What exactly is a revenue leak audit?
- What kinds of businesses is this for?
- Do I need special software?
- What if the problem is my website?
- Do you only work with automation?
- Will you actually implement the fixes?
- What does an audit require from me?
- What happens after the audit?
- Can you work with the tools I already use?
- Is this useful for a small local business?

Use accordions with:

- keyboard accessibility
- clear focus states
- correct `aria-expanded`
- no unnecessary animation delay

---

# 34. Final CTA

The final CTA should be a full visual moment.

Recommended:

- dark / near-black field
- large editorial type
- minimal text
- one CTA
- subtle trace graphic
- giant AFTHO wordmark or diagnostic mark in background if appropriate

Potential copy:

> **Revenue should not disappear quietly.**

Supporting:

> Trace what happens between an opportunity entering your business and money reaching your account.

CTA:

`Run an audit ↗`

Alternative:

> **Find the gap before you buy another tool.**

Do not end with a generic contact form floating in a white card.

---

# 35. Footer

Simple.

Possible:

```text
AFTHO®

Business systems.
Revenue paths.
Websites when the website is the problem.

Michigan / Working with businesses wherever the work makes sense

Email
LinkedIn
Privacy
Terms

© AFTHO
```

Only include claims that are true.

---

# 36. Responsive Behavior

Mobile is not a scaled-down desktop.

## 36.1 Mobile priorities

1. Maintain giant brand typography
2. Simplify trace geometry
3. Preserve the narrative order
4. Keep controls large
5. Avoid microscopic metadata
6. Reduce simultaneous animation
7. Stack comparison layouts logically
8. Eliminate horizontal overflow
9. Keep CTAs reachable
10. Preserve visual drama

## 36.2 Diagnostic trace on mobile

Do not force a wide horizontal system map.

Convert to vertical:

```text
FORM
 │
INBOX
 │
UNASSIGNED
 │
DELAY +47M
 │
LOST
```

## 36.3 Navigation

Use a compact menu.

Menu should:

- open quickly
- trap focus if modal
- close with Escape
- have clear tap targets
- not animate for one second before becoming usable

---

# 37. Accessibility Requirements

Target WCAG 2.2 AA where reasonably possible.

Required:

- semantic HTML
- single logical H1
- sensible heading hierarchy
- visible keyboard focus
- keyboard-accessible interactive components
- sufficient contrast
- alt text for meaningful images
- decorative visuals marked appropriately
- no information communicated only by color
- reduced-motion mode
- minimum comfortable tap targets
- forms with explicit labels
- error messages understandable without color alone

Do not sacrifice readability for ultra-light gray text.

---

# 38. Performance Requirements

Premium design must not mean a slow site.

Targets:

- prioritize Core Web Vitals
- minimize JS bundle
- lazy-load below-fold imagery
- optimize images
- use modern image formats
- preload only critical fonts/assets
- avoid loading multiple animation libraries
- avoid unnecessary video backgrounds
- avoid huge uncompressed Lottie files
- avoid WebGL unless clearly justified

Animation should remain smooth on average laptops and phones.

---

# 39. SEO & Semantic Structure

The homepage should still be understandable to search engines.

Use:

- semantic sections
- descriptive page title
- meta description
- Open Graph tags
- structured headings
- descriptive anchor text
- accessible text content rather than canvas-only messaging

Potential content themes:

- missed revenue
- missed leads
- business process audit
- lead follow-up
- business automation
- website design/development
- CRM workflow
- local business systems

Do not keyword-stuff.

---

# 40. Codex Operating Instructions

## 40.1 Before writing code

Codex must:

1. Read this entire `design.md`.
2. Inspect the existing repository structure.
3. Preserve the existing framework and conventions unless there is a strong technical reason to change them.
4. Inspect current styles, components, fonts, and animation dependencies.
5. Open the reference URLs if web/browser access is available.
6. Identify reusable existing components before adding dependencies.
7. State which homepage section is being implemented and which principles from this file apply.
8. Never silently substitute generic SaaS design patterns.

## 40.2 When interpreting references

Do not clone.

For every borrowed idea, translate it into AFTHO.

Examples:

- Fabrica giant section title → giant AFTHO diagnostic statement
- Whenevr micro-UI → trace/status labels
- Drospecta product demo → business opportunity trace
- Conversion comparison → AFTHO vs tool-first approach

## 40.3 During implementation

For each section, ask internally:

1. What business idea does this section explain?
2. What is the single primary visual hierarchy?
3. Why does this animation exist?
4. Does this look like AFTHO or a template?
5. Could a nontechnical small-business owner understand it?
6. Is the section visually distinct from the previous one?
7. Is the CTA clear?
8. Is there unnecessary UI chrome?

## 40.4 After implementation

Codex must verify:

- desktop
- tablet
- mobile
- keyboard navigation
- hover/focus states
- reduced motion
- no horizontal overflow
- no layout shift caused by fonts/images
- no console errors
- no broken links
- no inaccessible text contrast
- animations do not block interaction
- sticky sections release correctly
- page remains readable with JS motion disabled where practical

---

# 41. Codex Visual QA Checklist

Before declaring a page complete, reject it if any of these are true:

- Hero looks like a generic SaaS startup
- Hero uses a laptop/dashboard mockup as the primary visual without conceptual reason
- More than half of sections are card grids
- Every section is center-aligned
- Every container uses large rounded corners
- Purple/blue gradient is used by default
- Generic AI imagery appears
- Too many icons are used
- Accent color has no semantic meaning
- Animation exists purely as decoration
- Body text is too small/light
- Mobile hierarchy feels like desktop squeezed smaller
- Section spacing is uniform and monotonous
- Services appear before the problem is understood
- Website services overpower the revenue-leak narrative
- Fake customer metrics appear
- CTA says only “Get Started”
- Copy contains obvious AI-agency clichés
- The page could have another agency's logo swapped in with no design changes

If the last point is true, the design is not sufficiently branded.

---

# 42. Anti-Pattern List

Explicitly avoid:

## Generic SaaS
- glowing dashboard hero
- floating glass cards
- browser frame with meaningless metrics
- 3D orb
- purple gradient
- endless logo cloud

## Generic AI agency
- robot
- brain/circuit
- sparkles
- “AI powered”
- chat bubbles as main visual
- futuristic wireframe globe
- neon network nodes

## Generic local agency
- “We grow your business”
- smiling stock team
- service icon grid
- testimonials immediately followed by contact form
- huge list of platforms/tools
- “Your trusted partner”

## Overdesigned creative portfolio
- illegible typography
- cursor takeover
- scroll hijacking
- too much parallax
- video everywhere
- weird interactions before clarity
- ornamental motion with no business meaning

---

# 43. Component Inventory

Suggested reusable components:

```text
<SiteNav />
<SectionMeta />
<EditorialHeadline />
<DiagnosticLabel />
<TraceLine />
<TraceNode />
<TraceEvent />
<TraceStatus />
<LeakFlag />
<MetricReadout />
<ProcessStep />
<CapabilityGroup />
<BeforeAfterTrace />
<WebsiteBeforeAfter />
<ComparisonRow />
<CaseTrace />
<FAQAccordion />
<AuditCTA />
<PosterCTA />
<SiteFooter />
```

Do not build components merely to abstract five lines of JSX.

Use components where they improve consistency, reuse, testing, or clarity.

---

# 44. Suggested Content/Data Model

For trace-driven UI:

```ts
type TraceEvent = {
  id: string
  timestamp?: string
  label: string
  detail?: string
  status: "received" | "active" | "pending" | "delayed" | "missed" | "lost" | "resolved"
  channel?: "web" | "phone" | "text" | "email" | "booking" | "crm"
  severity?: "info" | "watch" | "leak" | "critical"
}
```

Use semantic naming.

Do not hard-code animation logic into giant monolithic components if a small state/data model makes the sequence easier to manage.

---

# 45. Animation Architecture

Prefer a small number of coherent animation primitives.

Example:

```text
RevealText
RevealMask
DrawPath
ActivateNode
CountUp
FadeIn
StickyProgress
```

Avoid adding twenty unrelated effects.

The same easing and timing system should repeat across the site.

---

# 46. Progressive Enhancement

The site must remain understandable if:

- JS loads slowly
- animation fails
- reduced motion is enabled
- user is on mobile
- user uses keyboard navigation

Core copy and structure should exist in HTML.

Do not make the primary value proposition dependent on a canvas animation.

---

# 47. Image Strategy

If visual assets are created:

- prefer original AFTHO diagrams
- use screenshots of actual work where permission exists
- optimize all images
- use consistent treatment
- avoid fake “client dashboards”
- do not use screenshots solely to fill space

For website portfolio work:

- crop deliberately
- show details as well as whole pages
- use device frames sparingly
- emphasize business outcome and UX decision, not just beauty

---

# 48. Website Showcase Concept

Suggested section:

Small metadata:

`WEB / 001`

Headline:

> **Sometimes the leak is the website.**

Split visual:

Left:

`BEFORE`

- CTA buried
- long form
- poor mobile hierarchy
- unclear next step

Right:

`AFTHO`

- clear value proposition
- obvious action
- simplified form
- better mobile flow
- tracking/follow-up connected

Support line:

> We design and build websites when the website is part of the problem—not because every business needs another redesign.

CTA:

`Explore web work ↗`

This is the preferred way to introduce website services.

---

# 49. Interaction Details

## Links

- clear hover
- underline or positional shift where useful
- avoid making every link animate differently

## Buttons

Hover:
- slight background/foreground inversion or directional arrow shift

Pressed:
- quick tactile response

Focus:
- clear visible ring

## Trace nodes

Hover/focus can reveal:

- timestamp
- explanation
- what failed
- recommended fix

On mobile:
- tap instead of hover
- no tooltip-only content

---

# 50. Cursor

Use default system cursor unless a very subtle branded cursor materially improves the experience.

Do not create a custom cursor that:

- hides the native pointer
- lags
- becomes unusable on form controls
- makes the site feel like an art portfolio

---

# 51. Loading Experience

No long splash intro.

If a hero animation needs initialization:

- render headline immediately
- render static trace
- enhance after load

The visitor should never stare at a logo animation before accessing the page.

---

# 52. Empty Space Rule

When tempted to add another visual because an area “looks empty,” first test increasing whitespace.

Empty space is part of the art direction.

Do not fill every gap with:

- icon
- gradient
- squiggle
- badge
- tiny card
- floating label

---

# 53. Complexity Budget

Each section should have **one primary design idea**.

Examples:

Hero:
`giant headline + diagnostic trace`

Invisible Middle:
`unknown path resolving`

Audit:
`numbered editorial process`

Website:
`before/after transformation`

Proof:
`measured trace/result`

Final CTA:
`poster-scale statement`

Do not combine every effect into every section.

---

# 54. Suggested Homepage Visual Rhythm

## Viewport 1

Quiet, bright, enormous typography.

## Viewport 2

Trace begins moving.

## Viewport 3

More structured technical visual.

## Viewport 4

Dark diagnostic environment.

## Viewport 5

Return to editorial white space.

## Viewport 6

Website visual work adds imagery/color.

## Viewport 7

Proof/comparison becomes structured.

## Final

Dark poster CTA.

This rhythm creates contrast without visual chaos.

---

# 55. Suggested Build Order

Codex should implement in this sequence:

### Phase 1 — Foundation
- typography
- colors
- spacing
- grid
- buttons
- metadata labels
- navigation

### Phase 2 — Hero
- copy hierarchy
- trace visual
- responsive state
- reduced motion

### Phase 3 — Narrative
- invisible middle
- what AFTHO sees
- audit process

### Phase 4 — Capabilities
- system repair groups
- website showcase

### Phase 5 — Conversion
- proof
- comparison
- FAQ
- final CTA

### Phase 6 — Refinement
- animation
- transitions
- microinteractions
- accessibility
- performance
- QA

Do not begin by implementing fancy animation before typography/grid are correct.

---

# 56. Definition of “Premium”

Premium does **not** mean:

- more effects
- darker background
- more gradients
- more glass
- more animation
- more cards

Premium means:

- intentional spacing
- excellent typography
- meaningful visual hierarchy
- consistent alignment
- restrained palette
- precise motion
- original visual concept
- copy that respects the audience
- clean responsive behavior
- fast performance
- details that feel deliberate

---

# 57. Audience Consideration

AFTHO may speak to business owners who are not technical and may be older or less interested in software terminology.

Therefore:

- never require technical literacy
- use system visuals as explanation, not intimidation
- pair technical labels with plain English
- keep buttons conventional enough to recognize
- make forms obvious
- avoid hidden navigation
- do not make text tiny in pursuit of editorial aesthetics
- no “mystery meat” interactions
- explain the outcome before the implementation technology

The site can look advanced while remaining extremely easy to understand.

---

# 58. Form UX

If the audit CTA leads to a form:

Keep first step short.

Potential fields:

- name
- business
- website
- email
- biggest concern

Optional prompt:

> Where do you think opportunities may be slipping through?

Do not ask twenty questions initially.

Multi-step intake can follow after contact if needed.

Required fields should be obvious.

Use descriptive errors.

---

# 59. Audit CTA Journey

Preferred:

```text
Homepage CTA
   ↓
Short audit landing/intake
   ↓
Business + contact details
   ↓
Short problem context
   ↓
Confirmation
```

Confirmation should explain what happens next.

Avoid a dead:

`Thanks!`

Better:

> **Trace received.**
>
> We’ll review the information you shared and use it to understand where to start looking.

Only promise timelines that are operationally true.

---

# 60. Possible Hero Copy Directions

These are options for art direction, not final approved copy.

## Direction A — clearest

> **Find where your business is losing revenue.**

Sub:

> AFTHO traces what happens between an opportunity entering your business and money reaching your account.

## Direction B — strongest brand

> **Revenue is leaking somewhere.**
>
> *We find where.*

## Direction C — diagnostic

> **A lead came in. A sale didn’t.**
>
> What happened in between?

## Direction D — anti-agency

> **Before you buy another tool, find the gap.**

Do not use all of these on the same page.

---

# 61. Microcopy Examples

Diagnostic labels:

```text
TRACE ACTIVE
OPPORTUNITY RECEIVED
OWNER UNKNOWN
RESPONSE PENDING
DELAY +47M
HANDOFF FAILED
FOLLOW-UP MISSING
OUTCOME UNKNOWN
LEAK DETECTED
PATH RESTORED
```

Plain-English support:

```text
Nobody owned the next step.

The form worked. The follow-up did not.

The lead waited almost an hour.

The quote was sent. Nobody checked back.

The website created the lead. The process lost it.
```

---

# 62. Brand Signature Motifs

Choose 2–3 recurring motifs only.

Recommended:

1. **trace line**
2. **section index**
3. **status metadata**

Possible fourth:

4. **small registration mark / AFTHO® style device** only if legally/brand-appropriately used

Do not create six motifs.

Consistency builds identity.

---

# 63. Section Index System

Potential system:

```text
00 / ENTRY
01 / LEAK
02 / TRACE
03 / DIAGNOSIS
04 / REPAIR
05 / WEB
06 / PROOF
07 / START
```

Use as small metadata, not giant navigation.

---

# 64. Dark Diagnostic Section

One signature dark section should feel like entering the instrument.

Background:
- near black, not pure black if softer contrast works

Foreground:
- high contrast neutral
- diagnostic accent

Possible layout:
- sticky heading left
- trace timeline right
- event states
- one leak becomes highlighted

Add subtle grid/lines only if they reinforce instrumentation.

Do not create a sci-fi HUD.

---

# 65. Web Work Visual Language

For web showcase:

- use actual interface compositions
- crop large
- let work breathe
- avoid endless floating device mockups
- show mobile and desktop where useful
- use captions explaining problem solved

Example:

```text
WEB / CASE 001

Problem:
Customers could not quickly understand where to request a quote.

Repair:
Reworked hierarchy, CTA placement, mobile form flow, and follow-up routing.
```

This connects web design back to AFTHO's diagnostic identity.

---

# 66. Content Density

The site should be visually generous but informationally useful.

Rule:

- large statement
- short explanation
- visual proof
- optional deeper detail

Do not place three paragraphs beneath every heading.

---

# 67. Trust

Trust should come from:

- clarity
- competence
- process transparency
- actual work
- real proof
- professional polish
- sensible claims

Not from:

- fake “trusted by” logo clouds
- invented testimonials
- fake live counters
- fake certifications
- manufactured scarcity

---

# 68. Future Expansion

The system should support future pages:

- `/audit`
- `/websites`
- `/work`
- `/about`
- `/insights`
- case-study pages

Design tokens/components should make these feel part of one system.

The homepage should not attempt to contain every future page's content.

---

# 69. Suggested File/Code Organization

Adapt to the repository.

Conceptually:

```text
components/
  aftho/
    navigation/
    typography/
    trace/
    diagnostic/
    sections/
    ui/

data/
  traces.ts
  capabilities.ts
  faq.ts

styles/
  tokens.css
  motion.css
```

If using Tailwind:

- define meaningful theme tokens
- avoid giant arbitrary-class soup
- centralize repeated values
- extract only patterns that genuinely repeat

---

# 70. Design Tokens

Example conceptual tokens:

```css
:root {
  --bg: #f2f1ed;
  --surface: #ffffff;
  --ink: #111111;
  --muted: #6f6f6b;
  --line: rgba(17, 17, 17, 0.14);

  --signal: /* choose after brand exploration */;
  --signal-soft: /* derived */;
  --danger: /* accessible leak state */;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --page-pad: clamp(20px, 4vw, 72px);
  --section-gap: clamp(88px, 12vw, 220px);
}
```

These values are illustrative.

Do not lock color before visual testing.

---

# 71. Animation Tokens

Concept:

```ts
const motion = {
  micro: 0.18,
  normal: 0.36,
  reveal: 0.7,
  ease: [0.22, 1, 0.36, 1],
}
```

Use consistent motion rather than each component inventing its own style.

---

# 72. Browser QA

Test at minimum:

- Chrome desktop
- Safari/WebKit behavior if available
- Firefox if practical
- iPhone-sized viewport
- Android-sized viewport
- tablet width

Widths worth checking:

- 360
- 390
- 768
- 1024
- 1280
- 1440
- 1728+

Do not optimize only for 1440px screenshots.

---

# 73. Screenshot Review Protocol for Codex

After each major section:

1. Render at desktop.
2. Capture screenshot.
3. Compare against this design.md.
4. Ask:
   - Is typography bold enough?
   - Is there enough whitespace?
   - Does it look templated?
   - Is the AFTHO motif visible?
   - Is copy understandable?
   - Is animation adding meaning?
5. Fix before proceeding.

Then repeat on mobile.

If browser/screenshot tooling is available, use it.

Do not rely solely on code inspection.

---

# 74. Acceptance Criteria

The homepage is ready only when all are true:

## Brand
- AFTHO feels identifiable without relying solely on the logo.
- The site does not look like a generic AI agency.
- Diagnostic metaphor is obvious.

## Story
- Visitor understands the missed-revenue concept.
- Story moves from problem to trace to repair.
- Website services fit naturally into the story.

## Visual
- Typography has editorial authority.
- Spacing is intentional.
- Design has at least one memorable signature interaction.
- Accent color is meaningful.

## UX
- Main CTA is obvious.
- Nontechnical visitor can understand the offer.
- Navigation is simple.
- Mobile is fully considered.

## Motion
- Animations explain or reinforce.
- Reduced motion works.
- No scroll-jacking.

## Technical
- Good performance.
- No console errors.
- Responsive.
- Accessible.
- Components are maintainable.

## Integrity
- No fake metrics.
- No fake logos.
- No fake testimonials.
- No copied proprietary assets.

---

# 75. Final Creative Test

Before shipping, perform this test:

> If AFTHO's logo were replaced with another automation agency's logo, would the website still make perfect sense?

If yes, the design is too generic.

AFTHO must own:

- the trace
- the diagnostic language
- the revenue-leak narrative
- the editorial system
- the visual relationship between opportunity and outcome

The visitor should remember:

> **AFTHO finds what happens between the lead and the revenue.**

---

# 76. Condensed Instruction for Codex

When a short directive is needed, use this:

> Build AFTHO as a premium business-diagnostics brand. Treat the website as a visual instrument that traces how opportunities move through a company and where revenue leaks occur. Use Fabrica for editorial art direction, Whenevr for restraint and polish, Drospecta for concrete system demonstrations, and Conversion for persuasive structure. Do not clone any reference. Do not default to generic SaaS/AI agency aesthetics. Prioritize giant typography, whitespace, small technical metadata, purposeful diagnostic animation, plain-English business messaging, responsive accessibility, and one coherent trace motif across the page. The missed-revenue audit is the primary offer; website design/development is a secondary repair capability that should be presented as “sometimes the leak is the website.” Every visual or animation must explain a business concept or strengthen AFTHO's identity.

---

# 77. Reference URLs

Keep these available during implementation:

### Primary
- Fabrica: https://fabrica.framer.media/
- Whenevr: https://whenevr.framer.website/
- Drospecta: https://drospecta.framer.website/
- Conversion: https://conversion.framer.media/?via=hxmzaehsan

### Reference role summary
- **Fabrica:** visual identity, editorial composition, oversized type, numbering, art direction
- **Whenevr:** whitespace, hierarchy, typographic restraint, micro-UI, concise UX
- **Drospecta:** system/product storytelling, visible workflows, feature demonstrations
- **Conversion:** proof, comparisons, outcome hierarchy, CTA structure

---

# 78. Source Observations

The live references were reviewed for the behaviors and structures summarized above.

Useful observed patterns include:

- Whenevr uses a large direct hero, concise supporting copy, an explicit process (`Subscribe`, `Request`, `Receive`), short feature language, product-like booking/pricing UI, testimonials, FAQs, and a strong final CTA.
- Fabrica uses giant editorial section titles, small metadata, project/service indexing such as `(001)`, oversized brand typography, and strong scale contrast.
- Drospecta explains capabilities through repeated product/function blocks such as website intent, personalized outreach, outbound automation, and campaign workflows paired with product visuals.
- Conversion uses a direct comparison between the status quo and its approach, followed by a simple three-step process beginning with a funnel audit.

These patterns should be translated into AFTHO's own system and language rather than reproduced.

---

# 79. Final Instruction

**Do not make AFTHO prettier than it is clear.**

Then, once it is clear:

**make the clarity beautiful.**
