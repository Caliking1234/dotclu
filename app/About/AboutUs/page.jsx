"use client";
import React from "react";
import Image from "next/image";
import FlipCards from "./FlipCards";
import heroBg from "@assets/img1.jpg";
import Link from "next/link";

const differentiators = [
  {
    icon: "🎯",
    title: "Field-Deployed AI",
    desc: "Every product we build is live in a real operational environment. Not a pilot. Not a proof-of-concept. AI that works when the mission demands it.",
    accent: "border-cyan-500/30 from-cyan-500/8",
  },
  {
    icon: "🔐",
    title: "Security-First Architecture",
    desc: "Our systems are designed for classified and sensitive networks from day one — air-gap compatible, RBAC enforced, end-to-end encrypted, and audit-logged to defence standards.",
    accent: "border-violet-500/30 from-violet-500/8",
  },
  {
    icon: "🏗️",
    title: "Domain-Embedded Engineering",
    desc: "Our engineers spend time understanding operational constraints before writing code. The result is software that fits how people actually work — not how engineers imagined they do.",
    accent: "border-emerald-500/30 from-emerald-500/8",
  },
];

const track = [
  { label: "HAWK – Flight Operations AI", sector: "Aviation & Defence" },
  { label: "AgniAI – Personalised Training", sector: "Defence Training" },
  { label: "RiskSense – Mission Risk Assessment", sector: "Defence Operations" },
  { label: "Vehicle Tracking & Monitoring", sector: "Defence Logistics" },
  { label: "MediSense – Clinical AI", sector: "Healthcare" },
  { label: "FactoryIQ – Manufacturing Intelligence", sector: "Industrial" },
  { label: "IdeaLytics – Enterprise Analytics", sector: "Government & Enterprise" },
  { label: "Cybersecurity Operations Platform", sector: "Government" },
];

const AboutUs = () => {
  return (
    <div className="bg-slate-950">

      {/* ── Hero ── */}
      <div className="relative h-[65vh] mt-20 overflow-hidden">
        <Image src={heroBg} alt="About Ideaved Technologies" fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4" data-aos="fade-up">
            Who we are
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            Technology That Operates<br />Where It Matters Most.
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed" data-aos="fade-up">
            We build AI systems for environments where failure is not an option — defence networks, government infrastructure, and critical industry operations. Eight projects delivered. Zero compromises.
          </p>
        </div>
      </div>

      {/* ── Who We Are ── */}
      <div className="max-w-5xl mx-auto px-8 py-24" data-aos="fade-up">
        <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-6">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          A Specialised AI Company. Built for the Field.
        </h2>
        <p className="text-slate-400 text-lg leading-8 mb-6">
          Ideaved Technologies is a specialised AI and software engineering company headquartered in Ghaziabad, Uttar Pradesh, with a development centre in Jaipur, Rajasthan. MSME-registered under the Ministry of MSME, Government of India.
        </p>
        <p className="text-slate-400 text-lg leading-8">
          We are a focused team of engineers, data scientists, and domain specialists who design and deploy mission-critical AI for defence agencies, central government ministries, healthcare networks, and manufacturing enterprises. Eight projects delivered across six industries. Every system we ship is built to the security, reliability, and compliance standards that our clients' environments demand — from air-gapped classified networks to edge-deployed factory floors. We do not build demos. We build operational software.
        </p>
      </div>

      {/* ── Differentiators ── */}
      <section className="bg-slate-900 border-y border-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4">What sets us apart</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className={`rounded-xl border bg-gradient-to-br ${d.accent} to-transparent bg-slate-900 p-8 hover:scale-[1.02] transition-all duration-300`}
                data-aos="fade-up"
              >
                <div className="text-4xl mb-5">{d.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{d.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Track Record ── */}
      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="mb-14 text-center" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4">Delivered</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Project Portfolio</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Eight projects spanning defence, government, healthcare, and industry. All in production. All built in India.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {track.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-5 rounded-xl border border-slate-800 bg-slate-900 px-6 py-5 hover:border-cyan-500/30 transition-all duration-200"
              data-aos="fade-up"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-white font-medium text-sm">{t.label}</p>
                <p className="text-slate-500 text-xs mt-0.5">{t.sector}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <FlipCards />

      {/* ── CTA ── */}
      <section className="bg-slate-900 border-t border-slate-800 py-24 px-6" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4">
            Partner with us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Work With a Team That Delivers.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you are a defence agency, government ministry, hospital network, or enterprise — if you need AI that works in the real world, not just in a boardroom, we should talk. We are open to new project engagements, partnerships, and licensing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/About/ContactUs"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-10 py-4 rounded-md transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/Product/DotVision"
              className="inline-block border border-slate-600 hover:border-white text-slate-300 hover:text-white font-semibold px-10 py-4 rounded-md transition-colors duration-200"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
