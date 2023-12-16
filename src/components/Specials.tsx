import React from "react";
import Image from "next/image";

import specials from "@/data/specials-blowfish.json";

export default function Specials({ ...props }) {
  return (
    <section
      className={`items-center justify-center overflow-x-hidden bg-green-700 p-20 text-white md:flex ${props.className}`}
    >
      <div className="flex basis-2/4 flex-col items-center justify-center">
        <h2
          data-aos={"fade-right"}
          className="mb-10 text-4xl font-bold md:mb-0"
        >
          Today Specials
        </h2>
        <Image
          data-aos="fade-right"
          src="/images/logo-white.png"
          width={200}
          height={200}
          alt=""
        />
      </div>
      <ul className="mt-10 flex flex-col gap-6 md:mt-0">
        {specials.map((item) => (
          <li
            data-aos={"fade-left"}
            key={item.id}
            className="border-b border-lime-400 pb-6 opacity-50 last:border-none"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <div className="text-xl font-semibold">{item.price}</div>
            </div>
            <p className="max-w-4xl">{item.desc}</p>
            {/* <div className="h-px bg-lime-400 opacity-50"></div> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
