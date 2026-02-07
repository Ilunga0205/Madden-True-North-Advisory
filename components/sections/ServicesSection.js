import SectionBadge from "@/components/ui/SectionBadge";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/constants/brand";

export default function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-[#F6F4F1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionBadge variant="brand">Services</SectionBadge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-tight">
              Strategic support at every level
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}