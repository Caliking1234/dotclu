"use client";
import React from "react";

const RiskSense = () => {
  const capabilities = [
    { title: "Multi-Source Data Fusion", desc: "Integrates terrain mapping, weather feeds, historical incident databases, and real-time field intelligence into a single unified risk picture — eliminating information silos across command levels." },
    { title: "Real-Time Risk Scoring", desc: "AI generates live mission risk scores for operational zones, patrol routes, and convoy corridors — updating dynamically as field conditions change and new intelligence is received." },
    { title: "Predictive Threat Modelling", desc: "ML models trained on historical incident patterns predict threat probability by location, time, and route type — enabling commanders to proactively adjust plans before risk materialises." },
    { title: "Command Decision Support", desc: "A secure command-interface delivers risk summaries, planning recommendations, and escalation alerts directly to decision-makers — reducing cognitive load under time-critical operational conditions." },
    { title: "Classified Network Compatible", desc: "Fully operable within air-gapped classified defence networks. Role-based access, end-to-end encryption, and tamper-evident audit logs ensure compliance with defence data handling requirements." },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] mt-20 overflow-hidden">
        <img src="/Images/hawk-banner.jpg" alt="RiskSense" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400">Delivered · Ministry of Defence</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            RiskSense — AI Risk Assessment
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl leading-relaxed" data-aos="fade-up">
            Predictive AI risk assessment for military operations — fusing terrain, weather, and field intelligence into real-time mission risk scores.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {[
            { stat: "Defence", label: "Ministry of Defence client" },
            { stat: "Real-Time", label: "Live mission risk scoring" },
            { stat: "Multi-Source", label: "Terrain, weather & intelligence fusion" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
              <p className="text-2xl font-bold text-cyan-400 mb-2">{s.stat}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs tracking-[0.25em] uppercase text-cyan-400 font-semibold mb-6" data-aos="fade-up">Platform Capabilities</p>
        <div className="flex flex-col gap-8">
          {capabilities.map((c, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-7 hover:border-cyan-500/40 transition-all duration-200" data-aos="fade-up">
              <p className="text-white font-semibold text-lg mb-3">
                <span className="text-cyan-400 mr-2">{String(i + 1).padStart(2, "0")}.</span>{c.title}
              </p>
              <p className="text-slate-400 text-sm leading-6">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RiskSense;
