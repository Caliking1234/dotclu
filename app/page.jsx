"use client";
import React from "react";
import Longcard from "@components/Longcard";
import Ourmission from "@components/Ourmission";
import MainContainer from "./MainContainer";
import img1 from "../public/Images/itcon.webp";
import img2 from "../public/Images/csdimg2.jpeg";
import img3 from "../public/Images/cloudimg.jpg";
import img4 from "../public/Images/cse.webp";
import img5 from "../public/Images/its.jpg";
import img9 from "../public/Images/ai.png";
import heroBg from "../public/Images/ai3.webp";
import Image from "next/image";
import ScrollSlider from "@components/ImageModal";
import Link from "next/link";

const home = () => {
  const Prod = [
    {
      serviceName: "HAWK – Flight Operations",
      serviceContent: "AI-powered flight operations platform for military aviation training — sortie scheduling, trainee rostering, simulator allocation, and real-time ops command dashboard.",
      serviceImg: "/Images/hawk-banner.jpg",
      serviceLink: "/Product/DotVision",
    },
    {
      serviceName: "AgniAI – AI Training Platform",
      serviceContent: "Personalised AI training management for armed forces recruit programmes — adapting every recruit's curriculum in real time based on performance, skills gaps, and stage progression.",
      serviceImg: "/Images/hawk-ops.jpg",
      serviceLink: "/Product/AgniAI",
    },
    {
      serviceName: "RiskSense – Risk Assessment",
      serviceContent: "Predictive AI risk assessment for military operations — fusing terrain data, weather, and field intelligence into live mission risk scores and planning recommendations for commanders.",
      serviceImg: "/Images/government.png",
      serviceLink: "/Product/RiskSense",
    },
    {
      serviceName: "Dot-AI/VI – Visual Intelligence",
      serviceContent: "AI-powered visual intelligence and augmented reality platform for immersive training simulations, field reconnaissance, and real-time data overlay in operational environments.",
      serviceImg: "/Images/arvr9.jpg",
      serviceLink: "/Product/Dotarvr",
    },
    {
      serviceName: "IdeaLytics – Analytics Platform",
      serviceContent: "Enterprise analytics and business intelligence for government, defence, healthcare, and manufacturing — turning raw operational data into real-time dashboards, forecasts, and decisions.",
      serviceImg: "/Images/dataa.jpg",
      serviceLink: "/Product/IdeaLytics",
    },
    {
      serviceName: "MediSense – Clinical AI",
      serviceContent: "AI-driven clinical decision support, patient risk stratification, and hospital operations intelligence for healthcare networks. ABDM-compliant, on-premise deployable.",
      serviceImg: "/Images/healthcare.jpg",
      serviceLink: "/Product/MediSense",
    },
    {
      serviceName: "FactoryIQ – Manufacturing Intelligence",
      serviceContent: "Predictive maintenance, visual quality inspection, and production optimisation for manufacturing facilities — edge-native, no cloud dependency, OPC-UA compatible.",
      serviceImg: "/Images/ImgManufacture.jpg",
      serviceLink: "/Product/FactoryIQ",
    },
  ];

  const content = [
    {
      serviceName: "Defence AI Solutions",
      serviceContent: "AI systems built for defence and military use. Security-first, field-proven, and built to operate in classified and air-gapped environments.",
      serviceImg: img1,
      serviceLink: "/services/defenceaisolutions",
    },
    {
      serviceName: "Custom Software Development",
      serviceContent: "End-to-end software development for government, defence, and enterprise clients — from requirement to deployment. Built for reliability, security, and long-term maintainability.",
      serviceImg: img2,
      serviceLink: "/services/customsoftwaredevelopment",
    },
    {
      serviceName: "AI & Generative AI",
      serviceContent: "Machine learning, computer vision, NLP, and generative AI tailored to real operational problems — not generic demos. We build AI that works in production environments.",
      serviceImg: img9,
      serviceLink: "/services/AI&GenerativeAI",
    },
    {
      serviceName: "Cybersecurity Services",
      serviceContent: "Threat detection, secure architecture design, and incident response for government and enterprise systems. Built with defence-grade security principles.",
      serviceImg: img4,
      serviceLink: "/services/cybersecurityservices",
    },
    {
      serviceName: "Cloud Computing Solutions",
      serviceContent: "Scalable, secure cloud infrastructure — including private cloud, hybrid deployments, and air-gap compatible environments for sensitive use cases.",
      serviceImg: img3,
      serviceLink: "/services/cloudcomputingsolutions",
    },
    {
      serviceName: "IT Support & Managed Services",
      serviceContent: "Proactive monitoring, fast incident response, and dedicated support for deployed projects. We keep your systems running so you can focus on your mission.",
      serviceImg: img5,
      serviceLink: "/services/ITsupport&managedservices",
    },
  ];

  return (
    <main className="w-full bg-slate-950 text-white">

      {/* ── Hero ── */}
      <div className="w-full h-[100vh] overflow-hidden relative">
        <Image src={heroBg} alt="Ideaved Technologies" fill priority className="object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-10 md:px-24">
          <p className="label-eyebrow mb-5" data-aos="fade-up">
            Defence · Government · Healthcare · Industry
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Intelligent Systems<br />for Complex<br />Environments.
          </h1>
          <p
            className="mt-7 text-base sm:text-lg text-slate-300 max-w-xl leading-[1.8] font-normal"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ideaved Technologies engineers AI products and software for organisations where performance under pressure is non-negotiable — deployed across defence, government, healthcare, and industry.
          </p>
          <div className="mt-9 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
            <Link
              href="/Product/DotVision"
              className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-7 py-3 rounded-md tracking-wide transition-all duration-300"
            >
              Explore Products
            </Link>
            <Link
              href="/About/ContactUs"
              className="border border-white/40 text-white hover:border-white hover:bg-white/10 text-sm font-semibold px-7 py-3 rounded-md tracking-wide transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── Products ── */}
      <div className="w-[90%] mx-auto pt-28 pb-10">
        <p className="label-eyebrow text-center mb-5" data-aos="fade-up">Battle-tested platforms</p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold text-white mb-5" data-aos="fade-up">
          Our Products
        </h2>
        <p className="text-base sm:text-lg text-center text-slate-400 max-w-2xl mx-auto leading-[1.8]" data-aos="fade-up">
          From defence AI to enterprise analytics — purpose-built platforms proven in real operational environments across India.
        </p>
      </div>
      <div className="py-8 px-8 mx-auto w-[95%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Prod.map((service, index) => (
          <MainContainer
            key={index}
            serviceName={service.serviceName}
            serviceContent={service.serviceContent}
            Img={service.serviceImg}
            serviceLink={service.serviceLink}
          />
        ))}
      </div>

      {/* ── Scroll Slider ── */}
      <ScrollSlider />

      {/* ── Services ── */}
      <div className="w-[90%] mx-auto pt-28 pb-10">
        <p className="label-eyebrow text-center mb-5" data-aos="fade-up">What we deliver</p>
        <h2 className="font-display text-center text-4xl md:text-5xl font-bold text-white mb-5" data-aos="fade-up">
          Our Services
        </h2>
        <p className="text-base sm:text-lg text-center text-slate-400 max-w-2xl mx-auto leading-[1.8]" data-aos="fade-up">
          End-to-end technology services for defence, government, and enterprise — engineered for security, reliability, and scale.
        </p>
      </div>
      <div className="py-8 px-8 w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {content.map((service, index) => (
          <MainContainer
            key={index}
            serviceName={service.serviceName}
            serviceContent={service.serviceContent}
            Img={service.serviceImg}
            serviceLink={service.serviceLink}
          />
        ))}
      </div>

      {/* ── Industries ── */}
      <Ourmission />

      {/* ── Clients ── */}
      <section className="bg-slate-950 border-t border-slate-800 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="label-eyebrow mb-5" data-aos="fade-up">Trusted by</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12" data-aos="fade-up">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5" data-aos="fade-up">
            {[
              { name: "Defence Client", sub: "Ministry of Defence, GoI", icon: "🛡️" },
              { name: "Aviation Defence", sub: "Ministry of Defence, GoI", icon: "✈️" },
              { name: "Abbott India", sub: "Healthcare", icon: "🏥" },
              { name: "IndiGo Airlines", sub: "Aviation", icon: "🛫" },
            ].map((client, i) => (
              <div key={i} className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/40 transition-all duration-200 py-8 px-4 gap-3">
                <span className="text-3xl">{client.icon}</span>
                <p className="text-white font-semibold text-sm text-center leading-snug">{client.name}</p>
                <p className="text-slate-500 text-xs">{client.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <Longcard
        a={"5"}
        b={"AI products across defence & enterprise"}
        c={"MSME"}
        d={"Registered — Ghaziabad & Jaipur, India"}
        e={"2 Yrs"}
        f={"Of focused AI & defence product delivery"}
      />
    </main>
  );
};

export default home;
