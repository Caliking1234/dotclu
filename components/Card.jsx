"use client";
import React from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "IT Consulting Services",
    description:
      "In-depth assessments of your existing IT infrastructure aligned with your business objectives. Customised roadmaps that reduce cost and improve performance.",
    href: "/services/itconsultingservices",
    accent: "from-cyan-500/20 to-transparent",
    border: "hover:border-cyan-500/50",
    tag: "Strategy",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software built to your exact requirements — from prototype to production. Skilled developers who take ownership of delivery, not just code.",
    href: "/services/customsoftwaredevelopment",
    accent: "from-violet-500/20 to-transparent",
    border: "hover:border-violet-500/50",
    tag: "Engineering",
  },
  {
    title: "Cloud Computing Solutions",
    description:
      "Cloud migration, infrastructure design, and management — including private cloud and hybrid deployments for sensitive or regulated environments.",
    href: "/services/cloudcomputingsolutions",
    accent: "from-blue-500/20 to-transparent",
    border: "hover:border-blue-500/50",
    tag: "Infrastructure",
  },
  {
    title: "Cybersecurity Services",
    description:
      "Threat assessments, vulnerability scanning, secure architecture design, and incident response — with defence-grade security principles at the core.",
    href: "/services/cybersecurityservices",
    accent: "from-rose-500/20 to-transparent",
    border: "hover:border-rose-500/50",
    tag: "Security",
  },
  {
    title: "IT Support & Managed Services",
    description:
      "Proactive monitoring, fast incident response, and dedicated support for live systems. We keep your infrastructure running so you can focus on your mission.",
    href: "/services/ITsupport&managedservices",
    accent: "from-amber-500/20 to-transparent",
    border: "hover:border-amber-500/50",
    tag: "Operations",
  },
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Unlock actionable insights from operational data using advanced analytics, dashboards, and ML pipelines. Turn data into decisions.",
    href: "/services/DataAnalyticsandBusinessIntelligence",
    accent: "from-emerald-500/20 to-transparent",
    border: "hover:border-emerald-500/50",
    tag: "Analytics",
  },
  {
    title: "IT Training & Education",
    description:
      "Technology training programmes and workshops to upskill teams — from software development fundamentals to advanced AI and cloud topics.",
    href: "/services/ITTrainingandEducation",
    accent: "from-purple-500/20 to-transparent",
    border: "hover:border-purple-500/50",
    tag: "Learning",
  },
  {
    title: "AR / VR Services",
    description:
      "Immersive augmented and virtual reality applications for training, simulation, and enterprise use cases — including defence-sector XR deployments.",
    href: "/services/ArVrservices",
    accent: "from-pink-500/20 to-transparent",
    border: "hover:border-pink-500/50",
    tag: "Immersive Tech",
  },
];

const Cards = () => {
  const router = useRouter();
  return (
    <section className="w-full bg-slate-950 py-10 px-5">
      <div className="py-16 lg:py-16 w-[95%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((svc, i) => (
          <div
            key={i}
            className={`group relative flex flex-col rounded-xl border border-slate-800 bg-slate-900 ${svc.border} cursor-pointer transition-all duration-300 overflow-hidden shadow-lg`}
            data-aos="fade-up"
            onClick={() => router.push(svc.href)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            <div className="relative z-10 p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg lg:text-xl font-semibold text-white group-hover:text-white transition-colors duration-200 leading-snug pr-4">
                  {svc.title}
                </h2>
                <span className="flex-shrink-0 text-[11px] font-semibold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-1 rounded-full tracking-wide">
                  {svc.tag}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-400 flex-1 mb-6">
                {svc.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                Learn more
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
