# AGENTS.md — AFTHO Frontend

## Purpose

This repository contains the AFTHO website.

AFTHO is a **business diagnostics brand** focused on finding missed-revenue and opportunity leaks inside a business system.

The website must feel like a **diagnostic instrument**, not:

- an AI agency
- a generic SaaS startup
- a marketing agency
- a business coach
- a cheap web-design shop
- a component-library demo

The primary offer is the **AFTHO Revenue Leak Audit**.

Website design/development is a secondary repair capability. Present it as:

> Sometimes the leak is the website.

---

# 1. Absolute Source of Truth

Before making any visual, UI, UX, layout, motion, copy, or frontend architecture decision:

**READ `design.md`.**

`design.md` is the authoritative design specification for this repository.

If any skill, component library, template, package, generated suggestion, or previous implementation conflicts with `design.md`, **`design.md` wins**.

Priority order:

1. `design.md`
2. clarity for a nontechnical business owner
3. existing AFTHO design tokens/components
4. frontend-design skill
5. UI/UX Pro Max skill
6. Motion documentation/patterns
7. 21st.dev components
8. generic framework conventions

Never allow a downloaded component or skill to redefine the brand.

---

# 2. Reference Sites

Use these as references for principles, not as cloning targets.

### Fabrica
https://fabrica.framer.media/

Primary role:
- editorial art direction
- oversized typography
- section numbering
- dramatic scale contrast
- small technical metadata
- brand-first composition

### Whenevr
https://whenevr.framer.website/

Primary role:
- whitespace
- typography restraint
- micro-UI
- concise copy
- simple process explanation
- polished interaction

### Drospecta
https://drospecta.framer.website/

Primary role:
- system/product storytelling
- concrete workflow demonstrations
- showing behavior instead of listing features
- visual business-process explanation

### Conversion
https://conversion.framer.media/?via=hxmzaehsan

Primary role:
- persuasive structure
- proof placement
- before/after comparison
- simple process
- CTA hierarchy

Do not reproduce:
- copy
- branded assets
- proprietary illustrations
- exact layouts
- exact animations

Translate ideas into AFTHO's visual language.

---

# 3. Design Influence Weight

When references conflict, use approximately:

- Fabrica: 40%
- Whenevr: 25%
- Drospecta: 20%
- Conversion: 15%

This is directional, not mathematical.

Do not average all four into a generic modern landing page.

---

# 4. Required Skills

Use the following skills when available.

## `frontend-design`

Use for:

- page composition
- art direction
- typography
- spacing
- hierarchy
- responsive layout
- visual identity
- component styling
- deciding how a section should look and feel

Invoke this skill **before substantial frontend design work**.

Its job is to help implement `design.md`, not reinterpret it.

## `ui-ux-pro-max`

Use for:

- accessibility review
- responsive review
- interaction review
- navigation
- forms
- focus states
- animation quality
- mobile usability
- UI consistency
- final pre-delivery QA

Use it after implementing a substantial section or page.

For major page work:

1. build with `frontend-design`
2. review with `ui-ux-pro-max`
3. fix findings
4. visually inspect again

---

# 5. Motion Library

Use **Motion for React** as the default animation library when this project is React-based.

Current package naming may be either:

- `motion`
- or an existing compatible Framer Motion setup already in the repository

Before installing anything:

1. inspect `package.json`
2. inspect lockfiles
3. reuse an existing compatible animation dependency if appropriate
4. do not install duplicate animation libraries

Preferred Motion use cases:

- masked text reveals
- opacity/translate reveals
- trace-node activation
- SVG path animation
- layout transitions
- hover/focus microinteractions
- viewport-triggered reveals
- scroll-linked progress where simple

Do **not** add GSAP by default.

Add GSAP/ScrollTrigger only if a specific interaction cannot be implemented cleanly with Motion and native browser APIs.

Do **not** add Lenis by default.

Native scrolling is preferred unless smooth-scroll behavior materially improves the experience and passes accessibility/performance review.

---

# 6. 21st.dev

21st.dev is a **parts source**, not the designer.

Use 21st.dev when:

- a well-built existing component can save meaningful time
- a component has complex interaction behavior worth reusing
- an accessible primitive is preferable to hand-writing it
- there is a strong component that can be adapted to AFTHO

Good candidates:

- accordions
- menus
- command/search patterns
- sophisticated responsive primitives
- subtle interaction patterns
- isolated visual experiments

Do not use 21st.dev to:

- choose AFTHO's visual direction
- generate the whole homepage
- replace `design.md`
- import a complete SaaS page
- import components without restyling
- create visual inconsistency

Every imported component must be adapted to:

- AFTHO typography
- AFTHO colors
- AFTHO spacing
- AFTHO border/radius rules
- AFTHO motion language
- accessibility requirements

If a 21st.dev component visually resembles generic SaaS or AI design after adaptation, do not use it.

---

# 7. Dependency Policy

Before adding any dependency:

1. inspect existing dependencies
2. determine whether native CSS/JS or an existing package can do the job
3. justify the new dependency
4. avoid overlapping libraries

Prefer:

- existing framework features
- CSS
- SVG
- Motion
- existing component primitives

Avoid dependency accumulation.

Do not install:

- multiple animation frameworks for convenience
- huge UI kits
- full design systems that fight the AFTHO aesthetic
- carousel libraries for simple horizontal layouts
- random effect libraries

---

# 8. Core Brand Concept

The visual metaphor is:

**THE TRACE**

An opportunity enters a business.

AFTHO traces what happens next.

Example:

```text
OPPORTUNITY
    ↓
WEBSITE / CALL / FORM
    ↓
RESPONSE
    ↓
OWNER
    ↓
FOLLOW-UP
    ↓
QUOTE / BOOKING
    ↓
OUTCOME
```

A leak may occur between any two states.

Recurring visual language may include:

- trace lines
- system nodes
- timestamps
- state changes
- small diagnostic labels
- numbered sections
- issue flags
- measured delays
- before/after paths

The trace should become a recognizable AFTHO signature.

---

# 9. Primary Visual Motifs

Prefer only a few repeated motifs:

1. trace line
2. section index
3. diagnostic metadata
4. strong editorial typography

Do not introduce unrelated visual gimmicks.

---

# 10. Typography

Typography should do most of the visual work.

Preferred roles:

1. primary grotesk/sans
2. editorial accent serif/italic
3. optional mono for metadata

Do not use more than three strong typographic voices.

Large headings should feel architectural.

Small metadata should feel precise.

Body copy should remain easy to read.

Do not sacrifice readability for editorial styling.

---

# 11. Color

Use a mostly neutral palette.

Accent color must mean something.

Use accent for:

- active trace
- detected issue
- selected state
- CTA
- system signal

Do not randomly decorate sections with accent color.

Avoid default AI/SaaS palettes:

- purple gradients
- neon cyan
- glowing blue
- generic orange growth glow

unless explicitly chosen as part of the final AFTHO brand system.

---

# 12. Layout Rules

Prefer:

- large whitespace
- asymmetric editorial grids
- full-width statements
- offset text
- occasional structured diagnostic panels
- clear rhythm between light and dark sections

Avoid:

- centered everything
- six-card service grids
- identical section padding everywhere
- giant rounded containers around every piece of content
- dashboard mockups without meaning

A section should usually have **one primary design idea**.

---

# 13. Card Rule

Cards are not the default layout primitive.

Use a card only when the content conceptually belongs in a container.

Never solve every section with:

```text
[ icon ]
Heading
Paragraph
```

repeated three or four times.

---

# 14. Radius Rule

Do not default to large rounded corners.

Use:

- small/modest radius for controls
- medium radius only where appropriate
- square/full-bleed editorial sections when stronger

Avoid `rounded-3xl` everywhere.

---

# 15. Copy Rules

Use plain English.

The audience may include older and nontechnical small-business owners.

Preferred tone:

- observant
- concise
- specific
- calm
- intelligent
- non-hype

Good:

> A lead came in. A sale didn't. What happened in between?

> The problem is usually between the steps.

> Sometimes the leak is the website.

> Before you buy another tool, find the gap.

Avoid:

- unlock
- empower
- revolutionary
- transform
- next-generation
- supercharge
- leverage AI
- seamless
- 10x
- cutting-edge
- AI-powered everything

---

# 16. Primary Homepage Story

The page should generally move through:

1. opportunity enters
2. invisible middle
3. leak becomes visible
4. AFTHO traces it
5. AFTHO diagnoses it
6. AFTHO repairs it
7. system becomes measurable
8. visitor is invited to run an audit

Narrative order:

**problem → visibility → diagnosis → repair → proof → action**

Do not open with a services menu.

---

# 17. Website Services

Website services are important, but secondary.

Preferred section framing:

> **Sometimes the leak is the website.**

Possible issues:

- weak mobile hierarchy
- unclear CTA
- poor form
- broken contact path
- slow site
- outdated presentation
- poor trust
- broken analytics
- no follow-up after submission

Then:

> When the website is the problem, we can rebuild it.

This section may showcase AFTHO's strongest visual web-design work.

Do not let it turn the entire homepage into a web-design agency portfolio.

---

# 18. Animation Rules

Every animation must do at least one of these:

- explain process
- communicate state
- reveal hierarchy
- show causality
- orient the user
- reinforce AFTHO identity

If it does none of these, remove it.

Preferred motion:

- line drawing
- node activation
- mask reveal
- translate/fade
- subtle scale
- state transitions
- controlled stagger
- sticky progress
- counter updates

Avoid:

- random floating
- particles
- cursor trails
- 3D tilt everywhere
- bounce animations
- arbitrary parallax
- constant motion
- scroll hijacking
- long splash intros

---

# 19. Signature Scroll Section

One strong sticky/scrollytelling section is encouraged.

Example:

```text
TRACE / 001
A customer asked for a quote.
```

As scroll progresses:

```text
FORM SUBMITTED
EMAIL RECEIVED
OWNER UNASSIGNED
RESPONSE +47M
LEAK DETECTED
```

Then:

```text
TRACE / 002
The problem was not demand.
It was the handoff.
```

Do not turn every section into sticky scrollytelling.

---

# 20. Accessibility

Target WCAG 2.2 AA where practical.

Required:

- semantic HTML
- logical headings
- keyboard support
- visible focus
- sufficient contrast
- accessible forms
- usable touch targets
- correct ARIA where needed
- reduced-motion support
- no information only in color
- no hover-only critical information

If `prefers-reduced-motion: reduce`:

- stop continuous animation
- render important trace states immediately
- preserve meaning
- avoid scroll-linked motion dependencies

---

# 21. Performance

Premium does not mean heavy.

Prioritize:

- Core Web Vitals
- optimized images
- modern formats
- minimal JS
- lazy-loading
- small animation footprint
- limited font weights
- no huge autoplay background video unless justified

Avoid WebGL unless it creates clear value.

---

# 22. Responsive Rules

Mobile must be intentionally designed.

Do not simply shrink desktop.

For trace diagrams:

Desktop:

```text
FORM → INBOX → OWNER → FOLLOW-UP → OUTCOME
```

Mobile:

```text
FORM
 ↓
INBOX
 ↓
OWNER
 ↓
FOLLOW-UP
 ↓
OUTCOME
```

Preserve editorial typography at meaningful scale.

Do not reduce the hero to generic small mobile text.

---

# 23. Workflow for Any Major UI Task

For substantial UI work:

## Step 1 — Read

Read:

- `AGENTS.md`
- `design.md`
- relevant existing components/styles

## Step 2 — Inspect

Inspect:

- package manager
- dependencies
- design tokens
- typography
- layout system
- current page
- responsive behavior

## Step 3 — Design

Use `frontend-design`.

Define:

- purpose of section
- visual hierarchy
- composition
- typography
- motion purpose
- mobile behavior

before implementing.

## Step 4 — Build

Implement with:

- existing stack
- AFTHO tokens
- Motion where justified
- accessible semantic markup

## Step 5 — Visual QA

Render and inspect the result.

Do not rely solely on source code.

Check:

- desktop
- tablet
- mobile

## Step 6 — UX QA

Use `ui-ux-pro-max`.

Fix:

- accessibility
- interaction
- navigation
- focus
- responsive issues
- animation problems
- visual inconsistencies

## Step 7 — Final Review

Ask:

> Does this look uniquely AFTHO?

If another agency could swap its logo into the design without changing anything else, the design is too generic.

---

# 24. Screenshot QA

If browser/screenshot tooling is available, use it.

Review at approximately:

- 390px
- 768px
- 1280px
- 1440px
- 1728px

Check:

- typography
- whitespace
- overflow
- alignment
- trace clarity
- visual rhythm
- CTA clarity
- motion state
- section transitions

Do not declare major frontend work complete before visual inspection.

---

# 25. 21st.dev Decision Rule

Before searching 21st.dev, ask:

> Is this a reusable UI primitive or interaction where importing a strong implementation saves real time?

If yes, search.

If the need is:

> What should this AFTHO section look like?

Do **not** search 21st.dev first.

Use:

- `design.md`
- frontend-design
- reference sites

21st is implementation assistance, not art direction.

---

# 26. Imported Component Checklist

Any imported component must pass:

- matches AFTHO typography
- matches AFTHO colors
- matches AFTHO radius
- matches AFTHO spacing
- no unwanted gradients
- no generic SaaS chrome
- accessible
- responsive
- reduced-motion compatible
- no unnecessary dependencies
- source/license acceptable

If not, adapt or reject it.

---

# 27. Visual Anti-Patterns

Reject designs containing:

- giant generic dashboard hero
- purple/blue glow
- robot imagery
- AI brain imagery
- random sparkles
- glassmorphism everywhere
- excessive cards
- every section centered
- giant logo cloud
- stock office photography
- gradient blobs
- excessive pills
- arbitrary 3D
- generic “Get Started” everywhere

---

# 28. Integrity Rules

Never invent:

- client logos
- testimonials
- conversion results
- revenue numbers
- usage metrics
- customer counts
- certifications
- scarcity

Illustrative demo data must be labeled clearly:

- `DEMO`
- `ILLUSTRATIVE`
- `EXAMPLE TRACE`

---

# 29. Component Direction

Useful AFTHO-specific components may include:

```text
SiteNav
SectionMeta
EditorialHeadline
TraceLine
TraceNode
TraceEvent
TraceStatus
LeakFlag
MetricReadout
AuditStep
CapabilityGroup
BeforeAfterTrace
WebsiteBeforeAfter
ComparisonRow
FAQAccordion
PosterCTA
SiteFooter
```

Do not create abstraction for abstraction's sake.

---

# 30. Technical Preferences

Prefer:

- semantic React components
- CSS/Tailwind consistent with existing project
- SVG for diagrams
- Motion for animation
- data-driven trace events
- progressive enhancement

Avoid giant monolithic client components where simple composition would be clearer.

---

# 31. Build Before Effects

Implementation priority:

1. typography
2. grid
3. spacing
4. copy hierarchy
5. static visual composition
6. responsive behavior
7. accessibility
8. animation
9. microinteractions
10. decorative polish

Never use animation to hide weak layout.

---

# 32. Definition of Done

A major page/section is not done until:

- design.md followed
- visually inspected
- mobile checked
- keyboard checked
- reduced motion checked
- no horizontal overflow
- no console errors
- no broken links
- motion supports meaning
- imported components fully restyled
- no fake proof
- CTA understandable
- AFTHO identity is obvious

---

# 33. Final Test

Before completing any significant frontend task, answer:

1. What does this section explain?
2. What is its single strongest visual idea?
3. Why does each animation exist?
4. Can a nontechnical owner understand it?
5. Does it feel like AFTHO?
6. Does it follow `design.md`?
7. Is it accessible?
8. Is it fast?
9. Does it work on mobile?
10. Could anything be removed without losing meaning?

If something can be removed without losing meaning, seriously consider removing it.

---

# Final Directive

**Do not make AFTHO prettier than it is clear.**

Once it is clear:

**make the clarity beautiful.**
