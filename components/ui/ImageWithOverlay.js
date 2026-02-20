import Image from "next/image";

export default function ImageWithOverlay({ 
  src, 
  alt, 
  quote, 
  height = "h-[500px] md:h-[650px]" 
}) {
  return (
    <section className="scroll-reveal">
      <div className={`relative ${height}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/40 to-transparent" />
        
        {/* Overlay text on image */}
        {quote && (
          <div className="absolute inset-0 flex items-end justify-center pb-12">
            <div className="text-center">
              <p className="font-display text-white text-2xl md:text-3xl italic">
                &quot;{quote}&quot;
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}