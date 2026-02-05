"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
            <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/images/logo.png"
                            alt="VocoWeb Logo"
                            fill
                            className="object-contain"
                            sizes="32px"
                        />
                    </div>
                    <span className="font-mono text-lg font-bold tracking-tight text-white group-hover:text-safety-orange transition-colors">
                        VOCOWEB
                    </span>
                </Link>

                {/* Divider */}
                <span className="w-px h-4 bg-gray-700 hidden md:inline-block" />

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#architecture"
                        className="font-mono text-xs uppercase tracking-[0.12em] text-gray-300 hover:text-signal-white transition-colors"
                    >
                        Architecture
                    </Link>
                    <Link
                        href="#pricing"
                        className="font-mono text-xs uppercase tracking-[0.12em] text-gray-300 hover:text-signal-white transition-colors"
                    >
                        Pricing
                    </Link>
                </div>

                {/* CTA */}
                {/* CTA */}
                <a
                    href="https://app.vocoweb.in"
                    className="ml-2 bg-safety-orange text-void-black font-mono text-xs uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:bg-orange-500 transition-colors"
                >
                    Start Building
                </a>
            </div>
        </nav>
    );
}
