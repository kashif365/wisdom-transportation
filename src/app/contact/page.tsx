"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

const contactCards = [
  { Icon: Phone, label: "Phone", value: "713-641-1700", sub: "Available 24 hours a day", href: "tel:7136411700" },
  { Icon: Mail, label: "Email", value: "info@wisdomtransportation.com", sub: "Response within 2 hours", href: "mailto:info@wisdomtransportation.com" },
  { Icon: MapPin, label: "Location", value: "Houston, Texas", sub: "Serving all 48 continental US states", href: null },
  { Icon: Clock, label: "Hours", value: "24 / 7 / 365", sub: "We never close — freight doesn't sleep", href: null },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", origin: "", destination: "", weight: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fieldClass = "w-full px-4 py-3 rounded-lg border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all placeholder:text-slate-400";
  const fieldStyle = { borderColor: "#e2e8f0" };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden">
        <Image
          src="/imgi_28_truck.jpg"
          alt="Contact Wisdom Transportation"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0" style={{ background: "rgba(13,27,42,0.88)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#47DEB8" }}>
            Reach Out
          </span>
          <h1 className="mt-4 text-5xl lg:text-6xl font-black text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to move your freight? Get a free quote in minutes. Our team is standing by
            24/7 to help.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CARDS ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map(({ Icon, label, value, sub, href }) => (
              <div
                key={label}
                className="rounded-2xl border p-6 hover:shadow-md transition-all"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#e0faf4" }}
                >
                  <Icon size={18} style={{ color: "#47DEB8" }} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "#47DEB8" }}>
                  {label}
                </div>
                {href ? (
                  <a href={href} className="text-sm font-bold text-slate-900 hover:opacity-70 transition-opacity block">
                    {value}
                  </a>
                ) : (
                  <div className="text-sm font-bold text-slate-900">{value}</div>
                )}
                <div className="text-xs text-slate-400 mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + SIDEBAR ───────────────────────────────────── */}
      <section className="pb-24" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border p-8 shadow-sm" style={{ borderColor: "#e2e8f0" }}>
                <h2 className="text-2xl font-black text-slate-900 mb-1">Get a Free Quote</h2>
                <p className="text-sm text-slate-400 mb-8">We'll get back to you within 2 business hours.</p>

                {submitted ? (
                  <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: "#f0fdf4" }}>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "#e0faf4" }}
                    >
                      <CheckCircle size={32} style={{ color: "#47DEB8" }} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Message Received!</h3>
                    <p className="text-slate-500 text-sm">
                      Thank you, <strong>{form.name}</strong>. Our team will contact you at{" "}
                      <strong>{form.email}</strong> within 2 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", company: "", email: "", phone: "", service: "", origin: "", destination: "", weight: "", message: "" });
                      }}
                      className="mt-6 px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-all"
                      style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className={fieldClass} style={fieldStyle} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Company</label>
                        <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Industries" className={fieldClass} style={fieldStyle} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className={fieldClass} style={fieldStyle} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="713-000-0000" className={fieldClass} style={fieldStyle} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange} className={fieldClass} style={fieldStyle}>
                        <option value="">Select a service...</option>
                        <option>Full Truckload (FTL)</option>
                        <option>Less-Than-Truckload (LTL)</option>
                        <option>Expedited Delivery</option>
                        <option>Industrial Freight</option>
                        <option>Dedicated Fleet</option>
                        <option>Nationwide Delivery</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Origin</label>
                        <input name="origin" value={form.origin} onChange={handleChange} placeholder="Houston, TX" className={fieldClass} style={fieldStyle} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Destination</label>
                        <input name="destination" value={form.destination} onChange={handleChange} placeholder="Dallas, TX" className={fieldClass} style={fieldStyle} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Est. Weight</label>
                        <input name="weight" value={form.weight} onChange={handleChange} placeholder="5,000 lbs" className={fieldClass} style={fieldStyle} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Additional Details</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your shipment — freight type, dimensions, special requirements, timeline..."
                        className={fieldClass}
                        style={{ ...fieldStyle, resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all"
                      style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                    >
                      Submit Quote Request <ArrowRight size={16} />
                    </button>
                    <p className="text-xs text-center text-slate-400">
                      By submitting you agree to be contacted by Wisdom Transportation regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Support image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/imgi_27_wisdom.jpg"
                  alt="Wisdom Transportation support team"
                  width={400}
                  height={280}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5" style={{ backgroundColor: "#0d1b2a" }}>
                  <div className="text-sm font-bold text-white mb-1">Urgent Shipment?</div>
                  <p className="text-xs text-slate-400 mb-3">Skip the form — call us now and we dispatch immediately.</p>
                  <a
                    href="tel:7136411700"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
                    style={{ backgroundColor: "#47DEB8", color: "#0d1b2a" }}
                  >
                    <Phone size={15} /> 713-641-1700
                  </a>
                </div>
              </div>

              {/* Service area */}
              <div className="bg-white rounded-2xl border p-6" style={{ borderColor: "#e2e8f0" }}>
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Service Coverage</h3>
                <div className="space-y-3">
                  {[
                    { label: "Primary", desc: "Houston Metro & All Texas" },
                    { label: "Regional", desc: "TX, LA, OK, AR, NM" },
                    { label: "Nationwide", desc: "All 48 Continental US States" },
                  ].map(({ label, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: "#47DEB8" }}
                      />
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">{label}: </span>
                        <span className="text-sm text-slate-700">{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why us */}
              <div className="rounded-2xl border p-6" style={{ borderColor: "#e2e8f0", backgroundColor: "#f8fafc" }}>
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Why Choose Wisdom?</h3>
                <ul className="space-y-2.5">
                  {["TXDOT & USDOT certified", "24/7 dispatch & delivery", "Real-time freight tracking", "Fully insured shipments", "Personal account manager"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle size={13} style={{ color: "#47DEB8" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/services"
                className="flex items-center justify-between p-5 rounded-2xl border font-semibold text-sm hover:shadow-md transition-all"
                style={{ borderColor: "#e2e8f0", color: "#47DEB8", backgroundColor: "white" }}
              >
                Browse our services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
