import Link from "next/link";

const services = [
  {
    icon: "🚛",
    title: "Full Truckload (FTL)",
    description:
      "Dedicated trucks for large shipments. Your cargo gets the entire trailer — no sharing, no delays. Ideal for bulk industrial freight and time-sensitive loads.",
    features: ["Door-to-door service", "Real-time tracking", "Temperature control available", "Hazmat certified"],
  },
  {
    icon: "📦",
    title: "Less-Than-Truckload (LTL)",
    description:
      "Cost-effective freight shipping for smaller loads. We consolidate shipments efficiently so you only pay for the space you use.",
    features: ["Flexible scheduling", "Freight consolidation", "Cost savings", "Same reliability"],
  },
  {
    icon: "⚡",
    title: "Expedited Delivery",
    description:
      "When time is critical, our expedited service delivers. We dispatch immediately and move fast — no layovers, no delays.",
    features: ["Same-day dispatch", "24/7 availability", "Priority handling", "Direct routes"],
  },
  {
    icon: "🏭",
    title: "Industrial Freight",
    description:
      "Specialized handling for heavy equipment, machinery, and oversized industrial cargo. Our team is trained for the unique demands of industrial shipping.",
    features: ["Heavy haul capability", "Oversized loads", "Equipment expertise", "Specialized rigs"],
  },
  {
    icon: "🔧",
    title: "Dedicated Fleet Services",
    description:
      "Assign our drivers and trucks exclusively to your operations. Perfect for businesses with consistent, high-volume transportation needs.",
    features: ["Exclusive fleet assignment", "Custom scheduling", "Branded options", "Long-term contracts"],
  },
  {
    icon: "🗺️",
    title: "Nationwide Delivery",
    description:
      "TXDOT and USDOT certified for delivery across all 48 continental United States. One trusted partner, anywhere your business needs to go.",
    features: ["All 48 states", "DOT compliant", "Interstate authority", "Cross-border coordination"],
  },
];

const industries = [
  "Oil & Gas", "Manufacturing", "Construction", "Agriculture",
  "Chemical", "Automotive", "Aerospace", "Food & Beverage",
  "Healthcare", "Retail", "Technology", "Mining",
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-28 text-center"
        style={{ background: "linear-gradient(135deg, #0d1f0e 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#a7d9a8" }}>
            What We Offer
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Our Services</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            Comprehensive freight and transportation solutions designed for the demands of the
            industrial sector — flexible, reliable, and always on time.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Transportation Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From small parcel to full truckloads, from local Houston delivery to nationwide freight — we have the right solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon, title, description, features }) => (
              <div
                key={title}
                className="rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="p-8 flex-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                    style={{ backgroundColor: "#f0f9f0" }}
                  >
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-5">{description}</p>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <span style={{ color: "#2d6b2e" }}>✓</span>
                        <span className="text-gray-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href="/contact"
                    className="block text-center py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "#f0f9f0", color: "#2d6b2e" }}
                  >
                    Request This Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20" style={{ backgroundColor: "#f0f9f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              How It Works
            </div>
            <h2 className="text-4xl font-black text-gray-900">Simple Process, Reliable Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Get a Quote", desc: "Contact us with your freight details. We'll provide a fast, competitive quote." },
              { step: "02", title: "Schedule Pickup", desc: "Choose your pickup time. We dispatch promptly to your location." },
              { step: "03", title: "We Haul It", desc: "Our experienced drivers take care of your freight with professionalism." },
              { step: "04", title: "Delivered Safe", desc: "Your freight arrives on time and in perfect condition, every time." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4"
                  style={{ backgroundColor: "#2d6b2e" }}
                >
                  {step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              Industries Served
            </div>
            <h2 className="text-4xl font-black text-gray-900">Built for Your Industry</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "#f0f9f0", color: "#2d6b2e" }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1a4a1b 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-green-100 mb-8">
            Call us at{" "}
            <a href="tel:7136411700" className="font-bold text-white underline">
              713-641-1700
            </a>{" "}
            and we'll help you find the right transportation solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-gray-900 hover:opacity-90 transition-all"
            style={{ backgroundColor: "#6fcf70" }}
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
