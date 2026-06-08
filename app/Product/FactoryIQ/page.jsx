"use client";
import React from "react";
import Longcard from "@components/Longcard";

const FactoryIQ = () => {
  const capabilities = [
    {
      title: "Predictive Maintenance",
      desc: "IoT sensor data from motors, compressors, conveyors, and CNC machines feeds ML models that predict equipment failure 72–96 hours before it occurs. Maintenance teams receive actionable work orders — not post-failure incident reports. Unplanned downtime drops; planned maintenance windows shrink.",
    },
    {
      title: "AI-Powered Visual Quality Inspection",
      desc: "High-speed camera arrays combined with computer vision models inspect products at full line speed with sub-millimetre defect detection precision — identifying surface defects, dimensional deviations, and assembly errors that manual inspection misses under production pressure. Zero throughput penalty.",
    },
    {
      title: "Production Schedule Optimisation",
      desc: "FactoryIQ analyses machine states, workforce availability, material inventory, and order priorities in real time to generate continuously-optimised production schedules. Throughput increases by rebalancing loads dynamically — without the guesswork of traditional scheduling sheets.",
    },
    {
      title: "Energy & Sustainability Intelligence",
      desc: "ML models identify energy consumption anomalies by machine, production line, and shift — exposing waste patterns invisible to conventional SCADA monitoring. Manufacturers gain targeted, data-backed recommendations for energy reduction without compromising output.",
    },
    {
      title: "Edge-Native Deployment",
      desc: "FactoryIQ runs on industrial edge hardware within your facility. No cloud dependency, no data leaving the plant, no latency from off-site processing. Fully compatible with PLC, SCADA, and MES systems via standard OPC-UA and MQTT interfaces. Works in environments with no reliable WAN connectivity.",
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* Hero */}
      <div className="relative h-[60vh] mt-20 overflow-hidden">
        <img src="/Images/ImgManufacture.jpg" alt="FactoryIQ Manufacturing AI" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-24">
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-cyan-400">
            Manufacturing · AI Product
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            FactoryIQ<br />Manufacturing Intelligence
          </h1>
          <p className="mt-5 text-slate-300 text-lg max-w-2xl leading-relaxed" data-aos="fade-up">
            AI-powered predictive maintenance, visual quality inspection, and production optimisation for modern manufacturing facilities — deployed on-premise, without cloud dependency.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20" data-aos="fade-up">
          {[
            { stat: "Edge-Native", label: "Runs fully on-premise, no cloud needed" },
            { stat: "72–96 hrs", label: "Predictive maintenance advance warning" },
            { stat: "Multi-MES", label: "OPC-UA, SCADA & PLC compatible" },
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
          <h2 className="text-3xl font-bold text-white mb-6">Factories generate millions of data points. Almost none of it is used.</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Modern manufacturing facilities are instrumented with thousands of sensors, PLCs, and SCADA systems — yet most manufacturers rely on manual inspection, scheduled maintenance calendars, and spreadsheet-driven planning. FactoryIQ turns existing operational data into a live intelligence layer that tells engineers what will break, what quality issues are forming, and where production can be tightened — before the problem costs money.
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
        a={"Edge-Native"}
        b={"Fully on-premise, zero cloud dependency"}
        c={"72–96 hrs"}
        d={"Predictive maintenance advance warning window"}
        e={"Multi-MES"}
        f={"OPC-UA, SCADA, PLC & MES compatible"}
      />
    </div>
  );
};

export default FactoryIQ;
