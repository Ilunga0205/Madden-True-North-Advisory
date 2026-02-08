import Image from "next/image";
import Link from "next/link";

export default function ServiceDetailCard({ 
  badge,
  title, 
  subtitle, 
  features, 
  outcome,
  imageSrc,
  imageAlt,
  imagePosition = "right", // "left" or "right"
  link = "/contact"
}) {
  const contentOrder = imagePosition === "right" ? "order-2 md:order-1" : "order-2 md:order-2";
  const imageOrder = imagePosition === "right" ? "order-1 md:order-2" : "order-1 md:order-1";

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className={contentOrder}>
        <div className="inline-block px-4 py-2 bg-[#F6F4F1] text-[#8FA89A] font-body text-xs font-semibold rounded-full mb-4">
          {badge}
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-[#1F1F1F] mb-4">
          {title}
        </h2>
        <p className="font-body text-xl text-stone-600 mb-6">
          {subtitle}
        </p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg className="w-6 h-6 text-[#8FA89A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-stone-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="p-6 bg-[#F6F4F1] border-l-4 border-[#8FA89A] mb-6">
          <p className="font-body font-semibold text-[#1F1F1F] mb-1">Outcome:</p>
          <p className="font-body text-stone-700 italic">{outcome}</p>
        </div>

        <Link
          href={link}
          className="inline-flex items-center font-body text-[#8FA89A] hover:text-[#1F1F1F] font-semibold transition-colors group"
        >
          <span className="underline underline-offset-4">Get started</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div className={imageOrder}>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}