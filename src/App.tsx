import { HashRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/NavBar";
import Home from "./pages/Home";
import Electrolux from "./pages/Electrolux";
import D4next from "./pages/D4next";
import About from "./pages/About";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function HomeLayout() {
  const smoothWrapper = useRef<HTMLDivElement>(null);
  const smoothContent = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current!,
      content: smoothContent.current!,
      smooth: 1.5,
      effects: true,
    });
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => smoother.kill();
  }, { dependencies: [] });

  return (
    <div ref={smoothWrapper} id="smooth-wrapper">
      <div ref={smoothContent} id="smooth-content">
        <Home />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <a
        href="#main-content"
        onClick={(e) => { e.preventDefault(); document.getElementById("main-content")?.focus(); }}
        className="fixed top-4 left-1/2 -translate-x-1/2 -translate-y-20 focus:translate-y-0 z-100 px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold transition-transform duration-200"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/d4next" element={<D4next />} />
          <Route path="/electrolux" element={<Electrolux />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
