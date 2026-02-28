"use client";

export default function SpecificationsSection() {
  const specs = [
    {
      category: "Infrastructure",
      items: [
        "Serverless edge network.",
        "Containerized build environments.",
        "Sub-100ms cold starts.",
      ],
    },
    {
      category: "Compliance",
      items: [
        "EU-native data residency.",
        "Automated right to be forgotten.",
        "WCAG 2.1 AA enforced.",
      ],
    },
    {
      category: "Commerce",
      items: [
        "Stripe Connect integration.",
        "Pre-built pricing user interface.",
        "EU-compliant PDF invoice generation.",
      ],
    },
    {
      category: "Code Standards",
      items: [
        "React and Node architecture.",
        "TypeScript native.",
        "Full GitHub synchronization.",
      ],
    },
  ];

  return (
    <section className="w-full border-y border-[#1C1E26] bg-[#0E0F12] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h4 className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>The Specifications</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <div key={index}>
              <h3 className="text-xs text-[#8892A4] uppercase tracking-widest mb-6 pb-3 border-b border-[#1C1E26]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                {spec.category}
              </h3>
              <ul className="space-y-3">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[#8892A4] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
