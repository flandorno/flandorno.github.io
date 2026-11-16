type Props = {
  /** The image. Without one the figure is not drawn at all. */
  src?: string;
  alt?: string;
  /** Unused since the mosaic rebuild; kept so the case studies need no edit. */
  seed?: number;
  caption?: string;
  /** Lets the image show whole rather than filling the frame. */
  contain?: boolean;
};

/* One figure treatment for the case studies. Several figures are placed in
 * the text ahead of their images (the owner supplies them): until an image is
 * there the figure renders nothing — an empty frame in a portfolio reads as
 * unfinished work, which is worse than no figure. */
export default function Figure({ src, alt = "", caption, contain }: Props) {
  if (!src) return null;
  return (
    <figure className="fl-figure">
      <div className="fl-figure-frame">
        <img src={src} alt={alt} loading="lazy" decoding="async" className={contain ? "is-contain" : undefined} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
