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
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F4F6FB] mb-6 leading-tight" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
            A world where any idea, in the hands of any person, can become a fully functioning organization
          </h1>
          <p className="text-lg text-[#C8D8F0] max-w-2xl mx-auto leading-relaxed italic" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            — run entirely by AI, from the first day to the last.
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-16">
          {/* The World As It Is */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The World As It Is
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Every company in the world, regardless of what it makes or sells or builds, is fundamentally an information-processing system. It takes in signals from the market, makes decisions, executes on those decisions, measures the results, and adjusts.
              </p>
              <p>
                For the entirety of human history, that loop has required humans at every step. The organizational structures we take for granted — the hierarchy, the management layers, the departmental divisions — are all engineering solutions to a single underlying problem: how do you coordinate a large number of humans to run that loop reliably, at scale, over time?
              </p>
              <p>
                That problem has defined the economics of building companies for centuries. The cost of assembling that human system was the primary barrier between an idea and its realization. It still is, for almost every company being built today.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Rivtor&rsquo;s vision begins with the recognition that this barrier is about to disappear. Not weaken — disappear.
              </p>
            </div>
          </section>

          {/* The World As It Will Be */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The World As It Will Be
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                In the world Rivtor is working to create, the founding team of a company is not constrained by what they can afford to hire. They are not constrained by what they can personally execute. They are not constrained by the coordination overhead of managing a growing organization.
              </p>
              <p className="text-[#C8D8F0] font-medium text-xl">
                They are constrained only by the quality of their vision.
              </p>
              <p>
                A founder in that world describes what they want to build — the product, the market, the positioning, the values, the ambition — and the organization executes. The software gets built and maintained and improved. The marketing strategy gets developed, tested, and refined. The sales pipeline gets built and managed.
              </p>
              <p>
                The organization does not sleep. It does not lose context between meetings. It does not get distracted, demoralized, or misaligned. It does not require management overhead.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                This is not a vision of a company with AI tools embedded in its workflows. This is a vision of a company that is itself an AI system — one authored by a human, governed by a human, but operated by intelligence that does not require human labor to function.
              </p>
            </div>
          </section>

          {/* The Scope of What We Are Building */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Scope of What We Are Building
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                We started with software engineering because it was the domain where the gap between human and AI capability closed fastest. We built agents that can architect, build, debug, and ship production-grade software without a human writing a single line of code.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                That was the proof of concept. It was not the destination.
              </p>
              <p>
                The same foundational infrastructure enables autonomous marketing, autonomous sales, autonomous finance, autonomous operations, autonomous customer success, autonomous strategy, and autonomous executive function across every dimension of a company.
              </p>
              <div className="pt-4">
                <p className="text-[#C8D8F0] font-bold mb-3">What does that mean in practice?</p>
                <ul className="space-y-3 text-[#8892A4]">
                  <li className="flex gap-2">
                    <span className="text-[#C8D8F0]">→</span>
                    <span>A Chief Executive function that allocates resources, evaluates performance, identifies risks, and adjusts direction with full company context.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C8D8F0]">→</span>
                    <span>A Chief Marketing Officer function that develops positioning, builds campaigns across channels, and continuously improves reach.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C8D8F0]">→</span>
                    <span>A Chief Technology Officer function that makes architectural decisions and manages engineering execution.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C8D8F0]">→</span>
                    <span>A Chief Financial Officer function that models the business and produces the financial clarity good decisions require.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* What Separates Rivtor */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What Separates Rivtor From Everything Else
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                The difference between a tool and an agent is the difference between a hammer and a contractor. A hammer makes a human more efficient at hitting nails. A contractor takes responsibility for the outcome — figures out what needs to be built, in what order, with what materials, by what deadline, within what budget — and delivers it.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Rivtor is building contractors, not hammers. Agents that hold roles, not tools that complete tasks.
              </p>
              <p>
                An agent that holds a role has a different relationship to context. It maintains the history of what it has done, the results those actions produced, the goals it is working toward, and the constraints it is operating within. It does not need to be re-briefed every time it acts.
              </p>
              <p>
                An agent that holds a role also has a different relationship to accountability. When it makes a decision, that decision is traceable. The reasoning behind it is visible. The criteria it used are auditable. The outcome is measured and fed back into the agent&rsquo;s understanding.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                This is the infrastructure that makes autonomous operation trustworthy rather than frightening.
              </p>
            </div>
          </section>

          {/* The Founders We Are Building For */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Founders We Are Building For
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                There is a particular kind of person who has always been underserved by the way companies are built — the person who thinks at the level of the whole system, who sees clearly what needs to exist in the world, who has the will and the intelligence to build it, but who runs up against the practical constraint that building a full-stack organization requires more human capital than one person or small team can assemble or afford.
              </p>
              <p>
                These founders compromise. They build smaller versions of their vision. They sequence aggressively, doing one thing at a time because they cannot do ten things simultaneously. The vision survives, but it is always running behind schedule, always under-resourced, always a smaller version of what it could have been.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                Rivtor is built for those founders first. The execution constraint falls away. The vision can be the whole vision, not the compromised version of it.
              </p>
            </div>
          </section>

          {/* The Question of Human Work */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Question of Human Work
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                The work that Rivtor agents will perform — the operational execution, the routine decision-making, the process management, the coordination overhead — is work that has consumed enormous amounts of human time and energy without being the work that most humans find most meaningful.
              </p>
              <p>
                The work that remains — the work that requires genuine creativity, genuine judgment on genuinely hard questions, genuine relationships, genuine vision — is work that most people who have spent their careers building companies have always wanted to spend more time on and never could.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                We are not building a world with less human contribution. We are building a world with better human contribution — where the people who author organizations focus on authorship, and the agents they deploy handle the execution.
              </p>
            </div>
          </section>

          {/* The Standard We Are Setting */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Standard We Are Setting
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                Rivtor intends to set the standard for what it means to build trustworthy autonomous organizational operation. Trustworthy — meaning the people who run their companies on our infrastructure know that the agents are doing what they said they would do, that the decisions are visible and auditable, that the founder&rsquo;s intent is faithfully preserved throughout the system.
              </p>
              <p>
                That standard is harder to build than capability. Capability is demonstrated in a demo. Trust is earned over months and years of consistent, reliable, honest operation. We are committed to earning it.
              </p>
            </div>
          </section>

          {/* The Urgency We Feel */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              The Urgency We Feel
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                The infrastructure for autonomous organizational operation will be built. The only variable is who builds it and what principles they bring to it. We feel a genuine urgency to be the company that gets there first, with the right architecture, before the category is defined by systems that were built without the care this requires.
              </p>
              <p className="text-[#C8D8F0] font-medium">
                The window in which the foundational infrastructure of autonomous organizational operation gets built and the standards of that infrastructure get set is not permanently open. We intend to be the company that closes it.
              </p>
            </div>
          </section>

          {/* What We Are Working Toward */}
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4F6FB] border-b border-[#1C1E26] pb-4" style={{ fontFamily: "var(--font-geist), sans-serif", letterSpacing: "-0.04em" }}>
              What We Are Working Toward
            </h2>
            <div className="text-[#8892A4] leading-relaxed space-y-4" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
              <p>
                The version of Rivtor that fully realizes this vision is a platform on which a single person — or a small group of people with aligned values and a shared ambition — can build and operate a company of any complexity, in any industry, at any scale, without hiring a human to execute any part of it.
              </p>
              <p>
                The founder defines the vision. Rivtor holds it, executes it, measures it, learns from it, and improves it. The organization runs. The product gets built and maintained. The market gets served. The company grows. And the founder spends their time on the things that only a human with a vision can do.
              </p>
              <p className="text-[#C8D8F0] font-medium text-lg">
                That is the world we are building. We are building it now. And we will not stop until it exists.
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
