import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Brand */}
          <div>
            <p className="font-semibold text-lg">Madden True North Advisory</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Supporting business owners with clarity, structure, and grounded decision-making.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
              <Link href="/services" className="hover:text-foreground">
                Services
              </Link>
              <Link href="/offers" className="hover:text-foreground">
                Offers
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
              <Link href="/insights" className="hover:text-foreground">
                Insights
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} True North Advisory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
