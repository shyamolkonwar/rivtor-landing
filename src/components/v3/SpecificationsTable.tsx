"use client";

export default function SpecificationsTable() {
  const specGroups = [
    {
      title: "Infrastructure",
      items: [
        { label: "Network", value: "Global Edge Distribution" },
        { label: "Compute", value: "Auto-Scaling Managed Runtime" },
        { label: "Latency", value: "Sub-50ms Worldwide" },
        { label: "Configuration", value: "Zero" },
      ]
    },
    {
      title: "Compliance",
      items: [
        { label: "Standards", value: ["SOC2", "ISO 27001", "GDPR"], isTags: true },
        { label: "Data Boundary", value: "Geographic Enforcement" },
        { label: "Accessibility", value: "WCAG 2.1 AA" },
      ]
    },
    {
      title: "Commerce",
      items: [
        { label: "Payments", value: "Global Rail Support" },
        { label: "Tax Engine", value: "VAT / GST Automation" },
        { label: "Invoicing", value: "Cross-Border Compliant" },
      ]
    },
    {
      title: "Security",
      items: [
        { label: "Data Training", value: "Zero-Retention Policy" },
        { label: "Identity", value: "Enterprise-Grade SSO" },
        { label: "Encryption", value: "AES-256" },
      ]
    },
    {
      title: "Development",
      items: [
        { label: "Stack", value: "All Frameworks Supported" },
        { label: "Architecture", value: "Type-First · Isomorphic" },
        { label: "Code Generation", value: "Autonomous · Zero-Drift" },
        { label: "Language Support", value: "TypeScript · Python · Go" },
      ]
    },
    {
      title: "Autonomous Operations",
      items: [
        { label: "Agent Layer", value: "Executive · Engineering · Growth" },
        { label: "Execution", value: "Directive-to-Deployment" },
        { label: "Organizational", value: "Self-Managing Runtime" },
        { label: "Memory", value: "Persistent Operational Context" },
      ]
    },
  ];

  return (
    <section id="specs" className="w-full max-w-6xl mx-auto border border-[#1C1E26] rounded bg-[#0E0F12] overflow-hidden py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="border-b border-[#1C1E26] bg-[#060608]/50 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4">
        <h3 className="text-[#F4F6FB] text-xs md:text-sm font-bold uppercase tracking-widest flex-shrink" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>The Standard</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="size-2 rounded-full bg-[#C8D8F0]/20" />
          <div className="size-2 rounded-full bg-[#C8D8F0]/20" />
          <div className="size-2 rounded-full bg-[#C8D8F0]" />
        </div>
      </div>

      {/* Mobile Accordion Layout - Shows only on mobile */}
      <div className="block md:hidden w-full">
        {specGroups.map((group, groupIndex) => (
          <details key={groupIndex} className="group border-b border-[#1C1E26]">
            <summary className="flex justify-between items-center font-bold uppercase tracking-widest text-xs py-4 cursor-pointer text-[#F4F6FB] list-none">
              {group.title}
              <span className="transition duration-300 group-open:rotate-45 text-[#8892A4] text-lg leading-none">+</span>
            </summary>

            <div className="pb-6 space-y-4">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <p className="text-[#8892A4] text-[10px] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                    {item.label}
                  </p>
                  {item.isTags ? (
                    <div className="flex gap-1.5 flex-wrap">
                      {item.value.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-[#C8D8F0]/10 text-[#C8D8F0] px-2 py-0.5 rounded text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#F4F6FB] text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      {/* Desktop Grid Layout - Shows only on desktop */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1E26] divide-y sm:divide-y-0">
        {specGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-[#0E0F12] p-4 md:p-6">
            <h4 className="text-[#C8D8F0] text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 pb-2 border-b border-[#1C1E26]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
              {group.title}
            </h4>
            <div className="space-y-3">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <p className="text-[#8892A4] text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>{item.label}</p>
                  {item.isTags ? (
                    <div className="flex gap-1.5 flex-wrap">
                      {item.value.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-[#C8D8F0]/10 text-[#C8D8F0] px-2 py-0.5 rounded text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[#F4F6FB] text-sm font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
