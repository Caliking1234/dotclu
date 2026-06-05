"use client";
import React from "react";

export default function longcard() {
  return (
    <div className="w-full">
      <div className=" w-[85%] mx-auto py-10 my-10 rounded-xl bg-gradient-to-r from-[#1a1a2e] to-[#16213e] shadow-xl shadow-gray-500" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div className=" w-3/4 md:w-fit mx-8 m-6 text-gray-200 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            4<br/>
          </p>
            <span className="text-lg text-center">Projects Delivered<br/>Army & IAF</span>{" "}
        </div>
        <div className=" w-3/4 md:w-fit  mx-8 m-6 text-gray-200 flex flex-col items-center gap-2">
          <p className=" text-4xl md:text-5xl font-bold">
            MSME<br/>
          </p>
            <span className="text-lg text-center">
            Registered Indian<br/>Company
            </span>{" "}
        </div>
        <div className=" w-3/4 md:w-fit  mx-8 m-6 text-gray-200 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            2 Yrs<br/>
          </p>
            <span className="text-lg text-center">Defence AI<br/>Delivery Track Record</span>
        </div>
      </div>
    </div>
      </div>
  );
}
