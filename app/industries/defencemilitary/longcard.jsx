"use client";
import React from "react";

export default function longcard() {
  return (
    <div className="w-full py-16 px-5" data-aos="fade-up">
      <div className="w-[90%] max-w-5xl mx-auto rounded-2xl border border-cyan-500/20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="flex-1 flex flex-col items-center justify-center py-10 px-8 gap-2">
            <p className="stat-number text-5xl md:text-6xl">8+</p>
            <span className="text-xs text-slate-400 text-center mt-1 tracking-wide">Defence Projects Delivered</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-10 px-8 gap-2">
            <p className="stat-number text-5xl md:text-6xl">MSME</p>
            <span className="text-xs text-slate-400 text-center mt-1 tracking-wide">Registered Indian Company</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center py-10 px-8 gap-2">
            <p className="stat-number text-5xl md:text-6xl">2 Yrs</p>
            <span className="text-xs text-slate-400 text-center mt-1 tracking-wide">Defence AI Delivery Track Record</span>
          </div>
        </div>
      </div>
    </div>
  );
}
