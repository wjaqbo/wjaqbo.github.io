import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2 sticky top-0 bg-white z-10 border bg-opacity-75">
      <h1 className="text-2xl">Menu</h1>
      <div className="flex gap-2 text-sm">
        <p>Make your reservation:</p>
        <p className="font-semibold">(415)&nbsp;555&#8209;0132</p>
      </div>
    </header>
  );
}
