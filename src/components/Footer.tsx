import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const texasCities = [
  "Houston", "Bay City", "Clear Lake", "Humble", "Deer Park",
  "Galveston", "Pasadena", "Katy", "Tomball", "Conroe",
  "Cypress", "Sugar Land", "Rosenberg", "Pearland", "Baytown",
];

const houstonAreas = [
  "Spring", "The Woodlands", "Kingwood", "River Oaks", "Midtown",
  "Greenway Plaza", "Memorial", "Northpark", "Heights", "Bellaire",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a1220" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: "#1e3a52" }}>

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/imgi_1_logo.jpg"
                alt="Wisdom Transportation"
                width={220}
                height={50}
                className="h-10 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#64748b" }}>
              Full-service transportation company providing reliable freight delivery to the industrial sector across all 48 continental United States.
            </p>
            <div className="space-y-3">
              <a href="tel:7136411700" className="flex items-center gap-2.5 text-sm hover:opacity-80 transition-opacity" style={{ color: "#47DEB8" }}>
                <Phone size={15} />
                <span className="font-semibold">713-641-1700</span>
              </a>
              <a href="mailto:info@wisdomtransportation.com" className="flex items-center gap-2.5 text-sm hover:opacity-80 transition-opacity" style={{ color: "#64748b" }}>
                <Mail size={15} />
                info@wisdomtransportation.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "#64748b" }}>
                <MapPin size={15} />
                Houston, Texas
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "#64748b" }}>
                <Clock size={15} />
                Available 24 / 7 / 365
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#47DEB8" }}>Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/mission", label: "Our Mission" },
                { href: "/services", label: "Services" },
                { href: "/our-fleet", label: "Our Fleet" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact Us" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "#64748b" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Texas Cities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#47DEB8" }}>Delivery in Texas</h4>
            <ul className="space-y-2">
              {texasCities.map((city) => (
                <li key={city} className="text-xs" style={{ color: "#64748b" }}>{city}</li>
              ))}
            </ul>
          </div>

          {/* Houston Area */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: "#47DEB8" }}>Houston Metro</h4>
            <ul className="space-y-2 mb-8">
              {houstonAreas.map((area) => (
                <li key={area} className="text-xs" style={{ color: "#64748b" }}>{area}</li>
              ))}
            </ul>
            <div
              className="rounded-xl p-4"
              style={{ backgroundColor: "#132237" }}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#47DEB8" }}>Certified Carrier</div>
              <div className="text-xs" style={{ color: "#64748b" }}>TXDOT &amp; USDOT Authority</div>
              <div className="text-xs mt-1" style={{ color: "#64748b" }}>48 Continental US States</div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#334155" }}>
            &copy; {new Date().getFullYear()} Wisdom Transportation. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "#334155" }}>
            www.WisdomTransportation.com
          </p>
        </div>
      </div>
    </footer>
  );
}
