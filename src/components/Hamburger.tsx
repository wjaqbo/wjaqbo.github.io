"use client";

import React, { useContext } from "react";

import { NavContext } from "./NavContextProvider";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useContext(NavContext);
  return (
    <button
      className="fixed left-0 top-2 z-30 h-10 w-10 text-black focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">Open main menu</span>
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-5 transform bg-current transition duration-100 ease-in-out ${
            isOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-5 transform bg-current transition duration-100 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-1"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-5 transform bg-current transition duration-100 ease-in-out ${
            isOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
}
