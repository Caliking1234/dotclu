"use client";
import React from "react";
import Longcard from "@components/Longcard";

const MediSense = () => {
  const capabilities = [
    {
      title: "Clinical Decision Support",
      desc: "AI analyses patient records, vitals, lab results, and imaging data in real time to surface evidence-based differential diagnoses and treatment pathways at the point of care — reducing diagnostic error and cutting decision latency for clinicians under pressure.",
    },
    {
      title: "Predictive Patient Risk Stratification",
      desc: "ML models identify high-risk patients before deterioration occurs — predicting readmission probability, sepsis onset risk, and ICU escalation need with measurably better precision than traditional early warning scores. Clinicians receive proactive alerts, not retrospective reports.",
    },
    {
      title: "Radiology & Medical Imaging AI",
      desc: "Computer vision models trained on large-scale medical imaging datasets detect anomalies in X-rays, CT scans, and MRI studies — delivering radiologist-grade screening throughput at scale. Designed as a clinical assistant, not a replacement: every finding is flagged for physician review.",
    },
    {
      title: "Hospital Operations Intelligence",
      desc: "Real-time operational dashboards track bed occupancy, OT scheduling, staff utilisation, and equipment availability across large hospital networks — surfacing bottlenecks before they create backlogs and enabling administrators to rebalance resources dynamically.",
    },
    {
      title: "ABDM-Compliant Secure Architecture",
      desc: "Full compliance with India's Ayushman Bharat Digital Mission standards. Patient data is encrypted at rest and in transit, anonymised for model training, stored within Indian data jurisdiction, and accessible only through role-based access controls with complete audit trails.",
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* Hero */}
      <div className="relative h-[60vh] mt-20 overflow-hidden">
        <img src="/Images/healthcare.jpg" alt="MediSense Clinical AI" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400">
            Healthcare · AI Product
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            MediSense<br />Clinical AI Platform
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl leading-relaxed" data-aos="fade-up">
            AI-driven clinical decision support and patient outcome intelligence for hospitals, diagnostic centres, and healthcare networks — built to the operational realities of Indian healthcare.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20" data-aos="fade-up">
          {[
            { stat: "Healthcare", label: "Hospitals, diagnostics & health networks" },
            { stat: "ABDM", label: "Ayushman Bharat Digital Mission compliant" },
            { stat: "On-Premise", label: "Air-gap & private cloud deployable" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center hover:border-cyan-500/30 transition-all duration-200">
              <p className="text-xl font-bold text-cyan-400 mb-2">{s.stat}</p>
              <p className="text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Why section */}
        <div className="mb-16" data-aos="fade-up">
          <p className="text-xs tracking-[0.25em] uppercase text-cyan-400 font-semibold mb-4">The Problem We Solve</p>
          <h2 className="text-3xl font-bold text-white mb-6">Healthcare runs on decisions made under pressure.</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            India's healthcare system handles over 6 billion outpatient visits per year. Clinicians are making high-stakes diagnostic decisions in minutes, with incomplete information, under severe time and resource constraints. MediSense gives them an AI co-pilot — one that surfaces relevant evidence, flags deteriorating patients, and keeps operations running at scale. Not a replacement for clinical judgement. An amplifier of it.
          </p>
        </div>

        {/* Capabilities */}
        <p className="text-xs tracking-[0.25em] uppercase text-cyan-400 font-semibold mb-6" data-aos="fade-up">
          Platform Capabilities
        </p>
        <div className="flex flex-col gap-6">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500/40 transition-all duration-200"
              data-aos="fade-up"
            >
              <p className="text-white font-semibold text-lg mb-3">
                <span className="text-cyan-400 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                {c.title}
              </p>
              <p className="text-slate-400 text-sm leading-7">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Longcard
        a={"Clinical AI"}
        b={"Decision support, risk stratification & imaging"}
        c={"ABDM"}
        d={"Ayushman Bharat Digital Mission compliant"}
        e={"On-Premise"}
        f={"Air-gap & private cloud deployments supported"}
      />
    </div>
  );
};

export default MediSense;
