'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#262626] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="font-mono text-sm tracking-widest uppercase text-[#9CA3AF] mb-4">
            Deploy reality.
          </h3>
          <Link
            href="#pricing"
            className="inline-block bg-[#E54826] text-[#070707] font-mono text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#C43D1F] transition-colors"
          >
            Request Engine Access
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link href="/privacy" className="font-mono text-xs tracking-widest uppercase text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="font-mono text-xs tracking-widest uppercase text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors">
            Terms
          </Link>
          <Link href="/security" className="font-mono text-xs tracking-widest uppercase text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors">
            Security
          </Link>
          <Link href="/report" className="font-mono text-xs tracking-widest uppercase text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors">
            Report
          </Link>
          <Link href="/contact" className="font-mono text-xs tracking-widest uppercase text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono text-xs tracking-wider text-[#9CA3AF]">
            © 2026 Rivtor.
          </p>
        </div>
      </div>
    </footer>
  );
}
