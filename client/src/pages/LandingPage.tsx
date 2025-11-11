import BlackFridayBanner from "@/components/BlackFridayBanner";
import Hero from "@/components/Hero";
import HeadlineSection from "@/components/HeadlineSection";
import InfiniteScroll from "@/components/InfiniteScroll";
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
import SalesNotification from "@/components/SalesNotification";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <BlackFridayBanner />
      <Hero />
      <HeadlineSection />
      <InfiniteScroll />
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
      <SalesNotification />
    </div>
  );
}
