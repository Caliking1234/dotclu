import React from 'react'

const Acknowledgement = () => {
  return (
    <>
      {/* Logo cloud */}
      <div className="relative isolate mt-12 sm:mt-8 my-40">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
         
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <h1 className="text-4xl lg:text-6xl font-bold leading-8 text-gray-700" data-aos="fade-up">
            Our Clients
          </h1>
          <p className="text-gray-500 mt-4 text-lg" data-aos="fade-up">Proud to serve India's defence and government organisations.</p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 gap-6" data-aos="fade-up">
            <div className="flex flex-col items-center justify-center border-2 border-slate-800 rounded-xl p-6 text-center bg-slate-50">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl font-bold">IA</span>
              </div>
              <p className="font-bold text-slate-800 text-base">Indian Army</p>
              <p className="text-xs text-slate-500 mt-1">Ministry of Defence, GoI</p>
              <span className="mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Government</span>
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-sky-700 rounded-xl p-6 text-center bg-sky-50">
              <div className="w-12 h-12 bg-sky-700 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-xl font-bold">IAF</span>
              </div>
              <p className="font-bold text-sky-800 text-base">Indian Air Force</p>
              <p className="text-xs text-slate-500 mt-1">Ministry of Defence, GoI</p>
              <span className="mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Government</span>
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-red-200 rounded-xl p-6 text-center bg-red-50">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-sm font-bold">ABT</span>
              </div>
              <p className="font-bold text-gray-800 text-base">Abbott India</p>
              <p className="text-xs text-slate-500 mt-1">Healthcare & Pharmaceuticals</p>
              <span className="mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Private</span>
            </div>
            <div className="flex flex-col items-center justify-center border-2 border-cyan-200 rounded-xl p-6 text-center bg-cyan-50">
              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mb-3">
                <span className="text-white text-sm font-bold">6E</span>
              </div>
              <p className="font-bold text-gray-800 text-base">IndiGo Airlines</p>
              <p className="text-xs text-slate-500 mt-1">Aviation & Travel</p>
              <span className="mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">Private</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acknowledgement