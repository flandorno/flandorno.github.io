import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useReveals } from "../lib/useReveals";
import { BASE_TITLE } from "../lib/title";
import { LINKEDIN } from "../lib/contact";
import LinkedInIcon from "./LinkedInIcon";

type Props = {
  title: string;
  /** Client and discipline. Sits under the title — never as a label above it. */
  meta: string;
  docTitle: string;
  children: ReactNode;
};

export default function CaseLayout({ title, meta, docTitle, children }: Props) {
  const root = useRef<HTMLDivElement>(null);
  useReveals(root);

  useEffect(() => {
    document.title = docTitle;
    return () => {
      document.title = BASE_TITLE;
    };
  }, [docTitle]);

  return (
    <div className="fl-read" ref={root}>
      <nav className="fl-read-nav" aria-label="Site">
        <Link to="/" className="fl-back">Federico Landorno</Link>
      </nav>

      <header className="fl-read-head">
        <h1 data-reveal>{title}</h1>
        <p className="fl-read-meta" data-reveal data-reveal-delay="80">{meta}</p>
      </header>

      {children}

      <footer className="fl-read-end">
        <Link to="/" className="fl-link fl-tap">All work</Link>
        <a
          className="fl-icon-link"
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get in touch on LinkedIn (opens in a new tab)"
        >
          <LinkedInIcon size={22} />
        </a>
      </footer>
    </div>
  );
}
