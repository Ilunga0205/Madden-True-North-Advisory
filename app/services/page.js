"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { globalStyles } from "@/styles/globalStyles";
import PageHeader from "@/components/sections/services/PageHeader";
import CTASection from "@/components/sections/CTASection";
import SectionBadge from "@/components/ui/SectionBadge";
import DetailedServiceCard from "@/components/ui/DetailedServiceCard";
import ProcessItem from "@/components/ui/ProcessItem";
import EngagementCard from "@/components/ui/EngagementCard";
import { detailedServices, processSteps, engagementModels } from "@/constants/servicesData";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <main className="bg-white">
      <style jsx global>{globalStyles}</style>

      {/* Hero Section */}
      <PageHeader
        tag="Our Services"
        title={
          <>
            Strategic clarity for <span className="text-[#8FA89A] italic">complex challenges</span>
          </>
        }
        description="Focused advisory services designed to support clarity, governance, and sustainable growth through independent perspective and proven frameworks."
      />

      {/* Core Services Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <SectionBadge variant="light">What we offer</SectionBadge>
            <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight">
              Services built for lasting impact
            </h2>
          </div>

          <div className="space-y-6">
            {detailedServices.map((service, index) => (
              <DetailedServiceCard
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 scroll-reveal bg-[#F6F4F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">
            {/* Left - Heading */}
            <div className="md:col-span-2">
              <SectionBadge>Our approach</SectionBadge>
              <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight sticky top-24">
                Tailored to your <span className="text-[#8FA89A] italic">context</span>
              </h2>
            </div>

            {/* Right - Content */}
            <div className="md:col-span-3 space-y-8">
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Every engagement is shaped by your specific challenges, opportunities, 
                and constraints. We don&apos;t apply generic frameworks—we adapt our approach 
                to what you actually need.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Whether you need strategic clarity for a critical decision, governance 
                structures that enable better oversight, or organizational alignment to 
                execute on your vision, we bring the right combination of analytical rigor 
                and practical wisdom.
              </p>
              <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed">
                Our engagements are collaborative, with clear deliverables and outcomes 
                that you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <SectionBadge variant="light">How we work</SectionBadge>
            <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight mb-6">
              From insight to <span className="text-[#8FA89A] italic">implementation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
                <ProcessItem
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Types */}
      <section className="py-32 scroll-reveal bg-[#F6F4F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <SectionBadge variant="brand">Engagement models</SectionBadge>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-tight max-w-4xl">
              Flexible partnerships for different needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={model.title}
                className="scroll-reveal"
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
                <EngagementCard
                  title={model.title}
                  description={model.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        tag="Let's connect"
        title={
          <>
            Ready to explore
            <br />
            <span className="italic">how we can help?</span>
          </>
        }
        description="Every engagement begins with a conversation about what you're facing and whether we're the right fit."
        buttonText="Start a conversation"
        buttonLink="/contact"
      />
    </main>
  );
}