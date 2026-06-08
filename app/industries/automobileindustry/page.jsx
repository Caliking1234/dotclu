"use client";
import React from "react";
import Image from "next/image";
import Slide1 from "../../../public/Images/ImgManufacture.jpg";
import Industriescontent from "./Industriescontent";

const page = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="relative">
        <Image
          src={Slide1}
          alt="Automobile Industry"
          width={1600}
          height={800}
          className="mt-20 w-full h-[40vh] lg:h-[60vh] object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60 mt-20" />
        <div className="absolute inset-0 flex items-center mt-20 px-10 md:px-16">
          <div>
            <p className="label-eyebrow mb-3">Industry</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white" data-aos="fade-up">
              Automobile Industry
            </h1>
          </div>
        </div>
      </div>
      <Industriescontent />
    </div>
  );
};

export default page;
