"use client";

import React, { useState, useEffect } from "react";
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
  const [direction, setDirection] = useState(1);

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

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextStep();
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [index]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <section className="relative flex h-[300px] overflow-hidden bg-black lg:h-[640px]">
        <motion.div
          className="w-full"
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
            fill
            objectFit="cover"
            loading="lazy"
          />
        </motion.div>

        <button
          onClick={prevStep}
          className="absolute left-4 top-1/2 flex h-8 w-8 -translate-y-2/4 items-center justify-center rounded-full bg-white bg-opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={nextStep}
          className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-2/4 items-center justify-center rounded-full bg-white bg-opacity-70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </section>
    </AnimatePresence>
  );
}
