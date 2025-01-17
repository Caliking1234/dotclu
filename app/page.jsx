"use client";
import React, { useState } from "react";
import Longcard from "@components/Longcard";
import ImgSlider from "@components/ImgSlider";
import Ourmission from "@components/Ourmission";
import MainContainer from "./MainContainer";
import img1 from "../public/Images/itcon.webp";
import img2 from "../public/Images/csdimg2.jpeg";
import img3 from "../public/Images/cloudimg.jpg";
import img4 from "../public/Images/cse.webp";
import img5 from "../public/Images/its.jpg";
import img6 from "../public/Images/dataa.jpg";
import img7 from "../public/Images/te.webp";
import img8 from "../public/Images/arvr9.jpg";
import img9 from "../public/Images/ai.png";

import gifyy from "../public/Images/LandingPage.gif";
import Image from "next/image";
import ScrollImages from "@components/ImageModal";
import ScrollSlider from "@components/ImageModal";

const home = () => {
  const Prod = [
    {
      serviceName: "DotVision",
      serviceContent:
        " Our expert developers conduct in-depth assessments of your existing CV...",
      serviceImg:
        "https://img.freepik.com/free-photo/man-glasses-augmented-reality-blue_53876-105040.jpg?t=st=1734762698~exp=1734766298~hmac=9467dde894fe954267b5edbc49d92f8daac6386eaae9ac27230d9c21b1db5bcf&w=996",
      serviceLink: "/Product/DotVision",
    },
    {
      serviceName: "Dot-AI/VI",
      serviceContent:
        " Our expert consultants conduct in-depth assessments of your existing IT...",
      serviceImg:
        "https://img.freepik.com/free-photo/man-wearing-smart-glasses-showing-holographic-screen-futuristic-technology_53876-95816.jpg?t=st=1734763050~exp=1734766650~hmac=94022dea4ed4f4963a4903a2de3ee6b51b793d4c445f970464d67c01770e15d7&w=996",
      serviceLink: "/Product/Dotarvr",
    },
  ];
  const content = [
    {
      serviceName: "IT Consulting Services:",
      serviceContent:
        " Our expert consultants conduct in-depth assessments of your existing IT...",
      serviceImg: img1,
      serviceLink: "/services/itconsultingservices",
    },
    {
      serviceName: "Custom Software Development:",
      serviceContent:
        " With our cutting-edge software development expertise, we create tailored ...",
      serviceImg: img2,
      serviceLink: "/services/customsoftwaredevelopment",
    },
    {
      serviceName: "Cloud Computing Solutions:",
      serviceContent:
        "Experience the power of cloud technology through our comprehensive range of ...",
      serviceImg: img3,
      serviceLink: "/services/cloudcomputingsolutions",
    },
    {
      serviceName: "Cybersecurity Services:",
      serviceContent:
        "Safeguarding your digital assets is our top priority. Our cybersecurity solutions include...",
      serviceImg: img4,
      serviceLink: "/services/cybersecurityservices",
    },
    {
      serviceName: "IT Support and Managed Services:",
      serviceContent:
        "Count on our dedicated support team for prompt assistance and proactive...",
      serviceImg: img5,
      serviceLink: "/services/ITsupport&managedservices",
    },
    {
      serviceName: "Data Analytics and Business Intelligence:",
      serviceContent:
        "Unlock valuable insights from your data to make informed decisions...",
      serviceImg: img6,
      serviceLink: "/services/DataAnalyticsandBusinessIntelligence",
    },
    {
      serviceName: "IT Training and Education:",
      serviceContent:
        "Stay ahead in the dynamic technology landscape with our training programs and...",
      serviceImg: img7,
      serviceLink: "/services/ITTrainingandEducation",
    },
    {
      serviceName: "AR/VR Services:",
      serviceContent:
        "We offer cutting-edge Augmented Reality (AR) and Virtual Reality (VR) solutions...",
      serviceImg: img8,
      serviceLink: "/services/ArVrservices",
    },
    {
      serviceName: "Artificial Intelligence and Generative AI:",
      serviceContent:
        "We offer cutting-edge Augmented Reality (AR) and Virtual Reality (VR) solutions...",
      serviceImg: img9,
      serviceLink: "/services/AI&GenerativeAI",
    },
  ];

  return (
    <main className="w-full">
      <div className="w-full h-[90vh] overflow-hidden">
        <video
          src="/ai.mp4"
          alt="abc"
          width={3000}
          className=" w-full h-[90vh] object-cover"
          autoPlay
          muted
          loop
        />
      </div>

      <div className=" w-[90%] mx-auto py-24">
        <p
          className=" my-2 pb-4 text-center text-3xl md:text-4xl lg:text-8xl font-bold"
          data-aos="fade-up"
        >
          Our Products
        </p>
        {/* <p
          className="  text-lg sm:text-2xl text-center  pb-4"
          data-aos="fade-up"
        >
          We offer a comprehensive range of advanced IT solutions and services
          to meet the diverse technological needs of businesses and individuals.
          Our portfolio includes:
        </p> */}
      </div>

      <div className="py-16 lg:py-16 px-8 mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {Prod.map((service, index) => {
          return (
            <MainContainer
              key={index}
              serviceName={service.serviceName}
              serviceContent={service.serviceContent}
              Img={service.serviceImg}
              serviceLink={service.serviceLink}
            />
          );
        })}
      </div>
      <ScrollSlider />
      <div className=" w-[90%] mx-auto py-24">
        <p
          className=" my-2 pb-4 text-center text-3xl md:text-4xl lg:text-8xl font-bold"
          data-aos="fade-up"
        >
          Our Services
        </p>
        <p
          className="  text-lg sm:text-2xl text-center  pb-4"
          data-aos="fade-up"
        >
          We offer a comprehensive range of advanced IT solutions and services
          to meet the diverse technological needs of businesses and individuals.
          Our portfolio includes:
        </p>
      </div>

      <div className="py-16 lg:py-16 px-8 w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {content.map((service, index) => {
          return (
            <MainContainer
              key={index}
              serviceName={service.serviceName}
              serviceContent={service.serviceContent}
              Img={service.serviceImg}
              serviceLink={service.serviceLink}
            />
          );
        })}
      </div>

      <Ourmission />
      <div
        className=" w-full h-[80vh] flex flex-col items-center justify-around"
        data-aos="fade-up"
      >
        <span className=" text-6xl font bold text-gray-500 font-bold mb-[-20px]">
          Connect
        </span>
        <Image src={gifyy} width={500} height={500} />
        <span className=" text-6xl font bold text-gray-500 font-bold mt-[-20px]">
          With Us
        </span>
      </div>
      <Longcard
        a={"200+"}
        b={"Customers including startups and Fortune 500 companies"}
        c={"1800+"}
        d={"Digital & Tech Experts with experience across industries"}
        e={"7+"}
        f={"Countries where we drive our technology"}
      />
    </main>
  );
};

export default home;
