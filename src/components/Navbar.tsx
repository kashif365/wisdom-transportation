"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl border-2"
              style={{ backgroundColor: "#2d6b2e", borderColor: "#4a8f4b" }}
            >
              W
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">Wisdom</div>
              <div className="text-xs leading-tight" style={{ color: "#4a8f4b" }}>
                Transportation
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: active ? "#2d6b2e" : "transparent",
                    color: active ? "#ffffff" : "#d1d5db",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "#2d6b2e22";
                      e.currentTarget.style.color = "#ffffff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#d1d5db";
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 rounded-md text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "#2d6b2e" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a4a1b")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2d6b2e")}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" style={{ opacity: open ? 0 : 1 }} />
            <div className="w-6 h-0.5 bg-white transition-all" style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-4 pb-4" style={{ backgroundColor: "#111111", borderColor: "#333" }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-3 text-sm font-medium border-b"
              style={{ color: pathname === href ? "#4a8f4b" : "#d1d5db", borderColor: "#222" }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 block text-center py-3 rounded-md text-sm font-semibold text-white"
            style={{ backgroundColor: "#2d6b2e" }}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
