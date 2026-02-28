"use client";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-4xl gap-8 relative py-20 px-6 mx-auto">
      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8D8F0]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* System Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8D8F0]/20 bg-[#C8D8F0]/5 text-xs text-[#C8D8F0] uppercase tracking-widest" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8D8F0] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8D8F0]" />
        </span>
        System Operational
      </div>

      {/* Headlines */}
      <div className="flex flex-col gap-4 relative z-10">
        <h1 className="text-[#F4F6FB] text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight uppercase" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
          Engineering the end of legacy software.
        </h1>
        <h2 className="text-[#8892A4] text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          The foundational engine for instant, production-grade infrastructure. We collapse six-month development cycles into a single moment of execution.
        </h2>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center relative z-10">
        <button className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded bg-[#C8D8F0] text-[#060608] text-sm font-bold h-12 px-6 tracking-wide hover:shadow-[0_0_20px_-5px_#C8D8F0] transition-all uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          Enter The Foundry
        </button>
        <button className="flex w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded border border-[#1C1E26] bg-transparent text-[#F4F6FB] text-sm font-bold h-12 px-6 tracking-wide hover:border-[#C8D8F0]/50 hover:bg-[#0E0F12] transition-all uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
          View Documentation
        </button>
      </div>

      {/* Abstract Technical Graphic */}
      <div className="mt-16 w-full h-64 md:h-80 relative rounded border border-[#1C1E26] bg-[#0E0F12]/50 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1C1E26_1px,transparent_1px),linear-gradient(to_bottom,#1C1E26_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <div className="flex items-center gap-16 opacity-80">
          {/* Left Node */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded border border-[#C8D8F0]/40 bg-[#060608] flex items-center justify-center shadow-[0_0_15px_-5px_#C8D8F0]">
              <svg className="w-6 h-6 text-[#C8D8F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-[#C8D8F0]/0 via-[#C8D8F0]/50 to-[#C8D8F0]/0" />
          </div>
          {/* Center Core */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#C8D8F0]/10 blur-xl rounded-full" />
            <div className="w-24 h-24 rounded-full border border-[#C8D8F0]/30 bg-[#060608] flex items-center justify-center relative z-10">
              <div className="w-16 h-16 rounded-full border border-[#C8D8F0]/60 flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-[#C8D8F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          {/* Right Node */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded border border-[#C8D8F0]/40 bg-[#060608] flex items-center justify-center shadow-[0_0_15px_-5px_#C8D8F0]">
              <svg className="w-6 h-6 text-[#C8D8F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-[#C8D8F0]/0 via-[#C8D8F0]/50 to-[#C8D8F0]/0" />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-[10px] text-[#C8D8F0]/60" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>SYS_V.4.0.2 // ONLINE</div>
      </div>
    </section>
  );
}
