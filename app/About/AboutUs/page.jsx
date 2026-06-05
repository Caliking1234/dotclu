"use client";
import React from "react";
import Image from "next/image";
import Longcard from "@components/Longcard";
import FlipCards from "./FlipCards";
import heroBg from "@assets/img1.jpg";

const AboutUs = () => {
  return (
    <div className="bg-slate-950">
      {/* Hero Banner */}
      <div className="relative h-[60vh] mt-20 overflow-hidden">
        <Image src={heroBg} alt="About Ideaved Technologies" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4" data-aos="fade-up">
            Who we are
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight" data-aos="fade-up">
            India's Defence AI Company
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-relaxed" data-aos="fade-up">
            MSME-registered. Ghaziabad & Jaipur. Delivering mission-critical AI to the Indian Army and Indian Air Force.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-8 py-24" data-aos="fade-up">
        <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-6">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Built for the Field, Not the Demo
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Ideaved Technologies is an MSME-registered Indian AI company headquartered in Ghaziabad with a development team in Jaipur. Founded 2 years ago, we specialise in AI systems and software for defence and government clients. Our delivered projects include three AI solutions for the Indian Army — AI Personalized Training for Agniveer, AI Risk Assessment, and a Vehicle Tracking & Monitoring System — and our HAWK-Flight Operations platform, which is live with the Indian Air Force trainee programme. We are a small, focused team that works closely with our clients to build systems that actually work in the field.
        </p>
      </div>

      {/* Stats */}
      <Longcard
        a={"4"}
        b={"Projects delivered — Indian Army (3) & Indian Air Force (1)"}
        c={"MSME"}
        d={"Registered Indian company, Ghaziabad & Jaipur"}
        e={"2 Yrs"}
        f={"Of focused AI and defence technology delivery"}
      />

      {/* Values */}
      <FlipCards />

      {/* CTA */}
      <section className="bg-slate-900 border-t border-slate-800 py-24 px-6" data-aos="fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4">
            Partner with us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Explore a Defence Technology Partnership
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            Ideaved is open to international co-development, licensing, and technology transfer engagements with allied defence organisations and government agencies.
          </p>
          <a
            href="/About/ContactUs"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-10 py-4 rounded-md transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
