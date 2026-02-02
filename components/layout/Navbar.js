"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="font-semibold text-lg">
          Madden True North Advisory
        </Link> 

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-foreground">
            Services
          </Link>
          <Link href="/offers" className="text-muted-foreground hover:text-foreground">
            Offers
          </Link>
          <Link href="/insights" className="text-muted-foreground hover:text-foreground">
            Insights
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Book consultation
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-sm"
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="px-6 py-6 flex flex-col gap-4 text-sm">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/offers" onClick={() => setOpen(false)}>
              Offers
            </Link>
            <Link href="/insights" onClick={() => setOpen(false)}>
              Insights
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 font-medium text-primary-foreground"
            >
              Book consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
