import Link from "next/link";

const vehicles = [
  {
    icon: "🚐",
    name: "Cargo Vans",
    capacity: "Up to 3,500 lbs",
    dimensions: "9 ft L × 5 ft W × 5 ft H",
    best: "Small parcels, documents, rush deliveries",
    features: ["Fast maneuverability", "Urban delivery", "Same-day service", "Climate options"],
  },
  {
    icon: "🛻",
    name: "Pickup Trucks",
    capacity: "Up to 2,000 lbs",
    dimensions: "8 ft L × 6 ft W bed",
    best: "Local deliveries, construction materials",
    features: ["Versatile load bed", "Easy access", "Texas citywide", "24/7 available"],
  },
  {
    icon: "🚚",
    name: "Box Trucks (16–26 ft)",
    capacity: "Up to 26,000 lbs",
    dimensions: "26 ft L × 8 ft W × 8 ft H",
    best: "Mid-size freight, furniture, equipment",
    features: ["Liftgate equipped", "Pallet jack included", "Dry freight", "Climate control"],
  },
  {
    icon: "🚛",
    name: "Flatbed Trailers",
    capacity: "Up to 48,000 lbs",
    dimensions: "48–53 ft L × 8.5 ft W",
    best: "Machinery, steel, oversized industrial loads",
    features: ["Oversized capable", "Tie-down straps", "Step deck available", "Permit service"],
  },
  {
    icon: "🏗️",
    name: "Tractor-Trailers (53 ft)",
    capacity: "Up to 44,000 lbs",
    dimensions: "53 ft L × 8.5 ft W × 9 ft H",
    best: "Long-haul FTL freight, coast-to-coast",
    features: ["Nationwide routes", "GPS tracked", "Air ride suspension", "Team drivers"],
  },
  {
    icon: "🧊",
    name: "Refrigerated Units (Reefer)",
    capacity: "Up to 44,000 lbs",
    dimensions: "53 ft L × 8.5 ft W × 9 ft H",
    best: "Perishable goods, pharmaceuticals, food",
    features: ["Temp monitoring", "Multi-temp zones", "Backup cooling", "HACCP compliant"],
  },
];

const fleetHighlights = [
  { label: "Fleet Size", value: "50+ Vehicles" },
  { label: "Average Age", value: "< 3 Years" },
  { label: "GPS Tracked", value: "100%" },
  { label: "DOT Inspected", value: "Monthly" },
];

export default function OurFleetPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-28 text-center"
        style={{ background: "linear-gradient(135deg, #0d1f0e 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#a7d9a8" }}>
            Built for Performance
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Our Fleet</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            From nimble cargo vans to powerful 53-foot tractor-trailers — our modern, well-maintained
            fleet is equipped to handle any freight, any size, anywhere.
          </p>
        </div>
      </section>

      {/* Fleet highlights bar */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetHighlights.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-black mb-1" style={{ color: "#4a8f4b" }}>{value}</div>
                <div className="text-sm" style={{ color: "#9ca3af" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              Vehicle Types
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your Hauler</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every vehicle in our fleet is GPS-tracked, DOT-inspected, and operated by a certified professional driver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map(({ icon, name, capacity, dimensions, best, features }) => (
              <div
                key={name}
                className="rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ borderColor: "#e5e7eb" }}
              >
                {/* Card header */}
                <div
                  className="p-8 text-center"
                  style={{ background: "linear-gradient(135deg, #f0f9f0 0%, #dcf5dc 100%)" }}
                >
                  <div className="text-6xl mb-3">{icon}</div>
                  <h3 className="text-xl font-black text-gray-900">{name}</h3>
                </div>

                {/* Card body */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-medium">Capacity</span>
                      <span className="text-gray-800 font-semibold">{capacity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 font-medium">Dimensions</span>
                      <span className="text-gray-800 font-semibold">{dimensions}</span>
                    </div>
                    <div
                      className="rounded-lg p-3 text-sm"
                      style={{ backgroundColor: "#f0f9f0" }}
                    >
                      <span className="font-semibold" style={{ color: "#2d6b2e" }}>Best for: </span>
                      <span className="text-gray-600">{best}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Features
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {features.map((f) => (
                        <span
                          key={f}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: "#f0f9f0", color: "#2d6b2e" }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20" style={{ backgroundColor: "#f0f9f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
                Safety First
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Maintained to the Highest Standards
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Every vehicle in the Wisdom fleet undergoes rigorous monthly DOT inspections and
                preventive maintenance. We don't wait for problems — we prevent them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                All our drivers hold valid CDL licenses, undergo background checks, and receive
                ongoing safety training. When your freight is with Wisdom, it's in professional hands.
              </p>
              <div className="space-y-4">
                {[
                  "Monthly DOT vehicle inspections",
                  "Real-time GPS tracking on all units",
                  "CDL-licensed & background-checked drivers",
                  "Full cargo insurance coverage",
                  "Electronic logging device (ELD) compliant",
                  "TXDOT & USDOT authority maintained",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shrink-0"
                      style={{ backgroundColor: "#2d6b2e" }}
                    >
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-10"
              style={{ background: "linear-gradient(135deg, #1a4a1b 0%, #2d6b2e 100%)" }}
            >
              <h3 className="text-white text-2xl font-black mb-6">Fleet Certifications</h3>
              <div className="space-y-5">
                {[
                  { cert: "USDOT", desc: "United States Department of Transportation authority for interstate freight" },
                  { cert: "TXDOT", desc: "Texas Department of Transportation certified intrastate carrier" },
                  { cert: "FMCSA", desc: "Federal Motor Carrier Safety Administration compliant operations" },
                  { cert: "ELD", desc: "Electronic Logging Device compliant — full HOS transparency" },
                ].map(({ cert, desc }) => (
                  <div key={cert} className="flex gap-4 items-start">
                    <div
                      className="px-3 py-1 rounded text-xs font-black shrink-0"
                      style={{ backgroundColor: "#6fcf70", color: "#0d1f0e" }}
                    >
                      {cert}
                    </div>
                    <p className="text-green-100 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1a4a1b 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-white mb-4">Need the Right Vehicle?</h2>
          <p className="text-green-100 mb-8">
            Our logistics team will match your shipment to the perfect vehicle for the job. Call us or
            fill out our quote form today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-bold text-gray-900 hover:opacity-90 transition-all"
              style={{ backgroundColor: "#6fcf70" }}
            >
              Request a Quote
            </Link>
            <a
              href="tel:7136411700"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all"
              style={{ border: "2px solid #ffffff66" }}
            >
              Call 713-641-1700
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
