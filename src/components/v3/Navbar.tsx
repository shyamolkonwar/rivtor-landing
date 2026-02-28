"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-[#1C1E26] bg-[#060608]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 md:px-12 max-w-[1440px] mx-auto w-full relative">
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
      <div className="flex gap-3">
        <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded border border-[#1C1E26] bg-transparent hover:border-[#C8D8F0]/50 hover:bg-[#0E0F12] transition-all text-[#F4F6FB] text-sm font-bold h-9 px-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Log In
        </button>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded bg-[#C8D8F0] hover:bg-[#C8D8F0]/90 transition-colors text-[#060608] text-sm font-bold h-9 px-4 tracking-wide uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Enter The Foundry
        </button>
      </div>
    </header>
  );
}
