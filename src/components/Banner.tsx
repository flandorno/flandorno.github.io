import type React from "react";

type BannerProps = {
  children: React.ReactNode;
};

function Banner({ children }: BannerProps) {
  return (
    <div className="mt-4 -mx-4 w-auto p-4 rounded-2xl outline outline-white/15 backdrop-blur-md bg-white/10 text-xl leading-relaxed text-gray-300">
      {children}
    </div>
  );
}

export default Banner;
