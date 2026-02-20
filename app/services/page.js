"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { globalStyles } from "@/styles/globalStyles";
import PageWrapper from "@/components/layout/PageWrapper";
import CompactPageHeader from "@/components/sections/services/CompactPageHeader";
import CTASection from "@/components/sections/CTASection";
import SectionBadge from "@/components/ui/SectionBadge";
import ServiceSnapshotCard from "@/components/ui/ServiceSnapshotCard";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";
import ServiceDetailCard from "@/components/ui/ServiceDetailCard";
import ServiceCenteredCard from "@/components/ui/ServiceCenteredCard";
import DarkServiceCard from "@/components/ui/DarkServiceCard";
import ServicePackageCard from "@/components/ui/ServicePackageCard";
import {
  serviceSnapshots,
  detailedServicesNew,
  coachingService,
  resilienceService,
  servicePackages,
} from "@/constants/servicesData";

export default function ServicesPage() {
  useScrollReveal();

  return (
    <PageWrapper removePadding={true}>
      <style jsx global>{globalStyles}</style>

      <main className="bg-white">
        {/* Hero Section - Compact */}
        <CompactPageHeader
          tag="Services"
          title={
            <>
              Financial clarity meets <span className="text-[#8FA89A] italic">strategic support</span>
            </>
          }
          description="From bookkeeping to CFO-level advisory and leadership coaching—comprehensive support for business owners who want both financial clarity and sustainable growth."
          showImagePeek={true}
        />

        {/* Services Snapshot Section - Overlapping with image below */}
        <section className="relative bg-[#F6F4F1] -mb-20 pb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {serviceSnapshots.map((snapshot, index) => (
                <ServiceSnapshotCard
                  key={index}
                  icon={snapshot.icon}
                  title={snapshot.title}
                  description={snapshot.description}
                  delay={`${0.4 + index * 0.1}s`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Image Section - Peek visible from above */}
        <ImageWithOverlay
          src="/images/servicepic.jpg"
          alt="Financial services and coaching"
          quote="Clear numbers. Strategic thinking. Sustainable growth."
          addTopPadding={true}
        />

        {/* Service 1 & 2: Accounting & Financial Strategy - Alternating Layout */}
        {detailedServicesNew.map((service, index) => (
          <section
            key={service.id}
            className={`py-20 scroll-reveal ${
              index % 2 === 0 ? 'bg-white' : 'bg-[#F6F4F1]'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <ServiceDetailCard
                badge={service.badge}
                title={service.title}
                subtitle={service.subtitle}
                features={service.features}
                outcome={service.outcome}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                imagePosition={service.imagePosition}
                outcomeBackground={service.outcomeBackground}

              />
            </div>
          </section>
        ))}

        {/* Service 3: Coaching & Decision Support - Centered Card */}
        <section className="py-20 scroll-reveal bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <ServiceCenteredCard
              badge={coachingService.badge}
              title={coachingService.title}
              subtitle={coachingService.subtitle}
              featuresColumns={coachingService.featuresColumns}
              outcome={coachingService.outcome}
            />
          </div>
        </section>

        {/* Service 4: Resilience & Embodied Support - Dark Card */}
        <section className="py-20 scroll-reveal bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <DarkServiceCard
              badge={resilienceService.badge}
              title={resilienceService.title}
              subtitle={resilienceService.subtitle}
              features={resilienceService.features}
              outcome={resilienceService.outcome}
              imageSrc={resilienceService.imageSrc}
              imageAlt={resilienceService.imageAlt}
            />
          </div>
        </section>

        {/* How It Works Together Section */}
        <section className="py-32 scroll-reveal bg-[#F6F4F1]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <SectionBadge variant="brand">The complete picture</SectionBadge>
              <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight">
                Services that work <span className="text-[#8FA89A] italic">together</span>
              </h2>
              <p className="font-body text-xl text-stone-700 leading-relaxed mt-6">
                You don&#39;t have to choose just one. Most clients combine services to create the
                support structure that fits their business and stage of growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicePackages.map((pkg, index) => (
                <ServicePackageCard
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  path={pkg.path}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          tag="Let's talk"
          title={
            <>
              Which services
              <br />
              <span className="italic">fit your needs?</span>
            </>
          }
          description="Not sure where to start? Let's have a conversation about where you are and what support would be most valuable right now."
          buttonText="Get in touch"
          buttonLink="/contact"
        />
      </main>
    </PageWrapper>
  );
}