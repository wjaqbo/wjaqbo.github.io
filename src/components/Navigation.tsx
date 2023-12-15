"use client";

import React, { useContext } from "react";
import Link from "next/link";

import menu from "@/menu-blowfish.json";
import { NavContext } from "./NavContextProvider";

export default function Navigation() {
  let { isOpen, setIsOpen } = useContext(NavContext);
  const caterogies = menu.map((category) => (
    <Link
      key={category.categoryId}
      href={`/#${category.categoryId}`}
      onClick={() => setIsOpen(false)}
      className="p-1 text-sm outline-none transition-all duration-100 hover:text-green-200 focus:text-green-300 active:text-green-300"
    >
      {category.title}
    </Link>
  ));
  return (
    <section
      className={`${
        isOpen ? "opacity-100" : "opacity-0"
      } fixed right-0 top-10 z-10 w-full border-b bg-white bg-opacity-50 py-5 font-semibold backdrop-blur-xl transition`}
    >
      {/* <h2 className="text-4xl font-bold text-white">MENU</h2> */}
      <nav className="grid grid-cols-2 gap-2 px-10">{caterogies}</nav>
    </section>
  );
}
