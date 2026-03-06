import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import ExpertSection from "@/components/ExpertSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatYouGet from "@/components/WhatYouGet";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeroSection />
      <ExpertSection />
      <TestimonialsSection />
      <WhatYouGet />
      <FinalCTA />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
