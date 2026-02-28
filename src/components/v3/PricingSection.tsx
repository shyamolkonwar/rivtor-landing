"use client";

export default function PricingSection() {
  const plans = [
    {
      name: "Builder",
      price: "$99",
      period: "/month",
      description: "For founders validating commercial architecture before scaling.",
      features: [
        "Three live edge deployments",
        "Core engine access",
        "Standard identity integration",
      ],
      cta: "Request Engine Access",
      highlight: false,
    },
    {
      name: "Founder",
      price: "$249",
      period: "/month",
      description: "For operators scaling revenue-generating environments without ceiling.",
      features: [
        "Unlimited deployments",
        "Priority generation queue",
        "Full kernel module access",
      ],
      cta: "Request Engine Access",
      highlight: true,
    },
    {
      name: "Institutional",
      price: "Custom",
      period: "",
      description: "For organizations that require absolute data sovereignty and dedicated infrastructure.",
      features: [
        "Private cloud deployment",
        "Dedicated managed runtime",
        "Custom service agreements",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="text-center mb-12">
        <h4 className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>Pricing</h4>
        <h2 className="text-[#F4F6FB] text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-tight mx-auto" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
          Access Tiers
        </h2>
        <p className="text-[#8892A4] text-lg mt-6 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
          Three tiers. One architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded border p-5 md:p-6 lg:p-8 ${
              plan.highlight
                ? 'border-[#C8D8F0] bg-[#0E0F12]'
                : 'border-[#1C1E26] bg-[#0E0F12]'
            }`}
          >
            <h3 className="text-[#F4F6FB] text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[#F4F6FB] text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                {plan.price}
              </span>
              <span className="text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{plan.period}</span>
            </div>
            <p className="text-[#8892A4] mb-8 leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              {plan.description}
            </p>

            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-[#8892A4] flex items-start gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  <span className="text-[#C8D8F0] mt-1" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`block w-full text-center py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                plan.highlight
                  ? 'bg-[#C8D8F0] text-[#060608] hover:bg-[#C8D8F0]/90'
                  : 'bg-transparent border border-[#1C1E26] text-[#F4F6FB] hover:border-[#F4F6FB]'
              }`}
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
