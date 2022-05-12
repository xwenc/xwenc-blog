import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";

const Header = () => (
  <header className="flex justify-between p-4 lg:px-8">
    <span className="rounded-full w-14 h-14 overflow-hidden mt-4">
      <Image
        src="/logo.png"
        layout="fixed"
        width={56}
        height={56}
        alt=""
      />
    </span>
    <a
      className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
      href="#contact"
    >
      <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
      <span className="hidden lg:block">Contact me</span>
    </a>
  </header>
);

export default Header;
