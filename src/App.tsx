import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Electrolux from "./pages/Electrolux";
import D4next from "./pages/D4next";
import N4m from "./pages/N4m";

export default function App() {
  return (
    <HashRouter>
      <a
        href="#main-content"
        onClick={(e) => { e.preventDefault(); document.getElementById("main-content")?.focus(); }}
        className="fl-skip"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/d4next" element={<D4next />} />
          <Route path="/electrolux" element={<Electrolux />} />
          <Route path="/n4m" element={<N4m />} />
          {/* Any unknown hash — a stale /#/about, the old /#/experience, a
              mistyped share — lands on the home page instead of a blank
              black screen with no wordmark and no way back. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
