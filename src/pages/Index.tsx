import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import IdeologySection from "@/components/IdeologySection";
import TokenomicsSection from "@/components/TokenomicsSection";
import AirdropSection from "@/components/AirdropSection";
import EcosystemSection from "@/components/EcosystemSection";
import DAOTiersSection from "@/components/DAOTiersSection";
import ComparisonSection from "@/components/ComparisonSection";
import MerchantSection from "@/components/MerchantSection";
import RoadmapSection from "@/components/RoadmapSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern bg-noise relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <IdeologySection />
      <TokenomicsSection />
      <AirdropSection />
      <EcosystemSection />
      <DAOTiersSection />
      <ComparisonSection />
      <MerchantSection />
      <RoadmapSection />
      <TestimonialsSection />
      <FAQSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
