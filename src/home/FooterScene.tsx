import { Link } from "react-router-dom";
import Scene from "../grid/Scene";
import ScreenText from "../grid/ScreenText";
import { ArrowIcon } from "../grid/icons";
import { useContentLang, useT } from "../i18n";
import { LINKEDIN } from "../lib/contact";
import { ResumeTile } from "./tiles";

/* The last scene: the closing line and the ways to get in touch. LinkedIn is
   the orange tile here, because contact is what this scene is for. No email
   anywhere — see PRODUCT.md. */
export default function FooterScene({ off }: { off?: boolean }) {
  const t = useT();
  const f = t.home.footer;
  const contentLang = useContentLang();
  return (
    <Scene rows={{ l8: 4, l4: 6 }} label={f.label} id="scene-5" off={off}>
      {(place) => (
        <>
          <h2 className="mx-screen mx-display" style={place({ l8: [1, 1, 5, 2], l4: [1, 1, 4, 3] })} lang={contentLang}>
            <span className="sr-only">{f.line}</span>
            <ScreenText text={f.line} />
          </h2>
          <div className="mx-tile" style={place({ l8: [6, 1], l4: null })} aria-hidden="true" />
          <div className="mx-tile" style={place({ l8: [7, 1, 2], l4: null })} aria-hidden="true" />
          <div className="mx-tile mx-tone-1" style={place({ l8: [6, 2], l4: null })} aria-hidden="true" />
          <ResumeTile style={place({ l8: [7, 2, 2], l4: [1, 5, 4] })} />

          <p className="mx-tile mx-tone-2 mx-display" style={place({ l8: [1, 3, 4], l4: null })} aria-hidden="true">
            Federico Landorno
          </p>
          <div className="mx-tile" style={place({ l8: [5, 3], l4: null })} aria-hidden="true" />
          <a
            className="mx-tile mx-accent mx-label mx-caps"
            style={place({ l8: [6, 3, 3], l4: [1, 4, 4] })}
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
          >
            {f.linkedin}
            <span className="sr-only"> ({f.newTab})</span>
          </a>

          <Link
            to="/"
            state={{ scene: 0 }}
            className="mx-tile mx-up"
            tabIndex={0}
            style={place({ l8: [1, 4], l4: [1, 6] })}
            aria-label={f.top}
          >
            <ArrowIcon />
          </Link>
          <div className="mx-tile mx-tone-4" style={place({ l8: [2, 4], l4: [2, 6] })} aria-hidden="true" />
          <div className="mx-tile mx-tone-3" style={place({ l8: [3, 4], l4: [3, 6] })} aria-hidden="true" />
          <div className="mx-tile mx-tone-2" style={place({ l8: [4, 4], l4: [4, 6] })} aria-hidden="true" />
          <div className="mx-tile mx-tone-1" style={place({ l8: [5, 4, 2], l4: null })} aria-hidden="true" />
          <div className="mx-tile" style={place({ l8: [7, 4, 2], l4: null })} aria-hidden="true" />
        </>
      )}
    </Scene>
  );
}
