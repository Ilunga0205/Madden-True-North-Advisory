import SectionBadge from "@/components/ui/SectionBadge";
import { valuePropositions } from "@/constants/brand";

export default function ValuePropositionSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 scroll-reveal bg-[#F6F4F1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <SectionBadge>Who I help</SectionBadge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1F1F1F] leading-tight mb-4 sm:mb-6">
            Building businesses with <span className="text-[#8FA89A] italic">clarity and intention</span>
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-stone-700 leading-relaxed mb-6">
            I help founders, consultants, and service-based business owners gain clarity in their finances, strengthen decision-making, and grow with intention.
          </p>
          <p className="font-body text-base sm:text-lg text-stone-600 leading-relaxed">
            Most of my clients prioritize purpose and sustainability in how they build. Though many identify as women, my practice welcomes anyone committed to growing their business with thoughtfulness and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {valuePropositions.map((item, index) => (
            <div 
              key={item.number}
              className="scroll-reveal bg-white p-6 sm:p-8 lg:p-10 border-l-4 border-[#8FA89A]" 
              style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#8FA89A] flex items-center justify-center mb-4 sm:mb-6">
                <span className="font-display text-xl sm:text-2xl text-white">{item.number}</span>
              </div>
              <h3 className="font-body text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#1F1F1F]">
                {item.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}