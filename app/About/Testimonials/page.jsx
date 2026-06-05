import React from "react";
import Slide1 from "@assets/img1.jpg";
import Testimonialpg from "./Testimonialpg";
import Image from "next/image";

const pages = () => {
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
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16" data-aos="fade-up">
          <h1 className="text-3xl sm:text-5xl font-bold">
            What our clients say
          </h1>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24" data-aos="fade-up">
        <p className="text-2xl lg:text-6xl py-5 font-medium pr-2"> Want to know what we do and how we do it?<br/> Hear straight from our clients.</p>
       <br/><br/>
        <div className="text-left lg:px-24 lg:text-justify"> 

        <p className=" text-xl md:text-2xl lg:text-2xl">
        ideaved is an MSME-registered Indian AI company focused on defence and government clients. In 2 years we have delivered AI systems for the Indian Army and our HAWK platform for the Indian Air Force. We work closely with a small number of clients and take pride in building systems that actually perform in operational environments.
        </p> <br/>
        <p className=" text-xl md:text-2xl lg:text-2xl ">Our clients include the Indian Army (3 AI projects: Agniveer personalized training, AI risk assessment, and vehicle tracking & monitoring) and the Indian Air Force (HAWK flight operations for the trainee programme). We value these relationships and are focused on expanding our government and defence client base.</p>
      </div>
        </div>
      <Testimonialpg  data-aos="fade-up"/>
    </div>
  );
};

export default pages;
