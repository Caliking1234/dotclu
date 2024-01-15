"use client";
import React from "react";
import Image from "next/image";
import svg from "../public/Images/WhatsApp.svg.png";
import ReactWhatsapp from "react-whatsapp";

const ChatWithUS = () => {
  return (
    <div className="w-[100px] h-fit">
      <ReactWhatsapp
        number="+91 9773715756"
        message="I need Expert For My IT Problem"
        className=" flex flex-row items-center justify-center p-2 bg-[#102C51] rounded-full shadow-md shadow-gray-700"
      >
        <Image
          width={200}
          height={200}
          src={svg}
          className=" w-[20px] h-[20px] mx-auto"
        />
        <p className=" text-[10px] pl-1 mix-blend-difference py-2 font-bold text-white">
          Live Chat
        </p>
      </ReactWhatsapp>
    </div>
  );
};

export default ChatWithUS;
