import Navbar from "@/components/v3/Navbar";
import Footer from "@/components/v3/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
            <Navbar />

            <article className="max-w-4xl mx-auto py-32 px-6 relative z-10">
                <div className="mb-12">
                    <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FB] mb-6" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                        Terms of Service
                    </h1>
                    <p className="text-sm text-[#8892A4]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        Effective Date: February 2, 2026 • Last Updated: February 2, 2026
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>01</span> Introduction & Acceptance
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            These Terms of Service (&quot;Terms&quot;) constitute a binding legal agreement between you (&quot;User,&quot; &quot;You&quot;) and Rivtor (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), regarding your access to and use of the Rivtor website and application building platform (the &quot;Service&quot;).
                        </p>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            By registering for an account, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.
                        </p>
                        <div className="bg-[#0E0F12] border border-[#1C1E26] p-6 rounded-lg mt-6">
                            <p className="text-[#C8D8F0] text-xs font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>⚠️ Beta Notice</p>
                            <p className="text-sm leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                                Please note that Rivtor is currently in Beta 1.0. The Service is still under active development and may contain bugs, errors, or feature limitations.
                            </p>
                        </div>
                    </section>

                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>02</span> Description of Service
                        </h2>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Rivtor is an AI-powered development platform that assists users in building, deploying, and hosting web applications. We provide the infrastructure (hosting, authentication, databases) and AI tools to generate code.
                        </p>
                    </section>

                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>03</span> Intellectual Property & Ownership
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            You retain full ownership of the intellectual property rights to the applications, code, databases, and content you create using Rivtor (&quot;User Projects&quot;). We do not claim ownership over your business logic or generated source code.
                        </p>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Rivtor retains all rights to the underlying platform, pre-built infrastructure modules, and our AI orchestration engine.
                        </p>
                    </section>

                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>04</span> AI Limitations & User Responsibility
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            You acknowledge that Rivtor uses Artificial Intelligence (AI) to generate code. AI can make mistakes, generate insecure code, or &quot;hallucinate&quot; functionality that does not exist.
                        </p>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            You are solely responsible for reviewing, testing, and securing the code generated by Rivtor before deploying it to a production environment.
                        </p>
                    </section>

                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>05</span> Payment, Subscriptions, and Refunds
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Rivtor offers paid subscription plans. You agree to pay the fees associated with your chosen plan. You may cancel your subscription at any time via your dashboard.
                        </p>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Due to the significant costs of AI computation and infrastructure, we do not offer refunds for partial months or unused time.
                        </p>
                    </section>

                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>06</span> Prohibited Uses
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>You agree not to use Rivtor to:</p>
                        <ul className="space-y-3">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span>Build applications that facilitate illegal activities, fraud, or harassment.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span>Host malicious code, viruses, or spyware.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span>Attempt to reverse engineer, decompile, or hack the Rivtor platform.</span></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>07</span> Contact Us
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <p className="leading-relaxed mt-2 p-4 bg-[#0E0F12] rounded-lg border border-[#1C1E26] inline-block" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            <strong className="text-[#F4F6FB]">Email:</strong> <span className="text-[#8892A4]">office@rivtor.com</span>
                        </p>
                    </section>
                </div>

            </article>
            <Footer />
        </main>
    );
}
