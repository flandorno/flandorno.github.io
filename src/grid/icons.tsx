/* The interface icons, drawn on a 24 grid with a 1.5 stroke in currentColor.
   All decorative: the control that holds one carries the name. */
import type { ReactNode } from "react";

function Svg({ children, className = "mx-icon", box = "0 0 24 24" }: { children: ReactNode; className?: string; box?: string }) {
  return (
    <svg
      className={className}
      viewBox={box}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const HomeIcon = () => (
  <Svg>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9v10.5a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V9" />
    <path d="M10 21v-5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V21" />
  </Svg>
);

export const SunIcon = () => (
  <Svg>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
  </Svg>
);

export const MoonIcon = () => (
  <Svg>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </Svg>
);

export const ArrowIcon = () => (
  <Svg className="mx-icon mx-icon-lg">
    <path d="M3 12h18" />
    <path d="M14 5l7 7-7 7" />
  </Svg>
);

/** The megaphone, with a cross when sound is off and waves when it is on. */
export const HornIcon = ({ on }: { on: boolean }) => (
  <Svg box="0 0 36 24">
    <path d="M4 9.5v5a1.5 1.5 0 0 0 1.5 1.5H8l9 4V4L8 8H5.500A1.500 1.500 0 0 0 4 9.500Z" />
    <path d="M8 16v3.500a1.500 1.500 0 0 0 3 0V17.400" />
    <path d="M17 9.500a2.500 2.500 0 0 1 0 5" />
    {on ? (
      <path d="M24 8.500a5 5 0 0 1 0 7M27.500 5.500a9 9 0 0 1 0 13" />
    ) : (
      <path className="mx-off-mark" d="M24 8l7 8M31 8l-7 8" />
    )}
  </Svg>
);

/** Battery outline with up to four bars. A flat battery shows a warning dot. */
export const BatteryIcon = ({ level }: { level: number }) => (
  <Svg className="mx-icon mx-icon-battery" box="0 0 36 24">
    <rect x="3" y="5" width="26" height="14" rx="3" />
    <path d="M32 10v4" />
    {[0, 1, 2, 3].map((i) =>
      i < level ? <rect key={i} className="mx-bar" x={6 + i * 5.250} y="8" width="3.750" height="8" rx="1" /> : null,
    )}
    {level === 0 && <circle className="mx-warn" cx="30" cy="21.500" r="1.500" />}
  </Svg>
);
