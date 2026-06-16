import Link from "next/link";

const values = [
  {
    icon: "🎯",
    title: "Reliability",
    description:
      "We commit to every delivery with precision and care. Our clients count on us to deliver on time, every time, without excuses.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description:
      "Honesty and transparency define every interaction. We quote fairly, communicate clearly, and always follow through on our promises.",
  },
  {
    icon: "⚡",
    title: "Efficiency",
    description:
      "Smart routing, well-maintained vehicles, and experienced drivers mean your freight moves swiftly and cost-effectively.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    description:
      "Safety is non-negotiable. Every driver is trained, every vehicle inspected, and every shipment handled with the utmost care.",
  },
  {
    icon: "🌎",
    title: "Coverage",
    description:
      "With TXDOT and USDOT authority, we reach all 48 continental states, giving you a single trusted partner for your nationwide logistics.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We continuously invest in our fleet, processes, and technology to deliver smarter, faster, and greener transportation solutions.",
  },
];

const milestones = [
  { year: "2000", event: "Wisdom Transportation founded in Houston, Texas" },
  { year: "2005", event: "Expanded fleet to include tractor-trailers for heavy freight" },
  { year: "2010", event: "Obtained USDOT certification for nationwide operations" },
  { year: "2015", event: "Reached 500+ active industrial clients across Texas" },
  { year: "2020", event: "Launched 24/7 expedited delivery service" },
  { year: "2024", event: "Celebrating 20+ years of moving Texas forward" },
];

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-28 text-center"
        style={{ background: "linear-gradient(135deg, #0d1f0e 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#a7d9a8" }}>
            Who We Are
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Our Mission</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            To provide the industrial sector with the most reliable, efficient, and professional
            transportation services — delivered with integrity, every mile of the way.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
                Our Purpose
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Moving Industry Forward
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                At Wisdom Transportation, we believe that every shipment tells a story — a
                manufacturer waiting on parts, a project that can't afford a delay, a business
                counting on its supply chain. That's why we take every delivery personally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded in Houston, Texas, we built our company around a simple promise: do it
                right the first time. Our team of professional drivers, dispatchers, and logistics
                specialists works around the clock to ensure your freight arrives safely and on
                schedule.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From single pallets to full truckloads, from Houston to coast-to-coast, Wisdom
                Transportation is your trusted partner in industrial freight. We don't just move
                cargo — we move businesses forward.
              </p>
            </div>

            {/* Stats panel */}
            <div
              className="rounded-2xl p-10"
              style={{ background: "linear-gradient(135deg, #1a4a1b 0%, #2d6b2e 100%)" }}
            >
              <h3 className="text-white text-2xl font-black mb-8">Wisdom by the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "20+", label: "Years in Business" },
                  { value: "48", label: "States Served" },
                  { value: "1000+", label: "Satisfied Clients" },
                  { value: "24/7", label: "Service Hours" },
                  { value: "100%", label: "DOT Compliant" },
                  { value: "0", label: "Excuses Given" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-black text-white mb-1">{value}</div>
                    <div className="text-sm" style={{ color: "#a7d9a8" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20" style={{ backgroundColor: "#f0f9f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              What Drives Us
            </div>
            <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              Our Journey
            </div>
            <h2 className="text-4xl font-black text-gray-900">Company Milestones</h2>
          </div>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: "#d1fae5" }}
            />
            <div className="space-y-10">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-6 items-start relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 z-10"
                    style={{ backgroundColor: "#2d6b2e" }}
                  >
                    {year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <div className="text-sm font-bold mb-1" style={{ color: "#2d6b2e" }}>
                      {year}
                    </div>
                    <p className="text-gray-700">{event}</p>
                  </div>
                </div>
              ))}
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
          <h2 className="text-3xl font-black text-white mb-4">Partner With Us</h2>
          <p className="text-green-100 mb-8">
            Join the hundreds of industrial companies that trust Wisdom Transportation for their
            logistics needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-gray-900 hover:opacity-90 transition-all"
            style={{ backgroundColor: "#6fcf70" }}
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
