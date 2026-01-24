import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AntiPitchSection from "@/components/AntiPitchSection";
import PillarsSection from "@/components/PillarsSection";
import ProductVisualization from "@/components/ProductVisualization";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AntiPitchSection />
        <PillarsSection />
        <ProductVisualization />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
