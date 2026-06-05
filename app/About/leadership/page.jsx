import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Cards from "./Leadercard";

const page = () => {
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
            The great minds behind it all
          </h1>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-6xl py-5 font-medium pr-2">
          {" "}
          Setting the tone, sharing the ambition, changing tomorrow.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 lg:text-justify">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            If you collaborate with Ideaved then you are working with a team who
            strive to provide solutions that help you do business faster,
            better, and smarter than ever before.
          </p>{" "}
          <br />
          <p className=" text-xl md:text-2xl lg:text-2xl ">
            Our drive comes from those who started ideaved from scratch with a clear purpose — building AI and software that serves India's defence and government. In 2 years we have delivered 4 projects for the Indian Army and Indian Air Force, growing steadily from our offices in Ghaziabad and Jaipur.
          </p>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default page;
