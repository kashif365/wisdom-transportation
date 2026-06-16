import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, ShieldCheck, Zap, Users, Globe, TrendingUp } from "lucide-react";

const values = [
  { Icon: Target, title: "Reliability", desc: "Every delivery, every time. We commit to your timeline and we deliver on that promise — no excuses, no surprises." },
  { Icon: ShieldCheck, title: "Integrity", desc: "Honest quotes, clear communication, and accountability at every step. We do what we say we're going to do." },
  { Icon: Zap, title: "Efficiency", desc: "Smart routing and experienced drivers mean your freight moves fast and cost-effectively to its destination." },
  { Icon: Users, title: "Personal Service", desc: "You get a dedicated contact who knows your account. We believe in relationships, not just transactions." },
  { Icon: Globe, title: "Nationwide Coverage", desc: "TXDOT and USDOT certified. We reach all 48 continental states — one trusted partner, anywhere you need to go." },
  { Icon: TrendingUp, title: "Continuous Improvement", desc: "We invest in our fleet, our people, and our processes — constantly raising the bar on how we serve you." },
];

export default function MissionPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src="/imgi_28_truck.jpg"
          alt="Wisdom Transportation"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,27,42,0.85)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
            Who We Are
          </span>
          <h1 className="mt-4 text-5xl lg:text-6xl font-black text-white leading-tight">
            Our Mission
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            To provide the industrial sector with the most reliable, efficient, and professional
            transportation services — delivered with integrity, every mile of the way.
          </p>
        </div>
      </section>

      {/* ─── MISSION BODY ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
                Our Purpose
              </span>
              <h2 className="mt-3 text-4xl font-black text-slate-900 leading-tight mb-6">
                Moving Industry Forward
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                At Wisdom Transportation, we believe every shipment tells a story — a manufacturer
                waiting on parts, a project that can't afford a delay, a business counting on its
                supply chain. That's why we take every delivery personally.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                Founded in Houston, Texas, we built our company around a simple promise: do it
                right the first time. Our team of professional drivers, dispatchers, and logistics
                specialists works around the clock so your freight arrives safely and on schedule.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                From single pallets to full truckloads, from Houston to coast-to-coast — Wisdom
                Transportation is your trusted partner in industrial freight.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
              >
                Work With Us <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats panel */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/imgi_27_wisdom.jpg"
                alt="Wisdom Transportation team"
                width={600}
                height={450}
                className="w-full h-95 object-cover"
              />
              <div
                className="grid grid-cols-3 divide-x"
                style={{ backgroundColor: "#0d1b2a", borderColor: "#1e3a52" }}
              >
                {[
                  { v: "20+", l: "Years" },
                  { v: "48", l: "States" },
                  { v: "24/7", l: "Service" },
                ].map(({ v, l }) => (
                  <div key={l} className="py-5 text-center" style={{ borderColor: "#1e3a52" }}>
                    <div className="text-2xl font-black" style={{ color: "#47DEB8" }}>{v}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              What Drives Us
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border hover:shadow-lg transition-all duration-300"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#e0faf4" }}
                >
                  <Icon size={20} style={{ color: "#47DEB8" }} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              Our Journey
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Company Milestones</h2>
          </div>
          <div className="relative pl-10">
            <div className="absolute left-3.5 top-2 bottom-2 w-px" style={{ backgroundColor: "#e0faf4" }} />
            <div className="space-y-10">
              {[
                { year: "2000", event: "Wisdom Transportation founded in Houston, Texas with a small fleet and a big vision." },
                { year: "2005", event: "Expanded fleet to include tractor-trailers — ready for heavy industrial freight." },
                { year: "2010", event: "Obtained USDOT certification and began serving all 48 continental states." },
                { year: "2015", event: "Surpassed 500 active industrial clients across Texas." },
                { year: "2020", event: "Launched 24/7 expedited delivery service to meet growing industrial demand." },
                { year: "2024", event: "Celebrating 20+ years of moving Texas — and America — forward." },
              ].map(({ year, event }) => (
                <div key={year} className="relative flex gap-8 items-start">
                  <div
                    className="absolute -left-10 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white z-10"
                    style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                  >
                    ·
                  </div>
                  <div>
                    <div className="text-sm font-black mb-1" style={{ color: "#47DEB8" }}>{year}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#0d1b2a" }}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-white mb-4">Partner With Wisdom</h2>
          <p className="text-slate-400 mb-8">
            Join hundreds of industrial companies that trust Wisdom Transportation for their logistics.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm transition-all hover:opacity-90"
            style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
