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
import ScrollImages from "@components/ImageModal";
import ScrollSlider from "@components/ImageModal";

const home = () => {
  const Prod = [
    {
      serviceName: "HAWK-Flight Operations",
      serviceContent:
        "Advanced flight operations management system for military aviation training — aircraft scheduling, trainee rostering, simulator allocation, and real-time ops dashboard. Deployed with the Indian Air Force.",
      serviceImg: "/Images/hawk-banner.jpg",
      serviceLink: "/Product/DotVision",
    },
    {
      serviceName: "Dot-AI/VI",
      serviceContent:
        "AI-powered visual intelligence and augmented reality platform for immersive training simulations, field reconnaissance, and real-time data overlay in operational environments.",
      serviceImg: "/Images/arvr9.jpg",
      serviceLink: "/Product/Dotarvr",
    },
  ];
  const content = [
    {
      serviceName: "Defence AI Solutions",
      serviceContent:
        "AI systems built for defence and military use — delivered for the Indian Army (Agniveer training, risk assessment, vehicle tracking) and the Indian Air Force (HAWK flight ops). Security-first, field-proven, and ready for scale.",
      serviceImg: img1,
      serviceLink: "/services/defenceaisolutions",
    },
    {
      serviceName: "Custom Software Development",
      serviceContent:
        "End-to-end software development for government, defence, and enterprise clients — from requirement to deployment. Built for reliability, security, and long-term maintainability.",
      serviceImg: img2,
      serviceLink: "/services/customsoftwaredevelopment",
    },
    {
      serviceName: "AI & Generative AI",
      serviceContent:
        "Machine learning, computer vision, NLP, and generative AI solutions tailored to real operational problems — not generic demos. We build AI that works in production.",
      serviceImg: img9,
      serviceLink: "/services/AI&GenerativeAI",
    },
    {
      serviceName: "Cybersecurity Services",
      serviceContent:
        "Threat detection, secure architecture design, and incident response for government and enterprise systems. Built with defence-grade security principles for our Indian clients.",
      serviceImg: img4,
      serviceLink: "/services/cybersecurityservices",
    },
    {
      serviceName: "Cloud Computing Solutions",
      serviceContent:
        "Scalable, secure cloud infrastructure setup and management — including private cloud, hybrid deployments, and air-gap compatible environments for sensitive use cases.",
      serviceImg: img3,
      serviceLink: "/services/cloudcomputingsolutions",
    },
    {
      serviceName: "IT Support & Managed Services",
      serviceContent:
        "Reliable IT support and managed services for organisations that need their systems to stay up. Proactive monitoring, fast incident response, and dedicated support for deployed projects.",
      serviceImg: img5,
      serviceLink: "/services/ITsupport&managedservices",
    },
  ];

  return (
    <main className="w-full bg-slate-950 text-white">
      <div className="w-full h-[90vh] overflow-hidden relative">
        <Image
          src={heroBg}
          alt="Ideaved hero"
          fill
          priority
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 flex flex-col justify-center items-start px-10 md:px-24">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4" data-aos="fade-up">
            Trusted by Indian Armed Forces
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl" data-aos="fade-up" data-aos-delay="100">
            AI-Powered Defence &<br />Aviation Solutions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl" data-aos="fade-up" data-aos-delay="200">
            Delivering mission-critical AI systems for the Indian Army and Indian Air Force — from battlefield intelligence to next-generation flight training operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
            <a href="/services/defenceaisolutions" className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300">
              Explore Defence AI
            </a>
            <a href="/Product/DotVision" className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 rounded-md transition-all duration-300">
              HAWK for IAF
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-10" data-aos="fade-up" data-aos-delay="400">
            <div className="text-white">
              <span className="text-3xl font-bold text-cyan-400">3</span>
              <p className="text-sm text-gray-300 mt-1">Indian Army<br/>AI Projects</p>
            </div>
            <div className="text-white">
              <span className="text-3xl font-bold text-cyan-400">1</span>
              <p className="text-sm text-gray-300 mt-1">IAF Flight Ops<br/>Programme</p>
            </div>
            <div className="text-white">
              <span className="text-3xl font-bold text-cyan-400">MSME</span>
              <p className="text-sm text-gray-300 mt-1">Certified Indian<br/>Tech Company</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto pt-24 pb-10">
        <p className="text-center text-sm tracking-[0.25em] uppercase text-cyan-400 font-semibold mb-4" data-aos="fade-up">
          Deployed with Indian Armed Forces
        </p>
        <p
          className="my-2 pb-4 text-center text-3xl md:text-4xl lg:text-7xl font-bold text-white"
          data-aos="fade-up"
        >
          Our Products
        </p>
        <p className="text-lg sm:text-xl text-center text-slate-400 pb-4 max-w-3xl mx-auto" data-aos="fade-up">
          Purpose-built defence and aviation platforms proven in real operational environments with the Indian Army and Indian Air Force.
        </p>
      </div>

      <div className="py-8 px-8 mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {Prod.map((service, index) => {
          return (
            <MainContainer
              key={index}
              serviceName={service.serviceName}
              serviceContent={service.serviceContent}
              Img={service.serviceImg}
              serviceLink={service.serviceLink}
            />
          );
        })}
      </div>
      <ScrollSlider />
      <div className="w-[90%] mx-auto pt-24 pb-10">
        <p className="text-center text-sm tracking-[0.25em] uppercase text-cyan-400 font-semibold mb-4" data-aos="fade-up">
          Enterprise-Grade Capabilities
        </p>
        <p
          className="my-2 pb-4 text-center text-3xl md:text-4xl lg:text-7xl font-bold text-white"
          data-aos="fade-up"
        >
          Our Services
        </p>
        <p
          className="text-lg sm:text-xl text-center text-slate-400 pb-4 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          End-to-end technology services for defence, government, and enterprise — engineered for security, reliability, and operational scale.
        </p>
      </div>

      <div className="py-8 px-8 w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {content.map((service, index) => {
          return (
            <MainContainer
              key={index}
              serviceName={service.serviceName}
              serviceContent={service.serviceContent}
              Img={service.serviceImg}
              serviceLink={service.serviceLink}
            />
          );
        })}
      </div>

      <Ourmission />

      {/* Clients strip */}
      <section className="bg-slate-950 border-t border-slate-800 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-10" data-aos="fade-up">
            Trusted by
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
            {[
              { name: "Indian Army", sub: "Ministry of Defence" },
              { name: "Indian Air Force", sub: "Ministry of Defence" },
              { name: "Abbott India", sub: "Healthcare" },
              { name: "IndiGo Airlines", sub: "Aviation" },
            ].map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900 py-6 px-4 gap-2"
              >
                <p className="text-white font-semibold text-sm text-center leading-snug">{client.name}</p>
                <p className="text-slate-500 text-xs">{client.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Longcard
        a={"4"}
        b={"Projects delivered for Indian Army & Indian Air Force"}
        c={"MSME"}
        d={"Registered Indian technology company — Ghaziabad & Jaipur"}
        e={"2 Yrs"}
        f={"Of focused defence & AI product delivery"}
      />
    </main>
  );
};

export default home;
