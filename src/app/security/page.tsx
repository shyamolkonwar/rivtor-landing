'use client';

import Navbar from "@/components/v3/Navbar";
import Footer from "@/components/v3/Footer";

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
            <Navbar />

            {/* Header */}
            <header className="max-w-6xl mx-auto pt-32 pb-20 px-6 relative z-10">
                <div className="text-[#C8D8F0] text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                    Infrastructure Security
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                    Safety in Structure
                </h1>
                <p className="text-sm text-[#8892A4] leading-relaxed max-w-2xl text-lg" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    We treat your project data as your asset, not ours. Rivtor is built on a foundation of isolation, encryption, and zero-training guarantees.
                </p>
            </header>

            {/* Security Pillars */}
            <section className="max-w-6xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 bg-[#0E0F12] border border-[#1C1E26]">
                        <div className="mb-6 w-12 h-12 bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>Compliance as code</h3>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We do not rely on generative probability for security. The Rivtor Kernel is a hardened standard library that enforces compliance, identity management, and data residency at the compiler level.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-[#0E0F12] border border-[#1C1E26]">
                        <div className="mb-6 w-12 h-12 bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 014 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>Data boundary enforcement</h3>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            For the European market, compliance is binary. The runtime environment strictly enforces geographical data boundaries, ensuring applications meet enterprise governance from the first deployment.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-[#0E0F12] border border-[#1C1E26]">
                        <div className="mb-6 w-12 h-12 bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>Universal access governance</h3>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Identity is the perimeter. Rivtor inherits a banking-grade identity provider, enforcing multi-tenancy, role-based access control, and enterprise single sign-on at the infrastructure level.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 bg-[#0E0F12] border border-[#1C1E26]">
                        <div className="mb-6 w-12 h-12 bg-[#060608] border border-[#1C1E26] flex items-center justify-center text-[#C8D8F0]">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>Zero-training guarantee</h3>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We do not use your private project code to train our public AI models. Your proprietary algorithms, business logic, and trade secrets remain confidential and are never ingested into a shared knowledge base.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
