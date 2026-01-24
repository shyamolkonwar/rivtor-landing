"use client";

import { useState } from "react";
import LowIntentModal from "./modals/LowIntentModal";
import HighIntentForm from "./modals/HighIntentForm";

type BillingPeriod = "monthly" | "yearly";

interface PlanFeature {
    text: string;
}

interface PricingPlan {
    name: string;
    price: { monthly: number; yearly: number };
    description: string;
    features: PlanFeature[];
    isRecommended?: boolean;
    buttonText: string;
    intent: "low" | "high";
}

const plans: PricingPlan[] = [
    {
        name: "Builder",
        price: { monthly: 39, yearly: 29 },
        description: "For indie hackers testing ideas",
        features: [
            { text: "3 Active Projects" },
            { text: "Basic Analytics Dashboard" },
            { text: "Community Support" },
            { text: "Standard Deployment" },
            { text: "SSL Certificates" },
        ],
        buttonText: "Start Building",
        intent: "low",
    },
    {
        name: "Founder",
        price: { monthly: 79, yearly: 59 },
        description: "For serious entrepreneurs scaling up",
        features: [
            { text: "Unlimited Projects" },
            { text: "Advanced Analytics + AI Insights" },
            { text: "Priority Support (24h Response)" },
            { text: "Merchant of Record Integration" },
            { text: "Custom Domain + SSL" },
            { text: "SEO Optimization Tools" },
            { text: "Revenue Guarantee Coverage" },
        ],
        isRecommended: true,
        buttonText: "Start Business",
        intent: "high",
    },
];

export default function PricingSection() {
    const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
    const [isLowIntentOpen, setIsLowIntentOpen] = useState(false);
    const [isHighIntentOpen, setIsHighIntentOpen] = useState(false);

    const handleCtaClick = (intent: "low" | "high") => {
        if (intent === "low") {
            setIsLowIntentOpen(true);
        } else {
            setIsHighIntentOpen(true);
        }
    };

    return (
        <>
            <section id="pricing" className="py-20 border-b border-[#E5E5E5]">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-4">
                            PRICING
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-[#0A0A0A]">
                            Simple, Transparent Pricing
                        </h2>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.05em]">
                            <button
                                onClick={() => setBillingPeriod("monthly")}
                                className={`px-4 py-2 transition-all ${billingPeriod === "monthly"
                                        ? "text-[#0A0A0A] border-b-2 border-black"
                                        : "text-[#525252] border-b-2 border-transparent"
                                    }`}
                            >
                                Monthly
                            </button>
                            <span className="text-[#E5E5E5] mx-2">/</span>
                            <button
                                onClick={() => setBillingPeriod("yearly")}
                                className={`px-4 py-2 transition-all ${billingPeriod === "yearly"
                                        ? "text-[#0A0A0A] border-b-2 border-black"
                                        : "text-[#525252] border-b-2 border-transparent"
                                    }`}
                            >
                                Yearly
                                <span className="ml-2 text-[#22C55E]">-25%</span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative p-8 ${plan.isRecommended
                                        ? "border-2 border-black"
                                        : "border border-[#E5E5E5]"
                                    }`}
                            >
                                {/* Recommended Badge */}
                                {plan.isRecommended && (
                                    <div className="absolute -top-3 right-4 bg-black text-white font-mono text-xs uppercase tracking-[0.05em] px-3 py-1">
                                        RECOMMENDED
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-[#525252]">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-[#0A0A0A]">
                                        ${plan.price[billingPeriod]}
                                    </span>
                                    <span className="text-[#525252] ml-1">/mo</span>
                                    {billingPeriod === "yearly" && (
                                        <span className="block text-sm text-[#525252] mt-1">
                                            Billed annually (${plan.price.yearly * 12}/year)
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-[#525252]"
                                        >
                                            <span className="text-[#0A0A0A] font-bold">+</span>
                                            <span>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handleCtaClick(plan.intent)}
                                    className={`w-full h-12 font-mono text-sm uppercase tracking-[0.05em] transition-opacity hover:opacity-90 ${plan.isRecommended
                                            ? "bg-black text-white"
                                            : "bg-white text-black border border-black"
                                        }`}
                                    style={{ borderRadius: 0 }}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modals */}
            <LowIntentModal
                isOpen={isLowIntentOpen}
                onClose={() => setIsLowIntentOpen(false)}
            />
            <HighIntentForm
                isOpen={isHighIntentOpen}
                onClose={() => setIsHighIntentOpen(false)}
            />
        </>
    );
}
