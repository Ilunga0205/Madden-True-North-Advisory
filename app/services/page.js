"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { globalStyles } from "@/styles/globalStyles";
import PageWrapper from "@/components/layout/PageWrapper";
import CompactPageHeader from "@/components/sections/services/CompactPageHeader";
import CTASection from "@/components/sections/CTASection";
import SectionBadge from "@/components/ui/SectionBadge";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";
import Link from "next/link";
import Image from "next/image";
import { accountingPackages } from "@/constants/servicesData";
import { CheckCircle2 } from "lucide-react";

const strategicAdvisory = {
  features: [
    "Financial clarity sessions",
    "Decision support",
    "Business planning conversations",
    "Financial strategy discussions",
  ],
  result: "You have strategic financial input to help you make better decisions as your business grows.",
};

export default function ServicesPage() {
  useScrollReveal();

  return (
    <PageWrapper removePadding={true}>
      <style jsx global>{globalStyles}</style>

      <main className="bg-white">

        {/* Hero Section */}
        <CompactPageHeader
          tag="Services"
          title={
            <>
              Accounting support <span className="text-[#8FA89A] italic">packages</span>
            </>
          }
          description="Practical accounting, tax and financial support for service-based business owners — locally and internationally."
          showImagePeek={false}
        />

        {/* Image Section */}
        <ImageWithOverlay
          src="/images/servicepic.jpg"
          alt="People working with accounting systems"
          quote="Clear numbers. Compliant finances. Confident decisions."
        />

        {/* ── 3 Main Packages ── */}
        <section className="py-20 md:py-28 scroll-reveal bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <SectionBadge variant="light">Accounting Support Packages</SectionBadge>
              <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight mt-4">
                Choose the right <span className="text-[#8FA89A] italic">level of support</span>
              </h2>
              <p className="font-body text-base md:text-lg text-stone-600 mt-4">
                All work is performed using secure cloud accounting systems (Xero &amp; QuickBooks Online).
              </p>
            </div>

            {/* 3-column grid — same card structure as before, just 3 cols */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {accountingPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col bg-white border-2 p-6 transition-all hover:shadow-lg ${
                    pkg.isPopular ? "border-[#8FA89A]" : "border-stone-200"
                  }`}
                >
                  {/* Popular badge */}
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#8FA89A] text-white font-body text-xs font-semibold px-4 py-1.5 whitespace-nowrap">
                        Recommended
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <span className="inline-block text-[#8FA89A] font-body text-xs font-semibold tracking-wider uppercase mb-2">
                      {pkg.badge}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl text-[#1F1F1F] mb-2 leading-tight">
                      {pkg.tagline}
                    </h3>
                    <p className="font-body text-xs text-stone-500 leading-relaxed">
                      <span className="font-semibold text-stone-700">Best for: </span>
                      {pkg.bestFor}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {feature.startsWith("Everything") ? (
                          <span className="font-body text-xs text-[#8FA89A] font-semibold">
                            {feature}
                          </span>
                        ) : (
                          <>
                            <CheckCircle2
                              size={15}
                              className="text-[#8FA89A] flex-shrink-0 mt-0.5"
                              strokeWidth={1.5}
                            />
                            <span className="font-body text-xs text-stone-700 leading-relaxed">{feature}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Result */}
                  <div className="bg-[#F6F4F1] border-l-4 border-[#8FA89A] p-3 mb-4">
                    <p className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Result
                    </p>
                    <p className="font-body text-xs text-stone-700 italic leading-relaxed">
                      {pkg.result}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#8FA89A] text-[#8FA89A] px-4 py-2.5 font-body font-semibold hover:bg-[#8FA89A] hover:text-white transition-all text-xs"
                  >
                    Get started
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Strategic Advisory — standalone dark section ── */}
        <section className="py-20 md:py-28 scroll-reveal bg-[#1F1F1F]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left — text */}
              <div>
                <span className="inline-block text-[#8FA89A] font-body text-xs font-semibold tracking-wider uppercase mb-4">
                  Optional Add-on
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
                  Strategic <span className="text-[#8FA89A] italic">Advisory</span>
                </h2>
                <p className="font-body text-base md:text-lg text-stone-400 leading-relaxed mb-4">
                  Available once your accounting systems are stable. A focused session to review your
                  business finances, identify risks, and determine the right financial structure for
                  your business.
                </p>
                <p className="font-body text-sm text-stone-500 leading-relaxed mb-8">
                  This is not part of a monthly package — it is available as a standalone session when
                  you need deeper financial input or strategic clarity.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#8FA89A] text-white px-6 py-3.5 font-body font-semibold hover:bg-[#7a9488] transition-all text-sm"
                >
                  Book your session
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right — numbered feature list */}
              <div className="space-y-4">
                <p className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider mb-6">
                  Includes
                </p>
                {strategicAdvisory.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-stone-800 pb-4">
                    <span className="font-display text-2xl text-stone-700 flex-shrink-0 leading-none mt-1">
                      0{i + 1}
                    </span>
                    <span className="font-body text-base text-stone-300 leading-relaxed">{feature}</span>
                  </div>
                ))}

                {/* Result */}
                <div className="mt-6 p-6 border-l-4 border-[#8FA89A] bg-stone-900">
                  <p className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                    Result
                  </p>
                  <p className="font-body text-sm text-stone-300 italic leading-relaxed">
                    {strategicAdvisory.result}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Certification Badges */}
        <section className="py-12 scroll-reveal bg-[#F6F4F1]">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <p className="font-body text-xs text-stone-500 uppercase tracking-wider font-semibold mb-8">
              Certified on
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Image
                src="/images/xero.png"
                alt="Xero Advisor Certified"
                width={160}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: '70px', width: 'auto' }}
              />
              <Image
                src="/images/quickbook.png"
                alt="QuickBooks Online Certified"
                width={160}
                height={80}
                className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: '70px', width: 'auto' }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          tag="Let's talk"
          title={
            <>
              Which package
              <br />
              <span className="italic">fits your needs?</span>
            </>
          }
          description="Not sure where to start? Book a free consultation and we'll help you find the right level of support."
          buttonText="Book a free consultation"
          buttonLink="/contact"
        />

      </main>
    </PageWrapper>
  );
}