"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sections = ["Home", "Movies", "TV Shows"];
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="bg-gray-600 w-full sm:h-32 px-8 sm:px-20 z-10">
      <div className="max-w-7xl h-full w-full mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            className="object-contain"
            src="/MooviesLogoCropped.png"
            width={110}
            height={110}
            alt="logo"
          ></Image>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 sm:hidden z-10"
          onClick={() => setNav(!nav)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <ul className="sm:flex gap-4 hidden">
          {sections.map((section) => (
            <Link href={section.toLowerCase().replace(" ", "")} key={section}>
              <li>{section}</li>
            </Link>
          ))}
        </ul>
        {nav && (
          <ul className="absolute top-0 left-0 bg-black/95 w-full h-full items-center justify-center flex sm:hidden flex-col gap-10 text-4xl">
            {sections.map((section) => (
              <Link href={section.toLowerCase().replace(" ", "")} key={section}>
                <li>{section}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
