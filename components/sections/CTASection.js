import Link from "next/link";
import SectionBadge from "@/components/ui/SectionBadge";

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 scroll-reveal overflow-hidden bg-[#8FA89A]">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <SectionBadge variant="transparent">Let&#39;s connect</SectionBadge>
        
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 leading-tight px-4">
          Let&#39;s find your
          <br />
          <span className="italic">true north</span>
        </h2>
        
        <p className="font-body text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
          Every engagement begins with a conversation about what you&#39;re facing and how we might help.
        </p>
        
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#8FA89A] font-body font-semibold hover:bg-white/90 transition-all hover:shadow-2xl hover:shadow-white/20 text-sm sm:text-base"
        >
          <span>Book a consultation</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}