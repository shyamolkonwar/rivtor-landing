"use client";

import Navbar from '@/components/v3/Navbar';
import Footer from '@/components/v3/Footer';

export default function MissionPage() {
  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F6FB]">
      <Navbar />

      <div className="max-w-4xl mx-auto pt-32 pb-20 px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#C8D8F0] text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            To make human organizations fully autonomous
          </h1>
          <p className="text-[#C8D8F0] text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            — and to do it before anyone else does it wrong.
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16">
          {/* Why We Exist */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Why We Exist
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Most technology companies exist to make existing processes faster. A faster database. A better interface. A cheaper cloud.
              </p>
              <p>
                Rivtor does not exist to make existing processes faster.
              </p>
              <p>
                We exist because we believe the fundamental structure of how organizations operate is about to change permanently, and that the companies and founders who understand this early will have an advantage that compounds for decades.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Automation replaces tasks. Architecture replaces systems.
              </p>
            </div>
          </section>

          {/* What We Are Actually Trying to Do */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Are Actually Trying to Do
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Let us be direct about the goal, because we think vagueness here is a form of dishonesty.
              </p>
              <p>
                We are trying to build AI agents that can perform every function of a company — every role, every department, every operational responsibility — without requiring a human to do the work. Not to assist a human doing the work. Not to reduce the time a human spends on the work. To do the work.
              </p>
              <p>
                That means a Chief Executive function that can set priorities, allocate resources, evaluate performance, and adjust strategy in response to changing conditions.
              </p>
              <p>
                That means a Chief Marketing Officer function that can identify audiences, craft positioning, build and run campaigns, analyze results, and iterate — continuously, without direction on each step.
              </p>
              <p>
                That means a Chief Technology Officer function that can architect systems, manage engineering execution, and maintain technical coherence as the product evolves.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We are not claiming we have built all of this today. We are claiming that this is what we are building toward, that we have a credible path to get there, and that we will not stop until we do.
              </p>
            </div>
          </section>

          {/* The Problem With How Most People Think About This */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Problem With How Most People Think About This
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                When most people hear &ldquo;AI replacing jobs,&rdquo; they think about it at the level of tasks. AI writes the email. AI generates the image. AI summarizes the document. The human still decides. The human still directs. The human is still the center of the system.
              </p>
              <p>
                That framing is not wrong for where we are today. But it is dangerously incomplete as a picture of where we are going.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                The real transformation is not at the task level. It is at the accountability level.
              </p>
              <p>
                What Rivtor is building is accountability infrastructure for AI agents. Systems where an agent is not just completing a task but holding a role. Where it is responsible for an outcome, not just an output. Where it has the context, the memory, the judgment, and the authority to make decisions within its domain.
              </p>
            </div>
          </section>

          {/* Who We Are Building For */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              Who We Are Building For
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">The Founder Who Cannot Afford to Hire</h3>
                  <p>
                    Most great companies never get built because the founder cannot afford the team it would take to execute the vision. They have the idea. They have the determination. They do not have the capital to hire a VP of Marketing, a head of engineering, a sales lead, a customer success manager, and a finance person all at once.
                  </p>
                  <p className="text-[#C8D8F0] font-medium">
                    Rivtor changes that arithmetic entirely. A founder with a clear vision and the right infrastructure can operate at the scale of a company with fifty employees on day one.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">The Operator Who Wants to Move Faster</h3>
                  <p>
                    Established companies are not immune to this problem. Even well-resourced organizations spend enormous amounts of time and money on coordination — getting the right information to the right people at the right time, aligning departments that have different incentives.
                  </p>
                  <p className="text-[#C8D8F0] font-medium">
                    Rivtor-powered agents can collapse that coordination overhead dramatically. The organization moves faster not because the people are working harder but because the friction is gone.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#C8D8F0] font-bold text-lg mb-2">The Builder Who Wants to Think Bigger</h3>
                  <p>
                    There is a category of person who is deeply capable, deeply ambitious, and perpetually constrained by the practical limits of what one person or small team can execute. They have ideas that require ten things to happen simultaneously.
                  </p>
                  <p className="text-[#C8D8F0] font-medium">
                    Rivtor is built for those people. The constraint is no longer execution capacity. It is imagination.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What Success Looks Like to Us */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What Success Looks Like to Us
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We will know we are succeeding when a founder can describe their vision to Rivtor and watch it execute — not just the software, not just the marketing copy, but the whole operational reality of a growing company — without hiring a single person to do the work.
              </p>
              <p>
                We will know we are succeeding when the companies running on Rivtor consistently outcompete companies of equivalent resources that are running on human labor alone — not because the humans in those companies are less capable, but because the Rivtor-powered companies are operating at a speed and consistency that human organizations structurally cannot match.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We will know we are succeeding when the question is no longer whether a company should use AI agents to run its operations, but why any serious company would choose not to.
              </p>
            </div>
          </section>

          {/* What We Are Not Trying to Do */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Are Not Trying to Do
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We are not trying to build a product that makes people feel like they are using AI. The best version of Rivtor is invisible. You set the direction, the work gets done, the results come back.
              </p>
              <p>
                We are not trying to build the most impressive demo. Our work is making autonomous operation reliable enough to trust with the real operations of a real company. That is a harder problem than it looks.
              </p>
              <p>
                We are not trying to remove human agency from the equation. The goal is not a world where humans have nothing to do. The goal is a world where the things humans have to do are worthy of human attention — strategy, vision, relationships, creativity, judgment on genuinely hard questions.
              </p>
            </div>
          </section>

          {/* The Responsibility We Accept */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Responsibility We Accept
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We accept the responsibility of building this correctly. That means designing for transparency at every layer — so the people running companies on Rivtor always understand what is happening and why.
              </p>
              <p>
                It also means moving with urgency. The future we are describing is coming regardless of what Rivtor does. The infrastructure for autonomous organizational operation will be built. The only question is whether it is built by people who have thought carefully about the implications, or by people who have not.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We intend to be the former. We intend to move fast enough that we are the ones setting the standard.
              </p>
            </div>
          </section>

          {/* The Standard We Hold Ourselves To */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Standard We Hold Ourselves To
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Every person at Rivtor works with the understanding that the systems we build will operate in the real world, making real decisions, with real consequences for the people who trust us.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We are not building toys. We are not building experiments. We are building the infrastructure for the next generation of human organizations — the layer that turns a single person&rsquo;s vision into a fully functioning, autonomously operating company.
              </p>
            </div>
          </section>

          {/* A Final Word */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              A Final Word
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                For most of history, the limiting factor in what a company could do was the number and quality of the humans it could attract and retain. That meant great ideas were perpetually underfunded and understaffed.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Rivtor is removing that constraint.
              </p>
              <p className="text-[#C8D8F0] font-medium text-lg">
                What happens when any founder with a great idea has access to the operational capacity of a world-class organization on day one?
              </p>
              <p className="text-[#C8D8F0] font-medium text-lg">
                We believe the answer is: the world gets dramatically better.
              </p>
            </div>
          </section>

          {/* Tagline */}
          <section className="mt-12 pt-12 border-t border-[#1C1E26] text-center">
            <p className="text-[#C8D8F0] italic max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              Building the infrastructure for organizations that do not need humans to operate, so that the humans inside them can do what only humans can.
            </p>
            <p className="text-[#8892A4] mt-4" style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
              — Rivtor
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
