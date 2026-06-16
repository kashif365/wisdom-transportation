import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle, Phone } from "lucide-react";

const vehicles = [
  {
    name: "Pickup Trucks",
    img: "/imgi_20_truck1.jpg",
    img2: "/imgi_24_truck3.jpg",
    capacity: "Up to 2,000 lbs",
    best: "Local deliveries, small industrial parts, urgent same-day runs",
    tag: "Light Duty",
  },
  {
    name: "Flatbed / Stake Trucks",
    img: "/imgi_22_truck2.jpg",
    img2: "/imgi_22_truck2.jpg",
    capacity: "Up to 26,000 lbs",
    best: "Mid-size freight, building materials, oversized pallets",
    tag: "Medium Duty",
  },
  {
    name: "Semi / Flatbed Trailers",
    img: "/imgi_26_truck4.jpg",
    img2: "/imgi_26_truck4.jpg",
    capacity: "Up to 44,000 lbs",
    best: "Long-haul FTL, steel, machinery, nationwide freight",
    tag: "Heavy Duty",
  },
];

const certifications = [
  { label: "USDOT", desc: "United States Department of Transportation — interstate freight authority across all 48 states." },
  { label: "TXDOT", desc: "Texas Department of Transportation — certified intrastate carrier for all Texas routes." },
  { label: "FMCSA", desc: "Federal Motor Carrier Safety Administration compliant fleet and operations." },
  { label: "ELD", desc: "Electronic Logging Device compliant — full hours-of-service transparency." },
];

const safetyPoints = [
  "Monthly DOT inspections on every vehicle",
  "Real-time GPS tracking on all units",
  "CDL-licensed, background-checked drivers",
  "Full cargo insurance on every shipment",
  "Electronic logging device (ELD) compliant",
  "Average fleet age under 3 years",
];

export default function OurFleetPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src="/imgi_28_truck.jpg"
          alt="Wisdom Transportation fleet"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.87)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
            Built for Performance
          </span>
          <h1 className="mt-4 text-5xl lg:text-6xl font-black text-white leading-tight">
            Our Fleet
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From nimble pickup trucks to powerful 53-foot tractor-trailers — our modern,
            well-maintained fleet is equipped to handle any freight, any size, anywhere.
          </p>
        </div>
      </section>

      {/* ─── FLEET STATS ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0d1b2a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { v: "50+", l: "Vehicles in Fleet" },
              { v: "< 3 yrs", l: "Average Fleet Age" },
              { v: "100%", l: "GPS Tracked" },
              { v: "Monthly", l: "DOT Inspected" },
            ].map(({ v, l }) => (
              <div key={l} className="text-center px-4">
                <div className="text-3xl font-black mb-1" style={{ color: "#47DEB8" }}>{v}</div>
                <div className="text-sm" style={{ color: "#64748b" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VEHICLE SHOWCASE ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              Vehicle Types
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">The Wisdom Fleet</h2>
            <p className="mt-4 text-slate-500">
              Every vehicle is GPS-tracked, DOT-inspected, and operated by a certified professional driver.
            </p>
          </div>

          <div className="space-y-16">
            {vehicles.map(({ name, img, capacity, best, tag }, i) => (
              <div
                key={name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={img}
                      alt={name}
                      width={640}
                      height={400}
                      className="w-full h-72 object-cover"
                    />
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                    >
                      {tag}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-3xl font-black text-slate-900 mb-3">{name}</h3>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold mb-5"
                    style={{ backgroundColor: "#e0faf4", color: "#0d1b2a" }}
                  >
                    Capacity: {capacity}
                  </div>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    <span className="font-semibold text-slate-700">Best for:</span> {best}
                  </p>
                  <div className="space-y-2.5">
                    {["GPS tracking included", "Fully insured cargo", "DOT-certified driver", "24/7 availability"].map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={15} style={{ color: "#47DEB8", flexShrink: 0 }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                      style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                    >
                      Book This Vehicle <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAFETY & COMPLIANCE ──────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
                Safety & Compliance
              </span>
              <h2 className="mt-3 text-4xl font-black text-slate-900 leading-tight mb-5">
                Maintained to the<br />Highest Standards
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Every vehicle undergoes rigorous monthly DOT inspections and preventive maintenance.
                Our drivers hold valid CDL licenses, pass background checks, and receive ongoing
                safety training. When your freight is with Wisdom, it's in the best hands.
              </p>
              <ul className="space-y-4">
                {safetyPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm text-slate-700">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#e0faf4" }}
                    >
                      <ShieldCheck size={13} style={{ color: "#47DEB8" }} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#0d1b2a" }}>
              <div className="p-8 border-b" style={{ borderColor: "#1e3a52" }}>
                <h3 className="text-xl font-black text-white">Fleet Certifications</h3>
                <p className="text-sm text-slate-400 mt-1">Fully licensed & compliant at every level</p>
              </div>
              <div className="divide-y" style={{ borderColor: "#1e3a52" }}>
                {certifications.map(({ label, desc }) => (
                  <div key={label} className="p-6 flex gap-4 items-start" style={{ borderColor: "#1e3a52" }}>
                    <span
                      className="px-2.5 py-1 rounded text-xs font-black shrink-0 mt-0.5"
                      style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                    >
                      {label}
                    </span>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#0d1b2a" }}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-white mb-4">Need the Right Vehicle?</h2>
          <p className="text-slate-400 mb-8">
            Our team will match your shipment to the perfect vehicle for the job.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:7136411700"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm text-white border"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <Phone size={16} /> 713-641-1700
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
