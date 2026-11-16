# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: a hiring manager, recruiter, or design lead evaluating Federico Landorno for a full-time UX design role. They arrive from a job application, a referral, or a LinkedIn link, usually skim quickly, and often compare several portfolios in one sitting. Their job is to decide whether Federico is worth a conversation — and the action the site must earn is an outbound contact (email or LinkedIn) inviting him to interview.

## Product Purpose

Federico Landorno's personal UX design portfolio. It exists to win interviews for full-time UX design roles by showing his work and how he thinks. Success is a qualified hiring contact reaching out after visiting; the case studies are the unit that does the convincing.

## Positioning

What Federico wants to be remembered for, confirmed by the owner:

- **Systems thinker** — designs that scale: from UI kit to shared language, token architectures, coherence across multiple apps (the Net4Market throughline).
- **Measurable impact** — outcomes quantified as before/after on business and efficiency, not just screens (45→3 min; 600+ files → one).
- **Product strategy** — reasons from the business problem and roadmap priority, not UI alone.

Research honesty (defending or killing a decision on evidence, as in Electrolux) is present as supporting evidence of how he works, not a headline claim.

## Operating Context

Experienced as a website on desktop and mobile web. A hash-routed single-page app deployed to GitHub Pages (static hosting) at flandorno.github.io. The evaluation ritual is: land on the home page, move through the four case-study scenes, open one or two case studies, then decide whether to make contact. Case studies are read top-to-bottom; the home page is scanned.

## Capabilities and Constraints

- Live surfaces: the home page — six scenes: a landing, four case-study scenes and a contact scene — and four case-study pages: Net4Market design system (`/n4m`), Net4Market design process (`/n4m-process`), Yoga (`/d4next`), Electrolux (`/electrolux`). Net4Market was one case study until 2026-11-14, when the owner split it: the two stories were sharing a page and each was told twice. The whole site was rebuilt as a mosaic of tiles and screens on 2026-11-15 from the owner's mockups; see DESIGN.md.
- The About page is live at `/about`, named by the fixed row. **It still has no bio.** A paragraph characterising how Federico works was found in the working tree in early November, was in no commit, and the owner confirmed he did not write it; it was removed. Do not re-add characterising copy he has not written. The page carries only cleared facts.
- There is no Experience page and nothing links to one.
- **Italian.** The site has an EN / ITA switch (owner's decision, 2026-11-14). Interface labels are translated. The Italian of the case studies, About, the case titles and the closing line was drafted by the AI pair and is **not approved**: it shows on the dev server only (`ITALIAN_CONTENT_READY` in `src/i18n/index.ts`). Do not publish it until the owner has reviewed it.
- **Resume.** The landing and the contact scene have a Resume tile that opens `public/federico-landorno-cv.pdf` in a new tab. The owner supplies that file; until it exists the tile is not a link.
- There is no written bio and no stated years of experience on the site — these are undecided, not hidden.
- Static hosting on GitHub Pages: no server, hash-based routing, client-only.

## Brand Commitments

- Name: **Federico Landorno**. Role stated on the site: "Product Designer" — changed from "UX Designer" on 2026-11-05 at the owner's instruction, in `src/lib/title.ts`, the `<title>`, `og:title` and `twitter:title`. The document title is `Federico Landorno — Product Designer` (one source: `src/lib/title.ts`; `index.html` carries its own copy) — it states the role because the site is compared in a row of browser tabs.
- Voice in the existing copy is direct, concrete, and lightly wry — e.g. the contact headline "Let's make the next boring interface less boring." Keep claims specific and unembellished.
- Contact handle, binding: `www.linkedin.com/in/flandorno/`. There is no Read.cv profile (owner, 2026-11-15); do not link one. It lives in `src/lib/contact.ts` and nowhere else; the handle was wrong in three hand-written copies before that.
- **No email address anywhere on the site, and no `mailto:` link.** The owner decided this on 2026-11-02: the portfolio is sent as an attachment to job applications, so the recipient already holds the address, and publishing it only exposes it to scrapers. "Get in touch" points to LinkedIn. Do not reintroduce an email, in copy, in a link, in structured data, or in a contact form.

## Evidence on Hand

All company names and metrics below are cleared by the owner for public use and must be preserved accurately, not rounded away or fabricated beyond what is listed.

- **Net4Market** (B2B SaaS, design system): 600+ disconnected files consolidated to a single source of truth; three-layer token architecture; WCAG 2.1 baseline; table component and responsive behavior documented.
- **Yoga** (B2B2C insurtech platform): time to issue a policy cut from 45 to 3 minutes; manual data entry reduced from 11–111 fields to 1 field for existing customers; onboarding/training time reduced.
- **Electrolux** (UX research, smart-home appliances): a research study that recommended deprioritizing home-screen widgets in favor of voice/ambient interaction; central learning "user behavior beats user intentions."
- **Confirmed by the owner on 2026-11-14**, when the case studies were rewritten. These are the sources behind the claims; keep each claim attributed the way it is here.
  - Net4Market: he proposed and led both the design system and the process change; the other two designers and Riccardo (frontend) contributed. He joined on 3 June 2025 and still works there; the case studies state the period as "June 2025 to present" (he supplied the dates for that purpose, which supersedes the older "no current-employer claim" note for these two pages only). The suite and its UI kit predate him: the mistakes the case study describes were made before he arrived, and the copy must not read as if he designed the old suite. The design system is in production, but token changes from Figma land in a test environment first, never straight in production. The "one month" figure is the time to build a page with a table matching the existing ones, not the table component itself. Files: there is not one single file — each app has a folder with one file per feature area holding the current screens, and per-task files are kept beside them as history; work always starts from the current version. Say "task", not "user story". Presenting the solution to the whole team involved in the task is a fixed step. The designer reviews the build before release: with QA, that the feature is implemented correctly; whether the new tokens are used; and accessibility (owner, 2026-11-16). Observed, not measured: less rework, faster starts on a story, a new colleague onboarded without relying on others' memory.
  - Yoga: he was D4NEXT's first designer and later led the designers who joined. DAS was the first client; Unipol, Generali and Zurich followed. The times per policy (15–45 minutes before, 1–10 with an average of 3 after) were reported by agents and insurers, not timed. "No errors" means no insurer sent a policy back for correction in four years.
  - Electrolux: there was no survey. The "yes" to widgets was said out loud by interviewees and test participants. Field test usage, in his words: at most 1–2 uses a week for 3–5 of the 20 participants; the others 0 or at most 1.
- Visual assets in `src/assets/` (product screens, logos, imagery) for each case study.
- **Cleared by the owner on 2026-11-05**, from his own wording, and usable on the site: **product designer**, **5+ years**, **0-to-1 products**, an end-to-end span of **research and ideation through design systems and developer handoff**, a **background in computer science**, and that he **guides designers**, **shapes scalable systems** and **works side by side with developers**. Experience level was previously listed here as an absence; it is now a stated fact and no longer needs avoiding.
- **The positioning on the site, in the owner's final wording:** “Product Designer bridging users, business and engineering.” It replaced a version built around 5+ years and 0-to-1, which he rejected. Those two remain true and cleared, they are simply not what the hero leads with — the claim is the bridging, and the computer-science background in the paragraph below is the evidence for the engineering third of it. The hero and the `description` / `og:description` / `twitter:description` all say this; change them together or not at all.
- **Superseded on 2026-11-14:** the landing now names three sectors — "Experience in INSURTECH / IOT / E-PROCUREMENT", cycling on a screen. It is in the owner's own mockup, and when asked directly whether it overrides the rule below he said it does. The sectors are his; do not add others. The earlier rule, kept for the record: the owner had asked that the site **not name a market segment**. His own bio says "B2B products" and the hero copy used to say "working in B2B product"; both are deliberately dropped. The reason, in his words: the portfolio exists to convince someone to hire him, and naming a focus area narrows where he can be considered. Case studies may still describe their own clients accurately — that is evidence, not positioning.
- Absences future work must still not fabricate: no testimonials, no client quotes, no current-employer claim, no written personal bio.

## Product Principles

1. **Earn the interview fast.** A recruiter skims and compares; the work and its impact must register in the first viewport of every surface.
2. **Lead with outcomes, not screenshots.** Every case study carries a quantified before/after as its spine.
3. **Show the system, not just the artifact.** The throughline across the work is scalable thinking — tokens, architecture, roadmap reasoning — not one-off screens.
4. **Evidence over opinion.** Design decisions, including the decision not to build something, are defended with data.
5. **Say real things plainly.** Copy stays specific and unembellished; never invent proof the work doesn't have.

## Accessibility & Inclusion

No narrower product-specific mandate was established, but the incumbent build shows clear intent to be accessible (skip link, ARIA labels, a WCAG 2.1 baseline cited in a case study). Future work should hold that line — keyboard-operable, visible focus, and reduced motion respected: the site uses GSAP, and both the system setting and the Animation tile turn every animation off and the home page into a normal scrolling page — rather than regress it.
