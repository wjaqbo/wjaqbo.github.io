import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="top-0 z-10 flex h-10 items-center justify-between overflow-hidden border-b bg-white bg-opacity-50 px-2 backdrop-blur-xl">
      <Link href="/">
        <Image
          data-aos="fade-right"
          className="absolute left-[-12px] top-[-7px]"
          src="/images/logo.png"
          width={100}
          height={100}
          alt="Blowfish"
        />
        <h1 className="pl-14 text-2xl font-semibold">Blowfish</h1>
      </Link>
      <div className="flex gap-2 text-sm">
        <p className="hidden">Make your reservation:</p>
        <p className="font-semibold">(415)&nbsp;555&#8209;0132</p>
      </div>
    </header>
  );
}
