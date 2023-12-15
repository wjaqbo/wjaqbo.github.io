import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-10 items-center justify-between overflow-hidden bg-white bg-opacity-50 px-2 backdrop-blur-xl">
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
      <div className="ml-auto font-semibold">MENU</div>
      <Hamburger />
    </header>
  );
}
