"use client";

export default function ArchitectureSection() {
  const features = [
    {
      id: "01",
      title: "Compliance as code.",
      description: "We do not rely on generative probability for security. The Rivtor Kernel is a hardened standard library that enforces compliance, identity management, and data residency at the compiler level. The logic is injected, not written.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Data boundary enforcement.",
      description: "For the European market, compliance is binary. The runtime environment strictly enforces geographical data boundaries, ensuring applications meet enterprise governance from the first deployment.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Integrated merchant infrastructure.",
      description: "Revenue logic is native to the environment. The architecture creates a direct bridge between application functions and global financial rails, handling payments, invoicing, and tax calculations autonomously.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      id: "04",
      title: "Universal access governance.",
      description: "Identity is the perimeter. Rivtor inherits a banking-grade identity provider, enforcing multi-tenancy, role-based access control, and enterprise single sign-on at the infrastructure level.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      )
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#1C1E26] pb-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>The Architecture</h4>
          <h2 className="text-[#F4F6FB] text-2xl md:text-3xl font-bold uppercase tracking-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            Proprietary technology.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group relative flex flex-col gap-4 rounded border border-[#1C1E26] bg-[#0E0F12] p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-[#C8D8F0]/30 hover:shadow-[0_0_30px_-10px_rgba(200,216,240,0.1)]"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="size-12 rounded bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0] group-hover:border-[#C8D8F0]/40 transition-colors shrink-0">
                {feature.icon}
              </div>
              <span className="text-xs text-[#8892A4]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>{feature.id}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#F4F6FB] text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>{feature.title}</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
