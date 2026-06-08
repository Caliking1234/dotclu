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
        Ideaved Technologies is an MSME-registered Indian AI company specialising in defence, government, healthcare, and enterprise. In 2 years we have delivered AI systems for defence agencies, government organisations, and enterprise clients. We work closely with a small number of clients and take pride in building systems that perform in operational environments.
        </p> <br/>
        <p className=" text-xl md:text-2xl lg:text-2xl ">Our portfolio spans AI training platforms, operational risk assessment, asset tracking, aviation flight operations, clinical AI, manufacturing intelligence, and enterprise analytics. We value long-term partnerships and are focused on expanding our presence across defence, government, and industry.</p>
      </div>
        </div>
      <Testimonialpg  data-aos="fade-up"/>
    </div>
  );
};

export default pages;
