"use client";

import { useState } from "react";
import Link from "next/link";

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
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-brand text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInUp">
          <p className="font-body text-sm font-medium">Coming soon – we&apos;re still crafting this section</p>
        </div>
      )}

      <header className="sticky top-0 z-50 border-b bg-background">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <Link href="/" className="font-semibold text-lg">
            Madden True North Advisory
          </Link> 

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" onClick={handleClick} className="text-muted-foreground hover:text-foreground cursor-pointer">About</a>
            <a href="#" onClick={handleClick} className="text-muted-foreground hover:text-foreground cursor-pointer">Services</a>
            <a href="#" onClick={handleClick} className="text-muted-foreground hover:text-foreground cursor-pointer">Offers</a>
            <a href="#" onClick={handleClick} className="text-muted-foreground hover:text-foreground cursor-pointer">Insights</a>
          </nav>

          <a href="#" onClick={handleClick} className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground cursor-pointer">
            Book consultation
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm" aria-label="Toggle navigation">
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t bg-background">
            <nav className="px-6 py-6 flex flex-col gap-4 text-sm">
              <a href="#" onClick={(e) => { handleClick(e); setOpen(false); }} className="cursor-pointer">About</a>
              <a href="#" onClick={(e) => { handleClick(e); setOpen(false); }} className="cursor-pointer">Services</a>
              <a href="#" onClick={(e) => { handleClick(e); setOpen(false); }} className="cursor-pointer">Offers</a>
              <a href="#" onClick={(e) => { handleClick(e); setOpen(false); }} className="cursor-pointer">Insights</a>
              <a href="#" onClick={(e) => { handleClick(e); setOpen(false); }} className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground cursor-pointer">
                Book consultation
              </a>
            </nav>
          </div>
        )}
      </header>

      <style dangerouslySetInnerHTML={{
        __html: `
          .bg-brand {
            background-color: #8FA89A;
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

          .font-body {
            font-family: 'Montserrat', sans-serif;
          }
        `
      }} />
    </>
  );
}