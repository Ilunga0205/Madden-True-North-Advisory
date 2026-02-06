import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl sm:text-3xl text-white mb-4 font-semibold tracking-tight">
              Madden True North Advisory
            </h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-md mb-6">
              Supporting business owners with clarity, structure, and grounded decision-making.
            </p>
            <Link 
              href="/contact"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="inline-flex items-center gap-2 text-[#8FA89A] font-semibold hover:gap-3 transition-all text-sm"
            >
              <span>
          {/*Book a consultation */}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
              </Link>
              <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                
              </Link>
              <Link href="/offers" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                
              </Link>
              <Link href="/insights" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                
              </Link>
              <Link href="/contact" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                 {/* Contact */}
            
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@truenorthadvisory.com"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email us</span>
              </a>
              <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400">
                <p>Serving clients globally</p>
                <p className="text-xs mt-1">5 continents • 100+ organizations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">
            © {new Date().getFullYear()} Madden True North Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}