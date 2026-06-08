"use client";
import React from "react";

const AgniAI = () => {
  const capabilities = [
    { title: "Personalised Training Paths", desc: "AI analyses each recruit's physical, tactical, and academic performance to generate an individualised training curriculum that adapts in real time as the recruit progresses through the military training programme." },
    { title: "Performance Analytics Dashboard", desc: "Commanding officers get a live cohort readiness dashboard — tracking progress across every trainee, flagging underperformers, and predicting course completion with ML-driven forecasting." },
    { title: "Skills Gap Detection", desc: "Computer vision and assessment AI identify specific skill gaps in weapons handling, physical drills, and tactical exercises before they affect course outcomes — enabling timely remedial intervention." },
    { title: "Automated Assessment & Grading", desc: "AI-assisted evaluation of both digital assessments and physical drills reduces instructor workload while providing consistent, objective scoring across all training stages." },
    { title: "Secure, On-Premise Deployment", desc: "AgniAI operates fully within classified secure networks — air-gap compatible, role-based access control, encrypted data storage, and full audit trails with no external data dependencies." },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] mt-20 overflow-hidden">
        <img src="/Images/hawk-banner.jpg" alt="AgniAI" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400">Delivered · Ministry of Defence</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            AgniAI — AI Training Platform
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl leading-relaxed" data-aos="fade-up">
            AI-powered personalised training management for armed forces recruit programmes — adapting every recruit's curriculum in real time.
          </p>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {[
            { stat: "Defence", label: "Ministry of Defence client" },
            { stat: "AI-Powered", label: "Personalised per-recruit curriculum" },
            { stat: "Live", label: "Deployed in active military training" },
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

export default AgniAI;
