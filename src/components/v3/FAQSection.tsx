"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Rivtor?",
      answer: "Rivtor is the engine that converts a single directive into a fully operational, production-grade digital environment. It is infrastructure for autonomous organizational operation — where the organization does not need managing, it runs.",
    },
    {
      question: "How is Rivtor different from other AI tools?",
      answer: "The difference between a tool and an agent is the difference between a hammer and a contractor. Rivtor builds agents that hold roles, not tools that complete tasks. Agents that maintain context, hold accountability, and operate with full company understanding — not just single-task execution.",
    },
    {
      question: "What is the Kernel?",
      answer: "The Kernel is our proprietary standard library that provides deterministic security. It is a pre-audited, hard-coded layer that handles identity, payments, and compliance at the infrastructure level. Every environment inherits enterprise-grade security by default. It cannot be misconfigured because it does not require configuration.",
    },
    {
      question: "How fast can I deploy?",
      answer: "Rivtor deploys production-grade infrastructure in under sixty seconds. Zero configuration required. Your environment is operational, globally distributed, and revenue-ready from the first deployment.",
    },
    {
      question: "Is my data secure and sovereign?",
      answer: "Absolute data sovereignty. Compliance is enforced geographically at the infrastructure level — not by policy documents, but by the architecture itself. European operations meet GDPR from the first deployment. There is no remediation phase because there is no non-compliant phase.",
    },
    {
      question: "What happens to my data and code?",
      answer: "You retain full ownership of your codebase and data. Rivtor operates under a zero-retention policy — your data is not used for model training. You can export or self-host your application at any time.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 py-16 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="text-center mb-12">
        <h4 className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>Operational Intelligence</h4>
      </div>

      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-t border-[#1C1E26]"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full min-h-14 py-4 md:py-6 flex items-center justify-between text-left group"
              aria-expanded={openIndex === index}
            >
              <span className="text-sm md:text-lg font-medium text-[#F4F6FB] pr-8 group-hover:text-[#C8D8F0] transition-colors" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                {faq.question}
              </span>
              <span
                className={`text-2xl text-[#8892A4] transition-transform duration-200 ease-out flex-shrink-0 ${openIndex === index ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ease-out ${openIndex === index ? "max-h-40 pb-4 md:pb-6" : "max-h-0"}`}
            >
              <p className="text-[#8892A4] leading-relaxed pr-8 md:pr-12" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
