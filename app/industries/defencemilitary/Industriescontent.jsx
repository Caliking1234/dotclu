import React from "react";

const Industriescontent = () => {
  return (
    <>
      <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20">

        <div className="inline-block bg-slate-900 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6" data-aos="fade-up">
          Active Defence Partner — Indian Army & Indian Air Force
        </div>

        <p className="text-2xl sm:text-4xl md:text-5xl py-5" data-aos="fade-up">
          Delivering AI for Modern Defence Operations:
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
          Defence & Military Industry
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed py-4 max-w-4xl" data-aos="fade-up">
          ideaved is an MSME-registered Indian AI company (Ghaziabad & Jaipur) with 2 years of focused delivery for the Indian Armed Forces. Our clients include the Indian Army (3 AI projects) and the Indian Air Force (HAWK flight ops). Every solution is built to the security and reliability standards required in defence environments.
        </p>

        {/* Live Deployments Banner */}
        <div className="my-10 grid grid-cols-1 sm:grid-cols-4 gap-6" data-aos="fade-up">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-cyan-400">3</p>
            <p className="text-sm text-gray-300 mt-2">AI Projects<br/>Indian Army</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-cyan-400">1</p>
            <p className="text-sm text-gray-300 mt-2">Flight Ops Platform<br/>Indian Air Force</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-cyan-400">MSME</p>
            <p className="text-sm text-gray-300 mt-2">Registered Indian<br/>Tech Company</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-cyan-400">2 Yrs</p>
            <p className="text-sm text-gray-300 mt-2">Focused Defence<br/>AI Delivery</p>
          </div>
        </div>

        <ul className="py-10 w-full sm:w-[90%]">
          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">1.</span>{" "}
            <span className="font-bold text-3xl">AI Personalized Training for Agniveer — Indian Army:</span>
            <br />
            <p className="py-5">
              Delivered for the Indian Army's Agniveer programme, this AI platform personalizes training content and schedules for each recruit based on their individual performance across physical, tactical, and weapons training modules. Machine learning identifies skill gaps and adapts the curriculum in real time. Commanding officers get a live cohort readiness dashboard to track progress and flag trainees needing additional support.
            </p>
          </li>

          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">2.</span>{" "}
            <span className="font-bold text-3xl">AI Risk Assessment — Indian Army:</span>
            <br />
            <p className="py-5">
              A predictive risk assessment system delivered for the Indian Army that fuses terrain, weather, historical incident, and field intelligence data to generate real-time mission risk scores and planning recommendations. Delivered through a secure command interface that helps decision-makers prioritise responses under time-critical conditions.
            </p>
          </li>

          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">3.</span>{" "}
            <span className="font-bold text-3xl">Vehicle Tracking & Monitoring System — Indian Army:</span>
            <br />
            <p className="py-5">
              A real-time GPS-based vehicle tracking and monitoring system for Indian Army logistics and convoy operations. Provides live location tracking, geofencing alerts, deviation notifications, and a centralised operations dashboard — giving commanders full visibility over fleet movements, vehicle health, and logistical timelines.
            </p>
          </li>

          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">4.</span>{" "}
            <span className="font-bold text-3xl">HAWK Flight Operations — Indian Air Force Trainee Programme:</span>
            <br />
            <p className="py-5">
              Our HAWK platform is actively deployed for the Indian Air Force trainee programme, managing sortie scheduling, trainee rostering, simulator slot allocation, and aircraft readiness tracking. HAWK has improved training throughput, reduced administrative overhead, and given instructors objective AI-generated performance data for every trainee.
            </p>
          </li>

          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">4.</span>{" "}
            <span className="font-bold text-3xl">Military-Grade Cyber Defence:</span>
            <br />
            <p className="py-5">
              AI-powered cybersecurity engineered for defence networks and classified infrastructure. Our threat detection systems operate with sub-millisecond response times, behavioral anomaly analysis, and automated containment — providing persistent protection against advanced adversarial threats with zero breach record across all deployments.
            </p>
          </li>

          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">5.</span>{" "}
            <span className="font-bold text-3xl">Autonomous Surveillance & Reconnaissance AI:</span>
            <br />
            <p className="py-5">
              Computer vision and autonomous AI systems for unmanned surveillance and reconnaissance platforms. Human-in-the-loop safety architecture ensures commanders retain full operational authority while maximising automated detection capability in complex field environments.
            </p>
          </li>

          <li className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
            <span className="font-bold text-3xl">6.</span>{" "}
            <span className="font-bold text-3xl">Multi-Source Intelligence Fusion & C4ISR:</span>
            <br />
            <p className="py-5">
              Integrated intelligence platforms consolidating sensor networks, satellite feeds, SIGINT, and field data into a unified operational picture. AI-driven decision support reduces information overload and surfaces the most operationally relevant intelligence for commanders at every echelon.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Industriescontent;
