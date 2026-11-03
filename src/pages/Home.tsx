import { useRef } from "react";
import { Link } from "react-router-dom";
import FieldCanvas from "../components/FieldCanvas";
import SegmentField from "../components/SegmentField";
import { useReveals } from "../lib/useReveals";
import { scrollToSection } from "../lib/scrollToSection";

/* No email on the page: the portfolio travels as an attachment to applications,
   so the recipient already has the address. LinkedIn carries the contact. */
const LINKEDIN = "https://linkedin.com/in/federicolandorno";

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

  return (
    <div className="fl" ref={root}>
      <header className="fl-top">
        <span className="fl-mark">Federico Landorno</span>
        <nav className="fl-nav" aria-label="Sections">
          <button type="button" onClick={() => scrollToSection("work")}>Work</button>
        </nav>
      </header>

      {/* ── Hero: statement + the one ambitious moment ─────────────────────── */}
      <section className="fl-hero" aria-label="Introduction">
        <div className="fl-hero-copy">
          <h1 data-reveal>I design systems you can measure.</h1>
          <p className="fl-lead" data-reveal data-reveal-delay="90">
            UX designer working across product strategy, design systems and research —
            rarely alone in the file. Three case studies below, each with the numbers
            before and after.
          </p>
          <div className="fl-actions" data-reveal data-reveal-delay="180">
            <a className="fl-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Get in touch</a>
            <button className="fl-link" type="button" onClick={() => scrollToSection("work")}>
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
              <Link to={w.to} className="fl-case">
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
      <footer className="fl-end" aria-label="Contact">
        <h2 data-reveal>Let’s make the next boring interface less boring.</h2>
        {/* The filled action belongs here as well as in the hero. The hero offers it
            before the visitor has seen any evidence; this is the moment after all of
            it, where someone convinced decides to act — and it used to carry the
            weakest control on the page, a 58px text link. The two are 2.1 screens
            apart and never co-visible, so "one filled violet action per view" holds. */}
        <div className="fl-end-links" data-reveal data-reveal-delay="90">
          <a className="fl-btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Get in touch</a>
          <a href="https://read.cv/federicolandorno" target="_blank" rel="noopener noreferrer">Read.cv</a>
        </div>
      </footer>
    </div>
  );
}
