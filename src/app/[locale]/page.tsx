"use client";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechnologiesSection from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <main className="pt-24 pb-4 px-4 container mx-auto min-h-screen">
      <Header />
      <HeroSection />
      <hr className="divider-line my-16 md:my-20" />
      <TechnologiesSection />
      <hr className="divider-line my-16 md:my-20" />
      <ContactSection />
      <hr className="divider-line my-16 md:my-20" />
      <Footer />
    </main>
  );
}
