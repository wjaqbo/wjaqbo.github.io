"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/sushi-pic.jpg",
  "/images/sushi-pic-2.jpg",
  "/images/sushi-pic-3.jpg",
  "/images/sushi-pic-4.jpg",
  "/images/sushi-pic-5.jpg",
  "/images/sushi-pic-6.jpg",
];

const variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -200,
    opacity: 0,
  },
};

export default function Slider() {
  const [index, setIndex] = useState(0);

  const prevStep = () => {
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  const nextStep = () => {
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  return (
    <AnimatePresence initial={false}>
      <section className="relative flex h-[300px] overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[index]}
        >
          <Image
            src={images[index]}
            alt="sushi"
            className="left-0 h-full w-full"
            fill
            objectFit="cover"
            loading="lazy"
          />
        </motion.div>

        <button
          onClick={prevStep}
          className="absolute left-4 top-1/2 h-10 w-10 -translate-y-2/4 rounded-full bg-white"
        >
          prev
        </button>
        <button
          onClick={nextStep}
          className="absolute right-4 top-1/2 h-10 w-10 -translate-y-2/4 rounded-full bg-white"
        >
          next
        </button>
      </section>
    </AnimatePresence>
  );
}
