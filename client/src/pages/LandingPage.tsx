import Hero from "@/components/Hero";
import HeadlineSection from "@/components/HeadlineSection";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import IdealFor from "@/components/IdealFor";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HeadlineSection />
      <WhatYouGet />
      <HowItWorks />
      <IdealFor />
      <Bonuses />
      <Pricing />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
