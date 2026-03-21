import type React from "react";

type BannerProps = {
  children: React.ReactNode;
  [key: string]: unknown;
};

function Banner({ children, ...rest }: BannerProps) {
  return (
    <div
      className="mt-4 -mx-4 w-auto p-4 rounded-2xl outline outline-white/15 backdrop-blur-md bg-white/10 text-xl leading-relaxed text-gray-200"
      data-aos="zoom-out"
      {...rest}
    >
      {children}
    </div>
  );
}

export default Banner;
