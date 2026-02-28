import Navbar from "@/components/v3/Navbar";
import HeroSection from "@/components/v3/HeroSection";
import CoreCapabilities from "@/components/v3/CoreCapabilities";
import LiveStats from "@/components/v3/LiveStats";
import ArchitectureSection from "@/components/v3/ArchitectureSection";
import RoadmapSection from "@/components/v3/RoadmapSection";
import SpecificationsTable from "@/components/v3/SpecificationsTable";
import PricingSection from "@/components/v3/PricingSection";
import FAQSection from "@/components/v3/FAQSection";
import Footer from "@/components/v3/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Dot Grid Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #2e3545 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />
      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C8D8F0]/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col h-full grow">
        <Navbar />
        <main className="flex flex-col flex-1 items-center w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20 gap-20">
          <HeroSection />
          <CoreCapabilities />
          <LiveStats />
          <ArchitectureSection />
          <RoadmapSection />
          <SpecificationsTable />
          <PricingSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
