---
version: 1
slug: "src-pages-home-tsx"
primary_target: "src/pages/Home.tsx"
related_targets: []
---

# Surface brief — Home (`/`)

Scope: the portfolio home page, the lead surface. Visitor mode: **Experience**. Language: English.

Audience & job: a hiring manager / design lead skimming portfolios, deciding in seconds whether to interview. Action to earn: an outbound contact. Proof: the real metrics in the three case studies (Net4Market 600+ files → one; Yoga 45 → 3 min; Electrolux's research verdict). The three case studies' textual content is preserved verbatim; everything visual from the previous two worlds is discarded.

## Direction contract

THESIS: A sober personal portfolio that opens with one ambitious generative moment and then gets out of the way, letting the work and its numbers carry the rest. It borrows its references' typographic confidence and restraint (kigo.studio's headline-plus-artwork composition, roofstudio.tv's five-step type discipline and canvas craft, onlines.com.ar's white-ground restraint) without their agency swagger — this is a person seeking a role, not a studio selling services. It refuses the equal-rounded-card portfolio grid and the dark scroll-effects agency site.

OWN-WORLD: White ground with quiet tonal steps, black ink, and exactly one accent — electric violet #5B21E0 — held to roughly a tenth of any screen. Light is the default; a full dark mode inverts to near-black with a lifted violet. Type is a single variable grotesque, Geist, with Geist Mono reserved for metrics, labels, and data; a disciplined five-step modular scale (display / heading / lead / body / label), since the references' best-behaved page uses five sizes and the worst uses twenty. Device frames hold abstract generative fills drawn from the same visual family as the hero canvas. Banned here: gradients as decoration, glass and backdrop-blur, rounded-card grids, uppercase eyebrows, drop-shadow lift, and any second accent colour.

STORY: The visitor meets one arresting generative artwork beside a short, plain statement of what Federico does; scrolls a compact page; reads three case studies as device-framed entries carrying their real before/after numbers; and contacts him.

FIRST VIEWPORT: Headline plus a large abstract generative artwork — the kigo.studio composition, where the artwork occupies the dominant share of the screen and the type holds the other side. Under 150 words on the screen. Minimal navigation and one unmistakable contact action. The artwork is a live generative canvas, not a picture of one.

FORM: Brief-pinned by the user from three named references; no concept-seed roll, because a user- or brief-pinned direction beats the roll. Composition from kigo.studio, type discipline and canvas technique from roofstudio.tv, ground and restraint from onlines.com.ar. Replaces the previous "The Drawing" contract (seed:18cb69ea9a6a0812), which is void.

Signature interaction & motion grammar: exactly ONE ambitious moment — the hero's generative canvas, alive and responsive to the pointer. Everything below it is sober, sequenced reveals, orchestrated once rather than scattered. This is the resolution the user chose for the tension between "sober portfolio" and maximum motion ambition, and it is what keeps the compact scroll viable. prefers-reduced-motion: the canvas renders a single static composition and nothing animates; every reveal resolves to its final state.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Carried constraints (pins)

- Sober personal portfolio, not a studio brand. Target stays the hiring manager. English.
- Palette: white/black + #5B21E0 only. Light default **and** a full dark mode. Responsive from 360px.
- Scroll compact (leaning 3–5 screens), not the references' 10–12.
- Case-study device frames carry abstract generative fills for now; the user will supply or commission real mockups later, replacing the fills one-for-one.
- All three case-study pages adopt this same world (home first).
- Preserve: the three case studies' textual content and metrics, and the contact handles.
- Anti-references: the two discarded worlds (cosmic violet/orange; the drafting blueprint), AI-portfolio tropes, anything toy-like, anything corporate-template.

## Unresolved decisions

- The exact generative form of the hero canvas (its geometry and behaviour) — to be designed in the build.
- Dark-mode exact values and the lifted violet — settled at the finish review, when DESIGN.md is rewritten from the built world.
- Real device mockups: user-supplied later.
