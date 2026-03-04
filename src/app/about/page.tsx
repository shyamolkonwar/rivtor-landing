"use client";

import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            About Us
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            About Rivtor
          </h1>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16">
          {/* Who We Are */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Who We Are
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Rivtor is an infrastructure company building the next generation of autonomous organizational systems. We are engineers, designers, and operators who believe that the future of work is not about humans working harder — it is about building systems that work autonomously.
              </p>
              <p>
                We are backed by leading investors and supported by Microsoft for Startups and E2B, and we are headquartered in San Francisco.
              </p>
            </div>
          </section>

          {/* What We Build */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Build
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We build AI agents that can execute complex operational workflows — from marketing campaigns to engineering management to customer support — with minimal human supervision.
              </p>
              <p>
                Our infrastructure provides the memory, context, and decision-making framework that allows AI agents to operate as functional members of an organization, not just as tools.
              </p>
            </div>
          </section>

          {/* Our Values */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Our Values
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">Transparency First</h3>
                  <p>
                    Autonomous systems must be understandable. We build for visibility at every layer — our users always know what their agents are doing and why.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">Urgency</h3>
                  <p>
                    The future of autonomous organizations is being written now. We move with urgency because the stakes are high and the window is open.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">Substance Over Hype</h3>
                  <p>
                    We are not interested in building impressive demos. We are interested in building systems that work reliably in production, at scale, for real companies.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">Human Agency</h3>
                  <p>
                    We believe AI should liberate humans to do what only humans can — strategy, creativity, relationships, and judgment on genuinely hard questions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="p-8 bg-[#0E0F12] border border-[#1C1E26] rounded-lg">
            <h2 className="text-xl font-bold text-[#F4F6FB] mb-4" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
              Get in Touch
            </h2>
            <p className="text-[#8892A4] mb-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Questions? Partnership inquiries? We respond to every message.
            </p>
            <a
              href="mailto:office@rivtor.com"
              className="inline-block bg-[#C8D8F0] text-[#060608] text-sm font-bold uppercase tracking-widest py-3 px-8 hover:bg-[#C8D8F0]/90 transition-colors rounded"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              Contact Us
            </a>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
