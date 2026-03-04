import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Electrolux from "./pages/Electrolux";
import D4next from "./pages/D4next";
import About from "./pages/About";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d4next" element={<D4next />} />
        <Route path="/electrolux" element={<Electrolux />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
