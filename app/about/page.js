"use client";

import Link from "next/link";
import { useEffect } from "react";
import { globalStyles } from "@/styles/globalStyles";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <style jsx global>{globalStyles}</style>

      {/* Hero Section */}
      <section className="relative bg-[#F6F4F1] overflow-hidden py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-slideDown mb-4" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block text-[#8FA89A] font-body text-sm font-semibold tracking-wider uppercase">
              About Inge Madden
            </span>
          </div>
          <div className="animate-fadeInUp mb-6" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-[1.1]">
              Professional accountant. <span className="text-[#8FA89A] italic">Practical support.</span>
            </h1>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto">
              I am a professional accountant supporting service-based business owners with ongoing
              bookkeeping, tax compliance and financial oversight. My work focuses on helping businesses
              stay organised and meet their obligations while also understanding their numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <ImageWithOverlay
        src="/images/about.jpg"
        alt="Inge Madden - True North Advisory"
        quote="Keeping your finances accurate, compliant and understandable"
      />

      {/* Professional Background + International Clients */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-5 gap-16 items-start">

            <div className="md:col-span-2">
              <div className="inline-block px-4 py-2 bg-[#F6F4F1] text-[#8FA89A] font-body text-sm font-semibold rounded-full mb-6">
                About Inge
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight sticky top-24">
                Experience you can <span className="text-[#8FA89A] italic">rely on</span>
              </h2>
            </div>

            <div className="md:col-span-3 space-y-10">

              {/* Professional Background */}
              <div>
                <h3 className="font-display text-2xl text-[#1F1F1F] mb-4">
                  Professional Background
                </h3>
                <ul className="space-y-3">
                  {[
                    "Over 15 years experience in accounting and financial management",
                    "Experience with small businesses and professionals across multiple industries",
                    "Cloud accounting systems: Xero & QuickBooks Online",
                    "Clients supported locally and internationally",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FA89A] flex-shrink-0 mt-2.5" />
                      <span className="font-body text-base md:text-lg text-stone-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* International Clients */}
              <div>
                <h3 className="font-display text-2xl text-[#1F1F1F] mb-4">
                  Working With International Clients
                </h3>
                <p className="font-body text-base md:text-lg text-stone-700 leading-relaxed mb-4">
                  I work with international clients using secure cloud accounting systems. Documents are
                  shared through protected folders and bookkeeping is completed on Xero or QuickBooks Online.
                  Communication is handled through scheduled check-ins and email support.
                </p>
                <p className="font-body text-base md:text-lg text-stone-700 leading-relaxed">
                  This allows business owners outside South Africa to have consistent and reliable
                  accounting support.
                </p>
              </div>

              {/* Quote */}
              <div className="p-8 bg-[#F6F4F1] border-l-4 border-[#8FA89A]">
                <p className="font-body text-lg text-stone-700 leading-relaxed italic">
                  &quot;True North Advisory was created to give business owners ongoing financial
                  support — not just once-a-year tax preparation.&quot;
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Principles Section — restored exactly */}
      <section className="py-32 scroll-reveal bg-[#F6F4F1]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-4 py-2 bg-[#8FA89A] text-white font-body text-sm font-semibold rounded-full mb-6">
              My approach
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight">
              Three pillars of sustainable growth
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Financial Expertise",
                description: "Deep experience in accounting and finance, working with international clients to turn numbers into actionable insights and confident decisions.",
              },
              {
                number: "02",
                title: "Coaching & Strategy",
                description: "Helping you understand your priorities, make deliberate choices, and stay aligned with your vision as you grow.",
              },
              {
                number: "03",
                title: "Practical Resilience",
                description: "Building sustainable systems and mindsets that help you stay grounded through change and navigate challenges with confidence.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="scroll-reveal bg-white p-8 md:p-10 border-l-4 border-[#8FA89A] group hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-8">
                  <div className="font-display text-6xl md:text-7xl text-stone-200 flex-shrink-0">
                    {item.number}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-2xl md:text-3xl mb-3 text-[#1F1F1F]">
                      {item.title}
                    </h3>
                    <p className="font-body text-lg text-stone-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Approach Section — exact old styling */}
      <section className="py-32 scroll-reveal bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#F6F4F1] text-[#8FA89A] font-body text-sm font-semibold rounded-full mb-6">
              Working together
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] leading-tight mb-6">
              What you can <span className="text-[#8FA89A] italic">expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Clear financial foundation",
                description: "Your books are accurate, your reports are meaningful, and you understand exactly where your business stands.",
              },
              {
                title: "Strategic clarity",
                description: "You have a clear plan for growth, informed by both numbers and your deeper business priorities.",
              },
              {
                title: "Confident decision-making",
                description: "You feel equipped to make important decisions, knowing you have both the data and the support you need.",
              },
              {
                title: "Sustainable systems",
                description: "You've built resilient practices and mindsets that support long-term success, not just short-term wins.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-reveal group bg-[#F6F4F1] p-8 h-full border-l-4 border-transparent hover:shadow-md transition-all"
                style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
              >
                <h3 className="font-display text-2xl md:text-3xl mb-4 text-[#1F1F1F] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-lg text-stone-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

    </main>
  );
}