---
version: 1
slug: "src-pages-home-tsx"
primary_target: "src/pages/Home.tsx"
related_targets: []
---

# Surface brief — Home (`/`)

Scope: the portfolio home page, the lead surface. Visitor mode: **Experience**. Language: English.

Audience & job: a hiring manager / design lead skimming portfolios, deciding in seconds whether to interview. Action to earn: an outbound contact. Proof: the real metrics in the three case studies (Net4Market 600+ files → one; Yoga 45 → 3 min; Electrolux's research verdict) — which, since 2026-11-06, the home states only through the case titles; the figures themselves live inside the case studies. The three case studies' textual content is preserved verbatim; everything visual from the previous two worlds is discarded.

## Direction contract

THESIS: A sober personal portfolio that opens with one ambitious generative moment and then gets out of the way, letting the work and its numbers carry the rest. It borrows its references' typographic confidence and restraint (kigo.studio's headline-plus-artwork composition, roofstudio.tv's five-step type discipline and canvas craft, onlines.com.ar's white-ground restraint) without their agency swagger — this is a person seeking a role, not a studio selling services. It refuses the equal-rounded-card portfolio grid and the dark scroll-effects agency site.

OWN-WORLD: White ground with quiet tonal steps, black ink, and exactly one accent — electric violet #5B21E0 — held to roughly a tenth of any screen. Light is the default; a full dark mode inverts to near-black with a lifted violet. Type is a single variable grotesque, Geist, with Geist Mono reserved for metrics, labels, and data; a disciplined five-step modular scale (display / heading / lead / body / label), since the references' best-behaved page uses five sizes and the worst uses twenty. Device frames hold abstract generative fills drawn from the same visual family as the hero canvas. Banned here: gradients as decoration, glass and backdrop-blur, rounded-card grids, uppercase eyebrows, drop-shadow lift, and any second accent colour.

STORY: The visitor meets one arresting generative artwork beside a short, plain statement of what Federico does; scrolls a compact page; sees three case studies as large light panels carrying the actual work, each captioned client → / claim / keywords; and contacts him.

FIRST VIEWPORT: Headline plus a large abstract generative artwork — the kigo.studio composition, where the artwork occupies the dominant share of the screen and the type holds the other side. Under 150 words on the screen. Minimal navigation and one unmistakable contact action. The artwork is a live generative canvas, not a picture of one.

FORM: Brief-pinned by the user from three named references; no concept-seed roll, because a user- or brief-pinned direction beats the roll. Composition from kigo.studio, type discipline and canvas technique from roofstudio.tv, ground and restraint from onlines.com.ar. Replaces the previous "The Drawing" contract (seed:18cb69ea9a6a0812), which is void.

Signature interaction & motion grammar: exactly ONE ambitious moment — the hero's generative canvas, alive and responsive to the pointer. Everything below it is sober, sequenced reveals, orchestrated once rather than scattered. This is the resolution the user chose for the tension between "sober portfolio" and maximum motion ambition, and it is what keeps the compact scroll viable. prefers-reduced-motion: the canvas renders a single static composition and nothing animates; every reveal resolves to its final state.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Carried constraints (pins)

- Sober personal portfolio, not a studio brand. Target stays the hiring manager. English.
- **2026-11-06, owner:** the three case entries follow a pinned reference — a large panel carrying the work with the name, an arrow and a one-line descriptor beneath it. The reference is light-ground with per-card tints and ~16px radii; the owner chose to take the **composition** and keep the dark page. A full light world was offered and declined — do not re-propose one. A light panel was then built and also judged wrong: **the panels are dark, one per client in that client’s own sampled colour, as a two-stop tonal gradient within that one hue**, and they **rest dimmed at 0.72**, lighting only on hover. All of these are his decisions and are settled. The gradient is the one authorised exception to the no-decorative-gradient ban and is scoped to these three panels — a second hue, a hue rotation, a mesh or a glow is still out.
- **2026-11-08, owner, with a reference image:** the Electrolux panel is his own composition — `#030712` → `#011E40` bottom-left to top-right, phone upright and centred at a 4rem inset, gold robot behind at 315° and blue in front at −15°, both sized at 0.42 of the phone’s height, and on hover the phone zooms into a 2rem inset while each robot turns 15° clockwise. A curved exit for the blue robot was built and cut by him on the same day.
- **2026-11-08, owner:** the Yoga panel is `yoga-quotation-error.png` alone, centred, with the same inset zoom, on `#1A1723` → `#5A4D78` bottom-left to top-right. Two open items, reported and not corrected: its dark stop measures **1.03** against the page, so that card’s bottom-left corner is invisible; and on a phone the landscape shot in a 1:1 panel comes out 214 × 140 of 342 × 342. Card lighting and movement are soft (0.55–0.6s), not the system’s 0.25s. Two consequences are open and reported, not fixed: his dark stop sits at 1.11 against the page so that card’s bottom-left corner nearly vanishes, and the fixed 4rem inset leaves the scene at 56–73% of the card height against 91% in his reference.
- Palette: white/black + #5B21E0 only. Light default **and** a full dark mode. Responsive from 360px.
- Scroll compact (leaning 3–5 screens), not the references' 10–12.
- ~~Case-study device frames carry abstract generative fills for now; the user will supply or commission real mockups later, replacing the fills one-for-one.~~ **Closed on 2026-11-06.** The 16:10 frame measured 304 × 190 at 1440 and could never have held a legible product screen. It was replaced by a large light panel holding the real screenshots already in `src/assets/` — Yoga’s two renders, cropped off their own dark backdrop, and three Electrolux device shots. Net4Market has no screenshot and gets a panel composed in code from the client’s real design tokens. The pin still stands for the reading surface, where `Figure` is 16:9 at full column width.
- All three case-study pages adopt this same world (home first).
- Preserve: the three case studies' textual content and metrics, and the contact handles.
- Anti-references: the two discarded worlds (cosmic violet/orange; the drafting blueprint), AI-portfolio tropes, anything toy-like, anything corporate-template.

## Unresolved decisions

- The exact generative form of the hero canvas (its geometry and behaviour) — to be designed in the build.
- Dark-mode exact values and the lifted violet — settled at the finish review, when DESIGN.md is rewritten from the built world.
- ~~Real device mockups: user-supplied later.~~ Closed on 2026-11-06 for the home (see above); still open for the case studies’ own figures.
- The keyword sets are a first pass drawn from PRODUCT.md’s cleared evidence; the owner is reviewing the wording.
- **The Net4Market panel is EMPTY and must not ship that way.** The owner cleared it on 2026-11-06 and is deciding what goes in it. `src/assets/n4m/` holds only a logo, so there is no screenshot to fall back on; the code-composed token exhibit that stood there is parked, unreferenced, at `src/components/N4mSystemPanel.tsx`. This is the one open blocker on this surface.
