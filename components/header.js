import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaBloggerB } from "react-icons/fa";

const Header = ({ email }) => (
  <header className="flex items-center p-4 lg:px-8">
    <div class="flex-1 lg:mt-4">
      <a href="/" className="inline-block rounded-full w-14 h-14 overflow-hidden">
        <Image src="/logo.png" layout="fixed" width={56} height={56} alt="" />
      </a>
    </div>
    <a
        className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150 mr-4"
        href="/posts"
      >
        <FaBloggerB className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">Blogs</span>
      </a>
    {email && (
      <a
        className="flex w-14 h-14 font-header font-semibold px-2 bg-lead rounded-full text-lead-text justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg lg:self-start lg:mt-4 hover:opacity-75 transition-opacity duration-150"
        href={`mailto:${email}`}
      >
        <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">Contact me</span>
      </a>
    )}
  </header>
);

export default Header;
