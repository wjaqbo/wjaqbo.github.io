"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Slider() {
  return (
    <motion.section
      className="mb-2 flex h-[40vh] justify-between gap-2 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
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
    </motion.section>
  );
}
