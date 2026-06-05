"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MainContainer = ({ serviceName, serviceContent, Img, serviceLink }) => {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
      data-aos="fade-up"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          width={800}
          height={400}
          className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          src={Img}
          alt={serviceName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
          {serviceName}
        </h3>
        <p className="text-sm leading-6 text-slate-400 flex-1 mb-5">
          {serviceContent}
        </p>
        <Link
          href={serviceLink}
          className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group/link"
        >
          Learn more
          <ArrowForwardIcon
            fontSize="small"
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default MainContainer;
