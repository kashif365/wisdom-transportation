import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Package, Zap, Wrench, Users, Globe, CheckCircle, Phone } from "lucide-react";

const services = [
  {
    Icon: Truck,
    title: "Full Truckload (FTL)",
    desc: "Dedicated trucks for large shipments. Your cargo gets the entire trailer — no sharing, no delays. Ideal for bulk industrial freight and time-sensitive loads.",
    features: ["Door-to-door service", "Real-time GPS tracking", "Temperature control available", "Hazmat certified drivers"],
  },
  {
    Icon: Package,
    title: "Less-Than-Truckload (LTL)",
    desc: "Cost-effective freight shipping for smaller loads. We consolidate shipments efficiently so you only pay for the space you use.",
    features: ["Flexible scheduling", "Freight consolidation", "Significant cost savings", "Same professional handling"],
  },
  {
    Icon: Zap,
    title: "Expedited Delivery",
    desc: "When time is critical, our expedited service delivers. We dispatch immediately and move fast — no layovers, no delays, no excuses.",
    features: ["Same-day dispatch", "24/7 availability", "Priority handling", "Direct point-to-point routes"],
  },
  {
    Icon: Wrench,
    title: "Industrial Freight",
    desc: "Specialized handling for heavy equipment, machinery, and oversized industrial cargo. Our team is trained for the unique demands of industrial shipping.",
    features: ["Heavy haul capability", "Oversized load permits", "Equipment expertise", "Flatbed & step-deck rigs"],
  },
  {
    Icon: Users,
    title: "Dedicated Fleet",
    desc: "Assign our drivers and trucks exclusively to your operations. Perfect for businesses with consistent, high-volume transportation needs.",
    features: ["Exclusive fleet assignment", "Custom routing & scheduling", "Branded vehicle options", "Long-term contracts"],
  },
  {
    Icon: Globe,
    title: "Nationwide Delivery",
    desc: "TXDOT and USDOT certified for delivery across all 48 continental United States. One trusted partner, anywhere your business needs to go.",
    features: ["All 48 US states covered", "DOT compliant operations", "Interstate authority", "Cross-state coordination"],
  },
];

const industries = [
  "Oil & Gas", "Manufacturing", "Construction", "Agriculture",
  "Chemical", "Automotive", "Aerospace", "Food & Beverage",
  "Healthcare", "Retail", "Technology", "Mining",
];

const steps = [
  { n: "01", title: "Get a Quote", desc: "Contact us with your freight details. We'll provide a fast, competitive quote." },
  { n: "02", title: "Schedule Pickup", desc: "Choose your pickup time. We dispatch promptly to your location." },
  { n: "03", title: "We Haul It", desc: "Our professional drivers handle your freight with care and expertise." },
  { n: "04", title: "Delivered Safe", desc: "Your freight arrives on time, in perfect condition, every time." },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src="/imgi_29_trucks.jpg"
          alt="Wisdom Transportation services"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.88)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
            What We Offer
          </span>
          <h1 className="mt-4 text-5xl lg:text-6xl font-black text-white leading-tight">
            Our Services
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive freight and transportation solutions designed for the demands of
            the industrial sector — flexible, reliable, and always on time.
          </p>
        </div>
      </section>

      {/* ─── SERVICE CARDS ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              Transportation Solutions
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">
              The Right Solution for Every Load
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map(({ Icon, title, desc, features }) => (
              <div
                key={title}
                className="rounded-2xl border flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="p-8 flex-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#e0faf4" }}
                  >
                    <Icon size={22} style={{ color: "#47DEB8" }} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle size={14} style={{ color: "#47DEB8", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-8 py-5 border-t" style={{ borderColor: "#f1f5f9", backgroundColor: "#f8fafc" }}>
                  <Link
                    href="/contact"
                    className="flex items-center justify-between text-sm font-semibold transition-colors hover:opacity-80"
                    style={{ color: "#47DEB8" }}
                  >
                    Request This Service <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
              How It Works
            </span>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Simple. Fast. Reliable.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line on desktop */}
            <div
              className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
              style={{ backgroundColor: "#e0faf4" }}
            />
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="relative text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-black mx-auto mb-5 relative z-10"
                  style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                >
                  {n}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
                Industries We Serve
              </span>
              <h2 className="mt-3 text-4xl font-black text-slate-900 leading-tight mb-5">
                Built for Your Industry
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Our team understands the unique logistics demands of industrial businesses. Whether
                you're in oil & gas, manufacturing, or construction — we speak your language and
                we know what's at stake when freight doesn't move on time.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "#e0faf4", color: "#0d1b2a" }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/imgi_14_left1.jpg"
                alt="Industrial freight transport"
                width={600}
                height={420}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "#0d1b2a" }}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-white mb-4">Not Sure What You Need?</h2>
          <p className="text-slate-400 mb-8">
            Call us at{" "}
            <a href="tel:7136411700" className="font-bold hover:opacity-80" style={{ color: "#47DEB8" }}>
              713-641-1700
            </a>{" "}
            and we'll find the right solution for your freight.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
            >
              Contact Us <ArrowRight size={16} />
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
