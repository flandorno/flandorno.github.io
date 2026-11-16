import { useEffect, type CSSProperties, type ReactNode } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import GroundFx from "./components/GroundFx";
import { GridContext, useGrid } from "./grid/useGrid";
import { getPrefs, usePrefs } from "./lib/prefs";
import { play, prime, type Sound } from "./lib/sound";
import Home from "./pages/Home";
import About from "./pages/About";
import Electrolux from "./pages/Electrolux";
import D4next from "./pages/D4next";
import N4m from "./pages/N4m";
import N4mProcess from "./pages/N4mProcess";
import AboutIt from "./pages/it/About";
import ElectroluxIt from "./pages/it/Electrolux";
import D4nextIt from "./pages/it/D4next";
import N4mIt from "./pages/it/N4m";
import N4mProcessIt from "./pages/it/N4mProcess";
import { ITALIAN_CONTENT_READY, useItalianContent, useT, type Localized } from "./i18n";
import { focusContent } from "./lib/focus";

/* The mosaic's root. It publishes the grid (columns, cell height) as CSS
   variables and decides the mode: on the home page, when five rows fit the
   viewport and animations are on, the page is a stage one viewport tall;
   everywhere else it is a normal scrolling page. */
function Shell({ children }: { children: ReactNode }) {
  const grid = useGrid();
  const { motion } = usePrefs();
  const { pathname } = useLocation();
  const stage = pathname === "/" && grid.fits && motion;

  /* A sound for every control, when sounds are on, and a different one for
     each kind of action (see lib/sound). The kind is read in the capture
     phase, before the click changes anything — a switch still says which way
     it is about to go — and played just after, so that switching sounds on
     is itself heard. */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const control = e.target instanceof Element ? e.target.closest("a, button") : null;
      if (!control) return;
      /* Wake the audio now, inside the click: sounds are on, or this click
         is the one switching them on. */
      if (getPrefs().sound || control.classList.contains("mx-sound")) prime();
      let sound: Sound = "tap";
      /* The battery plays its own notes as it charges. */
      if (control.classList.contains("mx-battery") && control.getAttribute("aria-disabled") !== "true") return;
      if (control.getAttribute("aria-disabled") === "true") sound = "dull";
      else if (control.matches("[role=switch], [role=checkbox]"))
        sound = control.getAttribute("aria-checked") === "true" ? "off" : "on";
      else if (control.matches("a")) sound = "nav";
      /* Switching sounds off is the one sound that has to play now: a moment
         later there are none. */
      if (control.classList.contains("mx-sound") && sound === "off") return play("off");
      setTimeout(() => play(sound), 0);
    };
    /* Sounds left on from an earlier visit: the first touch or key of this
       one wakes the audio, so the scene push can be heard without a click
       on a control first. */
    const wake = () => {
      if (getPrefs().sound) prime();
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("pointerdown", wake, true);
    document.addEventListener("keydown", wake, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("pointerdown", wake, true);
      document.removeEventListener("keydown", wake, true);
    };
  }, []);

  return (
    <GridContext.Provider value={grid}>
      <div
        className="mx"
        data-mode={stage ? "stage" : "stack"}
        data-layout={grid.layout}
        data-compact={grid.compact || undefined}
        style={{ "--mx-cols": grid.cols, "--mx-cell": `${grid.cell}px`, "--mx-cw": grid.cellW } as CSSProperties}
      >
        <GroundFx />
        {children}
      </div>
    </GridContext.Provider>
  );
}

/* A page that exists in both languages. */
function Page({ en, it }: Localized) {
  return useItalianContent() && it ? it : en;
}

/* Off-screen until it takes focus. It goes to the content, not to <main>:
   see lib/focus. */
function SkipLink() {
  const t = useT();
  return (
    <a
      href="#main-content"
      className="mx-skip"
      onClick={(e) => {
        e.preventDefault();
        focusContent();
      }}
    >
      {t.nav.skip}
    </a>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Shell>
      <SkipLink />
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* The Italian pages are a draft (see i18n). Each sits behind the
              constant, not only behind the hook in Page, so that a production
              build leaves them out instead of carrying unapproved text. */}
          <Route path="/d4next" element={<Page en={<D4next />} it={ITALIAN_CONTENT_READY ? <D4nextIt /> : null} />} />
          <Route path="/electrolux" element={<Page en={<Electrolux />} it={ITALIAN_CONTENT_READY ? <ElectroluxIt /> : null} />} />
          <Route path="/n4m" element={<Page en={<N4m />} it={ITALIAN_CONTENT_READY ? <N4mIt /> : null} />} />
          <Route path="/n4m-process" element={<Page en={<N4mProcess />} it={ITALIAN_CONTENT_READY ? <N4mProcessIt /> : null} />} />
          <Route path="/about" element={<Page en={<About />} it={ITALIAN_CONTENT_READY ? <AboutIt /> : null} />} />
          {/* Any unknown hash — a stale /#/about, the old /#/experience, a
              mistyped share — lands on the home page instead of a blank
              black screen with no wordmark and no way back. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      </Shell>
    </HashRouter>
  );
}
