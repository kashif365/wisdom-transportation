import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Radio, Wrench, BarChart2, Users, DollarSign, Heart, TrendingUp, Coffee, MapPin, CheckCircle } from "lucide-react";

const openings = [
  {
    Icon: Truck,
    title: "CDL Class A Driver",
    type: "Full-Time",
    location: "Houston, TX",
    desc: "Experienced CDL Class A drivers for long-haul and regional routes. Home time and competitive pay.",
    reqs: ["Valid CDL Class A license", "Minimum 2 years OTR experience", "Clean MVR record", "DOT medical certificate"],
  },
  {
    Icon: MapPin,
    title: "Local Delivery Driver",
    type: "Full-Time",
    location: "Houston Metro, TX",
    desc: "Deliver freight across the Houston metro. Home every day, competitive hourly pay, great team.",
    reqs: ["Valid driver's license (CDL B preferred)", "1+ year delivery experience", "Houston area knowledge", "Clean background check"],
  },
  {
    Icon: Radio,
    title: "Dispatcher / Logistics Coordinator",
    type: "Full-Time",
    location: "Houston, TX",
    desc: "Coordinate drivers, optimize routes, and ensure on-time delivery for our industrial clients.",
    reqs: ["2+ years dispatching experience", "TMS / load board proficiency", "Strong communication skills", "Transportation industry background"],
  },
  {
    Icon: Wrench,
    title: "Fleet Maintenance Technician",
    type: "Full-Time",
    location: "Houston, TX",
    desc: "Keep our modern fleet running at peak performance. Preventive maintenance, DOT inspections, repairs.",
    reqs: ["3+ years diesel mechanic experience", "ASE or diesel certification preferred", "Ability to pass DOT physical", "Own basic tools required"],
  },
  {
    Icon: BarChart2,
    title: "Operations Manager",
    type: "Full-Time",
    location: "Houston, TX",
    desc: "Lead daily operations to ensure smooth, efficient freight movement across our fleet.",
    reqs: ["5+ years transportation management", "Strong leadership skills", "DOT/FMCSA regulation knowledge", "CRM and TMS proficiency"],
  },
  {
    Icon: Users,
    title: "Sales & Account Manager",
    type: "Full-Time",
    location: "Houston, TX",
    desc: "Grow our industrial client base across Texas. Build long-term relationships with businesses that need reliable freight.",
    reqs: ["3+ years B2B sales experience", "Transportation industry preferred", "CRM experience required", "Travel up to 25%"],
  },
];

const benefits = [
  { Icon: DollarSign, title: "Competitive Pay", desc: "Industry-leading compensation with performance bonuses" },
  { Icon: Heart, title: "Health Benefits", desc: "Medical, dental, and vision coverage for you and your family" },
  { Icon: Coffee, title: "Paid Time Off", desc: "Generous PTO policy and paid holidays" },
  { Icon: TrendingUp, title: "Career Growth", desc: "Internal promotions and professional development" },
  { Icon: Truck, title: "Modern Fleet", desc: "Drive well-maintained equipment with GPS and ELD" },
  { Icon: Users, title: "Great Culture", desc: "Family-oriented environment where you're valued" },
];

export default function CareersPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src="/imgi_28_truck.jpg"
          alt="Join the Wisdom team"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.88)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
            Join Our Team
          </span>
          <h1 className="mt-4 text-5xl lg:text-6xl font-black text-white leading-tight">
            Careers at Wisdom
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Be part of a team that's always moving in the right direction. Great pay, great
            people, and a company that invests in your future.
          </p>
          <div className="mt-10">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
            >
              View Open Positions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY WORK HERE ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              Why Work Here
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Benefits & Perks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border p-7 hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#e0faf4" }}
                >
                  <Icon size={20} style={{ color: "#47DEB8" }} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DRIVER SPOTLIGHT ─────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgi_29_trucks.jpg"
                alt="Wisdom Transportation driver"
                width={640}
                height={420}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
                Driver Program
              </span>
              <h2 className="mt-3 text-4xl font-black text-slate-900 leading-tight mb-5">
                Drivers Are Our Backbone
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                At Wisdom Transportation, drivers aren't just employees — they're the reason we
                exist. We invest in your success with competitive pay, modern equipment, flexible
                home time, and a culture that respects your professionalism every mile of the way.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { v: "Top 10%", l: "Driver pay in Texas" },
                  { v: "< 3 yrs", l: "Average truck age" },
                  { v: "Home Time", l: "Regional routes available" },
                ].map(({ v, l }) => (
                  <div key={l} className="rounded-xl p-4 text-center" style={{ backgroundColor: "#e0faf4" }}>
                    <div className="text-lg font-black" style={{ color: "#0d1b2a" }}>{v}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS ───────────────────────────────────── */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              Now Hiring
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Open Positions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openings.map(({ Icon, title, type, location, desc, reqs }) => (
              <div
                key={title}
                className="rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#e0faf4" }}
                      >
                        <Icon size={20} style={{ color: "#47DEB8" }} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-tight">{title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                          >
                            {type}
                          </span>
                          <span className="text-xs text-slate-400">📍 {location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-1.5">
                    {reqs.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle size={12} style={{ color: "#47DEB8", flexShrink: 0 }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-7 py-4 border-t" style={{ borderColor: "#f1f5f9", backgroundColor: "#f8fafc" }}>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between text-sm font-semibold transition-colors"
                    style={{ color: "#47DEB8" }}
                  >
                    Apply Now <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#0d1b2a" }}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-white mb-4">Don't See Your Role?</h2>
          <p className="text-slate-400 mb-8">
            We're always growing. Send us your resume and we'll keep you in mind for future openings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
            style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
          >
            Send Your Resume <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
