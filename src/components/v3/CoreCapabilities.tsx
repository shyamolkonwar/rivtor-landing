"use client";

export default function CoreCapabilities() {
  const principles = [
    {
      title: "Zero-latency deployment.",
      description: "Bypassing the friction of traditional engineering. A single directive architects secure databases and managed runtimes instantaneously.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Absolute compliance.",
      description: "Built for the rigid logic of the physical world. Audit-ready environments generated to exact regulatory specifications.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Institutional architecture.",
      description: "Production-ready infrastructure designed for serious operators. No fragile spreadsheets. No unscalable visual builders.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
  ];

  return (
    <section id="core-capabilities" className="w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#1C1E26] pb-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>The Manifesto</h4>
          <h2 className="text-[#F4F6FB] text-2xl md:text-3xl font-bold uppercase tracking-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            Speed is no longer a feature. It is the foundation.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 rounded border border-[#1C1E26] bg-[#0E0F12] p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-[#C8D8F0]/30 hover:shadow-[0_0_30px_-10px_rgba(200,216,240,0.1)]"
          >
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-[#C8D8F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="size-12 rounded bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0] mb-2 group-hover:border-[#C8D8F0]/40 transition-colors">
              {principle.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#F4F6FB] text-lg md:text-xl font-bold" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>{principle.title}</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
