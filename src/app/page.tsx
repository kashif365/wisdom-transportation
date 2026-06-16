import Link from "next/link";

const stats = [
  { value: "48", label: "States Covered" },
  { value: "24/7", label: "Delivery Service" },
  { value: "20+", label: "Years Experience" },
  { value: "1000+", label: "Happy Clients" },
];

const services = [
  {
    icon: "🚛",
    title: "Freight Delivery",
    description:
      "From pickup trucks to tractor trailers, we move your freight safely to any destination in the 48 continental United States.",
  },
  {
    icon: "🏭",
    title: "Industrial Transport",
    description:
      "Specialized transportation solutions for the industrial sector. We understand your unique logistics needs.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "Need it there fast? Our expedited delivery service ensures your packages arrive on time, every time.",
  },
  {
    icon: "🛡️",
    title: "Insured & Certified",
    description:
      "TXDOT and USDOT certified. Every shipment is fully insured and handled by professional drivers.",
  },
  {
    icon: "📍",
    title: "Texas Specialists",
    description:
      "Deep knowledge of Texas routes and markets. Houston, Dallas, San Antonio, Austin and beyond.",
  },
  {
    icon: "📞",
    title: "Personal Service",
    description:
      "We believe in personal service made right the first time. Your dedicated contact is always one call away.",
  },
];

const testimonials = [
  {
    quote:
      "Wisdom Transportation has been our go-to logistics partner for over 5 years. Reliable, professional, and always on time.",
    author: "James R.",
    role: "Operations Manager, Industrial Co.",
  },
  {
    quote:
      "Their fleet and team are top-notch. We never worry about our shipments when Wisdom is handling them.",
    author: "Sandra M.",
    role: "Logistics Director",
  },
  {
    quote:
      "Fast, responsive, and professional. They handle our most urgent deliveries without a hitch.",
    author: "Mike T.",
    role: "Plant Supervisor",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0d1f0e 0%, #1a4a1b 40%, #2d6b2e 100%)",
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: "#ffffff18", color: "#a7d9a8" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            TXDOT &amp; USDOT Certified Carrier
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Always Moving In
            <br />
            <span style={{ color: "#6fcf70" }}>The Right Direction!</span>
          </h1>

          <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Wisdom Transportation is a full-service transportation company providing reliable
            industrial freight delivery across all 48 continental United States — from pickup
            trucks to tractor trailers, 24 hours a day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg text-base font-bold text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#2d6b2e", border: "2px solid #4a8f4b" }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:7136411700"
              className="px-8 py-4 rounded-lg text-base font-bold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#ffffff18",
                color: "#ffffff",
                border: "2px solid #ffffff44",
              }}
            >
              📞 713-641-1700
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-3 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black mb-1" style={{ color: "#4a8f4b" }}>
                  {value}
                </div>
                <div className="text-sm font-medium" style={{ color: "#9ca3af" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
                Welcome to
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                Wisdom Transportation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are a full-service transportation company providing superior service to the
                industrial sector. From pickup trucks to tractor trailers, our fleet is ready to
                move your freight anywhere you need it.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We have TXDOT and USDOT authorities which enable us to get your freight delivered
                anywhere in the 48 continental United States. Feel free to contact us with any
                questions at the email addresses listed or call us at{" "}
                <a href="tel:7136411700" style={{ color: "#2d6b2e", fontWeight: 600 }}>
                  713-641-1700
                </a>
                . For fast delivery, you also want to know that it's in good hands.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                Wisdom Transportation believes in personal service and made right the first time.
                Our experienced drivers will care for your packages and ensure that the delivery is
                made on time, 24 hours a day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "#2d6b2e" }}
                >
                  Our Services
                </Link>
                <Link
                  href="/our-fleet"
                  className="px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-100"
                  style={{ color: "#2d6b2e", border: "2px solid #2d6b2e" }}
                >
                  View Our Fleet
                </Link>
              </div>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "🗺️", title: "Nationwide Reach", desc: "48 continental US states covered with our extensive carrier network" },
                { icon: "⏰", title: "24/7 Operations", desc: "Round-the-clock delivery service for time-sensitive industrial freight" },
                { icon: "✅", title: "DOT Certified", desc: "Fully licensed with TXDOT and USDOT authorities for all freight classes" },
                { icon: "🤝", title: "Personal Touch", desc: "Direct communication with your driver and dedicated account support" },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ borderColor: "#e5e7eb", backgroundColor: "#f9fafb" }}
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-20" style={{ backgroundColor: "#f0f9f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              What We Do
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to meet the demands of the industrial sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-colors"
                  style={{ backgroundColor: "#f0f9f0" }}
                >
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#2d6b2e" }}
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1a4a1b 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Ready to Ship?
          </h2>
          <p className="text-green-100 text-lg mb-10">
            Contact us today for a free, no-obligation quote. Our team is standing by 24/7 to
            handle your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg font-bold text-gray-900 transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#6fcf70" }}
            >
              Request a Quote
            </Link>
            <a
              href="tel:7136411700"
              className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-105"
              style={{ border: "2px solid #ffffff66" }}
            >
              Call 713-641-1700
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2d6b2e" }}>
              Client Feedback
            </div>
            <h2 className="text-4xl font-black text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ quote, author, role }) => (
              <div
                key={author}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb" }}
              >
                <div className="text-3xl mb-4" style={{ color: "#2d6b2e" }}>"</div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">{quote}</p>
                <div>
                  <div className="font-bold text-gray-900">{author}</div>
                  <div className="text-sm" style={{ color: "#2d6b2e" }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
