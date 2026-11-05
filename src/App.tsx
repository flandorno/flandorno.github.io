import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import SiteNav from "./components/SiteNav";
import Home from "./pages/Home";
import About from "./pages/About";
import Electrolux from "./pages/Electrolux";
import D4next from "./pages/D4next";
import N4m from "./pages/N4m";

export default function App() {
  return (
    <HashRouter>
      {/* The masthead is rendered inside each route, so it sits inside <main>.
          Focusing <main> therefore landed the visitor *before* the wordmark and
          the nav — the link skipped nothing, which is worse than not having it.
          Focusing the page's own <h1> skips the chrome and puts the reader on
          the content. tabIndex is set on the heading only for this, then taken
          off again so it never enters the tab order. */}
      <a
        href="#main-content"
        className="fl-skip"
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          const target = main?.querySelector("h1") ?? main;
          if (!target) return;
          target.setAttribute("tabindex", "-1");
          (target as HTMLElement).focus();
          target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
        }}
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <SiteNav />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/d4next" element={<D4next />} />
          <Route path="/electrolux" element={<Electrolux />} />
          <Route path="/n4m" element={<N4m />} />
          <Route path="/about" element={<About />} />
          {/* Any unknown hash — a stale /#/about, the old /#/experience, a
              mistyped share — lands on the home page instead of a blank
              black screen with no wordmark and no way back. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
