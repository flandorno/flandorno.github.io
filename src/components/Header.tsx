import { Link, useLocation } from "react-router-dom";
import { useT } from "../i18n";
import { setTheme, usePrefs } from "../lib/prefs";
import { HomeIcon, MoonIcon, SunIcon } from "../grid/icons";

/* The fixed row, the same on every page: home, case studies, about, an empty
   tile that takes whatever width is left, and the theme switch.
   "Case studies" always means the first case-study scene of the home page;
   the scene index travels as router state (see Home).

   tabIndex={0} on tile links, here and in the scenes: Safari leaves links out
   of the Tab order unless the visitor has changed a setting, and on this site
   most of what can be clicked is a link. */
export default function Header() {
  const t = useT();
  const { dark } = usePrefs();
  const { pathname } = useLocation();
  const here = (path: string) => (pathname === path ? "page" : undefined);

  return (
    <header className="mx-head">
      <nav className="mx-grid" aria-label={t.nav.label}>
        <Link to="/" state={{ scene: 0 }} className="mx-tile mx-head-home" tabIndex={0} aria-label={t.nav.home} aria-current={here("/")}>
          <HomeIcon />
        </Link>
        <Link to="/" state={{ scene: 1 }} className="mx-tile mx-head-cases mx-label mx-caps" tabIndex={0}>
          {t.nav.cases}
        </Link>
        <Link to="/about" className="mx-tile mx-head-about mx-label mx-caps" tabIndex={0} aria-current={here("/about")}>
          {t.nav.about}
        </Link>
        <div className="mx-tile mx-head-fill" aria-hidden="true" />
        <button
          type="button"
          className="mx-tile mx-head-theme"
          aria-label={dark ? t.nav.toLight : t.nav.toDark}
          onClick={() => setTheme(dark ? "light" : "dark")}
        >
          {dark ? <MoonIcon /> : <SunIcon />}
        </button>
      </nav>
    </header>
  );
}
