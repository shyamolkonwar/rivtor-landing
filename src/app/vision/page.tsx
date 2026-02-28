'use client';

import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function BrochurePage() {

  const modules = [
    {
      id: '01',
      title: '@rivtor/kernel',
      description: 'The hardened standard library that enforces compliance, identity management, and data residency at the compiler level.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: '02',
      title: '@rivtor/tenant',
      description: 'Enterprise-grade multi-tenancy with role-based access control, enforced at the infrastructure level.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: '03',
      title: '@rivtor/shield',
      description: 'Runtime compliance firewall that blocks non-compliant traffic and enforces geographical data boundaries.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: '04',
      title: '@rivtor/edge',
      description: 'Global edge network with sub-50ms latency. Deploy to 150+ locations worldwide from a single command.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
      <Navbar />

      <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            Product Architecture
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            The Proprietary<br />Module System
          </h1>
          <p className="text-lg text-[#8892A4] max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Four core modules that form the foundation of the Rivtor infrastructure engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-8 bg-[#0E0F12] border border-[#1C1E26] hover:border-[#C8D8F0]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="size-12 rounded bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0] shrink-0">
                  {module.icon}
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-xs text-[#8892A4]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>{module.id}</span>
                  <h3 className="text-2xl font-bold text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                    {module.title}
                  </h3>
                  <p className="text-[#8892A4] leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    {module.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-[#8892A4]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            Want to learn more about our architecture?
          </p>
          <a
            href="/contact"
            className="inline-flex mt-4 min-w-[160px] cursor-pointer items-center justify-center rounded bg-[#C8D8F0] text-[#060608] text-sm font-bold h-12 px-6 tracking-wide hover:bg-[#C8D8F0]/90 transition-all uppercase"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            Contact Engineering
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
