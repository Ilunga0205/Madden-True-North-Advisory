"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus("loading");
    try {
      const res = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (data.success) {
        setNewsletterStatus("success");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
      }
    } catch {
      setNewsletterStatus("error");
    }
  };

  return (
    <>
      <footer className="bg-[#1F1F1F] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20">

          {/* Newsletter Section */}
          <div className="py-10 mb-12 border-b border-stone-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs font-semibold uppercase tracking-wider text-[#8FA89A] mb-2">
                  Stay informed
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl md:text-3xl text-white leading-snug">
                  Get financial insights <span className="italic text-[#8FA89A]">delivered</span>
                </h3>
                <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 mt-2 leading-relaxed max-w-sm">
                  Practical accounting and tax tips for service-based business owners — without the jargon.
                </p>
              </div>

              <div>
                {newsletterStatus === "success" ? (
                  <div className="flex items-center gap-3 px-5 py-4 bg-[#8FA89A]/10 border border-[#8FA89A]/30">
                    <div className="w-8 h-8 bg-[#8FA89A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#8FA89A] font-semibold text-sm">
                      You&#39;re subscribed! Insights coming your way.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="flex-1 px-4 py-3 text-sm bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:border-[#8FA89A] focus:outline-none transition-all"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === "loading"}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                      className="px-6 py-3 bg-[#8FA89A] text-white text-sm font-semibold hover:bg-[#7a9284] transition-all whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe"}
                    </button>
                  </form>
                )}
                {newsletterStatus === "error" && (
                  <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-red-400 mt-2">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                {newsletterStatus !== "success" && (
                  <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-600 mt-2">
                    Unsubscribe anytime. We respect your inbox.
                  </p>
                )}
              </div>
            </div>
          </div>

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
              <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 leading-relaxed max-w-md mb-2">
                Practical accounting, tax and financial support for service-based business owners — locally and internationally.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 leading-relaxed max-w-md mb-6">
                All work is performed using secure cloud accounting systems (Xero &amp; QuickBooks Online).
              </p>
              <Link
                href="/contact"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                className="inline-flex items-center gap-2 text-[#8FA89A] font-semibold hover:gap-3 transition-all text-sm"
              >
                <span>Book a free consultation</span>
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
                <Link href="/" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Home
                </Link>
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Services
                </Link>
                <Link href="/about" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  About
                </Link>
                <Link href="/contact" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Contact
                </Link>
                {/* Removed as per client action items — both docs confirm removal */}
                {/* <Link href="/packages" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Packages
                </Link> */}
                {/* <Link href="/insights" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Insights
                </Link> */}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Our Services
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Bookkeeping &amp; Monthly Accounting
                </Link>
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Tax &amp; Compliance
                </Link>
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Financial Statements
                </Link>
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Ongoing Financial Oversight
                </Link>
                <Link href="/services" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors">
                  Strategic Advisory
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                Connect
              </h4>
              <div className="flex flex-col gap-4">
                <Link
                  href="mailto:inge@maddentruenorthadvisory.com"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                  className="text-sm text-stone-400 hover:text-[#8FA89A] transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>inge@maddentruenorthadvisory.com</span>
                </Link>

                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400">
                  <p className="font-semibold text-white mb-2">Cloud Accounting Systems</p>
                  <p className="text-xs">Xero &amp; QuickBooks Online</p>
                  <p className="text-xs mt-1">Secure shared document folders</p>
                  {/* Certification Badges */}
                  <div className="flex items-center gap-4 mt-4">
                    <Image
                      src="/images/xero.png"
                      alt="Xero Advisor Certified"
                      width={80}
                      height={40}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <Image
                      src="/images/quickbook.png"
                      alt="QuickBooks Online Certified"
                      width={80}
                      height={40}
                      className="object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-sm text-stone-400">
                  <p className="font-semibold text-white mb-2">Business Hours</p>
                  <p className="text-xs">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-xs">Consultations by appointment</p>
                </div>

                {/* Social Media */}
                <div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="font-semibold text-white mb-3 text-sm">Follow Us</p>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://www.facebook.com/Maddentruetnorthadvisory"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-[#8FA89A] flex items-center justify-center hover:bg-[#7a9284] transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/maddentruenorthadvisory/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-9 h-9 rounded-full bg-[#8FA89A] flex items-center justify-center hover:bg-[#7a9284] transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full bg-[#8FA89A] flex items-center justify-center hover:bg-[#7a9284] transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
<div className="py-8 border-y border-stone-800 mb-8">
  <div className="grid grid-cols-3 gap-6 text-center">
    <div>
      <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">50+</div>
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Years Experience</div>
    </div>
    <div>
      <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">35+</div>
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Organisations Supported</div>
    </div>
    <div>
      <div style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-semibold text-[#8FA89A] mb-1">5</div>
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">Continents</div>
    </div>
  </div>
</div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500">
              © {new Date().getFullYear()} Madden True North Advisory. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {/* <Link href="/privacy" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-xs text-stone-500 hover:text-[#8FA89A] transition-colors">
                Terms of Service
              </Link> */}
            </div>
          </div>

        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </button>
    </>
  );
}