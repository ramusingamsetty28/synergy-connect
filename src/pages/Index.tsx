import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { FeaturedStartups } from "@/components/landing/FeaturedStartups";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FeaturedStartups />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
