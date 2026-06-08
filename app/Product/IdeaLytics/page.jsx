"use client";
import React from "react";
import Longcard from "@components/Longcard";

const IdeaLytics = () => {
  const capabilities = [
    { title: "Unified Data Integration", desc: "Connect siloed data sources — ERP, CRM, IoT sensors, government databases, and field systems — into a single analytics layer. IdeaLytics normalises and joins disparate data formats automatically." },
    { title: "Real-Time Operational Dashboards", desc: "Interactive dashboards with live KPIs, drill-down capabilities, and configurable alerts. Built for both command-level strategic views and operational-level daily monitoring." },
    { title: "AI-Driven Predictive Analytics", desc: "Machine learning models surface trends, anomalies, and forecasts before they become issues — whether predicting equipment failure, supply chain disruption, or healthcare demand spikes." },
    { title: "Custom Report Builder", desc: "Non-technical stakeholders can build, schedule, and share reports without engineering support. Drag-and-drop report configuration with PDF, Excel, and API export options." },
    { title: "Secure On-Premise or Private Cloud", desc: "Deployable on-premise, in a private cloud, or in an air-gapped environment. Fully compliant with Indian government data localisation requirements and defence security standards." },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] mt-20 overflow-hidden">
        <img src="/Images/dataa.jpg" alt="IdeaLytics" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400">Enterprise Product</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            IdeaLytics — Analytics Platform
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl leading-relaxed" data-aos="fade-up">
            Enterprise data analytics and business intelligence for government, defence, healthcare, and manufacturing — turning raw operational data into actionable decisions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {[
            { stat: "Multi-Sector", label: "Govt · Defence · Healthcare · Enterprise" },
            { stat: "Real-Time", label: "Live operational dashboards & alerts" },
            { stat: "AI-Driven", label: "Predictive analytics & anomaly detection" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
              <p className="text-xl font-bold text-cyan-400 mb-2">{s.stat}</p>
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

      <Longcard
        a={"Multi-Sector"} b={"Defence, Government, Healthcare & Enterprise"}
        c={"On-Premise"} d={"Air-gap & private cloud deployments supported"}
        e={"Real-Time"} f={"Live AI-powered dashboards & predictions"}
      />
    </div>
  );
};

export default IdeaLytics;
