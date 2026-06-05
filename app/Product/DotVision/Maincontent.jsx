import React from "react";

const Maincontent = () => {
  return (
    <>
      <div>
        <div className="w-full p-8 lg:px-24 sm:p-12 md:p-20" data-aos="fade-up">

          <div className="inline-block bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Deployed with Indian Air Force
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-5">
            HAWK-Flight Operations
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Developed by ideaved, HAWK-Flight Operations is a next-generation AI-powered flight operations management platform purpose-built for military aviation training environments. Successfully deployed for the Indian Air Force (IAF) trainee programme, HAWK streamlines sortie scheduling, trainee rostering, simulator slot management, and aircraft readiness tracking — all within a secure, unified command interface. By embedding advanced AI algorithms into every layer of the operations workflow, HAWK has measurably improved training throughput, reduced scheduling conflicts, and enabled instructors to focus on what matters most: developing the next generation of IAF aviators.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-gray-200" data-aos="fade-up">
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-600">IAF</p>
              <p className="text-sm text-slate-500 mt-1">Indian Air Force<br/>Trainee Programme</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-600">AI-Powered</p>
              <p className="text-sm text-slate-500 mt-1">Intelligent sortie &<br/>roster scheduling</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-600">99.9%</p>
              <p className="text-sm text-slate-500 mt-1">Operational uptime<br/>in live deployment</p>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-16" data-aos="fade-up">
              Platform Capabilities:
            </h1>

            <div className="py-5 md:px-16 w-full">

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">1.</span>{" "}
                <span className="font-bold text-3xl">Trainee Sortie Scheduling:</span>
                <br />
                <p className="py-5 md:text-sm">
                  HAWK's AI optimization engine builds conflict-free daily and weekly sortie plans for trainee batches, accounting for aircraft type availability, weather windows, instructor assignments, and stage-wise training progression. Scheduling that previously took hours is completed in minutes with full constraint compliance.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">2.</span>{" "}
                <span className="font-bold text-3xl">Trainee Roster & Progress Management:</span>
                <br />
                <p className="py-5 md:text-sm">
                  Centralized roster management tracks every trainee's flying hours, stage completions, groundwork scores, and simulator sessions. Instructors get a real-time dashboard of each trainee's progression, enabling early identification of performance gaps and timely remedial scheduling.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">3.</span>{" "}
                <span className="font-bold text-3xl">Simulator & Ground Equipment Allocation:</span>
                <br />
                <p className="py-5 md:text-sm">
                  Optimized allocation of simulator slots, Link trainers, and ground-based training equipment ensures zero idle-time and maximum throughput. HAWK coordinates classroom, simulator, and live flying schedules to eliminate bottlenecks in the training pipeline.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">4.</span>{" "}
                <span className="font-bold text-3xl">Predictive Aircraft Readiness:</span>
                <br />
                <p className="py-5 md:text-sm">
                  AI-powered maintenance forecasting predicts serviceability windows for training aircraft so that sorties are never scheduled against an aircraft about to enter maintenance. Component lifecycle tracking and automated alerts reduce unplanned groundings and maximize fleet availability for trainees.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">5.</span>{" "}
                <span className="font-bold text-3xl">Real-Time Operations Dashboard:</span>
                <br />
                <p className="py-5 md:text-sm">
                  A live command view gives ground commanders and Chief Flying Instructors instant situational awareness of all airborne sorties, standby aircraft, instructor availability, and weather status — all from a single secure screen. Anomaly alerts and sortie deviation notifications are delivered in real time.
                </p>
              </div>

              <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                <span className="font-bold text-3xl">6.</span>{" "}
                <span className="font-bold text-3xl">Secure, Air-Gap Compatible Architecture:</span>
                <br />
                <p className="py-5 md:text-sm">
                  Engineered to operate in air-gapped, classified military networks. HAWK's architecture meets defence-grade data security requirements with role-based access control, end-to-end encryption, and full audit trails — ensuring no operational data leaves the secure base network.
                </p>
              </div>

            </div>
          </div>

          <div className="py-16">
            <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold py-8" data-aos="fade-up">
              Operational Impact at IAF:
            </h1>

            <div className="py-5 md:px-16 w-full flex flex-col md:flex-row-reverse gap-8">
              <div className="w-full md:w-[40%] h-full my-auto">
                <img
                  className="aspect-[14/13] w-full object-cover rounded-2xl"
                  src="https://img.freepik.com/free-photo/futuristic-ai-technology-microchip-advanced-innovation-digital-remix_53876-124694.jpg?t=st=1734760727~exp=1734764327~hmac=cf3cee3d2f61a8784059abde285fda1d8355c8484e9c104c0d8cc448b55a6e18&w=996"
                  alt="HAWK IAF Operations"
                  data-aos="fade-up"
                />
              </div>
              <div className="w-full md:w-[60%]">
                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">1.</span>{" "}
                  <span className="font-bold text-3xl">Improved Training Throughput:</span>
                  <br />
                  <p className="py-5 md:text-sm">
                    By eliminating scheduling conflicts and optimizing aircraft utilization, HAWK increased the number of productive training sorties per available flying day — allowing more trainees to complete their syllabus stages on schedule and reducing overall course duration.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">2.</span>{" "}
                  <span className="font-bold text-3xl">Reduced Administrative Overhead:</span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Manual scheduling, paper-based logs, and coordination calls between squadrons were replaced by HAWK's automated workflows — freeing instructors and operations staff from administrative burden so they can focus on training quality and cadet development.
                  </p>
                </div>

                <div className="w-full text-base sm:text-xl text-slate-600 pb-4 py-10" data-aos="fade-up">
                  <span className="font-bold text-3xl">3.</span>{" "}
                  <span className="font-bold text-3xl">Data-Driven Instructor Insights:</span>
                  <br />
                  <p className="py-5 md:text-sm">
                    Instructors now have objective, AI-generated performance trend data for each trainee, supporting unbiased assessment and enabling targeted interventions at the right stage of training — improving course pass rates and operational readiness at graduation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 bg-gradient-to-r from-slate-900 to-cyan-900 rounded-xl p-8 my-12 text-white" data-aos="fade-up">
            <p className="text-lg font-semibold">
              HAWK-Flight Operations is ideaved's flagship defence aviation product — proven in an active Indian Air Force trainee programme and ready for international military aviation partnerships.
            </p>
            <p className="text-sm text-gray-300 mt-3">
              Available for licensing to allied air forces and military aviation academies. Fully customizable to local fleet types, regulations, and training syllabi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincontent;
