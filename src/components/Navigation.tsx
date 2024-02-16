"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import menu from "@/data/menu-blowfish.json";
import { NavContext } from "./NavContextProvider";
import Backdrop from "./Backdrop";

export default function Navigation() {
  let { isOpen, setIsOpen } = useContext(NavContext);

  const handleClose = () => {
    setIsOpen(false);
  };
  const slideIn = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: "0",

      transition: {
        duration: 0.01,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      x: "-100%",
    },
  };
  const caterogies = menu.map((category) => (
    <Link
      key={category.categoryId}
      href={`/#${category.categoryId}`}
      onClick={handleClose}
      className="p-1 text-sm outline-none transition-all duration-100 hover:text-green-200 focus:text-green-300 active:text-green-300"
    >
      {category.title}
    </Link>
  ));
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <Backdrop onClick={handleClose}>
          <motion.section
            onClick={(e) => e.stopPropagation()}
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed bottom-0 left-0 top-10 overflow-y-auto border-b bg-white bg-opacity-50 py-10 font-semibold backdrop-blur-xl transition-transform`}
          >
            {/* <h2 className="text-4xl font-bold text-white">MENU</h2> */}
            <nav className="grid gap-2 px-10">{caterogies}</nav>
          </motion.section>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}
