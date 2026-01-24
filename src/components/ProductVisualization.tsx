export default function ProductVisualization() {
    const features = [
        "ONE-CLICK DEPLOY",
        "REAL-TIME ANALYTICS",
        "PAYMENT DASHBOARD",
        "SEO OPTIMIZATION",
        "CUSTOMER MANAGEMENT",
        "AUTOMATED BACKUPS",
        "SSL CERTIFICATES",
        "COMPLIANCE TOOLS",
    ];

    return (
        <section className="py-20 border-b border-[#E5E5E5]">
            <div className="container">
                {/* Caption */}
                <span className="font-mono text-xs uppercase tracking-[0.05em] text-[#525252] block mb-8">
                    THE FOUNDRY DASHBOARD
                </span>

                {/* Wireframe Representation */}
                <div className="border border-[#E5E5E5] bg-white">
                    <div className="flex min-h-[400px]">
                        {/* Sidebar */}
                        <div className="w-48 border-r border-[#E5E5E5] p-4 hidden md:block">
                            <div className="space-y-3">
                                <div className="h-4 w-24 bg-[#E5E5E5]"></div>
                                <div className="h-4 w-20 bg-[#FAFAFA]"></div>
                                <div className="h-4 w-28 bg-[#FAFAFA]"></div>
                                <div className="h-4 w-16 bg-[#FAFAFA]"></div>
                                <div className="h-4 w-24 bg-[#FAFAFA]"></div>
                            </div>
                            <div className="mt-8 space-y-3">
                                <div className="h-4 w-20 bg-[#E5E5E5]"></div>
                                <div className="h-4 w-28 bg-[#FAFAFA]"></div>
                                <div className="h-4 w-16 bg-[#FAFAFA]"></div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-6">
                            {/* Header bar */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E5E5]">
                                <div className="h-4 w-32 bg-[#E5E5E5]"></div>
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 bg-[#FAFAFA] border border-[#E5E5E5]"></div>
                                    <div className="h-8 w-8 bg-[#FAFAFA] border border-[#E5E5E5]"></div>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="border border-[#E5E5E5] p-4">
                                        <div className="h-3 w-16 bg-[#E5E5E5] mb-2"></div>
                                        <div className="h-6 w-12 bg-[#0A0A0A]"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Graph Area */}
                            <div className="border border-[#E5E5E5] p-4 h-48">
                                <div className="h-full flex items-end gap-2">
                                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((height, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 bg-[#0A0A0A] transition-all"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {features.map((feature) => (
                        <div key={feature} className="font-mono text-xs tracking-[0.05em] text-[#525252]">
                            <span className="text-[#22C55E] mr-2">✓</span>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
