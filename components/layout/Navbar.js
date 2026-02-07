"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <>
      {showMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#8FA89A] text-white px-6 py-3 rounded-lg shadow-xl animate-fadeInUp">
          <p className="font-['Montserrat'] text-sm font-medium">
            Coming soon – we&apos;re still crafting this section
          </p>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative h-10 w-48 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logoblack.png"
              alt="Madden True North Advisory"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a onClick={handleClick} className="nav-link">About</a>

            {/* ✅ Services is now live */}
            <Link href="/services" className="nav-link">
              Services
            </Link>

            <a onClick={handleClick} className="nav-link">Offers</a>
            <a onClick={handleClick} className="nav-link">Insights</a>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-[#8FA89A] text-white font-['Montserrat'] font-semibold px-6 py-2.5 hover:bg-[#7a9284] transition-all text-sm group"
          >
            <span>Book consultation</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border-2 border-stone-300 hover:border-[#8FA89A] transition-colors"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-stone-200 bg-[#F6F4F1]">
            <nav className="px-6 py-6 flex flex-col gap-4">
              <a onClick={(e) => { handleClick(e); setOpen(false); }} className="mobile-link">
                About
              </a>

              {/* ✅ Services live on mobile too */}
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="mobile-link"
              >
                Services
              </Link>

              <a onClick={(e) => { handleClick(e); setOpen(false); }} className="mobile-link">
                Offers
              </a>

              <a onClick={(e) => { handleClick(e); setOpen(false); }} className="mobile-link">
                Insights
              </a>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-[#8FA89A] text-white font-['Montserrat'] font-semibold px-6 py-3 hover:bg-[#7a9284] transition-all group"
              >
                Book consultation →
              </Link>
            </nav>
          </div>
        )}
      </header>

      <style jsx global>{`
        .nav-link {
          font-family: Montserrat;
          font-size: 0.875rem;
          font-weight: 500;
          color: #57534e;
          cursor: pointer;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #8fa89a;
        }

        .mobile-link {
          font-family: Montserrat;
          font-size: 1rem;
          font-weight: 500;
          color: #1f1f1f;
          padding: 0.5rem 0;
        }

        .mobile-link:hover {
          color: #8fa89a;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
