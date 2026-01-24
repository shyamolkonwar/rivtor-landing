import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#FAFAFA] py-12">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-sans font-semibold text-lg tracking-[-0.04em] text-[#0A0A0A]"
                    >
                        VocoWeb
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="#manifesto"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Manifesto
                        </Link>
                        <Link
                            href="#pricing"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/privacy"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] hover:text-[#0A0A0A] transition-colors"
                        >
                            Terms
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="font-mono text-xs tracking-[0.05em] text-[#525252]">
                        © 2026 FUSION FOCUS. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}
