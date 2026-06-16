import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Truck, Package, Zap, Star } from "lucide-react";

const stats = [
  { value: "48", label: "States Covered" },
  { value: "24/7", label: "Operations" },
  { value: "20+", label: "Years in Business" },
  { value: "1,000+", label: "Clients Served" },
];

const services = [
  {
    Icon: Truck,
    title: "Full Truckload",
    desc: "Dedicated trucks for your cargo — no sharing, no delays. Direct pickup to delivery.",
  },
  {
    Icon: Package,
    title: "LTL Freight",
    desc: "Cost-effective shipping for smaller loads. Pay only for the space you use.",
  },
  {
    Icon: Zap,
    title: "Expedited Delivery",
    desc: "Time-critical shipments dispatched immediately — same day, around the clock.",
  },
  {
    Icon: ShieldCheck,
    title: "Industrial Transport",
    desc: "Specialized handling for heavy equipment, machinery, and oversized loads.",
  },
];

const reasons = [
  "TXDOT & USDOT certified for all 48 states",
  "Professional, background-checked drivers",
  "Real-time GPS tracking on every shipment",
  "Full cargo insurance on every load",
  "Personal account manager assigned to you",
  "24/7 dispatch — we never close",
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/imgi_28_truck.jpg"
          alt="Wisdom Transportation truck on the highway"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 55%, rgba(13,27,42,0.3) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8"
              style={{ backgroundColor: "#47DEB820", border: "1px solid #47DEB850", color: "#47DEB8" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              TXDOT &amp; USDOT Certified Carrier
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Always Moving<br />
              <span style={{ color: "#47DEB8" }}>In The Right</span><br />
              Direction.
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl">
              Wisdom Transportation delivers your freight anywhere in the 48 continental United
              States — on time, every time. From pickup trucks to tractor trailers, 24 hours a day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-base transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
              >
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <a
                href="tel:7136411700"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-base text-white transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <Phone size={18} />
                713-641-1700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0d1b2a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-4">
                <div className="text-4xl font-black mb-1" style={{ color: "#47DEB8" }}>
                  {value}
                </div>
                <div className="text-sm" style={{ color: "#64748b" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SPLIT ──────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image stack */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/imgi_29_trucks.jpg"
                  alt="Wisdom Transportation flatbed truck"
                  width={640}
                  height={420}
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-6 -right-6 rounded-xl p-5 shadow-2xl hidden sm:block"
                style={{ backgroundColor: "#0d1b2a", maxWidth: 220 }}
              >
                <Image
                  src="/imgi_16_left2.jpg"
                  alt="Next Exit Wisdom"
                  width={200}
                  height={130}
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-6">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
                Welcome to Wisdom Transportation
              </span>
              <h2 className="mt-3 text-4xl font-black text-slate-900 leading-tight mb-5">
                Your Trusted Freight<br />Partner Since 2000
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                We are a full-service transportation company providing superior service to the industrial
                sector. Our fleet ranges from pickup trucks to tractor trailers, ready to move your
                freight anywhere you need it — safely and on schedule.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                With TXDOT and USDOT authority, we deliver across all 48 continental United States.
                Wisdom Transportation believes in personal service, done right the first time.
                Our experienced drivers care for your packages and ensure on-time delivery, 24 hours a day.
              </p>

              <ul className="space-y-3 mb-10">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-slate-600">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#e0faf4" }}
                    >
                      <ShieldCheck size={12} style={{ color: "#47DEB8" }} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                >
                  Our Services <ArrowRight size={16} />
                </Link>
                <Link
                  href="/our-fleet"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-all hover:bg-slate-50"
                  style={{ borderColor: "#e2e8f0", color: "#0d1b2a" }}
                >
                  View Fleet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              What We Do
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Transportation Solutions
            </h2>
            <p className="mt-4 text-slate-500">
              From single pallets to full truckloads — we have the right solution for your business, delivered with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-7 border hover:border-transparent hover:shadow-xl transition-all duration-300"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors group-hover:scale-105 duration-300"
                  style={{ backgroundColor: "#e0faf4" }}
                >
                  <Icon size={22} style={{ color: "#47DEB8" }} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              style={{ color: "#47DEB8" }}
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUCK IMAGE BANNER ───────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="/imgi_14_left1.jpg"
          alt="Semi-truck"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(13,27,42,0.96) 0%, rgba(13,27,42,0.7) 60%, rgba(13,27,42,0.2) 100%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
              Ready to Ship<br />
              <span style={{ color: "#47DEB8" }}>Your Freight?</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              Our team is standing by 24/7. Call us now or fill out a quick quote form and we'll
              get back to you within the hour.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href="tel:7136411700"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-sm text-white"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                <Phone size={16} /> 713-641-1700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CUSTOMER SERVICE STRIP ───────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
                Personal Service
              </span>
              <h2 className="mt-3 text-4xl font-black text-slate-900 leading-tight mb-5">
                We're Here For You<br />Around the Clock
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                At Wisdom Transportation, you're never just a tracking number. Every client gets a
                dedicated contact who knows your account, your freight, and your deadlines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {[
                  { Icon: Phone, label: "Call Us", val: "713-641-1700" },
                  { Icon: Clock, label: "Hours", val: "24/7/365" },
                  { Icon: MapPin, label: "Base", val: "Houston, TX" },
                ].map(({ Icon, label, val }) => (
                  <div key={label} className="rounded-xl p-5" style={{ backgroundColor: "#f8fafc" }}>
                    <Icon size={20} className="mb-2" style={{ color: "#47DEB8" }} />
                    <div className="text-xs text-slate-400 mb-0.5">{label}</div>
                    <div className="text-sm font-bold text-slate-800">{val}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
              >
                Contact Our Team <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/imgi_27_wisdom.jpg"
                alt="Wisdom Transportation customer support"
                width={600}
                height={450}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              Testimonials
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Wisdom has been our go-to logistics partner for 5 years. Reliable, professional, always on time.", author: "James R.", role: "Operations Manager" },
              { quote: "Their fleet and team are top-notch. We never worry about our shipments when Wisdom is handling them.", author: "Sandra M.", role: "Logistics Director" },
              { quote: "Fast, responsive, professional. They handle our most urgent deliveries without a hitch.", author: "Mike T.", role: "Plant Supervisor" },
            ].map(({ quote, author, role }) => (
              <div
                key={author}
                className="bg-white rounded-2xl p-8 border"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#47DEB8" style={{ color: "#47DEB8" }} />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 italic">"{quote}"</p>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{author}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#47DEB8" }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
