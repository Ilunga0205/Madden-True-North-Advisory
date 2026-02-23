"use client";

import { useScrollY } from "@/hooks/useScrollY";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { globalStyles } from "@/styles/globalStyles";
import HeroSection from "@/components/sections/HeroSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  const scrollY = useScrollY();
  useScrollReveal();

  return (
    <main className="bg-white">
      <style jsx global>{globalStyles}</style>

      <HeroSection scrollY={scrollY} />
      <ValuePropositionSection />
      <ServicesSection />
      <InsightsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}