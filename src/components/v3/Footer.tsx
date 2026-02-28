"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1C1E26] pt-12 pb-8 mt-10">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#F4F6FB]">
            <div className="size-4 text-[#C8D8F0]">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L4 44H44L24 4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </div>
            <h2 className="text-[#F4F6FB] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              RIVTOR
            </h2>
          </div>
          <p className="text-[#8892A4] text-sm max-w-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Advanced infrastructure for the next generation of industrial applications.
          </p>
        </div>

        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-4">
            <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Product
            </h4>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Features
            </Link>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Integrations
            </Link>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Security
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Company
            </h4>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              About
            </Link>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Careers
            </Link>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Resources
            </h4>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Documentation
            </Link>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              API Reference
            </Link>
            <Link href="#" className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Status
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#1C1E26] flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-12">
        <p className="text-[#8892A4] text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>© 2024 Rivtor Industries. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[#8892A4] hover:text-[#C8D8F0] text-xs transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[#8892A4] hover:text-[#C8D8F0] text-xs transition-colors" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
