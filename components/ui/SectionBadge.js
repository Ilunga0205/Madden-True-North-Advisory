export default function SectionBadge({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-white text-[#8FA89A]',
    brand: 'bg-[#8FA89A] text-white',
    light: 'bg-[#E8EDE9] text-[#8FA89A]',
    transparent: 'bg-white/10 backdrop-blur-sm text-white/90',
  };

  return (
    <div className={`inline-block px-4 py-2 font-body text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 ${variants[variant]}`}>
      {children}
    </div>
  );
}