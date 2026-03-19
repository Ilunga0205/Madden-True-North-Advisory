import Image from "next/image";

export default function ImageWithOverlay({ 
  src, 
  alt, 
  quote, 
}) {
  return (
    <section className="scroll-reveal">
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
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