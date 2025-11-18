import React from "react";
import Image from "next/image";

export default function FooterPics() {
  return (
    <div className="px-2 h-[420px] md:min-h-[90vh] flex flex-row gap-2 md:gap-4 pb-2">
      {/* Left column: 2 stacked images */}
      <div className="flex flex-col gap-2 md:gap-4 flex-1 overflow-hidden">
        <Image
          src="/img/footerPics/1.png"
          width={1920}
          height={1080}
          alt="image"
          className="flex-1 h-1/2 object-cover object-center w-full"
        />
        <Image
          src="/img/footerPics/4.png"
          width={1920}
          height={1080}
          alt="image"
          className="flex-1 h-1/2 object-cover object-center w-full"
        />
      </div>

      {/* Middle column: 1 tall image */}
      <div className="flex flex-col flex-1">
        <Image
          src="/img/footerPics/2.png"
          width={1920}
          height={1080}
          alt="image"
          className="h-full object-cover object-center w-full"
        />
      </div>

      {/* Right column: 2 stacked images, equal height */}
      <div className="flex flex-col gap-2 md:gap-4 flex-1 overflow-hidden">
        <Image
          src="/img/footerPics/3.png"
          width={1920}
          height={1080}
          alt="image"
          className="flex-1 h-1/2 object-cover object-center w-full"
        />
        <Image
          src="/img/footerPics/5.png"
          width={1920}
          height={1080}
          alt="image"
          className="flex-1 h-1/2 object-cover object-center w-full"
        />
      </div>
    </div>
  );
}
