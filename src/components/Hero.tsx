import React from "react";
import Image from "next/image";

export default function Hero({ ...props }): React.ReactElement {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-green-700 p-20 text-white ${props.className}`}
    >
      <h2 data-aos={"fade-right"} className="text-4xl font-bold">
        SUSHI BAR
      </h2>
      <Image
        data-aos="fade-right"
        src="/images/logo-white.png"
        width={200}
        height={200}
        alt=""
      />
      <p data-aos={"fade-left"} className="mt-4 max-w-4xl text-center">
        Add text to make your restarurant special. Simple text Add text to make
        your restarurant special. Simple textAdd text to make your restarurant
        special. Simple text
      </p>
    </section>
  );
}
