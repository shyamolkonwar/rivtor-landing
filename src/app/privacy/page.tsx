import Navbar from "@/components/v3/Navbar";
import Footer from "@/components/v3/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
            <Navbar />

            {/* Content */}
            <article className="max-w-4xl mx-auto py-32 px-6 relative z-10">
                <div className="mb-12">
                    <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        Legal Documentation
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F4F6FB] mb-6" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-[#8892A4]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
                        Effective Date: February 2, 2026 • Last Updated: February 2, 2026
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Section 1 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>01</span> Introduction
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Welcome to Rivtor. We are committed to protecting your personal information and your intellectual property.
                        </p>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered application building services (the &quot;Service&quot;).
                        </p>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We built Rivtor to be the &quot;adult in the room&quot; regarding infrastructure and data safety. Unlike other platforms, we treat your project data as your asset, not yours.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>02</span> Information We Collect
                        </h2>
                        <p className="leading-relaxed mb-6 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We collect information that identifies, relates to, describes, or could reasonably be linked to you (&quot;Personal Data&quot;).
                        </p>

                        <h3 className="text-xl font-semibold text-[#F4F6FB] mb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>A. Information You Provide to Us</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Account Information:</strong> Name, email address, and password when you register.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Billing Information:</strong> If you subscribe to a paid plan (Builder/Founder), our payment processors collect your billing address and payment method details. We do not store raw credit card numbers on our servers.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Project Data:</strong> The code, assets, databases, text prompts, and architectural specifications you input into Rivtor to build your applications.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Support Data:</strong> Information you provide when contacting customer support or reporting bugs.</span></li>
                        </ul>

                        <h3 className="text-xl font-semibold text-[#F4F6FB] mb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>B. Information We Collect Automatically</h3>
                        <ul className="space-y-3">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Usage Data:</strong> Details of your visits to our Site, including traffic data, logs, and other communication data.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Device Data:</strong> IP address, operating system, and browser type.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Cookies:</strong> We use cookies to manage sessions and authentication. We do not use third-party tracking cookies to sell your data to advertisers.</span></li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>03</span> How We Use Your Information
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>We use your data for the following specific purposes:</p>
                        <ul className="space-y-3">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">To Provide the Service:</strong> Creating accounts, spinning up your isolated WebContainers, and managing your deployments.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">To Power the AI Builder:</strong> Your prompts and code context are sent to our AI providers (e.g., Anthropic, OpenAI) solely for the purpose of generating your requested code.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">To Process Payments:</strong> Facilitating transactions through our Merchant of Record infrastructure.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">To Ensure Security:</strong> Monitoring for bot attacks, abuse of our &quot;Unlimited Iteration&quot; policy, and unauthorized access attempts.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">To Communicate:</strong> Sending transactional emails (invoices, password resets) and product updates.</span></li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>04</span> Your Code & AI Training (The &quot;No-Theft&quot; Guarantee)
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We know you are building a business, not just a toy. Your intellectual property is paramount.
                        </p>
                        <ul className="space-y-3">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Ownership:</strong> You retain full ownership of all code, assets, and databases generated within Rivtor.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">AI Training Policy:</strong> We do not use your private project code to train our public AI models. Your proprietary algorithms and business logic remain confidential.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Isolation:</strong> Your code runs in isolated WebContainers. It is not shared with other users, nor does it &quot;leak&quot; into a shared knowledge base.</span></li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>05</span> Sharing Your Information
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We do not sell your Personal Data. We only share information in the following limited circumstances:
                        </p>
                        <ul className="space-y-3">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Service Providers:</strong> With trusted third parties who assist us in operating our website, provided they agree to keep this information confidential.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Legal Compliance:</strong> If required by law, regulation, or legal process.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Business Transfers:</strong> In connection with a merger, sale of company assets, or acquisition.</span></li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>06</span> Data Retention & Export
                        </h2>
                        <ul className="space-y-3">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Retention:</strong> We retain your account information and project data for as long as your account is active.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">The &quot;Eject Button&quot;:</strong> Unlike competitors who lock you in, you may export your full source code (GitHub/ZIP) and database dumps at any time.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Deletion:</strong> If you delete your account, your Personal Data and Project Data are permanently removed from our active databases within 30 days.</span></li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>07</span> Security of Your Data
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We implement enterprise-grade security measures to protect your data:
                        </p>
                        <ul className="space-y-3 mb-4">
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Encryption:</strong> Data is encrypted in transit (SSL/TLS) and at rest.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Isolation:</strong> We use WebContainer technology to strictly isolate your application&apos;s environment from other tenants.</span></li>
                            <li className="text-[#8892A4] flex gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}><span className="text-[#C8D8F0]" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>—</span><span><strong className="text-[#F4F6FB]">Access Control:</strong> Access to your private data by our staff is restricted to necessary personnel and logged.</span></li>
                        </ul>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>08</span> Children&apos;s Privacy
                        </h2>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            Our Service is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section className="border-b border-[#1C1E26] pb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>09</span> Changes to This Policy
                        </h2>
                        <p className="leading-relaxed text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date.&quot;
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4F6FB]" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
                            <span className="text-[#C8D8F0] text-sm" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>10</span> Contact Us
                        </h2>
                        <p className="leading-relaxed mb-4 text-[#8892A4]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
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
