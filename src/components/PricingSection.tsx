'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: "Builder",
    price: "$99",
    period: "/month",
    description: "For validating commercial viability.",
    features: [
      "Three live edge deployments",
      "Access to the core engine",
      "Standard identity integration",
    ],
    cta: "Secure Access",
    highlight: false,
  },
  {
    name: "Founder",
    price: "$249",
    period: "/month",
    description: "For scaling revenue-generating assets.",
    features: [
      "Unlimited deployments",
      "Priority generation queue",
      "Access to proprietary kernel modules",
    ],
    cta: "Join the Foundry",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations requiring absolute data sovereignty.",
    features: [
      "Private cloud deployment",
      "Dedicated instances",
      "Custom service level agreements",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 md:py-48 bg-[#070707] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-mono text-xs tracking-widest uppercase text-[#E54826] mb-4">
            Pricing
          </h2>
          <p className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F3F4F6] max-w-4xl mx-auto leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Secure your infrastructure.
          </p>
          <p className="mt-6 font-sans text-lg text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Access to the engine is tiered based on operational capacity.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-[#141414] border p-8 md:p-10 ${
                plan.highlight
                  ? 'border-[#E54826]'
                  : 'border-[#262626]'
              }`}
            >
              <h3 className="font-sans text-2xl font-semibold text-[#F3F4F6] mb-2" style={{ letterSpacing: '-0.01em' }}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-sans text-4xl font-bold text-[#F3F4F6]">
                  {plan.price}
                </span>
                <span className="font-sans text-[#9CA3AF]">{plan.period}</span>
              </div>
              <p className="font-sans text-[#9CA3AF] mb-8 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="font-sans text-sm text-[#9CA3AF] flex items-start gap-2">
                    <span className="text-[#E54826] mt-1">—</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-4 font-mono text-sm uppercase tracking-widest transition-colors ${
                  plan.highlight
                    ? 'bg-[#E54826] text-[#070707] hover:bg-[#C43D1F]'
                    : 'bg-transparent border border-[#262626] text-[#F3F4F6] hover:border-[#F3F4F6]'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
