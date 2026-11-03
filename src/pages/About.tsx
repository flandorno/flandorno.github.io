import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useReveals } from "../lib/useReveals";
import { BASE_TITLE, pageTitle } from "../lib/title";
import { LINKEDIN, READCV } from "../lib/contact";

/* No email on the page — see the note in Home.tsx. */

export default function About() {
  const root = useRef<HTMLDivElement>(null);
  useReveals(root);

  useEffect(() => {
    document.title = pageTitle("About");
    return () => {
      document.title = BASE_TITLE;
    };
  }, []);

  return (
    <div className="fl-read" ref={root}>
      <Link to="/" className="fl-back">Federico Landorno</Link>

      <header className="fl-read-head">
        <h1 data-reveal>About</h1>
        <p className="fl-read-meta" data-reveal data-reveal-delay="80">UX Designer</p>
      </header>

      <section data-reveal>
        {/* No characterisation of how Federico works beyond what PRODUCT.md clears.
            A claim about his practice that he did not write is not his to publish. */}
        <p>
          I design systems you can measure. My work sits across product strategy, design systems
          and research.
        </p>
        <p>
          Three case studies cover most of what I do: a{" "}
          <Link to="/n4m" className="fl-inline">design system</Link> that replaced 600+ disconnected
          files with one source of truth, an{" "}
          <Link to="/d4next" className="fl-inline">insurance platform</Link> where issuing a policy
          went from 45 minutes to 3, and{" "}
          <Link to="/electrolux" className="fl-inline">research</Link> that argued against building
          the feature everyone wanted.
        </p>
      </section>

      <footer className="fl-read-end">
        <a className="fl-link fl-tap" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
        <a className="fl-link fl-tap" href={READCV} target="_blank" rel="noopener noreferrer">Read.cv<span className="sr-only"> (opens in a new tab)</span></a>
      </footer>
    </div>
  );
}
