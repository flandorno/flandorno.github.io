import type { ReactNode } from "react";

/* A raised statement inside the reading column.
 * Separated by a tone step, not by glass, blur or a coloured rule. */
export default function Callout({ children }: { children: ReactNode }) {
  return <aside className="fl-callout">{children}</aside>;
}
