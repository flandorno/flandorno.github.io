import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import FieldCanvas from "../components/FieldCanvas";
import SegmentField from "../components/SegmentField";
import { useReveals } from "../lib/useReveals";
import { scrollToSection } from "../lib/scrollToSection";
import { LINKEDIN, READCV } from "../lib/contact";
import LinkedInIcon from "../components/LinkedInIcon";

/* No email on the page: the portfolio travels as an attachment to applications,
   so the recipient already has the address. LinkedIn carries the contact. */

/* The three case studies. Text and metrics preserved verbatim. */
const WORK = [
  {
    to: "/n4m",
    client: "Net4Market",
    title: "From UI kit to shared language",
    metric: "600+",
    metricNote: "disconnected files → one source of truth",
    tags: "Design system · B2B SaaS",
    seed: 11,
  },
  {
    to: "/d4next",
    client: "Yoga",
    title: "From 45 to 3 minutes to issue a policy",
    metric: "45 → 3",
    metricNote: "minutes to issue a policy",
    tags: "Insurtech · B2B2C",
    seed: 29,
  },
  {
    to: "/electrolux",
    client: "Electrolux",
    title: "When surveys said “yes” but behavior said “no”",
    metric: "0",
    metricNote: "features shipped — the research said don’t",
    tags: "Research · Smart home",
    seed: 47,
  },
];

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
            {/* One heading, two weights. A smaller line ABOVE an h1 is a kicker,
                which the craft floor bans outright; a smaller line that is part
                of the h1 is not a label for the heading — it is the heading. */}
            <span className="fl-greet">Hi, I&rsquo;m <b>Federico Landorno</b>.</span>{" "}
            I design the decisions a team makes once.
          </h1>
          <p className="fl-lead" data-reveal data-reveal-delay="90">
            UX designer working in B2B product: design systems, platform strategy,
            and the research that decides what not to build.
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
            <button className="fl-link fl-tap" type="button" onClick={() => scrollToSection("work")}>
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
          return only the hero claim and the closing joke — the three case studies, the
          whole argument, were absent from the outline. It is visually hidden because
          this world carries no section chrome; the three titles announce the section. */}
      <section id="work" className="fl-work" tabIndex={-1}>
        <h2 className="sr-only">Selected work</h2>
        <ul className="fl-list">
          {WORK.map((w, i) => (
            <li key={w.to} data-reveal data-reveal-delay={String(i * 80)}>
              {/* The link's name is the destination, not its contents. Without this the
                  accessible name was the whole row concatenated — 19 to 20 words with
                  no separators ("shared language600+ disconnected files…") — which is
                  what a screen reader reads out in a list of links. */}
              <Link to={w.to} className="fl-case" aria-label={`${w.title} — ${w.client} case study`}>
                <span className="fl-frame" aria-hidden="true">
                  <SegmentField seed={w.seed} />
                </span>
                <div className="fl-case-body">
                  <h3 className="fl-title">{w.title}</h3>
                  <span className="fl-metric num">
                    <b>{w.metric}</b> {w.metricNote}
                  </span>
                  <span className="fl-meta">{w.client} · {w.tags}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────────── */}
      <footer id="contact" className="fl-end" aria-label="Contact" tabIndex={-1}>
        <h2 data-reveal>Three systems above. Happy to talk through any of them.</h2>
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
          <a className="fl-tap" href={READCV} target="_blank" rel="noopener noreferrer">
            Read.cv<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
