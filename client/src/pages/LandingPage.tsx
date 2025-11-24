import BlackFridayBanner from "@/components/BlackFridayBanner";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import WhatYouGet from "@/components/WhatYouGet";
import HowItWorks from "@/components/HowItWorks";
import IdealFor from "@/components/IdealFor";
import Guarantee from "@/components/Guarantee";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SalesNotification from "@/components/SalesNotification";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <BlackFridayBanner />
      <Hero />
      <BeforeAfter />
      <WhatYouGet />
      <HowItWorks />
      <IdealFor />
      <Guarantee />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SalesNotification />
    </div>
  );
}
