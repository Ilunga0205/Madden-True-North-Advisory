"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative h-14 w-64 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logoblack.png"
              alt="Madden True North Advisory"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/about" className="font-['Montserrat'] text-sm font-medium text-stone-600 hover:text-[#8FA89A] transition-colors">
              About
            </Link>
            <Link href="/services" className="font-['Montserrat'] text-sm font-medium text-stone-600 hover:text-[#8FA89A] transition-colors">
              Services
            </Link>
            <Link href="/packages" className="font-['Montserrat'] text-sm font-medium text-stone-600 hover:text-[#8FA89A] transition-colors">
              Packages
            </Link>
            <Link href="/insights" className="font-['Montserrat'] text-sm font-medium text-stone-600 hover:text-[#8FA89A] transition-colors">
              Insights
            </Link>
          </nav>

          {/* Desktop Button */}
          <Link 
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#8FA89A] text-white font-['Montserrat'] font-semibold px-6 py-2.5 hover:bg-[#7a9284] transition-all text-sm group"
          >
            <span>Book consultation</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border-2 border-stone-300 text-[#1F1F1F] hover:border-[#8FA89A] transition-colors" 
            aria-label="Toggle navigation"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-stone-200 bg-[#F6F4F1]">
            <nav className="px-6 py-6 flex flex-col gap-4">
              <Link href="/about" onClick={() => setOpen(false)} className="font-['Montserrat'] text-base font-medium text-[#1F1F1F] hover:text-[#8FA89A] transition-colors py-2">
                About
              </Link>
              <Link href="/services" onClick={() => setOpen(false)} className="font-['Montserrat'] text-base font-medium text-[#1F1F1F] hover:text-[#8FA89A] transition-colors py-2">
                Services
              </Link>
              <Link href="/packages" onClick={() => setOpen(false)} className="font-['Montserrat'] text-base font-medium text-[#1F1F1F] hover:text-[#8FA89A] transition-colors py-2">
                Packages
              </Link>
              <Link href="/insights" onClick={() => setOpen(false)} className="font-['Montserrat'] text-base font-medium text-[#1F1F1F] hover:text-[#8FA89A] transition-colors py-2">
                Insights
              </Link>
              <Link 
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#8FA89A] text-white font-['Montserrat'] font-semibold px-6 py-3 hover:bg-[#7a9284] transition-all group"
              >
                <span>Book consultation</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');
      `}</style>
    </>
  );
}