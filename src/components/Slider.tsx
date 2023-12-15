import React from "react";
import Image from "next/image";

export default function Slider() {
  return (
    <section
      className="mb-2 flex h-[40vh] justify-between gap-2 overflow-hidden"
      data-aos="fade-in"
    >
      <div className="relative w-2/6">
        <Image
          src="/images/sushi-pic.jpg"
          alt="sushi"
          fill
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="relative w-2/6">
        <Image
          src="/images/sushi-pic.jpg"
          alt="sushi"
          fill
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="relative w-2/6">
        <Image
          src="/images/sushi-pic.jpg"
          alt="sushi"
          fill
          objectFit="cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
