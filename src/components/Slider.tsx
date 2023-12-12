import React from "react";
import Image from "next/image";

export default function Slider() {
  return (
    <section
      className="flex justify-between overflow-hidden"
      data-aos="fade-in"
    >
      <Image
        src="/images/sushi-pic.jpg"
        alt="sushi"
        width={500}
        height={400}
        loading="lazy"
      />
      <Image
        src="/images/sushi-pic.jpg"
        alt="sushi"
        width={500}
        height={400}
        loading="lazy"
      />
      <Image
        src="/images/sushi-pic.jpg"
        alt="sushi"
        width={500}
        height={400}
        loading="lazy"
      />
    </section>
  );
}
