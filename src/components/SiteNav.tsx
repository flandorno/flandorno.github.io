import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../lib/scrollToSection";

/* ─────────────────────────────────────────────────────────────────────────────
   One navigation, on every surface, with the same three words everywhere.

   The masthead used to be the wordmark: plain text on the home page and a link
   back on every other one. The same words meant two different things depending
   on where you stood, which is the ambiguity this replaces — the name now lives
   inside the hero heading instead.

   It is centred and sticky and always present. It changes shape rather than
   appearing: bare and spread at the top, drawing itself into a filled pill of
   `--bg-2` on a hairline once there is text underneath it. Never glass — the
   craft floor refuses blur as decoration, and the glassmorphic floating pill is
   the most borrowed navigation of the moment.

   The morph is a 0.22s state transition, not continuous animation, which keeps
   it inside The One Ambitious Moment Rule. Under `prefers-reduced-motion` the
   shape snaps.

   **The bar condenses when something actually arrives underneath it.** The
   threshold used to be a hard-coded 180px of scroll, and 180 was right for
   exactly one case — the home page at 1440 — because that is where it was
   tuned. Measured everywhere else, the first heading reaches the bar long
   before that and spends the difference sliding behind bare, unbacked links:

       home  390px   text arrives at   44px  →  136px of bare overlap
       home 1024px   text arrives at   68px  →  112px
       case  390px   text arrives at   52px  →  128px
       case 1440px   text arrives at  113px  →   67px

   So the number is measured, not chosen: the distance from the bottom of the
   pill to the top of the page's own `h1`, less a short lead-in so the fill is
   already there when the text gets there. It re-measures on resize, on font
   load and on every route change, which is what makes it right at widths
   nobody tested.

   **"My work" is one label with one meaning: take me to the list of projects.**
   It used to read "Work" on the home page and "All work" on a case study — one
   control wearing two names, which is the same ambiguity the wordmark had. On
   the home page it scrolls to the list; anywhere else it goes home and lands on
   the list, carried by router state so `ScrollToTop` does not fight it.
   ───────────────────────────────────────────────────────────────────────────── */

/** The fill arrives this many px before the text reaches it, not as it lands. */
const LEAD_IN = 8;
/** Never condense sooner than this, so a one-pixel nudge is not a state change. */
const FLOOR = 16;
/** A failed measurement must not leave the bar bare down the whole page. */
const CEILING = 240;
/** Release lower than it engaged: at one shared value the two states strobe
    when a trackpad holds the scroll position on the boundary. */
const HYSTERESIS = 16;

/* Document offset, walking offsetParent rather than reading a client rect.
   `getBoundingClientRect` includes transforms, and on mount the heading is
   still held at `translateY(1rem)` by the reveal — measured through the rect,
   every threshold came out 16px too late. offsetTop does not see the transform. */
function documentTop(el: HTMLElement) {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

export default function SiteNav() {
  const [condensed, setCondensed] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const navRef = useRef<HTMLElement>(null);
  const threshold = useRef(CEILING);
  const ticking = useRef(false);

  /* The pill's height is the same in both states — only its horizontal padding
     changes — so the bottom edge measured here holds once it condenses. */
  const measure = useCallback(() => {
    const pill = navRef.current?.querySelector(".fl-nav-inner");
    const heading = document.querySelector("main h1");
    if (!pill || !(heading instanceof HTMLElement)) return;
    const gap = documentTop(heading) - pill.getBoundingClientRect().bottom;
    threshold.current = Math.min(CEILING, Math.max(FLOOR, gap - LEAD_IN));
  }, []);

  const read = useCallback(() => {
    const y = window.scrollY;
    setCondensed((was) => (was ? y > threshold.current - HYSTERESIS : y > threshold.current));
    ticking.current = false;
  }, []);

  /* Before paint, so a route change never shows the bar in the wrong state for
     a frame. Both run again on every navigation: the two surfaces put their
     heading at different heights. */
  useLayoutEffect(() => {
    measure();
    read();
  }, [measure, read, pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(read);
    };
    /* One observer instead of a resize listener: body changes size for a
       viewport resize AND for the web font swapping in, and both move the
       heading. A resize listener would miss the second. */
    const ro = new ResizeObserver(() => {
      measure();
      read();
    });
    ro.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [measure, read]);

  const work = onHome ? (
    <button type="button" className="fl-tap" onClick={() => scrollToSection("work")}>
      My work
    </button>
  ) : (
    <Link to="/" state={{ scrollTo: "work" }} className="fl-tap">My work</Link>
  );

  return (
    <nav ref={navRef} className={`fl-nav${condensed ? " is-condensed" : ""}`} aria-label="Primary">
      <div className="fl-nav-inner">
        {work}
        <Link to="/about" className="fl-tap">About</Link>
        <button type="button" className="fl-tap" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </div>
    </nav>
  );
}
