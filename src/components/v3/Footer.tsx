"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const linkCategories = [
    {
      id: "product",
      title: "Product",
      links: [
        { href: "/#core-capabilities", label: "Features" },
        { href: "#", label: "Integrations" },
        { href: "/security", label: "Security" },
      ]
    },
    {
      id: "company",
      title: "Company",
      links: [
        { href: "#", label: "About" },
        { href: "#", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ]
    },
    {
      id: "resources",
      title: "Resources",
      links: [
        { href: "#", label: "Documentation" },
        { href: "#", label: "API Reference" },
        { href: "#", label: "Status" },
      ]
    },
  ];

  return (
    <footer className="w-full border-t border-[#1C1E26] pt-8 md:pt-12 pb-8 mt-10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 w-full">
        {/* Mobile: Centered Stacked Layout */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-0">
          {/* Logo & Tagline - Centered on mobile */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
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
            <p className="text-[#8892A4] text-sm max-w-xs text-center md:text-left" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Advanced infrastructure for the next generation of industrial applications.
            </p>
          </div>

          {/* Link Categories - Accordions on mobile, Horizontal on desktop */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full md:w-auto">
            {linkCategories.map((category) => {
              const isOpen = openSections.includes(category.id);
              return (
                <div key={category.id} className="w-full md:w-auto">
                  {/* Mobile Accordion Header - Desktop: Just Title */}
                  <button
                    onClick={() => toggleSection(category.id)}
                    className="md:cursor-default flex items-center justify-between md:justify-start w-full md:w-auto py-2 md:py-0"
                  >
                    <h4 className="text-[#F4F6FB] font-bold uppercase text-sm" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                      {category.title}
                    </h4>
                    {/* Mobile +/- Icon */}
                    <span className="md:hidden text-[#C8D8F0] text-lg leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Links - Hidden/Collapsed on mobile when closed */}
                  <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-48 mt-3" : "max-h-0 md:max-h-none md:mt-3"}`}>
                    {category.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[#8892A4] hover:text-[#C8D8F0] text-sm transition-colors"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legal & Copyright - Stacked on mobile, side-by-side on desktop */}
      <div className="max-w-[1440px] mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#1C1E26] flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6 lg:px-12 w-full text-center md:text-left">
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
