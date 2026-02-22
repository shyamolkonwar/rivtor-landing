"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070707]/90 backdrop-blur-md border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold tracking-widest uppercase text-[#F3F4F6]">
                        RIVTOR
                    </span>
                </Link>

                {/* Sign In */}
                <div>
                    <Link
                        href="https://app.rivtor.com"
                        className="font-mono text-xs uppercase tracking-widest text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
}
