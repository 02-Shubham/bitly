"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md px-6">
      <div className="flex items-center justify-between h-16">
        <div className="text-2xl font-extrabold tracking-wide">BITLY</div>

        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-green-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-green-200 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-green-200 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          <li className="flex gap-4">
            <Link href="/try">
              <button className="bg-white text-green-600 font-semibold py-1.5 px-4 rounded-lg shadow hover:bg-green-100 transition">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/02-Shubham" target="_blank">
              <button className="border border-white py-1.5 px-4 rounded-lg hover:bg-white hover:text-green-600 transition">
                GitHub
              </button>
            </Link>
          </li>
        </ul>

        {/* Hamburger menu */}
        {/* Hamburger menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 py-4 transition-all">
          <Link href="/" className="px-2 hover:text-green-200">
            Home
          </Link>
          <Link href="/about" className="px-2 hover:text-green-200">
            About
          </Link>
          <Link href="/contact" className="px-2 hover:text-green-200">
            Contact
          </Link>
          <Link href="/try" className="px-2">
            <button className="w-full bg-white text-green-600 font-semibold py-2 rounded-lg hover:bg-green-100 transition">
              Try Now
            </button>
          </Link>
          <Link
            href="https://github.com/your-repo"
            target="_blank"
            className="px-2"
          >
            <button className="w-full border border-white py-2 rounded-lg hover:bg-white hover:text-green-600 transition">
              GitHub
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
