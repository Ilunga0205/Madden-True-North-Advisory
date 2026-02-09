"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="bg-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <button
                onClick={scrollToTop}
                className="mb-6 cursor-pointer transition-all duration-300 hover:opacity-80 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8FA89A] focus:ring-offset-2 focus:ring-offset-[#1F1F1F] rounded"
                aria-label="Scroll to top"
              >
                <Image 
                  src="/images/logowhite.png"
                  alt="Madden True North Advisory"
                  width={250}
                  height={60}
                  className="object-contain object-left"
                  style={{ height: 'auto' }}
                  priority
                />
              </button>
              <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-md mb-6">
                Supporting business owners with clarity, structure, and grounded decision-making.
              </p>
              <Link 
                href="/contact"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="inline-flex items-center gap-2 text-[#8FA89A] font-semibold hover:gap-3 transition-all text-sm"
              >
                <span>Book a consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2">
              <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Navigation
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/about" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  About
                </Link>
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Services
                </Link>
                <Link href="/packages" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Packages
                </Link>
                <Link href="/insights" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Insights
                </Link>
                <Link href="/contact" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Our Services
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/services#strategy" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Strategy Development
                </Link>
                <Link href="/services#operations" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Operations Optimization
                </Link>
                <Link href="/services#advisory" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Executive Advisory
                </Link>
                <Link href="/services#transformation" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Business Transformation
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Connect
              </h4>
              <div className="flex flex-col gap-4">
                <a 
  href="mailto:inge@maddentruenorthadvisory.com"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
  className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors flex items-center gap-2"
>
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  <span>inge@maddentruenorthadvisory.com</span>
</a>
                
                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400">
                  <p className="font-semibold text-white mb-2">Global Presence</p>
                  <p>Serving clients worldwide</p>
                  <p className="text-xs mt-1">5 continents • 100+ organizations</p>
                </div>

                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400">
                  <p className="font-semibold text-white mb-2">Business Hours</p>
                  <p className="text-xs">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-xs">Consultations by appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="py-8 border-y border-stone-800 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">15+</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Years of Excellence</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">100+</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Clients Served</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">5</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Continents</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">95%</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">
              © {new Date().getFullYear()} Madden True North Advisory. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
                {/* Privacy Policy */}
              </Link>
              <Link href="/terms" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
                {/* Terms of Service */}
              </Link>
              <Link href="/sitemap" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
                {/* Sitemap */}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Minimal Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <div className="bg-white border-2 border-[#8FA89A] rounded-full p-3 hover:bg-[#8FA89A] hover:border-[#8FA89A] transition-all duration-300 shadow-lg group">
          <svg 
            className="w-5 h-5 text-[#8FA89A] group-hover:text-white transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
    </>
  );
}