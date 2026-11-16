import { Fragment } from "react";

type Props = {
  text: string;
  /** Characters in [from, to) are set in the accent colour. */
  accent?: [number, number];
};

/* Text on a screen, one element per character so each can be lit on its own.
   Doto is monospace, so splitting does not move anything. The characters are
   hidden from assistive technology; the caller supplies the readable text. */
export default function ScreenText({ text, accent }: Props) {
  const words = text.split(" ");
  /* Where each word starts in the full string. */
  const starts = words.map((_, w) => words.slice(0, w).join(" ").length + (w > 0 ? 1 : 0));
  return (
    <span aria-hidden="true">
      {words.map((word, w) => {
        const start = starts[w];
        return (
          <Fragment key={w}>
            {w > 0 && " "}
            <span className="mx-word">
              {[...word].map((ch, i) => (
                <span
                  key={i}
                  className={
                    accent && start + i >= accent[0] && start + i < accent[1] ? "mx-ch mx-ch-accent" : "mx-ch"
                  }
                >
                  {ch}
                </span>
              ))}
            </span>
          </Fragment>
        );
      })}
    </span>
  );
}
