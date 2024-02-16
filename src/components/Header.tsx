"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center overflow-hidden border-b bg-white bg-opacity-50 backdrop-blur-xl">
      <Hamburger />
      <Link href="/" className="flex items-center">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image
            // className="absolute"
            src="/images/logo-small.png"
            width={50}
            height={50}
            alt="Blowfish"
          />
        </motion.div>
        <h1 className="ml-1 text-2xl font-semibold">Blowfish</h1>
      </Link>
    </header>
  );
}
