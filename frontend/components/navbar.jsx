'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-[rgba(97,79,60,0.75)] to-[rgba(97,79,60,0.75)] text-white shadow-md py-4 px-6 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">📚 Book Catalogue</h1>
        <div className="space-x-6 text-lg">
          <Link
            href="/"
            className={`hover:text-yellow-300 transition ${
              pathname === "/" ? "underline font-semibold" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`hover:text-yellow-300 transition ${
              pathname === "/about" ? "underline font-semibold" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`hover:text-yellow-300 transition ${
              pathname === "/contact" ? "underline font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
