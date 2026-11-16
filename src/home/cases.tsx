/* The four case-study scenes of the home page. They share one skeleton —
   the counter and tags on the first row, the claim on a screen, a "read more"
   screen and the orange tile that opens the case study — and differ in what
   fills the right-hand side. Scenes 1 and 2 follow the owner's mockups;
   3 and 4 are composed on the same pattern. */
import { useState, type CSSProperties, type ReactNode } from "react";
import { Link } from "react-router-dom";
import Scene from "../grid/Scene";
import ScreenText from "../grid/ScreenText";
import type { Placement, Placer } from "../grid/useGrid";
import { ArrowIcon } from "../grid/icons";
import { useContentLang, useT } from "../i18n";
import yogaShot from "../assets/yoga/yoga-quotation-error.webp";
import eluxWidget from "../assets/elux/device-widget.webp";
import eluxRobotBlue from "../assets/elux/robot-vacuum-cleaner.webp";
import eluxRobotGold from "../assets/elux/robot-vacuum-cleaner2.webp";

type SceneProps = { off?: boolean };

/** Case studies on the home page; scene `n` of the home is case study `n`. */
const CASES = 4;

/* "CASE STUDY" over the numbers 1 2 3 4, the one on show in orange: where the
   visitor is, and a way to any other case in one step. It opens every case
   scene, so it is also what marks where one ends and the next begins when the
   page scrolls (the phone, animations off); there it is a band across the
   whole width. It is kept quiet on purpose — no surface, no arrow — because
   the one loud control of a scene is the orange tile that opens the case.

   Each number is a link that asks the home page for a scene, the same way the
   fixed row does (see Home): on the stage that plays the move, off it the
   page scrolls there. `replace`, so stepping through the cases does not fill
   the history. The current number is a link too, to where the visitor
   already is, so that focus has somewhere to land after a move. */
function Pager({ n, place }: { n: number; place: Placer }) {
  const t = useT().home;
  return (
    <nav className="mx-tile mx-pager mx-label mx-caps" style={place({ l8: [1, 1, 2], l4: [1, 1, 4] })} aria-label={t.caseStudies}>
      <p aria-hidden="true">{t.caseStudy}</p>
      <ol className="mx-pager-list">
        {Array.from({ length: CASES }, (_, i) => i + 1).map((k) => (
          <li key={k}>
            <Link
              to="/"
              state={{ scene: k }}
              replace
              className="mx-pager-n"
              data-pager={k}
              tabIndex={0}
              aria-label={`${t.caseStudy} ${k}`}
              aria-current={k === n ? "step" : undefined}
            >
              <span>{k}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* Labels, claims and subtitles are Federico's own words: they carry their
   language when the page around them is in the other one (useContentLang). */
function Label({ at, place, children }: { at: Placement; place: Placer; children: ReactNode }) {
  return (
    <p className="mx-tile mx-label mx-caps" style={place(at)} lang={useContentLang()}>
      {children}
    </p>
  );
}

function Sub({ at, place, children }: { at: Placement; place: Placer; children: ReactNode }) {
  return (
    <p className="mx-tile mx-tone-1 mx-label mx-start" style={place(at)} lang={useContentLang()}>
      {children}
    </p>
  );
}

function Blank({ at, place, tone = "" }: { at: Placement; place: Placer; tone?: string }) {
  return <div className={`mx-tile ${tone}`} style={place(at)} aria-hidden="true" />;
}

/** The claim, on a screen. `accent` is a phrase inside it to set in orange. */
function Claim({ at, place, text, accent }: { at: Placement; place: Placer; text: string; accent?: string }) {
  const from = accent ? text.indexOf(accent) : -1;
  return (
    <h2 className="mx-screen mx-display" style={place(at)} lang={useContentLang()}>
      <span className="sr-only">{text}</span>
      <ScreenText text={text} accent={from >= 0 && accent ? [from, from + accent.length] : undefined} />
    </h2>
  );
}

/** "Read more" on a screen, and the orange tile. The tile is the link; the
    screen is the same destination for the mouse only. */
function Open({ to, title, at, place }: { to: string; title: string; at: { more: Placement; go: Placement }; place: Placer }) {
  const t = useT();
  return (
    <>
      <Link to={to} className="mx-screen mx-title" style={place(at.more)} tabIndex={-1} aria-hidden="true">
        {t.home.readMore}
      </Link>
      <Link to={to} className="mx-tile mx-accent mx-go" style={place(at.go)} tabIndex={0} aria-label={`${t.home.readCase} ${title}`}>
        <ArrowIcon />
      </Link>
    </>
  );
}

/** A working checkbox or switch on a tile of the Net4Market scene. It sets
    nothing: it is a component to try, like the ones the case study is about.
    The whole tile is the target. */
function Demo({ role, label, on = false, style, children }: { role: "checkbox" | "switch"; label: string; on?: boolean; style: CSSProperties; children: ReactNode }) {
  const [checked, setChecked] = useState(on);
  return (
    <button
      type="button"
      role={role}
      aria-checked={checked}
      aria-label={label}
      className="mx-tile"
      style={style}
      onClick={() => setChecked(!checked)}
    >
      {children}
    </button>
  );
}

/** The open row: fixed on wide screens, the last row on the phone. */
const openAt = (row: number): { more: Placement; go: Placement } => ({
  more: { l8: [6, 4, 2], l4: [1, row, 3] },
  go: { l8: [8, 4], l4: [4, row] },
});

/* ── 1 · Net4Market, design system ───────────────────────────────────────── */
export function N4mScene({ off }: SceneProps) {
  const t = useT().home;
  const c = t.cases.n4m;
  return (
    <Scene rows={{ l8: 4, l4: 6 }} label={c.label} id="scene-1" off={off}>
      {(place) => (
        <>
          <Pager n={1} place={place} />
          <Label place={place} at={{ l8: [3, 1, 2], l4: [1, 2, 4] }}>{c.tags[0]}</Label>
          <Blank place={place} at={{ l8: [5, 1], l4: null }} />
          <Label place={place} at={{ l8: [6, 1, 2], l4: null }}>{c.tags[1]}</Label>
          <Label place={place} at={{ l8: [8, 1], l4: null }}>{c.tags[2]}</Label>

          <Claim place={place} at={{ l8: [1, 2, 4, 2], l4: [1, 3, 4, 2] }} text={c.title} />
          <Label place={place} at={{ l8: [5, 2, 2], l4: [1, 5, 3] }}>{c.tags[3]}</Label>
          <Demo role="checkbox" label={t.demoCheckbox} style={place({ l8: [7, 2], l4: [4, 5] })}>
            <span className="mx-demo-check" />
          </Demo>
          <div className="mx-tile mx-col mx-demo-states" style={place({ l8: [8, 2, 1, 2], l4: null })} aria-hidden="true">
            <span className="mx-demo-btn">Default</span>
            <span className="mx-demo-btn is-hover">Hover</span>
            <span className="mx-demo-btn is-disabled">Disabled</span>
            <span className="mx-demo-btn is-focus">Focus</span>
          </div>
          <Demo role="switch" label={t.demoSwitch} on style={place({ l8: [5, 3], l4: null })}>
            <span className="mx-switch" />
          </Demo>
          <Label place={place} at={{ l8: [6, 3, 2], l4: null }}>{c.tags[4]}</Label>

          <Blank place={place} at={{ l8: [1, 4, 3], l4: null }} tone="mx-tone-1" />
          <Blank place={place} at={{ l8: [4, 4], l4: null }} tone="mx-tone-2" />
          <Blank place={place} at={{ l8: [5, 4], l4: null }} tone="mx-tone-3" />
          <Open to="/n4m" title={c.title} place={place} at={openAt(6)} />
        </>
      )}
    </Scene>
  );
}

/* ── 2 · Yoga ────────────────────────────────────────────────────────────── */
export function YogaScene({ off }: SceneProps) {
  const c = useT().home.cases.yoga;
  return (
    <Scene rows={{ l8: 4, l4: 7 }} label={c.label} id="scene-2" off={off}>
      {(place) => (
        <>
          <Pager n={2} place={place} />
          <Label place={place} at={{ l8: [3, 1], l4: [1, 2, 2] }}>{c.tags[0]}</Label>
          <Label place={place} at={{ l8: [4, 1], l4: [3, 2, 2] }}>{c.tags[1]}</Label>
          <div className="mx-screen mx-shot" style={place({ l8: [5, 1, 4, 3], l4: [1, 5, 4, 2] })} aria-hidden="true">
            <img src={yogaShot} alt="" width={1512} height={982} decoding="async" />
          </div>

          <Claim place={place} at={{ l8: [1, 2, 4, 2], l4: [1, 3, 4, 2] }} text={c.title} accent={c.accent} />

          <Blank place={place} at={{ l8: [1, 4], l4: null }} />
          <Blank place={place} at={{ l8: [2, 4, 2], l4: null }} tone="mx-tone-1" />
          <Blank place={place} at={{ l8: [4, 4], l4: null }} tone="mx-tone-2" />
          <Blank place={place} at={{ l8: [5, 4], l4: null }} tone="mx-tone-4" />
          <Open to="/d4next" title={c.title} place={place} at={openAt(7)} />
        </>
      )}
    </Scene>
  );
}

/* ── 3 · Net4Market, design process ──────────────────────────────────────── */
const FILES = Array.from({ length: 60 }, (_, i) => i);

export function ProcessScene({ off }: SceneProps) {
  const c = useT().home.cases.process;
  return (
    <Scene rows={{ l8: 4, l4: 7 }} label={c.label} id="scene-3" off={off}>
      {(place) => (
        <>
          <Pager n={3} place={place} />
          <Label place={place} at={{ l8: [3, 1, 2], l4: [1, 2, 4] }}>{c.tags[0]}</Label>
          <Label place={place} at={{ l8: [5, 1, 2], l4: null }}>{c.tags[1]}</Label>
          <Blank place={place} at={{ l8: [7, 1], l4: null }} tone="mx-tone-1" />
          <Blank place={place} at={{ l8: [8, 1], l4: null }} />

          <Claim place={place} at={{ l8: [1, 2, 4, 2], l4: [1, 3, 4, 2] }} text={c.title} accent={c.accent} />
          {/* Many files and the one that is current: the case study in a tile. */}
          <div className="mx-tile mx-demo-files" style={place({ l8: [5, 2, 2, 2], l4: null })} aria-hidden="true">
            {FILES.map((i) => (
              <span key={i} className={i === 27 ? "is-current" : undefined} />
            ))}
          </div>
          <Label place={place} at={{ l8: [7, 2, 2], l4: [1, 5, 4] }}>{c.tags[2]}</Label>
          <Label place={place} at={{ l8: [7, 3, 2], l4: null }}>{c.tags[3]}</Label>

          <Sub place={place} at={{ l8: [1, 4, 3], l4: [1, 6, 4] }}>{c.sub}</Sub>
          <Blank place={place} at={{ l8: [4, 4], l4: null }} tone="mx-tone-3" />
          <Blank place={place} at={{ l8: [5, 4], l4: null }} tone="mx-tone-2" />
          <Open to="/n4m-process" title={c.title} place={place} at={openAt(7)} />
        </>
      )}
    </Scene>
  );
}

/* ── 4 · Electrolux ──────────────────────────────────────────────────────── */
export function EluxScene({ off }: SceneProps) {
  const c = useT().home.cases.elux;
  return (
    <Scene rows={{ l8: 4, l4: 9 }} label={c.label} id="scene-4" off={off}>
      {(place) => (
        <>
          <Pager n={4} place={place} />
          <Label place={place} at={{ l8: [3, 1, 2], l4: [1, 2, 4] }}>{c.tags[0]}</Label>
          {/* The widget on its phone, between the two robots: the subject of
              the study. Gold behind, blue in front — DOM order is the stack. */}
          <div className="mx-screen mx-elux" style={place({ l8: [5, 1, 4, 3], l4: [1, 6, 4, 3] })} aria-hidden="true">
            <img className="mx-elux-gold" src={eluxRobotGold} alt="" width={602} height={500} decoding="async" />
            <img className="mx-elux-phone" src={eluxWidget} alt="" width={407} height={858} decoding="async" />
            <img className="mx-elux-blue" src={eluxRobotBlue} alt="" width={602} height={500} decoding="async" />
          </div>

          <Claim place={place} at={{ l8: [1, 2, 4, 2], l4: [1, 3, 4, 2] }} text={c.title} />

          <Sub place={place} at={{ l8: [1, 4, 3], l4: [1, 5, 4] }}>{c.sub}</Sub>
          <Blank place={place} at={{ l8: [4, 4], l4: null }} tone="mx-tone-2" />
          <Blank place={place} at={{ l8: [5, 4], l4: null }} tone="mx-tone-4" />
          <Open to="/electrolux" title={c.title} place={place} at={openAt(9)} />
        </>
      )}
    </Scene>
  );
}
