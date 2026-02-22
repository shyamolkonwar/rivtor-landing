'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Server, EyeOff } from "lucide-react";

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#070707] text-[#F3F4F6]">
            <Navbar />

            {/* Header */}
            <header className="container pt-32 pb-20 max-w-6xl relative z-10">
                <div className="font-mono text-xs text-[#E54826] uppercase tracking-wider mb-4">
                    Infrastructure Security
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F3F4F6] mb-6 leading-tight">
                    Safety in Structure
                </h1>
                <p className="font-mono text-sm text-[#9CA3AF] leading-relaxed max-w-2xl text-lg">
                    We treat your project data as your asset, not ours. Rivtor is built on a foundation of isolation, encryption, and zero-training guarantees.
                </p>
            </header>

            {/* Security Pillars */}
            <section className="container max-w-6xl pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 bg-[#141414] border border-[#262626]">
                        <div className="mb-6 w-12 h-12 bg-[#070707] border border-[#262626] flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-[#E54826]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F3F4F6]">Compliance as code</h3>
                        <p className="leading-relaxed text-[#9CA3AF]">
                            We do not rely on generative probability for security. The Rivtor Kernel is a hardened standard library that enforces compliance, identity management, and data residency at the compiler level. The logic is injected, not written.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-[#141414] border border-[#262626]">
                        <div className="mb-6 w-12 h-12 bg-[#070707] border border-[#262626] flex items-center justify-center">
                            <Server className="w-6 h-6 text-[#E54826]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F3F4F6]">Data boundary enforcement</h3>
                        <p className="leading-relaxed text-[#9CA3AF]">
                            For the European market, compliance is binary. The runtime environment strictly enforces geographical data boundaries, ensuring applications meet enterprise governance from the first deployment.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-[#141414] border border-[#262626]">
                        <div className="mb-6 w-12 h-12 bg-[#070707] border border-[#262626] flex items-center justify-center">
                            <Lock className="w-6 h-6 text-[#E54826]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F3F4F6]">Universal access governance</h3>
                        <p className="leading-relaxed text-[#9CA3AF]">
                            Identity is the perimeter. Rivtor inherits a banking-grade identity provider, enforcing multi-tenancy, role-based access control, and enterprise single sign-on at the infrastructure level.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-8 bg-[#141414] border border-[#262626]">
                        <div className="mb-6 w-12 h-12 bg-[#070707] border border-[#262626] flex items-center justify-center">
                            <EyeOff className="w-6 h-6 text-[#E54826]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#F3F4F6]">Zero-training guarantee</h3>
                        <p className="leading-relaxed text-[#9CA3AF]">
                            We do not use your private project code to train our public AI models. Your proprietary algorithms, business logic, and trade secrets remain confidential and are never ingested into a shared knowledge base.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
