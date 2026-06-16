import Link from "next/link";

const openings = [
  {
    title: "CDL Class A Driver",
    type: "Full-Time",
    location: "Houston, TX",
    description:
      "We're looking for experienced CDL Class A drivers to join our growing fleet. Long-haul and regional routes available. Home time and competitive pay.",
    requirements: [
      "Valid CDL Class A license",
      "Minimum 2 years OTR experience",
      "Clean MVR (no major violations)",
      "DOT medical certificate",
      "ELD experience preferred",
    ],
  },
  {
    title: "Local Delivery Driver",
    type: "Full-Time",
    location: "Houston Metro, TX",
    description:
      "Join our local team delivering freight across the Houston metro area. Home every day, competitive hourly pay, and great benefits.",
    requirements: [
      "Valid driver's license (CDL B preferred)",
      "1+ year delivery experience",
      "Knowledge of Houston area",
      "Ability to operate liftgates",
      "Clean background check",
    ],
  },
  {
    title: "Dispatcher / Logistics Coordinator",
    type: "Full-Time",
    location: "Houston, TX",
    description:
      "Coordinate our drivers, optimize routes, and ensure on-time delivery for our industrial clients. High-energy environment with great growth potential.",
    requirements: [
      "2+ years dispatching experience",
      "Proficiency in TMS/load boards",
      "Strong communication skills",
      "Ability to multitask",
      "Transportation industry knowledge",
    ],
  },
  {
    title: "Fleet Maintenance Technician",
    type: "Full-Time",
    location: "Houston, TX",
    description:
      "Keep our modern fleet running at peak performance. Perform preventive maintenance, DOT inspections, and repairs on our trucks and trailers.",
    requirements: [
      "3+ years diesel mechanic experience",
      "ASE or diesel certification preferred",
      "Class A CDL a plus",
      "Ability to pass DOT physical",
      "Own basic tools required",
    ],
  },
  {
    title: "Operations Manager",
    type: "Full-Time",
    location: "Houston, TX",
    description:
      "Lead our daily operations team to ensure smooth, efficient freight movement. Work closely with dispatch, drivers, and clients to deliver excellence.",
    requirements: [
      "5+ years transportation management",
      "Strong leadership ability",
      "P&L management experience",
      "DOT/FMCSA regulation knowledge",
      "CRM and TMS proficiency",
    ],
  },
  {
    title: "Sales & Account Manager",
    type: "Full-Time",
    location: "Houston, TX (Remote option)",
    description:
      "Grow our industrial client base across Texas and beyond. Build long-term relationships with businesses that need reliable freight solutions.",
    requirements: [
      "3+ years B2B sales experience",
      "Transportation industry preferred",
      "Hunter mentality with retention focus",
      "CRM experience required",
      "Travel up to 25%",
    ],
  },
];

const benefits = [
  { icon: "💰", title: "Competitive Pay", desc: "Industry-leading compensation with performance bonuses" },
  { icon: "🏥", title: "Health Benefits", desc: "Medical, dental, and vision coverage for you and your family" },
  { icon: "🏖️", title: "Paid Time Off", desc: "Generous PTO policy and paid holidays" },
  { icon: "📈", title: "Career Growth", desc: "Internal promotions and professional development opportunities" },
  { icon: "🛻", title: "Modern Fleet", desc: "Drive new, well-maintained equipment with GPS and ELD" },
  { icon: "🤝", title: "Great Culture", desc: "Family-oriented environment where you're valued, not just a number" },
];

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-28 text-center"
        style={{ background: "linear-gradient(135deg, #0d1f0e 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#a7d9a8" }}>
            Join Our Team
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Careers at Wisdom</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            Be part of a team that's always moving in the right direction. Great pay, great people,
            and a company that values your career.
          </p>
          <div className="mt-10">
            <a
              href="#openings"
              className="inline-block px-8 py-4 rounded-lg font-bold text-gray-900 hover:opacity-90 transition-all"
              style={{ backgroundColor: "#6fcf70" }}
            >
              View Open Positions ↓
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              Why Work Here
            </div>
            <h2 className="text-4xl font-black text-gray-900">Benefits & Perks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl border hover:shadow-md transition-all"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" className="py-20" style={{ backgroundColor: "#f0f9f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              Now Hiring
            </div>
            <h2 className="text-4xl font-black text-gray-900">Open Positions</h2>
          </div>

          <div className="space-y-6">
            {openings.map(({ title, type, location, description, requirements }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border p-8 hover:shadow-lg transition-all duration-200"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                      >
                        {type}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: "#f0f9f0", color: "#2d6b2e" }}
                      >
                        📍 {location}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-lg text-sm font-bold text-white whitespace-nowrap hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#2d6b2e" }}
                  >
                    Apply Now →
                  </Link>
                </div>

                <p className="text-gray-600 leading-relaxed mb-5">{description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-sm text-gray-600">
                        <span style={{ color: "#2d6b2e" }}>✓</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
            Driver Program
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">Drivers Are Our Backbone</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            At Wisdom Transportation, we know our drivers are the heart of the business. That's why
            we invest in your success — from competitive pay and modern equipment to flexible home
            time and a culture that respects your professionalism.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: "Top 10%", label: "Driver pay in Texas" },
              { stat: "New Fleet", label: "Average truck age under 3 years" },
              { stat: "Home Time", label: "Regional options available" },
            ].map(({ stat, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f0f9f0" }}
              >
                <div className="text-2xl font-black mb-1" style={{ color: "#2d6b2e" }}>{stat}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
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
          <h2 className="text-3xl font-black text-white mb-4">Don't See Your Role?</h2>
          <p className="text-green-100 mb-8">
            We're always growing. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-gray-900 hover:opacity-90 transition-all"
            style={{ backgroundColor: "#6fcf70" }}
          >
            Send Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
