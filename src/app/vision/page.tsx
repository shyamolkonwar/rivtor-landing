"use client";

import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            Our Vision
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            The Last Hire<br />You'll Ever Make
          </h1>
          <p className="text-lg text-[#8892A4] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            There is a version of the future where the best-run company in the world has no employees. Not because it failed. Because it succeeded.
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16">
          {/* What We Believe */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Believe
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Every company in the world, regardless of industry, is ultimately a system. It takes in information, makes decisions, produces outputs, and repeats. For most of human history, that system required humans at every node.
              </p>
              <p>
                We believe that era is ending. Not because humans are not valuable. But because the things that make humans valuable — judgment, creativity, the ability to synthesize complexity into action — are no longer exclusive to humans.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Rivtor exists to build the infrastructure for what comes next.
              </p>
            </div>
          </section>

          {/* Our Vision */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Our Vision
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We are building a new kind of operating system for companies. One where artificial intelligence does not assist human work — it performs it. Fully. Autonomously. Accountably.
              </p>
              <p>
                We are not building a chatbot. We are not building a copilot. We are building agents that can hold the role of a Chief Executive, a Chief Marketing Officer, a Chief Technology Officer, a Chief Financial Officer, and every function beneath them — and execute with the same coherence, continuity, and ambition as the best human operators in the world.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                The founder sets the vision. Rivtor executes it.
              </p>
            </div>
          </section>

          {/* The Scope */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Scope
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Software engineering was our first proof point. We built agents that can architect, build, debug, and ship production software without a human writing a single line of code.
              </p>
              <p>
                But software was never the ceiling. It was the floor.
              </p>
              <p>
                The same architecture that builds software can run a marketing organization. It can manage a sales pipeline, qualify leads, draft proposals, and close. It can analyze financial statements and make capital allocation recommendations. It can monitor customer sentiment and redesign the product experience. It can recruit, evaluate, and onboard.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Everything a company needs to function, Rivtor agents can do.
              </p>
            </div>
          </section>

          {/* What Makes This Different */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What Makes This Different
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Rivtor is not a tool that reduces workload. It is a system that eliminates the need for certain categories of human labor entirely — and does so reliably, at scale, across the full operating surface of a company.
              </p>
              <p>
                The difference between a tool and an agent is accountability. A tool waits to be used. An agent takes responsibility for an outcome.
              </p>
              <p>
                Our agents do not wait for instructions on every task. They understand the goal, they understand the constraints, and they move. They adapt when circumstances change. They escalate only when a decision genuinely requires human judgment.
              </p>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Who This Is For
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Rivtor is for founders who are serious about building something real and are willing to rethink what a company even is.
              </p>
              <p>
                It is for organizations that want to compete with companies ten times their size and are no longer willing to accept headcount as the primary input to output.
              </p>
              <p>
                It is for anyone who has ever looked at their organization and thought: most of this work does not require a human. It requires judgment, and discipline, and consistency. And those are things we can now build.
              </p>
            </div>
          </section>

          {/* Where We Stand */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Where We Stand
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We are early. The agents we are building today are capable in ways that would have seemed implausible three years ago, and they are nowhere near what they will be in three years from now.
              </p>
              <p>
                We are building infrastructure that will outlast any single model, any single capability breakthrough, any single wave of AI progress — because we are not betting on one technology. We are building the layer that sits above all of them.
              </p>
              <p className="text-[#C8D8F0] font-medium text-lg">
                The company of the future runs on Rivtor.<br />
                We are building it now.
              </p>
            </div>
          </section>

          {/* Founder Sign-off */}
          <section className="mt-12 pt-12 border-t border-[#1C1E26] text-left">
            <p className="text-[#8892A4] italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Shyamol Konwar, Founder — Rivtor
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
