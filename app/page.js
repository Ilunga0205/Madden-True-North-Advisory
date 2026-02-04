"use client";

import { useEffect, useState } from "react";

export default function UnderConstruction() {
  const [mounted, setMounted] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const closeModal = () => {
    setShowEmailModal(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

          .font-display {
            font-family: 'Playfair Display', serif;
            letter-spacing: -0.02em;
            font-weight: 600;
          }

          .font-body {
            font-family: 'Montserrat', sans-serif;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fadeInUp {
            opacity: 0;
            animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .animate-scaleIn {
            animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .bg-brand {
            background-color: #8FA89A;
          }

          .text-brand {
            color: #8FA89A;
          }

          .bg-brand-light {
            background-color: rgba(143, 168, 154, 0.1);
          }

          .border-brand {
            border-color: #8FA89A;
          }

          .text-charcoal {
            color: #1F1F1F;
          }
        `
      }} />

      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fadeIn" onClick={closeModal}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full p-8 animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="font-display text-2xl text-charcoal mb-2">Get in touch</h3>
              <p className="font-body text-stone-600 mb-6">Feel free to reach out to us at:</p>
              
              <div className="bg-brand-light rounded-lg p-4 mb-6">
                <a href="mailto:maddentruenorthadvisory@gmail.com" className="font-body font-semibold text-brand hover:underline">
                  maddentruenorthadvisory@gmail.com
                </a>
              </div>
              
              <button onClick={closeModal} className="w-full bg-brand text-white font-body font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 bg-brand-light text-brand font-body text-sm font-semibold tracking-wider uppercase">
              Coming Soon
            </span>
          </div>

          <div className={`mb-6 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-4">
              Finding our
              <br />
              <span className="text-brand italic">true north</span>
            </h1>
          </div>

          <div className={`mb-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <p className="font-body text-lg md:text-xl text-stone-700 leading-relaxed max-w-2xl mx-auto">
              We&apos;re crafting something thoughtful. This space will soon offer strategic insights, guidance, and the independent perspective you need to navigate complexity with clarity.
            </p>
          </div>

          <div className={`mb-12 ${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <div className="max-w-md mx-auto">
              <div className="h-1 bg-stone-200 rounded-full overflow-hidden">
                <div className="h-full bg-brand rounded-full transition-all duration-1000 ease-out" style={{ width: mounted ? '65%' : '0%' }} />
              </div>
              <p className="font-body text-sm text-stone-500 mt-3">Making progress</p>
            </div>
          </div>

          <div className={`${mounted ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="font-body text-stone-600">Have a question in the meantime?</p>
              <button onClick={handleEmailClick} className="group inline-flex items-center gap-2 font-body font-semibold text-brand hover:gap-3 transition-all cursor-pointer">
                <span>Get in touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-20 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse-slow" />
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse-slow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </main>
    </>
  );
}