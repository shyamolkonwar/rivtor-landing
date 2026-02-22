'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 md:py-48 bg-[#070707] border-t border-[#262626]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-mono text-xs tracking-widest uppercase text-[#E54826] mb-4">
            Operational Intelligence
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="border-t border-[#262626]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="font-sans text-lg font-medium text-[#F3F4F6] pr-8 group-hover:text-[#E54826] transition-colors" style={{ letterSpacing: '-0.01em' }}>
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-[#9CA3AF] transition-transform duration-200 ease-out flex-shrink-0 ${openIndex === index ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ease-out ${openIndex === index ? "max-h-40 pb-6" : "max-h-0"
                  }`}
              >
                <p className="font-sans text-[#9CA3AF] leading-relaxed pr-12">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
