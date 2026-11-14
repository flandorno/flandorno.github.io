import { useEffect, useRef, type ReactNode } from "react";
import { useReveals } from "../lib/useReveals";
import { BASE_TITLE } from "../lib/title";
import { LINKEDIN } from "../lib/contact";
import LinkedInIcon from "./LinkedInIcon";

type Props = {
  title: string;
  /** Client and discipline. Sits under the title — never as a label above it. */
  meta: string;
  docTitle: string;
  /** Role, team, period, outcome: what a recruiter looks for before reading.
   *  Short label, one plain sentence of value. */
  facts?: { label: string; value: string }[];
  children: ReactNode;
};

export default function CaseLayout({ title, meta, docTitle, facts, children }: Props) {
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
      <header className="fl-read-head">
        <h1 data-reveal>{title}</h1>
        <p className="fl-read-meta" data-reveal data-reveal-delay="80">{meta}</p>
        {facts?.length ? (
          <dl className="fl-read-facts" data-reveal data-reveal-delay="160">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </header>

      {children}

      <footer id="contact" className="fl-read-end" tabIndex={-1}>
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
