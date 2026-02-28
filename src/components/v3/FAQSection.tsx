"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the Rivtor Kernel?",
      answer: "It is our proprietary standard library. While others rely on generative probability, the Kernel provides deterministic security. It is a pre-audited, hard-coded layer that handles authentication, payments, and legal compliance. It ensures that every Rivtor application is enterprise-grade by default.",
    },
    {
      question: "How does the infrastructure scale?",
      answer: "We utilize a global edge network architecture. Unlike traditional servers that hit capacity limits, Rivtor deployments automatically replicate across global availability zones, ensuring enterprise-grade uptime from the first day.",
    },
    {
      question: "Do I retain asset sovereignty?",
      answer: "Absolute sovereignty. You are building an asset, not renting a service. You retain full ownership of your codebase and data, with the ability to export or self-host your application at any time using our standard open-source libraries.",
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
