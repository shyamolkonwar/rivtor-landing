"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Don't close if clicking on the hamburger button
      const hamburgerButton = (event.target as Element)?.closest('[aria-label="Toggle menu"]');
      if (menuRef.current && !menuRef.current.contains(target) && !hamburgerButton) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-[#1C1E26] bg-[#060608]/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-6 lg:px-12 py-3 md:py-4 h-14 md:h-16 max-w-[1440px] mx-auto w-full relative">
      <div className="flex items-center gap-4 text-[#F4F6FB]">
        <div className="size-6 text-[#C8D8F0]">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4L4 44H44L24 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" />
            <circle cx="24" cy="28" fill="currentColor" r="4" />
          </svg>
        </div>
        <h2 className="text-[#F4F6FB] text-lg font-bold leading-tight tracking-wider uppercase" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
          RIVTOR
        </h2>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
        <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Platform
        </Link>
        <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Solutions
        </Link>
        <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Documentation
        </Link>
        <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Pricing
        </Link>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-3">
        <button className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded border border-[#1C1E26] bg-transparent hover:border-[#C8D8F0]/50 hover:bg-[#0E0F12] transition-all text-[#F4F6FB] text-sm font-bold h-9 px-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Log In
        </button>
        <button className="min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded bg-[#C8D8F0] hover:bg-[#C8D8F0]/90 transition-colors text-[#060608] text-sm font-bold h-9 px-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Request Engine Access
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center gap-1.5 w-8 h-8 text-[#C8D8F0]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0E0F12] border-b border-[#1C1E26] shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-0">
          {/* Nav Links */}
          <Link
            href="#"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "50ms" : "0ms" }}
          >
            Platform
          </Link>
          <Link
            href="#"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "100ms" : "0ms" }}
          >
            Solutions
          </Link>
          <Link
            href="#"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "150ms" : "0ms" }}
          >
            Documentation
          </Link>
          <Link
            href="#"
            onClick={closeMenu}
            className="text-[#8892A4] hover:text-[#C8D8F0] transition-colors text-sm font-medium py-3 border-b border-[#1C1E26] transform transition-all duration-300 ease-out"
            style={{ fontFamily: "var(--font-inter), sans-serif", transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)", opacity: isMobileMenuOpen ? 1 : 0, transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
          >
            Pricing
          </Link>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={closeMenu}
              className="w-full cursor-pointer items-center justify-center overflow-hidden rounded border border-[#1C1E26] bg-transparent hover:border-[#C8D8F0]/50 hover:bg-[#0E0F12] transition-all text-[#F4F6FB] text-sm font-bold h-10 px-4 tracking-wide uppercase flex"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Log In
            </button>
            <button
              onClick={closeMenu}
              className="w-full cursor-pointer items-center justify-center overflow-hidden rounded bg-[#C8D8F0] hover:bg-[#C8D8F0]/90 transition-colors text-[#060608] text-sm font-bold h-10 px-4 tracking-wide uppercase flex"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Request Engine Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
