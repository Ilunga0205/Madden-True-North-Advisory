import SectionBadge from "@/components/ui/SectionBadge";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/constants/brand";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 scroll-reveal bg-[#F6F4F1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionBadge variant="brand">Services</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-tight">
              How we help
            </h2>
            <p className="font-body text-sm sm:text-base text-stone-500 leading-relaxed mt-4">
              All work is performed using secure cloud accounting systems (Xero &amp; QuickBooks Online).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 bg-[#8FA89A] text-white px-6 sm:px-8 py-3 sm:py-4 font-body font-semibold hover:bg-[#7a9284] transition-all duration-300"
          >
            <span>Explore Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}