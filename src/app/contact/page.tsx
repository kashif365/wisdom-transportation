"use client";
import { useState } from "react";

const contactInfo = [
  {
    icon: "📞",
    title: "Phone",
    value: "713-641-1700",
    sub: "Available 24 hours a day",
    href: "tel:7136411700",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "info@wisdomtransportation.com",
    sub: "We respond within 2 business hours",
    href: "mailto:info@wisdomtransportation.com",
  },
  {
    icon: "📍",
    title: "Location",
    value: "Houston, Texas",
    sub: "Serving all 48 continental US states",
    href: null,
  },
  {
    icon: "🕐",
    title: "Hours",
    value: "24 / 7 / 365",
    sub: "We never close — freight doesn't sleep",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    origin: "",
    destination: "",
    weight: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all";
  const inputStyle = { borderColor: "#d1d5db", backgroundColor: "#f9fafb" };
  const focusStyle = { "--tw-ring-color": "#2d6b2e" } as React.CSSProperties;

  return (
    <div>
      {/* Hero */}
      <section
        className="py-28 text-center"
        style={{ background: "linear-gradient(135deg, #0d1f0e 0%, #2d6b2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#a7d9a8" }}>
            Reach Out
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 leading-relaxed">
            Ready to move your freight? Get a free quote in minutes. Our team is standing by
            24/7 to help.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon, title, value, sub, href }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border text-center hover:shadow-md transition-all"
                style={{ borderColor: "#e5e7eb" }}
              >
                <div className="text-4xl mb-3">{icon}</div>
                <div className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#2d6b2e" }}>
                  {title}
                </div>
                {href ? (
                  <a
                    href={href}
                    className="font-bold text-gray-900 hover:underline block"
                    style={{ color: "#1a1a1a" }}
                  >
                    {value}
                  </a>
                ) : (
                  <div className="font-bold text-gray-900">{value}</div>
                )}
                <div className="text-xs text-gray-400 mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-10 pb-24" style={{ backgroundColor: "#f0f9f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border p-8 shadow-sm" style={{ borderColor: "#e5e7eb" }}>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Get a Free Quote</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fill out the form below and we'll get back to you within 2 business hours.
                </p>

                {submitted ? (
                  <div
                    className="rounded-2xl p-10 text-center"
                    style={{ backgroundColor: "#f0f9f0" }}
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Message Received!</h3>
                    <p className="text-gray-500">
                      Thank you, <strong>{form.name}</strong>! Our team will contact you within 2
                      business hours at <strong>{form.email}</strong>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "", company: "", email: "", phone: "",
                          service: "", origin: "", destination: "",
                          weight: "", message: "",
                        });
                      }}
                      className="mt-6 px-6 py-3 rounded-lg font-semibold text-white text-sm"
                      style={{ backgroundColor: "#2d6b2e" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Industries"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="713-000-0000"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ ...inputStyle, ...focusStyle }}
                      >
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
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Origin City / State
                        </label>
                        <input
                          name="origin"
                          value={form.origin}
                          onChange={handleChange}
                          placeholder="Houston, TX"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Destination City / State
                        </label>
                        <input
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="Dallas, TX"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Estimated Weight
                        </label>
                        <input
                          name="weight"
                          value={form.weight}
                          onChange={handleChange}
                          placeholder="e.g. 5,000 lbs"
                          className={inputClass}
                          style={{ ...inputStyle, ...focusStyle }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your shipment — freight type, dimensions, special requirements, timeline..."
                        className={inputClass}
                        style={{ ...inputStyle, ...focusStyle, resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg font-bold text-white text-base transition-all hover:opacity-90 hover:scale-[1.01]"
                      style={{ backgroundColor: "#2d6b2e" }}
                    >
                      Submit Quote Request →
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to be contacted by Wisdom Transportation regarding your freight inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergency contact */}
              <div
                className="rounded-2xl p-8 text-white"
                style={{ background: "linear-gradient(135deg, #1a4a1b 0%, #2d6b2e 100%)" }}
              >
                <div className="text-3xl mb-3">🚨</div>
                <h3 className="text-xl font-black mb-2">Urgent Shipment?</h3>
                <p className="text-green-100 text-sm mb-5 leading-relaxed">
                  For time-critical freight, skip the form and call us directly. We dispatch
                  immediately.
                </p>
                <a
                  href="tel:7136411700"
                  className="block text-center py-3 rounded-lg font-bold text-gray-900 hover:opacity-90 transition-all"
                  style={{ backgroundColor: "#6fcf70" }}
                >
                  📞 713-641-1700
                </a>
              </div>

              {/* Service area */}
              <div className="bg-white rounded-2xl border p-8" style={{ borderColor: "#e5e7eb" }}>
                <h3 className="font-black text-gray-900 text-lg mb-4">Service Area</h3>
                <div className="space-y-3">
                  {[
                    { label: "Primary", desc: "Houston Metro & All Texas" },
                    { label: "Regional", desc: "TX, LA, OK, AR, NM" },
                    { label: "Nationwide", desc: "All 48 Continental US States" },
                  ].map(({ label, desc }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: "#2d6b2e" }}
                      />
                      <div>
                        <span className="text-xs font-bold text-gray-400 uppercase">{label}: </span>
                        <span className="text-sm text-gray-700">{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: "#f0f9f0", border: "1px solid #d1fae5" }}
              >
                <h3 className="font-black text-gray-900 text-lg mb-4">Why Choose Wisdom?</h3>
                <ul className="space-y-3">
                  {[
                    "TXDOT & USDOT certified",
                    "24/7 dispatch & delivery",
                    "Real-time freight tracking",
                    "Fully insured shipments",
                    "Personal account management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span style={{ color: "#2d6b2e" }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
