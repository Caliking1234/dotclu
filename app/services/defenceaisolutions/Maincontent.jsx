import React from "react";

const Maincontent = () => {
  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20" data-aos="fade-up">

          <div className="inline-block bg-slate-900 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Proven in Active Defence Deployments
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            Advanced AI Solutions for Defence & Military
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Ideaved Technologies is an MSME-registered Indian technology company based in Ghaziabad and Jaipur, specialising in AI systems for defence and government. In our 2 years of operation we have delivered multiple AI projects for defence agencies and government organisations — all built to the security and reliability standards required for operational environments.
          </p>

          {/* Delivered Projects Highlight */}
          <div className="mt-12 mb-8" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-slate-800">
              Delivered Projects — Defence & Government
            </h2>

            <div className="grid grid-cols-1 gap-8">
              <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-50 rounded-r-xl" data-aos="fade-up">
                <div className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2">Defence AI Project 01</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">AI Personalised Training Platform</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  An AI-driven personalized training system developed for the defence clients's Agniveer programme. The platform uses machine learning to assess individual soldier performance across physical, tactical, and weapons training modules, then adapts the training schedule and content to each recruit's pace and skill gaps. Commanding officers get a real-time readiness dashboard that tracks cohort progress and flags trainees needing remedial intervention — ensuring every Agniveer reaches operational standards within the programme timeline.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Adaptive ML</span>
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Personalized Learning</span>
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Real-time Dashboard</span>
                </div>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-50 rounded-r-xl" data-aos="fade-up">
                <div className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2">Defence AI Project 02</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">AI Risk Assessment</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A predictive risk assessment AI platform delivered for the defence clients that analyses multi-source operational data — terrain, weather, historical incident patterns, and field intelligence — to generate real-time mission risk scores and actionable planning recommendations. The system surfaces the highest-priority risks to decision-makers through a secure command interface, reducing cognitive load in time-critical situations and improving situational awareness across planning and operational teams.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Predictive Analytics</span>
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Multi-source Data Fusion</span>
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Secure Interface</span>
                </div>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-slate-50 rounded-r-xl" data-aos="fade-up">
                <div className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2">Defence AI Project 03</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Vehicle Tracking & Monitoring System</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A real-time vehicle tracking and monitoring system built for the defence clients that provides live GPS-based location tracking, route monitoring, and fleet status reporting for military vehicle convoys and logistics operations. The system includes geofencing alerts, deviation notifications, and a centralised operations dashboard — giving commanders full visibility over vehicle movements, health status, and logistical timelines across the deployment area.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">GPS Tracking</span>
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Fleet Monitoring</span>
                  <span className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full font-medium">Live Operations Dashboard</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
              Our Defence AI Capabilities:
            </h1>

            <div className="py-5 md:px-16 w-full">
              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">1.</span>{" "}
                <span className="font-bold text-3xl">Adaptive Military Training Systems</span>
                <br />
                <p className="py-5 md:text-sm">
                  AI-driven assessment and scenario management that personalizes training pathways for military personnel — from infantry soldiers to aviation trainees. Real-time performance monitoring with predictive analytics ensures every individual reaches operational readiness on the fastest possible timeline.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">2.</span>{" "}
                <span className="font-bold text-3xl">Predictive Threat & Risk Analytics</span>
                <br />
                <p className="py-5 md:text-sm">
                  Machine learning models that fuse multi-source operational data — terrain, weather, historical intelligence, and live field inputs — to generate predictive risk assessments for mission planning and tactical operations. Proven in an active defence clients deployment with continuous accuracy improvement.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">3.</span>{" "}
                <span className="font-bold text-3xl">Autonomous Reconnaissance & Surveillance AI</span>
                <br />
                <p className="py-5 md:text-sm">
                  Computer vision and autonomous decision AI for unmanned reconnaissance platforms. Human-in-the-loop safety protocols maintain full command authority while the AI maximizes detection range, pattern recognition, and response speed in complex environments.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">4.</span>{" "}
                <span className="font-bold text-3xl">Command & Control Intelligence (C4ISR)</span>
                <br />
                <p className="py-5 md:text-sm">
                  Integrated C4ISR platforms with AI-driven decision support, real-time situational awareness, and automated resource optimization. Reduces decision-making latency while distributing operationally relevant intelligence across all command echelons through encrypted, air-gap-compatible interfaces.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">5.</span>{" "}
                <span className="font-bold text-3xl">Military-Grade Cyber Defence</span>
                <br />
                <p className="py-5 md:text-sm">
                  AI-powered threat detection with sub-millisecond response times protecting critical defence infrastructure. Advanced persistent threat detection, behavioral anomaly analysis, and automated incident containment — engineered to NIST standards with zero breaches across all deployments.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">6.</span>{" "}
                <span className="font-bold text-3xl">Multi-Source Intelligence Fusion</span>
                <br />
                <p className="py-5 md:text-sm">
                  Unified intelligence platforms that consolidate data from sensor networks, satellite imagery, field reports, and SIGINT sources into a single actionable operational picture. Enables commanders to make faster, better-informed decisions across strategic and tactical domains.
                </p>
              </div>
            </div>
          </div>

          <div className="py-16">
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-8" data-aos="fade-up">
              Why Choose ideaved for Defence AI:
            </h1>
            <ul className="text-base sm:text-lg text-slate-600 space-y-6">
              <li className="flex items-start gap-4" data-aos="fade-up">
                <span className="font-bold text-2xl text-cyan-600 flex-shrink-0">•</span>
                <span><strong>Proven Track Record with defence organisations:</strong> 3 AI systems delivered for the defence clients; HAWK flight ops platform live with the defence aviation client</span>
              </li>
              <li className="flex items-start gap-4" data-aos="fade-up">
                <span className="font-bold text-2xl text-cyan-600 flex-shrink-0">•</span>
                <span><strong>MSME-Registered Indian Company:</strong> Based in Ghaziabad and Jaipur — a focused, agile team with deep commitment to defence clients and fast delivery cycles</span>
              </li>
              <li className="flex items-start gap-4" data-aos="fade-up">
                <span className="font-bold text-2xl text-cyan-600 flex-shrink-0">•</span>
                <span><strong>Security-First Engineering:</strong> Role-based access, end-to-end encryption, and audit trails built into every deployment — suited for sensitive government and defence environments</span>
              </li>
              <li className="flex items-start gap-4" data-aos="fade-up">
                <span className="font-bold text-2xl text-cyan-600 flex-shrink-0">•</span>
                <span><strong>Domain-Driven Development:</strong> Solutions built in close collaboration with defence clients — shaped by real operational requirements, not generic product templates</span>
              </li>
              <li className="flex items-start gap-4" data-aos="fade-up">
                <span className="font-bold text-2xl text-cyan-600 flex-shrink-0">•</span>
                <span><strong>Open to International Partnerships:</strong> Experienced in delivering for Indian government clients and ready to explore technology partnerships with allied defence organisations</span>
              </li>
            </ul>
          </div>

          <div className="py-8 bg-gradient-to-r from-slate-900 to-cyan-900 rounded-xl p-8 my-12 text-white" data-aos="fade-up">
            <p className="text-lg font-semibold">
              ideaved is an active defence technology partner to the defence organisations, with delivered AI systems for the defence clients and a live flight operations platform for the defence aviation client.
            </p>
            <p className="text-sm text-gray-300 mt-3">
              Open to defence technology partnerships and co-development agreements with allied nations and international defence organisations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
