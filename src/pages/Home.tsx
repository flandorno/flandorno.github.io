import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import FieldCanvas from "../components/FieldCanvas";
import { useReveals } from "../lib/useReveals";
import { scrollToSection } from "../lib/scrollToSection";
import { LINKEDIN, READCV } from "../lib/contact";
import LinkedInIcon from "../components/LinkedInIcon";
import ArrowIcon from "../components/ArrowIcon";
import yogaShot from "../assets/yoga/yoga-quotation-error.png";
import eluxWidget from "../assets/elux/device-widget.png";
import eluxRobotBlue from "../assets/elux/robot-vacuum-cleaner.png";
import eluxRobotGold from "../assets/elux/robot-vacuum-cleaner2.png";

/* No email on the page: the portfolio travels as an attachment to applications,
   so the recipient already has the address. LinkedIn carries the contact. */

/* The four case studies, in a plain 2×2.

   Each one leads with a large light panel carrying the actual work, with the
   client name and the claim beneath it — the composition the owner pinned from
   a reference on 2026-11-06. `panel` names which composition fills it; the
   panels are not interchangeable, so they are written out rather than mapped
   from a generic image field.

   Net4Market was one wide `lead` card until 2026-11-14, when its case study
   was split in two (the design system, and how the design team works) and the
   owner chose four equal cards, knowing the whole home UI is due a revision.
   The order keeps the two Net4Market cards off the same row. Both use the
   `n4m` panel, which is still empty — see Panel below.

   `keywords` are an index of what each case study contains, every term drawn
   from PRODUCT.md's cleared evidence. Nothing invented: "AI" was offered as an
   example and is deliberately absent, because no project here has AI evidence
   behind it. */
const WORK = [
  {
    to: "/n4m",
    client: "Net4Market",
    title: "From UI kit to shared language",
    keywords: ["Design System", "Design Tokens", "B2B SaaS", "Accessibility"],
    panel: "n4m",
  },
  {
    to: "/d4next",
    client: "Yoga",
    title: "From 45 to 3 minutes to issue a policy",
    keywords: ["Insurtech", "B2B2C", "Workflow", "Onboarding", "Data Entry"],
    panel: "yoga",
  },
  {
    to: "/n4m-process",
    client: "Net4Market",
    title: "600+ files, one source of truth",
    keywords: ["Design Process", "Governance", "Design Review", "Team Workflow"],
    panel: "n4m",
  },
  {
    to: "/electrolux",
    client: "Electrolux",
    title: "They said yes to widgets, then didn\u2019t use them",
    keywords: [
      "UX Research",
      "Smart Home",
      "Behavioral Data",
      "Voice & Ambient",
    ],
    panel: "elux",
  },
];

/* The panels. Each is absolutely positioned inside its frame and allowed to run
   off the bottom edge, which is what keeps them reading as a window onto the
   work rather than as a screenshot centred in a box. All of it is decorative:
   the meaning is in the title and the claim underneath, so the whole layer is
   hidden from assistive technology and the images carry empty alt text. */
function Panel({ kind }: { kind: string }) {
  /* EMPTY ON PURPOSE. The owner cleared this panel on 2026-11-06 and is
     deciding what belongs in it. It held a design-system exhibit composed from
     Net4Market's real tokens; that component is parked, unreferenced, at
     src/components/N4mSystemPanel.tsx. The slot keeps its ratio so the space
     being designed for is the real one. Do not ship the home page like this. */
  if (kind === "n4m") return null;

  /* One screenshot, centred, with the same inset zoom the Electrolux phone
     gets. The owner supplied it on 2026-11-08 and replaced the two-crop
     composition with it.

     It needs no crop box. The two files it replaced were 896×320 presentation
     renders carrying their own dark navy backdrop, so each had to sit in a box
     whose aspect ratio WAS the crop, with `object-fit: cover` pinned to the
     edge worth keeping. This one is the interface edge to edge, 1512×982, and
     it is also the right frame of the story: the quote screen showing its
     validation errors, which is what the 45→3 minutes was won on. */
  if (kind === "yoga")
    return (
      <span className="fl-art" aria-hidden="true">
        <img
          className="fl-yoga-shot"
          src={yogaShot}
          alt=""
          loading="lazy"
          decoding="async"
          width={1512}
          height={982}
        />
      </span>
    );

  /* The owner's own composition, supplied as a reference image on 2026-11-08:
     the phone upright and centred with a robot behind it and a robot in front.

     DOM order IS the stacking order — gold, phone, blue — so no z-index is
     needed and none should be added. The phone is `device-widget.png`, and
     that choice is not arbitrary: it is the home-screen widget, the literal
     subject of this case study and the thing the research said not to ship.
     Both robots are transparent PNGs, so the panel's gradient is their ground.

     The blue robot used to be wrapped in a span, because it travelled a curve
     on hover and a single transform interpolates in a straight line. The owner
     cut that movement on 2026-11-08 — it now only rotates — so the wrapper
     went with it. Three plain images, no nesting. */
  return (
    <span className="fl-art fl-art-elux" aria-hidden="true">
      <img
        className="fl-elux-gold"
        src={eluxRobotGold}
        alt=""
        loading="lazy"
        decoding="async"
        width={602}
        height={500}
      />
      <img
        className="fl-elux-phone"
        src={eluxWidget}
        alt=""
        loading="lazy"
        decoding="async"
        width={407}
        height={858}
      />
      <img
        className="fl-elux-blue"
        src={eluxRobotBlue}
        alt=""
        loading="lazy"
        decoding="async"
        width={602}
        height={500}
      />
    </span>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  useReveals(root);

  /* "My work" from another surface navigates here and asks for the list. The
     jump waits a frame so it lands after ScrollToTop has reset the position,
     rather than racing it. */
  const { state } = useLocation() as { state: { scrollTo?: string } | null };
  useEffect(() => {
    if (state?.scrollTo !== "work") return;
    const id = window.requestAnimationFrame(() => scrollToSection("work"));
    return () => window.cancelAnimationFrame(id);
  }, [state]);

  return (
    <div className="fl" ref={root}>
      {/* ── Hero: statement + the one ambitious moment ─────────────────────── */}
      <section className="fl-hero" aria-label="Introduction">
        <div className="fl-hero-copy">
          <h1 data-reveal>
            {/* One heading, two sizes. A smaller line ABOVE an h1 is a kicker,
                which the craft floor bans outright; a smaller line that is part
                of the h1 is not a label for the heading — it is the heading.

                The wording is the owner's, exactly as supplied, including the
                size he marked: the greeting sits at head size and the display
                line carries the positioning. Set whole at display size the two
                sentences do not fit in any column on any screen, so the break
                is not optional; what is chosen is only where it falls. Here it
                falls where he put it — after the greeting, so the big type
                opens on "Product Designer" rather than on "Ciao".

                The display size itself is solved against this line: see
                "The display size is set by the line count" in DESIGN.md.
                Lengthening this sentence changes the type ramp — the ramp is
                tuned to keep it at three lines from 1280 up.

                "Ciao" is not a typo. It is the one Italian word on an English
                site and the only thing in the hero that could not have been
                written by any other applicant. */}
            <span className="fl-greet">
              Ciao, I&rsquo;m <b>Federico Landorno</b>!
            </span>{" "}
            Product Designer bridging users, business and engineering.
          </h1>
          {/* The owner's own second sentence, verbatim. The computer-science
              background is the evidence under "engineering" in the line above,
              which is why it leads the paragraph rather than sitting in About. */}
          <p className="fl-lead" data-reveal data-reveal-delay="90">
            With a background in computer science, I guide designers, shape
            scalable systems and work side by side with developers to ship
            complex solutions.
          </p>
          <div className="fl-actions" data-reveal data-reveal-delay="180">
            <a
              className="fl-btn fl-btn-icon"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get in touch on LinkedIn (opens in a new tab)"
            >
              <LinkedInIcon />
            </a>
            <button
              className="fl-link fl-tap"
              type="button"
              onClick={() => scrollToSection("work")}
            >
              See the work
            </button>
          </div>
        </div>

        <div className="fl-hero-art">
          <FieldCanvas />
        </div>
      </section>

      {/* ── Work ───────────────────────────────────────────────────────────── */}
      {/* The heading is real, not an aria-label: a screen-reader heading scan used to
          return only the hero claim and the closing joke — the case studies, the
          whole argument, were absent from the outline. It is visually hidden because
          this world carries no section chrome; the case titles announce the section. */}
      <section id="work" className="fl-work" tabIndex={-1}>
        <h2 className="sr-only">Selected work</h2>
        <ul className="fl-list">
          {WORK.map((w, i) => (
            <li
              key={w.to}
              data-reveal
              data-reveal-delay={String(i * 80)}
            >
              {/* The link’s name is the destination, not its contents. Without
                  this the accessible name was the whole row concatenated — 19 to
                  20 words with no separators — which is what a screen reader
                  reads out in a list of links. */}
              <Link
                to={w.to}
                className="fl-case"
                aria-label={`${w.title} — ${w.client} case study`}
              >
                <span className={`fl-panel fl-panel-${w.panel}`}>
                  <Panel kind={w.panel} />
                </span>
                {/* Client first and large, the claim under it. The client name
                    is the heading because it is what a recruiter recognises in
                    a scan — "Electrolux" does work that no sentence can — and
                    the claim is the line that earns the click. Both are inside
                    the band, so nothing sits ABOVE a heading. */}
                <h3 className="fl-title">
                  {w.client}
                  <ArrowIcon />
                </h3>
                <span className="fl-claim">{w.title}</span>
                {/* Plain text, not outlined chips. The boxed-tag version of this
                    line was built first and the owner read the result as
                    corporate — correctly: a grid of hairline rectangles is
                    enterprise-dashboard furniture, and it competed with the
                    panel above it for the same attention. */}
                <span className="fl-keys">{w.keywords.join(" · ")}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="fl-end"
        aria-label="Contact"
        tabIndex={-1}
      >
        <h2 data-reveal>
          Four case studies above. Happy to talk through any of them.
        </h2>
        {/* The filled action belongs here as well as in the hero. The hero offers it
            before the visitor has seen any evidence; this is the moment after all of
            it, where someone convinced decides to act — and it used to carry the
            weakest control on the page, a 58px text link. The two are 2.1 screens
            apart and never co-visible, so "one filled accent action per view" holds. */}
        <div className="fl-end-links" data-reveal data-reveal-delay="90">
          <a
            className="fl-btn fl-btn-icon"
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get in touch on LinkedIn (opens in a new tab)"
          >
            <LinkedInIcon />
          </a>
          <a
            className="fl-tap"
            href={READCV}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read.cv<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
