import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EngineTerminal from "@/components/EngineTerminal";
import ManifestoSection from "@/components/ManifestoSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import RoadmapSection from "@/components/RoadmapSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707]">
        <HeroSection />
        <EngineTerminal />
        <ManifestoSection />
        <ArchitectureSection />
        <RoadmapSection />
        <SpecificationsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
