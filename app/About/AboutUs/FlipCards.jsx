"use client";
import React from "react";

const values = [
  {
    icon: "🎯",
    title: "Our Mission",
    description:
      "To build AI and technology systems that genuinely serve India's defence, government, and enterprise — reliable in the field, not just in demos.",
    accent: "from-cyan-500/10 to-transparent border-cyan-500/30",
  },
  {
    icon: "🛡️",
    title: "Defence-First Engineering",
    description:
      "Every system we build is designed to meet the security, reliability, and compliance standards required in defence and government environments.",
    accent: "from-violet-500/10 to-transparent border-violet-500/30",
  },
  {
    icon: "🤝",
    title: "Client Partnership",
    description:
      "We work side by side with our clients from requirement to deployment. Small team, direct access, full ownership of every delivery.",
    accent: "from-emerald-500/10 to-transparent border-emerald-500/30",
  },
  {
    icon: "⚙️",
    title: "Operational Reliability",
    description:
      "We build AI that works in production — not prototypes. 99.9% uptime, air-gap compatible architectures, and defence-grade security by default.",
    accent: "from-amber-500/10 to-transparent border-amber-500/30",
  },
  {
    icon: "🚀",
    title: "Innovation with Purpose",
    description:
      "We apply cutting-edge AI — computer vision, NLP, generative AI — only where it creates measurable operational value for our clients.",
    accent: "from-blue-500/10 to-transparent border-blue-500/30",
  },
  {
    icon: "🇮🇳",
    title: "Made in India",
    description:
      "MSME-registered, India-built, defence-delivered. Headquartered in Ghaziabad with a development team in Jaipur — fully committed to the Indian defence ecosystem.",
    accent: "from-rose-500/10 to-transparent border-rose-500/30",
  },
];

const FlipCards = () => {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-4">
            What we stand for
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className={`group relative rounded-xl border bg-gradient-to-br ${v.accent} bg-slate-900 p-8 hover:scale-[1.02] transition-all duration-300 shadow-lg`}
              data-aos="fade-up"
            >
              <div className="text-4xl mb-5">{v.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {v.title}
              </h3>
              <p className="text-sm leading-6 text-slate-400">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
