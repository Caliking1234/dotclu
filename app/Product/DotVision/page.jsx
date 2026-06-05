"use client";
import React from "react";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from "../../Content";
import { useState, useEffect } from "react";
import Piclongcard from "./Piclongcard";
import Maincontent from "./Maincontent";

const HAWKFlightOps = () => {
  return (
    <div className="">
      <div className="relative h-[40vh] lg:h-[60vh] mt-20 overflow-hidden">
        <Image
          src="/Images/hawk-banner.jpg"
          alt="HAWK-Flight Operations"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-1/2 -translate-y-1/2 text-white px-10 md:px-16">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold"
            data-aos="fade-up"
          >
            HAWK-Flight Operations
          </h1>
        </div>
      </div>

      <Maincontent />
      {/* <WrittenContent title={title} content={content} /> */}
      <Piclongcard />

      {/* <Content title={"more info"} content={miancontent}/> */}
    </div>
  );
};

export default HAWKFlightOps;
