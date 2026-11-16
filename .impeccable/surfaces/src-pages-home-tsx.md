---
version: 2
slug: "src-pages-home-tsx"
primary_target: "src/pages/Home.tsx"
related_targets: ["src/home/Landing.tsx", "src/home/cases.tsx", "src/home/FooterScene.tsx", "src/home/tiles.tsx"]
---

# Surface brief — Home (`/`)

Scope: the portfolio home page, the lead surface. Languages: English, with Italian behind a review gate.

Audience & job: a hiring manager or design lead skimming portfolios, deciding in seconds whether to interview. Action to earn: an outbound contact. Proof: the real metrics in the four case studies.

Version 1 of this brief described a dark page with one generative canvas and a 2×2 of case cards. The owner replaced that direction on 2026-11-14 with his own mockups; this is the brief for what was built from them.

## Direction contract

THESIS: The page is the face of a physical device — a mosaic of tiles and dot-matrix screens on a grid computed for the screen it is on. The owner's idea and the owner's mockups.

OWN-WORLD: Black ground in both themes, white or graphite tiles, four grey tones, one orange (#FF5F12). Doto for names, claims and labels; Atkinson Hyperlegible Next for reading. A 4px gap is the only line.

STORY: The landing states the name and the role on a screen, with the sectors cycling beside it and the site's own controls as tiles: animation, sound, language, theme, resume, and a battery that is an easter egg. Scrolling does not scroll: each gesture replaces the scene, tiles sliding out to the left and in from the right. Four case-study scenes follow, each with its claim on a screen and one orange tile that opens the case study. The last scene is contact.

FIRST VIEWPORT: The fixed row and the landing, 8×5 on a 14" MacBook Pro.

Signature interaction & motion grammar: the scene change. Screens switch off, tiles move lane by lane with uneven starts and never overlap, screens switch on. Different every time. One switch turns all of it off, and then the six scenes are a plain scrolling page.

## Carried constraints (pins)

- Owner's mockups, 2026-11-14: the landing, the Net4Market design-system scene and the Yoga scene. The Net4Market process scene, the Electrolux scene and the contact scene were composed on the same pattern and are awaiting his review.
- 2026-11-14, owner: the landing names three sectors (INSURTECH, IOT, E-PROCUREMENT). This overrides the earlier rule against naming a market segment.
- 2026-11-15, owner: one gesture moves one scene; tiles of a row start unevenly rather than as one rigid bar; the pattern must not repeat.
- 2026-11-15, owner: a case scene does not need a subtitle. The Net4Market design-system scene has none.
- On orange, text is black. The arrow on the orange tile is white, as a graphic.
- No email anywhere. Contact is LinkedIn only.
- Preserve: the case studies' text and metrics, and the contact handles.

## Unresolved decisions

- The owner's review of the three scenes he did not draw.
- The Yoga scene shows the bare screenshot; the mockup had a laptop render that is not in the repo.
- The resume PDF is not in the repo yet.
- The Italian of the case titles and the closing line is a draft.
- The phone and tablet layouts were decided without the owner and are his to revise.
