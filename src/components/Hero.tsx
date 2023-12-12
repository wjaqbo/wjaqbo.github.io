import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-green-700 text-white p-20 flex justify-center items-center flex-col">
      <h2 data-aos={"fade-right"} className="font-bold text-4xl">
        SUSHI BAR
      </h2>
      <Image
        data-aos="fade-right"
        src="/images/logo-white.png"
        width={200}
        height={200}
        alt=""
      />
      <p data-aos={"fade-left"} className="max-w-4xl text-center mt-4">
        Add text to make your restarurant special. Simple text Add text to make
        your restarurant special. Simple textAdd text to make your restarurant
        special. Simple text
      </p>
    </section>
  );
}
