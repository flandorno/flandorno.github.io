# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: a hiring manager, recruiter, or design lead evaluating Federico Landorno for a full-time UX design role. They arrive from a job application, a referral, or a LinkedIn/read.cv link, usually skim quickly, and often compare several portfolios in one sitting. Their job is to decide whether Federico is worth a conversation — and the action the site must earn is an outbound contact (email or LinkedIn) inviting him to interview.

## Product Purpose

Federico Landorno's personal UX design portfolio. It exists to win interviews for full-time UX design roles by showing his work and how he thinks. Success is a qualified hiring contact reaching out after visiting; the case studies are the unit that does the convincing.

## Positioning

What Federico wants to be remembered for, confirmed by the owner:

- **Systems thinker** — designs that scale: from UI kit to shared language, token architectures, coherence across multiple apps (the Net4Market throughline).
- **Measurable impact** — outcomes quantified as before/after on business and efficiency, not just screens (45→3 min; 600+ files → one).
- **Product strategy** — reasons from the business problem and roadmap priority, not UI alone.

Research honesty (defending or killing a decision on evidence, as in Electrolux) is present as supporting evidence of how he works, not a headline claim.

## Operating Context

Experienced as a website on desktop and mobile web. A hash-routed single-page app deployed to GitHub Pages (static hosting) at flandorno.github.io. The evaluation ritual is: land on the home page, skim the three project cards, open one or two case studies, then decide whether to make contact. Case studies are read top-to-bottom; the home page is scanned.

## Capabilities and Constraints

- Live surfaces: home page (hero + three project sections + contact footer) and three case-study pages — Net4Market (`/n4m`), Yoga (`/d4next`), Electrolux (`/electrolux`).
- **The About page is withheld.** On 2026-11-03 it was unlinked from the navigation and unrouted before the first push, at the owner's request, because its copy is not written yet. `src/pages/About.tsx` is kept in the tree, not deleted. A catch-all route sends `/#/about`, the old `/#/experience` and any mistyped hash to the home page rather than a blank screen. When it returns it carries only cleared facts: the home headline, the three disciplines, and a summary of the three case studies. **It still has no bio.** On 2026-11-02 a paragraph characterising how Federico works ("usually on products where the interface is the least of the problem…") was found in the working tree, was not in any commit, and the owner confirmed he did not write it; it was removed. Do not re-add characterising copy he has not written.
- The main navigation links to an "Experience" item whose route does not exist yet; whether an Experience/work-history surface gets built is an open decision.
- There is no written bio, no stated years of experience, and no stated current employer anywhere on the site — these are undecided, not hidden.
- Static hosting on GitHub Pages: no server, hash-based routing, client-only.

## Brand Commitments

- Name: **Federico Landorno**. Role stated on the site: "UX Designer". The document title is `Federico Landorno — UX Designer` (one source: `src/lib/title.ts`; `index.html` carries its own copy) — it states the role because the site is compared in a row of browser tabs.
- Voice in the existing copy is direct, concrete, and lightly wry — e.g. the contact headline "Let's make the next boring interface less boring." Keep claims specific and unembellished.
- Contact handles, binding: `linkedin.com/in/federicolandorno`, `read.cv/federicolandorno`.
- **No email address anywhere on the site, and no `mailto:` link.** The owner decided this on 2026-11-02: the portfolio is sent as an attachment to job applications, so the recipient already holds the address, and publishing it only exposes it to scrapers. "Get in touch" points to LinkedIn. Do not reintroduce an email, in copy, in a link, in structured data, or in a contact form.

## Evidence on Hand

All company names and metrics below are cleared by the owner for public use and must be preserved accurately, not rounded away or fabricated beyond what is listed.

- **Net4Market** (B2B SaaS, design system): 600+ disconnected files consolidated to a single source of truth; three-layer token architecture; WCAG 2.1 baseline; table component and responsive behavior documented.
- **Yoga** (B2B2C insurtech platform): time to issue a policy cut from 45 to 3 minutes; manual data entry reduced from 11–111 fields to 1 field for existing customers; onboarding/training time reduced.
- **Electrolux** (UX research, smart-home appliances): a research study that recommended deprioritizing home-screen widgets in favor of voice/ambient interaction; central learning "user behavior beats user intentions."
- Visual assets in `src/assets/` (product screens, logos, imagery) for each case study.
- Absences future work must not fabricate: no testimonials, no client quotes, no stated experience level, no current-employer claim, no written personal bio.

## Product Principles

1. **Earn the interview fast.** A recruiter skims and compares; the work and its impact must register in the first viewport of every surface.
2. **Lead with outcomes, not screenshots.** Every case study carries a quantified before/after as its spine.
3. **Show the system, not just the artifact.** The throughline across the work is scalable thinking — tokens, architecture, roadmap reasoning — not one-off screens.
4. **Evidence over opinion.** Design decisions, including the decision not to build something, are defended with data.
5. **Say real things plainly.** Copy stays specific and unembellished; never invent proof the work doesn't have.

## Accessibility & Inclusion

No narrower product-specific mandate was established, but the incumbent build shows clear intent to be accessible (skip link, ARIA labels, a WCAG 2.1 baseline cited in a case study). Future work should hold that line — keyboard-operable, visible focus, reduced-motion respected given the heavy GSAP motion — rather than regress it.
