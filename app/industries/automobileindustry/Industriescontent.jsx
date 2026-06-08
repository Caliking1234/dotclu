"use client";
import React from "react";

const capabilities = [
  {
    num: "01",
    title: "Predictive Maintenance & Vehicle Health AI",
    desc: "ML models monitor real-time sensor data from connected vehicles and production equipment to predict component failure before it occurs — reducing unplanned downtime, warranty claims, and dealer recall costs. Covers powertrains, battery systems, suspension, and ADAS components.",
  },
  {
    num: "02",
    title: "AI-Powered Quality Inspection",
    desc: "Computer vision systems inspect vehicle bodies, components, and assemblies at line speed — detecting surface defects, dimensional deviations, weld quality issues, and paint anomalies with sub-millimetre precision. Eliminates manual inspection bottlenecks without sacrificing throughput.",
  },
  {
    num: "03",
    title: "Connected Vehicle Data Intelligence",
    desc: "Telematics and IoT platforms that aggregate real-time data from vehicle fleets — enabling OEMs, fleet operators, and logistics companies to monitor utilisation, driver behaviour, fuel efficiency, and route optimisation through live operational dashboards.",
  },
  {
    num: "04",
    title: "Supply Chain & Inventory Optimisation",
    desc: "AI-driven demand forecasting and inventory management tailored to the complex, multi-tier supply chains of automotive manufacturing. Reduces parts shortages, excess inventory, and production stoppages caused by supply chain disruption.",
  },
  {
    num: "05",
    title: "EV Battery Analytics & Range Intelligence",
    desc: "Specialised ML systems for electric vehicle battery health monitoring, State of Charge (SoC) and State of Health (SoH) prediction, thermal management optimisation, and charging cycle analytics — supporting both OEM development and fleet operation.",
  },
  {
    num: "06",
    title: "Dealer & After-Sales Intelligence",
    desc: "Analytics platforms that give automotive dealers and after-sales networks visibility into service demand forecasting, parts availability, warranty trend analysis, and customer lifetime value — improving service throughput and customer retention.",
  },
];

const Industriescontent = () => {
  return (
    <div className="w-full px-8 lg:px-24 py-20">

      <p className="label-eyebrow mb-6" data-aos="fade-up">Where we operate</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
        AI for the Automobile Industry
      </h2>
      <p className="text-slate-400 text-lg leading-[1.8] max-w-4xl mb-16" data-aos="fade-up">
        The automotive industry is undergoing its deepest transformation in a century — electrification, connectivity, autonomy, and software-defined vehicles are reshaping every layer of the value chain. Ideaved Technologies builds AI and data intelligence systems for automotive OEMs, component manufacturers, fleet operators, and dealer networks — turning operational data into competitive advantage at every stage of the vehicle lifecycle.
      </p>

      <div className="flex flex-col gap-6">
        {capabilities.map((c, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 bg-slate-900 p-8 hover:border-cyan-500/40 transition-all duration-200"
            data-aos="fade-up"
          >
            <p className="text-white font-semibold text-lg mb-3">
              <span className="text-cyan-400 mr-3">{c.num}.</span>{c.title}
            </p>
            <p className="text-slate-400 text-sm leading-7">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industriescontent;
