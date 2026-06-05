"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";
import img1 from "../public/Images/hi.jpg";
import img2 from "../public/Images/mi.jpg";
import img3 from "../public/Images/gs.webp";
import img4 from "../public/Images/government.png";

const Ourmission = () => {
  const router = useRouter();
  return (
    <>
      <div className="">
      <div className=" w-full h-[60vh] bg-[url('../public/Images/p1.jpg')] bg-cover bg-fixed bg-top bg-no-repeat flex items-center justify-center">

        <div className=" w-full mx-auto text-white p-8  lg:p-16">
          <p
            className="  text-center  text-3xl md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            {" "}
            Our mission
          </p>
          <p className=" text-center text-2xl py-5" data-aos="fade-up">
            To build AI and technology systems that genuinely serve India's defence, government, and enterprise — reliable in the field, not just in demos.
          </p>
        </div>
        </div>
        <div className="mx-auto mt-14 p p-8 md:p-12 lg:p-16 " data-aos="fade-up">
          <p
            className="text-3xl text-center md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            Industries we serve
          </p>
          <p className="text-center text-2xl pt-5 pb-5" data-aos="fade-up">
            Focused on four sectors where technology makes a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 sm:p-16">

          <div className="shadow-xl hover:shadow-gray-500 bg-slate-900 text-white text-lg font-bold text-center p-0 rounded-lg overflow-hidden" data-aos="fade-up">
            <img
              className="h-[28vh] w-full object-cover opacity-70"
              src="https://img.freepik.com/free-photo/soldiers-walking-field_23-2149301960.jpg?w=996"
              alt="Defence & Military"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-center leading-8 tracking-tight text-white">
                Defence & Military
              </h3>
              <p className="text-xs sm:text-sm leading-6 text-gray-300 py-4">
                AI systems for the Indian Army and Indian Air Force — Agniveer training, risk assessment, vehicle tracking, and HAWK flight operations for IAF trainees.
              </p>
              <Link
                href="/industries/defencemilitary"
                className="px-3 py-2 text-white font-bold bg-cyan-600 hover:bg-cyan-500 rounded-md"
              >
                Read more
              </Link>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-gray-500 bg-red-50 text-lg font-bold text-center p-0 rounded-lg overflow-hidden" data-aos="fade-up">
            <Image
              width={500}
              height={500}
              className="h-[28vh] w-full object-cover"
              src={img3}
              alt="Government"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Government Sector
              </h3>
              <p className="text-xs sm:text-sm leading-6 text-gray-500 py-4">
                Secure software and AI platforms for government agencies — built to Indian government data security and compliance standards.
              </p>
              <Link
                href="/industries/governmentindustry"
                className="px-3 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md border border-gray-300"
              >
                Read more
              </Link>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-gray-500 bg-blue-50 text-lg font-bold text-center p-0 rounded-lg overflow-hidden" data-aos="fade-up">
            <Image
              width={500}
              height={500}
              className="h-[28vh] w-full object-cover"
              src={img1}
              alt="Healthcare"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Healthcare Industry
              </h3>
              <p className="text-xs sm:text-sm leading-6 text-gray-500 py-4">
                AI-powered clinical decision support, health data management, and digital health platforms for hospitals and healthcare providers.
              </p>
              <Link
                href="/industries/healthindustry"
                className="px-3 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md border border-gray-300"
              >
                Read more
              </Link>
            </div>
          </div>

          <div className="shadow-xl hover:shadow-gray-500 bg-orange-50 text-lg font-bold text-center p-0 rounded-lg overflow-hidden" data-aos="fade-up">
            <Image
              width={500}
              height={500}
              className="h-[28vh] w-full object-cover"
              src={img2}
              alt="Manufacturing"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Manufacturing Industry
              </h3>
              <p className="text-xs sm:text-sm leading-6 text-gray-500 py-4">
                Custom software for production automation, inventory tracking, and supply chain management tailored to Indian manufacturing operations.
              </p>
              <Link
                href="/industries/manufacturingindustry"
                className="px-3 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md border border-gray-300"
              >
                Read more
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Ourmission;
