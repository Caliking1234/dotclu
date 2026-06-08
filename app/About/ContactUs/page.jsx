"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, Toaster } from "sonner";
import Image from "next/image";
import heroBg from "@assets/img1.jpg";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_ymay2qu", "template_8n87dwi", e.target, "P7_MtSDARHReL2JVO")
      .then(() => {
        toast.success("Message sent! We'll get back to you shortly.");
        setForm({ name: "", email: "", phone: "", org: "", message: "" });
      })
      .catch(() => toast.error("Something went wrong. Please email us directly."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      <Toaster richColors position="top-center" />

      {/* Hero */}
      <div className="relative h-[50vh] mt-20 overflow-hidden">
        <Image src={heroBg} alt="Contact Ideaved Technologies" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-3" data-aos="fade-up">
            Get in touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-xl" data-aos="fade-up">
            Government, defence, or enterprise — we're ready to discuss your requirements.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left — Info */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-3">Let's Build Something Together</h2>
          <p className="text-slate-400 leading-relaxed mb-12">
            We are an India-based MSME technology company specialising in AI and software for defence, government, and enterprise. Whether you are exploring a partnership, a product licence, or a custom build — reach out and we will respond within one business day.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "info.ideaved@gmail.com",
                href: "mailto:info.ideaved@gmail.com",
              },
              {
                icon: "📞",
                label: "Phone (India)",
                value: "+91 83778 27753",
                href: "tel:+918377827753",
              },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-center gap-5 p-5 rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/40 transition-all duration-200 group"
              >
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{c.label}</p>
                  <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Offices */}
          <div className="mt-12">
            <p className="text-xs tracking-[0.25em] uppercase text-cyan-400 font-semibold mb-6">Our Offices</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { city: "Ghaziabad", state: "Uttar Pradesh", role: "Headquarters" },
                { city: "Jaipur", state: "Rajasthan", role: "Development Office" },
              ].map((o, i) => (
                <div key={i} className="p-5 rounded-xl border border-slate-800 bg-slate-900">
                  <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide mb-1">{o.role}</p>
                  <p className="text-white font-semibold">{o.city}</p>
                  <p className="text-slate-400 text-sm">{o.state}, India</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div data-aos="fade-up">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { label: "Full Name", name: "name", type: "text", value: form.name },
                { label: "Email Address", name: "email", type: "email", value: form.email },
                { label: "Phone Number", name: "phone", type: "tel", value: form.phone },
                { label: "Organisation / Company", name: "org", type: "text", value: form.org },
              ].map(({ label, name, type, value }) => (
                <div key={name}>
                  <label className="block text-xs text-slate-400 mb-1.5">{label} <span className="text-red-400">*</span></label>
                  <input
                    type={type}
                    name={name}
                    required
                    value={value}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Message <span className="text-red-400">*</span></label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project or requirements..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <input type="checkbox" required className="mt-0.5 accent-cyan-500" />
                <span>I agree to the Privacy Policy and consent to Ideaved Technologies storing my submitted information.</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="border-t border-slate-800 bg-slate-900 py-16 px-6 text-center">
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          For defence and government enquiries requiring NDA or classified discussion, please contact us via email and we will arrange a secure channel.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
