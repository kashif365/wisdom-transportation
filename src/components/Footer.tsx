import Link from "next/link";

const texasCities = [
  "Bay City", "Clear Lake", "Humble", "Deer Park", "Galveston", "Pasadena",
  "Katy", "Tomball", "Conroe", "Cypress", "Sugar Land", "Rosenberg",
  "Stafford", "Cinco Ranch", "Friendswood", "League City", "Pearland",
  "Missouri City", "Richmond", "Baytown",
];

const houstonAreas = [
  "Spring", "The Woodlands", "Kingwood", "River Oaks", "Midtown",
  "Greenway Plaza", "Westheimer", "Memorial", "Northpark", "Heights",
  "Montrose", "East End", "Bellaire", "West University", "Meyerland",
];

const states = [
  "Texas", "Louisiana", "Oklahoma", "Arkansas", "New Mexico",
  "Alabama", "Mississippi", "Tennessee", "Florida", "Georgia",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111", color: "#d1d5db" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg"
                style={{ backgroundColor: "#2d6b2e" }}
              >
                W
              </div>
              <div>
                <div className="text-white font-bold">Wisdom Transportation</div>
                <div className="text-xs" style={{ color: "#4a8f4b" }}>Always Moving In The Right Direction!</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
              Full-service transportation company providing reliable, efficient delivery solutions to the industrial sector across the 48 continental United States.
            </p>
            <div className="mt-6">
              <div className="text-sm font-semibold text-white mb-1">TXDOT &amp; USDOT Certified</div>
              <a
                href="tel:7136411700"
                className="text-xl font-bold transition-colors"
                style={{ color: "#4a8f4b" }}
              >
                713-641-1700
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                    style={{ color: "#9ca3af" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Texas Cities */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Delivery in Texas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {texasCities.map((city) => (
                <span key={city} className="text-xs" style={{ color: "#9ca3af" }}>{city}</span>
              ))}
            </div>
          </div>

          {/* Houston Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Houston Metro Area</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-6">
              {houstonAreas.map((area) => (
                <span key={area} className="text-xs" style={{ color: "#9ca3af" }}>{area}</span>
              ))}
            </div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Nationwide Coverage</h3>
            <div className="flex flex-wrap gap-1">
              {states.map((state) => (
                <span
                  key={state}
                  className="text-xs px-2 py-0.5 rounded"
                  style={{ backgroundColor: "#1f2937", color: "#9ca3af" }}
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "#222" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#6b7280" }}>
            &copy; {new Date().getFullYear()} Wisdom Transportation. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "#6b7280" }}>
            www.WisdomTransportation.com
          </p>
        </div>
      </div>
    </footer>
  );
}
