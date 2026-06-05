import React from "react";
import Image from "next/image";
import Map from "@assets/world-map.webp";

const OurOffice = () => {
  return (
    <div className=" w-full py-8 sm:p-16 bg-gray-800">
      <div className=" p-10 text-gray-100">
        <p className="text-lg py-2">Our Offices</p>
        <h1 className="text-3xl sm:text-5xl font-bold">India-based team, defence-focused</h1>
        <p className="text-gray-400 mt-3 text-base">MSME-registered technology company with offices in Ghaziabad and Jaipur, Rajasthan.</p>
      </div>

      <div className="py-10 sm:p-16">
        <div>
          <h1 className="text-xl py-5 font-bold text-gray-300">India</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
            <div className="text-gray-500 px-2 border border-gray-700 rounded-xl p-6">
              <h1 className="text-lg text-gray-300 font-semibold">Ghaziabad, Uttar Pradesh</h1>
              <p className="text-xs sm:text-sm py-2 text-gray-400">
                Headquarters — ideaved Technologies<br />
                Ghaziabad, Uttar Pradesh, India
              </p>
            </div>
            <div className="text-gray-500 px-2 border border-gray-700 rounded-xl p-6">
              <h1 className="text-lg text-gray-300 font-semibold">Jaipur, Rajasthan</h1>
              <p className="text-xs sm:text-sm py-2 text-gray-400">
                Development Office — ideaved Technologies<br />
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffice;
