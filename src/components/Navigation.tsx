import React from "react";
import Link from "next/link";

import menu from "@/menu-blowfish.json";

export default async function Navigation() {
  const caterogies = menu.map((category) => (
    <Link
      key={category.categoryId}
      href={`/#${category.categoryId}`}
      className="border border-green-800 p-1 text-sm outline-none hover:bg-green-800 focus:bg-green-800 active:bg-green-800 dark:text-white"
    >
      {category.title}
    </Link>
  ));
  return (
    <section className="sticky bottom-0 z-20 bg-opacity-80 backdrop-blur-2xl dark:bg-green-900">
      {/* <h2 className="text-4xl font-bold text-white">MENU</h2> */}
      <nav className="flex items-stretch">{caterogies}</nav>
    </section>
  );
}
