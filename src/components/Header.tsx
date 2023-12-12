import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border bg-white bg-opacity-75 px-2">
      <h1 className="text-2xl">Menu</h1>
      <div className="flex gap-2 text-sm">
        <p>Make your reservation:</p>
        <p className="font-semibold">(415)&nbsp;555&#8209;0132</p>
      </div>
    </header>
  );
}
