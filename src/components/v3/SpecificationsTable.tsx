"use client";

export default function SpecificationsTable() {
  const specGroups = [
    {
      title: "Infrastructure",
      items: [
        { label: "Network", value: "Global Edge" },
        { label: "Compute", value: "Auto-Scaling" },
        { label: "Latency", value: "Sub-50ms Worldwide" },
      ]
    },
    {
      title: "Compliance",
      items: [
        { label: "Standards", value: ["SOC2", "ISO 27001", "GDPR"], isTags: true },
        { label: "Data Sovereignty", value: "Geographic Enforcement" },
        { label: "Accessibility", value: "WCAG 2.1 AA" },
      ]
    },
    {
      title: "Commerce",
      items: [
        { label: "Payments", value: "Global Rail Support" },
        { label: "Tax Engine", value: "VAT/GST Automation" },
        { label: "Invoicing", value: "Cross-Border Compliant" },
      ]
    },
    {
      title: "Development",
      items: [
        { label: "Stack", value: "All Frameworks Supported" },
        { label: "Language", value: "Type-First Architecture" },
        { label: "Deployment", value: "Zero-Configuration" },
      ]
    },
    {
      title: "Kernel",
      items: [
        { label: "@rivtor/kernel", value: "Hardened Standard Library" },
        { label: "@rivtor/tenant", value: "Multi-Tenancy Native" },
        { label: "@rivtor/shield", value: "Runtime Compliance Firewall" },
      ]
    },
    {
      title: "Security",
      items: [
        { label: "Data Training", value: "Zero-Retention Policy" },
        { label: "Identity", value: "Enterprise-Grade SSO" },
        { label: "Encryption", value: "Military-Standard AES-256" },
      ]
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto border border-[#1C1E26] rounded bg-[#0E0F12] overflow-hidden py-24 px-6">
      <div className="border-b border-[#1C1E26] bg-[#060608]/50 px-6 py-4 flex justify-between items-center">
        <h3 className="text-[#F4F6FB] text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>System Specifications</h3>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-[#C8D8F0]/20" />
          <div className="size-2 rounded-full bg-[#C8D8F0]/20" />
          <div className="size-2 rounded-full bg-[#C8D8F0]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1C1E26] divide-y sm:divide-y-0">
        {specGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="bg-[#0E0F12] p-6">
            <h4 className="text-[#C8D8F0] text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b border-[#1C1E26]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
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
