"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const industries = [
  {
    title: "Defence & Military",
    description:
      "Mission-critical AI platforms for defence and military operations — personnel training, operational risk assessment, asset tracking, and aviation flight operations management.",
    href: "/industries/defencemilitary",
    imgSrc: "/Images/hawk-banner.jpg",
    imgAlt: "Defence & Military",
    accent: "border-cyan-500",
    tag: "Ministry of Defence",
  },
  {
    title: "Government Sector",
    description:
      "Secure software and AI platforms for government agencies — built to Indian government data security and compliance standards.",
    href: "/industries/governmentindustry",
    imgSrc: "/Images/government.png",
    imgAlt: "Government",
    accent: "border-violet-500",
    tag: "Public Sector",
  },
  {
    title: "Healthcare Industry",
    description:
      "AI-powered clinical decision support, health data management, and digital health platforms for hospitals and healthcare providers.",
    href: "/industries/healthindustry",
    imgSrc: "/Images/healthcare.jpg",
    imgAlt: "Healthcare",
    accent: "border-emerald-500",
    tag: "MedTech & HealthAI",
  },
  {
    title: "Manufacturing Industry",
    description:
      "Custom software for production automation, inventory tracking, and supply chain management tailored to Indian manufacturing operations.",
    href: "/industries/manufacturingindustry",
    imgSrc: "/Images/ImgManufacture.jpg",
    imgAlt: "Manufacturing",
    accent: "border-amber-500",
    tag: "Industry 4.0",
  },
];

const Ourmission = () => {
  return (
    <section className="bg-slate-950">
      {/* Mission Banner */}
      <div className="relative w-full h-[60vh] bg-[url('../public/Images/p1.jpg')] bg-cover bg-fixed bg-top bg-no-repeat flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-8 lg:px-16 text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4"
            data-aos="fade-up"
          >
            What drives us
          </p>
          <p
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
            data-aos="fade-up"
          >
            Our Mission
          </p>
          <p
            className="text-lg sm:text-xl text-slate-300 mt-6 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            To build AI and technology systems that genuinely serve India's
            defence, government, and enterprise — reliable in the field, not
            just in demos.
          </p>
        </div>
      </div>

      {/* Industries Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4">
            Where we operate
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Industries We Serve
          </p>
          <p className="text-lg text-slate-400 mt-5 max-w-2xl mx-auto">
            Focused on four sectors where technology makes a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className={`group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10`}
              data-aos="fade-up"
            >
              <div className={`h-1 w-full ${ind.accent}`} />
              <div className="relative h-52 overflow-hidden">
                <Image
                  width={700}
                  height={400}
                  className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  src={ind.imgSrc}
                  alt={ind.imgAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <span className="absolute top-3 right-3 text-[11px] font-semibold tracking-wide text-slate-300 bg-slate-800/80 px-2 py-1 rounded-full border border-slate-700">
                  {ind.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="text-sm leading-6 text-slate-400 flex-1 mb-5">
                  {ind.description}
                </p>
                <Link
                  href={ind.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  Explore sector
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourmission;
