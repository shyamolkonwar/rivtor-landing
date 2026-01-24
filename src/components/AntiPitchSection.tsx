export default function AntiPitchSection() {
    return (
        <section id="manifesto" className="bg-[#FAFAFA] border-t border-b border-[#E5E5E5] py-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Label Column */}
                    <div className="md:col-span-4">
                        <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252]">
                            THE HARD TRUTH
                        </span>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-8">
                        <div className="max-w-2xl">
                            <p className="text-lg md:text-xl text-[#525252] leading-relaxed">
                                AI builds code fast. It also builds technical debt faster. Most tools generate
                                spaghetti code that crashes the moment you try to integrate payments. Then you
                                spend weeks in <strong className="font-semibold text-[#0A0A0A]">Deployment Hell</strong>debugging
                                environments, managing servers, and praying Stripe doesn&apos;t flag your account.
                            </p>

                            <p className="mt-6 text-lg md:text-xl text-[#0A0A0A] font-medium leading-relaxed">
                                VocoWeb is different. We don&apos;t just write code. We run the business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
