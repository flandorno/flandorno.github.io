import Scene from "../grid/Scene";
import ScreenText from "../grid/ScreenText";
import { useT } from "../i18n";
import { AnimationTile, BatteryTile, LanguageTile, ResumeTile, SectorScreen, SoundTile } from "./tiles";

/* The landing scene. Placement is [column, row, width, height] per layout:
   l8 is the owner's mockup; l4 is the phone, where the empty tiles go. */
export default function Landing({ off }: { off?: boolean }) {
  const t = useT();
  return (
    <Scene rows={{ l8: 4, l4: 7 }} label="Federico Landorno" id="scene-0" off={off}>
      {(place) => (
        <>
          <h1 className="mx-tile mx-tone-2 mx-display" style={place({ l8: [1, 1, 4], l4: [1, 1, 4] })}>
            Federico Landorno
          </h1>
          <div className="mx-tile" style={place({ l8: [5, 1], l4: null })} aria-hidden="true" />
          <AnimationTile style={place({ l8: [6, 1, 2], l4: [1, 5, 3] })} />
          <SoundTile style={place({ l8: [8, 1, 1, 2], l4: [4, 5, 1, 2] })} />

          <div className="mx-tile" style={place({ l8: [1, 2], l4: null })} aria-hidden="true" />
          <p className="mx-screen mx-display mx-caps" style={place({ l8: [2, 2, 4], l4: [1, 2, 4] })}>
            <span className="sr-only">{t.landing.role}</span>
            <ScreenText text={t.landing.role} />
          </p>
          <LanguageTile style={place({ l8: [6, 2, 2], l4: [1, 6, 3] })} />

          <p className="mx-tile mx-tone-1 mx-display" style={place({ l8: [1, 3, 4], l4: [1, 3, 4] })} aria-hidden="true">
            {t.landing.experienceIn}
          </p>
          <SectorScreen style={place({ l8: [5, 3, 4], l4: [1, 4, 4] })} />

          <div className="mx-tile mx-tone-4" style={place({ l8: [1, 4], l4: null })} aria-hidden="true" />
          <div className="mx-tile mx-tone-3" style={place({ l8: [2, 4], l4: null })} aria-hidden="true" />
          <div className="mx-tile mx-tone-2" style={place({ l8: [3, 4], l4: null })} aria-hidden="true" />
          <ResumeTile style={place({ l8: [4, 4, 2], l4: [1, 7, 2] })} />
          <div className="mx-tile" style={place({ l8: [6, 4], l4: null })} aria-hidden="true" />
          <BatteryTile style={place({ l8: [7, 4, 2], l4: [3, 7, 2] })} />
        </>
      )}
    </Scene>
  );
}
