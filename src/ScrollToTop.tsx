import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { focusContent } from "./lib/focus";

/* A new page starts at its top, and focus moves to its content: the link that
   was clicked is gone, and without this the next Tab would start again from
   the top of the document with nothing said about the page having changed.
   A link that asks for a scene of the home page (see Home) lands on it. */
export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    /* Not on arrival: the visitor has not asked for anything yet. */
    if (first.current) {
      first.current = false;
      return;
    }
    const scene = (state as { scene?: number } | null)?.scene;
    focusContent(scene ? document.getElementById(`scene-${scene}`) : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- once per page; state is read as it is then
  }, [pathname]);

  return null;
}
