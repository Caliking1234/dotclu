"use client";
import React, { useState } from "react";
import Longcard from "@components/Longcard";
import ImgSlider from "@components/ImgSlider";
import Ourmission from "@components/Ourmission";
import MainContainer from "./MainContainer";
import img1 from "../public/Images/itcon.webp";
import img2 from "../public/Images/csdimg2.jpeg";
import img3 from "../public/Images/cloudimg.jpg";
import img4 from "../public/Images/cse.webp";
import img5 from "../public/Images/its.jpg";
import img6 from "../public/Images/dataa.jpg";
import img7 from "../public/Images/te.webp";
import img8 from "../public/Images/arvr9.jpg";
import img9 from "../public/Images/ai.png";

import gifyy from "../public/Images/LandingPage.gif";
import Image from "next/image";
import ScrollImages from "@components/ImageModal";
import ScrollSlider from "@components/ImageModal";

const home = () => {
  const Prod = [
    {
      serviceName: "HAWK-Flight Operations",
      serviceContent:
        " Advanced flight operations management system designed and developed by ideaved for seamless aircraft scheduling, crew management, and maintenance tracking...",
      serviceImg:
        "https://img.freepik.com/free-photo/drone-flying-near-cityscape_23-2149257804.jpg?t=st=1734763050~exp=1734766650~hmac=94022dea4ed4f4963a4903a2de3ee6b51b793d4c445f970464d67c01770e15d7&w=996",
      serviceLink: "/Product/DotVision",
    },
    {
      serviceName: "Dot-AI/VI",
      serviceContent:
        " Our expert consultants conduct in-depth assessments of your existing IT...",
      serviceImg:
        "https://img.freepik.com/free-photo/man-wearing-smart-glasses-showing-holographic-screen-futuristic-technology_53876-95816.jpg?t=st=1734763050~exp=1734766650~hmac=94022dea4ed4f4963a4903a2de3ee6b51b793d4c445f970464d67c01770e15d7&w=996",
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
    <main className="w-full">
      <div className="w-full h-[90vh] overflow-hidden relative">
        <video
          src="/ai.mp4"
          alt="abc"
          width={3000}
          className="w-full h-[90vh] object-cover"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-start px-10 md:px-24">
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

      <div className="w-[90%] mx-auto py-24">
        <p className="text-center text-sm tracking-[0.25em] uppercase text-cyan-600 font-semibold mb-4" data-aos="fade-up">
          Deployed with Indian Armed Forces
        </p>
        <p
          className="my-2 pb-4 text-center text-3xl md:text-4xl lg:text-7xl font-bold"
          data-aos="fade-up"
        >
          Our Products
        </p>
        <p className="text-lg sm:text-xl text-center text-slate-500 pb-4 max-w-3xl mx-auto" data-aos="fade-up">
          Purpose-built defence and aviation platforms proven in real operational environments with the Indian Army and Indian Air Force.
        </p>
      </div>

      <div className="py-16 lg:py-16 px-8 mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
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
      <div className="w-[90%] mx-auto py-24">
        <p className="text-center text-sm tracking-[0.25em] uppercase text-cyan-600 font-semibold mb-4" data-aos="fade-up">
          Enterprise-Grade Capabilities
        </p>
        <p
          className="my-2 pb-4 text-center text-3xl md:text-4xl lg:text-7xl font-bold"
          data-aos="fade-up"
        >
          Our Services
        </p>
        <p
          className="text-lg sm:text-xl text-center text-slate-500 pb-4 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          End-to-end technology services for defence, government, and enterprise — engineered for security, reliability, and operational scale.
        </p>
      </div>

      <div className="py-16 lg:py-16 px-8 w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
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
      <div
        className=" w-full h-[80vh] flex flex-col items-center justify-around"
        data-aos="fade-up"
      >
        <span className=" text-6xl font bold text-gray-500 font-bold mb-[-20px]">
          Connect
        </span>
        <Image src={gifyy} width={500} height={500} />
        <span className=" text-6xl font bold text-gray-500 font-bold mt-[-20px]">
          With Us
        </span>
      </div>
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
