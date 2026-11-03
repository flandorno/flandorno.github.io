import SegmentField from "./SegmentField";

type Props = {
  /** A real image. When absent, the generative placeholder stands in. */
  src?: string;
  alt?: string;
  /** Seed for the placeholder field, so each one is stable and distinct. */
  seed?: number;
  caption?: string;
  /** Lets the image show whole rather than filling the frame. */
  contain?: boolean;
};

/* One figure treatment for the case studies: a framed surface that holds
 * either a real image or, until the real mockups exist, the same generative
 * field the home page uses. Swapping one for the other is a one-line change. */
export default function Figure({ src, alt = "", seed = 7, caption, contain }: Props) {
  return (
    <figure className="fl-figure" data-reveal>
      <div className="fl-figure-frame">
        {src ? (
          <img src={src} alt={alt} loading="lazy" decoding="async" style={contain ? { objectFit: "contain" } : undefined} />
        ) : (
          <SegmentField seed={seed} />
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
