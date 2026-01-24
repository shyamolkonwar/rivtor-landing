"use client";

import { Server, CreditCard, Ghost } from "lucide-react";

interface PillarCardProps {
    icon: React.ReactNode;
    title: string;
    problem: string;
    solutionName: string;
    solution: string;
    isLast?: boolean;
}

function PillarCard({ icon, title, problem, solutionName, solution, isLast }: PillarCardProps) {
    return (
        <div
            className={`p-8 transition-all duration-0 hover:bg-[#FAFAFA] group ${!isLast ? 'border-r border-[#E5E5E5]' : ''
                } hover:border-black`}
        >
            {/* Icon */}
            <div className="mb-6 text-black">
                {icon}
            </div>

            {/* Title */}
            <h3 className="font-sans font-medium text-lg text-[#0A0A0A] mb-6">
                {title}
            </h3>

            {/* Problem Block */}
            <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-2">
                    PROBLEM:
                </span>
                <p className="text-[#525252] italic leading-relaxed">
                    &quot;{problem}&quot;
                </p>
            </div>

            {/* Solution Block */}
            <div>
                <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-2">
                    VOCOWEB SOLUTION:
                </span>
                <p className="text-[#525252] leading-relaxed">
                    <strong className="font-semibold text-[#0A0A0A]">{solutionName}</strong> {solution}
                </p>
            </div>
        </div>
    );
}

export default function PillarsSection() {
    const pillars = [
        {
            icon: <Server size={24} strokeWidth={2} />,
            title: "The Valley of Death",
            problem: "I built the app but can't figure out how to deploy it without everything breaking.",
            solutionName: "Managed MicroVMs",
            solution: "One-click deployment to isolated, scalable infrastructure. No DevOps required.",
        },
        {
            icon: <CreditCard size={24} strokeWidth={2} />,
            title: "The Payment Nightmare",
            problem: "Stripe disabled my account because my 'AI-generated' checkout flow triggered fraud flags.",
            solutionName: "Merchant of Record",
            solution: "We handle all payments, taxes, and compliance. You never touch Stripe directly.",
        },
        {
            icon: <Ghost size={24} strokeWidth={2} />,
            title: "The Ghost Town Effect",
            problem: "I launched but no one came. The app just sits there collecting dust.",
            solutionName: "Built-in Growth Engine",
            solution: "SEO, analytics, and conversion tools baked into every project from day one.",
        },
    ];

    return (
        <section className="border-b border-[#E5E5E5]">
            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <PillarCard
                            key={pillar.title}
                            {...pillar}
                            isLast={index === pillars.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
