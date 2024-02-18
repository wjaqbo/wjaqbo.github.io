"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/sushi-pic-5.jpg",
  "/images/sushi-pic-6.jpg",
  "/images/sushi-pic-2.jpg",
  "/images/sushi-pic-3.jpg",
  "/images/sushi-pic-4.jpg",
  "/images/sushi-pic.jpg",
];

const offset = 300;

const variants = {
  initial: (direction: number) => {
    return { x: direction > 0 ? offset : -offset, opacity: 0 };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffnes: 10, damping: 15 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? -offset : offset,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffnes: 10, damping: 15 },
        opacity: { duration: 0.3 },
      },
    };
  },
};

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevStep = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  };
  const nextStep = () => {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };
  return (
    <AnimatePresence initial={false} custom={direction}>
      <section className="relative flex h-[300px] overflow-hidden bg-black">
        <motion.div
          className="relative h-full w-full"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[index]}
          custom={direction}
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
          className="absolute left-4 top-1/2 h-10 w-10 -translate-y-2/4 rounded-full bg-white bg-opacity-70"
        >
          prev
        </button>
        <button
          onClick={nextStep}
          className="absolute right-4 top-1/2 h-10 w-10 -translate-y-2/4 rounded-full bg-white bg-opacity-70"
        >
          next
        </button>
      </section>
    </AnimatePresence>
  );
}
