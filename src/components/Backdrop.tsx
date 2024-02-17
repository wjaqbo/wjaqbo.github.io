"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Backdrop({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-10 h-screen w-full bg-black bg-opacity-80"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
