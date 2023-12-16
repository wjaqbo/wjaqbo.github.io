import React from "react";

export default function Footer() {
  return (
    <footer className="bg-teal-700 px-2 py-16 text-white">
      <h3 className="mb-4 text-center text-4xl font-thin">
        Don&apos;t wait too long
      </h3>
      <div className="flex justify-center gap-2 text-sm">
        <p className="hidden md:inline-flex">Make your reservation:</p>
        <p className="font-semibold">(415)&nbsp;555&#8209;0132</p>
      </div>
    </footer>
  );
}
