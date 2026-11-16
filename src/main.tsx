import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/mosaic.css";
import "./styles/reading.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import App from "./App.tsx";

gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
