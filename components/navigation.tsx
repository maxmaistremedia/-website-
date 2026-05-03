"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileNav = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-2 flex justify-between items-center bg-cream border-b border-warm transition-shadow md:px-12 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <Link href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Max Maistre Media"
            width={168}
            height={42}
            className="h-[96px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="#services"
              className="text-dark text-sm font-normal tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-dark text-sm font-normal tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-dark text-sm font-normal tracking-wider uppercase opacity-70 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden flex-col gap-[5px] cursor-pointer p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open menu"
        >
          <span className="block w-[22px] h-[2px] bg-dark rounded-sm transition-all" />
          <span className="block w-[22px] h-[2px] bg-dark rounded-sm transition-all" />
          <span className="block w-[22px] h-[2px] bg-dark rounded-sm transition-all" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 left-0 right-0 bg-cream border-b border-warm px-6 py-5 z-40 flex-col gap-4 ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <Link
          href="#services"
          onClick={closeMobileNav}
          className="text-sm tracking-widest uppercase text-dark opacity-70"
        >
          Services
        </Link>
        <Link
          href="#about"
          onClick={closeMobileNav}
          className="text-sm tracking-widest uppercase text-dark opacity-70"
        >
          About
        </Link>
        <Link
          href="#contact"
          onClick={closeMobileNav}
          className="text-sm tracking-widest uppercase text-dark opacity-70"
        >
          Contact
        </Link>
        <a
          href="mailto:maxmaistre@gmail.com"
          className="bg-orange text-white px-5 py-2.5 rounded-full text-sm font-medium text-center"
        >
          {"Let's Talk"}
        </a>
      </div>
    </>
  );
}
