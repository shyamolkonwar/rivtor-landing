"use client";

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "The factory",
      status: "Live",
      description: "Unmetered generation deployed to a managed, globally distributed edge infrastructure. Zero configuration required.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      phase: "Phase 2",
      title: "The fortress",
      status: "Rolling Alpha",
      description: "Hardware-isolated micro-virtual machines designed for data-sensitive enterprise workloads requiring absolute physical separation.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      phase: "Phase 3",
      title: "The standard",
      status: "Deploying",
      description: "The release of proprietary software development kits to standardize enterprise identity and global commerce across the ecosystem.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      phase: "Phase 4",
      title: "The intellectual layer",
      status: "Internal Testing",
      description: "The transition to an autonomous product manager that converts abstract corporate intent into rigorous technical specifications prior to deployment.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#1C1E26] pb-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>The Roadmap</h4>
          <h2 className="text-[#F4F6FB] text-2xl md:text-3xl font-bold uppercase tracking-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            The progressive deployment.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {phases.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col gap-4 rounded border border-[#1C1E26] bg-[#0E0F12] p-5 md:p-6 transition-all duration-300 hover:border-[#C8D8F0]/30 hover:shadow-[0_0_30px_-10px_rgba(200,216,240,0.1)]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#8892A4] uppercase tracking-wider" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                {item.phase}
              </span>
              <span className="text-xs text-[#C8D8F0] uppercase tracking-wider" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                {item.status}
              </span>
            </div>
            <div className="size-12 rounded bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0] mb-2 group-hover:border-[#C8D8F0]/40 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-[#F4F6FB] text-xl font-bold mb-3" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              {item.title}
            </h3>
            <p className="text-[#8892A4] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
