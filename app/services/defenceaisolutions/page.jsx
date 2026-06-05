"use client"
import React from "react";
import Slide1 from "public/Images/custom-software-development.webp";
import Image from "next/image";
import { useState, useEffect } from "react";
import Piclongcard from "./Piclongcard";
import Maincontent from "./Maincontent";


const DefenceAISolutions = () => {
  
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="Defence AI Solutions"
          width={800}
          height={800}
          className=" w-full h-[40vh] lg:h-[60vh]  mt-20"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className=" backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
            Defence AI Solutions
          </h1>
        </div>
      </div>

      <Maincontent/>
      <Piclongcard/>
    </div>
  );
};

export default DefenceAISolutions;
