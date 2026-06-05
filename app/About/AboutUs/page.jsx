"use client";
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "@components/Longcard";
import FlipCards from "./FlipCards";
import WrittenContent from "../../WrittenContent";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle("About Us");

    setContent(
      "ideaved is an MSME-registered Indian technology company headquartered in Ghaziabad with a team in Jaipur. Founded 2 years ago, we specialise in AI systems and software for defence and government clients. Our delivered projects include three AI solutions for the Indian Army — AI Personalized Training for Agniveer, AI Risk Assessment, and a Vehicle Tracking & Monitoring System — and our HAWK-Flight Operations platform, which is live with the Indian Air Force trainee programme. We are a small, focused team that works closely with our clients to build systems that actually work in the field."
    );
  }, []);
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Tracing milestones of our growth
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      
      <Longcard
        a={"4"}
        b={"Projects delivered — Indian Army (3) & Indian Air Force (1)"}
        c={"MSME"}
        d={"Registered Indian company, Ghaziabad & Jaipur"}
        e={"2 Yrs"}
        f={"Of focused AI and defence technology delivery"}
      />

      <FlipCards />
      <div className=" w-full bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center py-10">
        <div className="w-fit px-4">
          <h1 className=" text-5xl text-white font-bold">
            Explore a Defence Technology Partnership
          </h1>
          <p className="text-white font-thin py-3">
            ideaved is open to international co-development, licensing, and technology transfer engagements with allied defence organisations and government agencies.
          </p>
          <button className=" my-5 text-white bg-white bg-opacity-20 border border-white hover:bg-white hover:text-blue-700 transition-all duration-300 px-8 py-3 rounded-md font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
