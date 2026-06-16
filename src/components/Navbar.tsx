"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/services", label: "Services" },
  { href: "/our-fleet", label: "Our Fleet" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#0d1b2a" }} className="sticky top-0 z-50">
      {/* Top bar */}
      <div style={{ backgroundColor: "#47DEB8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end items-center gap-6">
          <a
            href="tel:7136411700"
            className="flex items-center gap-1.5 text-xs font-semibold text-white hover:opacity-80 transition-opacity"
          >
            <Phone size={13} />
            713-641-1700
          </a>
          <span className="text-white/60 text-xs">|</span>
          <span className="text-white/80 text-xs">TXDOT &amp; USDOT Certified</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/imgi_1_logo.jpg"
              alt="Wisdom Transportation"
              width={280}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-150"
                  style={{ color: active ? "#47DEB8" : "#cbd5e1" }}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
                      style={{ backgroundColor: "#47DEB8" }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 rounded-md text-sm font-bold transition-all duration-150 hover:opacity-90"
              style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden p-2"
            style={{ color: "#47DEB8" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t px-4 py-4 space-y-1"
          style={{ backgroundColor: "#132237", borderColor: "#1e3a52" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-3 py-3 rounded-md text-sm font-medium transition-colors"
              style={{
                color: pathname === href ? "#47DEB8" : "#94a3b8",
                backgroundColor: pathname === href ? "#1e3a52" : "transparent",
              }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/contact"
              className="block text-center py-3 rounded-md text-sm font-bold"
              style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
