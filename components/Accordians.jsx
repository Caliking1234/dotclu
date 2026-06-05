"use client";
import React, { useState } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Accordions({ List1, setnavFalse }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="flex flex-col w-full pt-4">
      {List1.map((item, index) => (
        <div key={index} className="border-b border-slate-800">
          <button
            onClick={() => setExpanded(expanded === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-4 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {item.title}
            <KeyboardArrowDownIcon
              fontSize="small"
              className={`transition-transform duration-200 ${expanded === index ? "rotate-180 text-cyan-400" : ""}`}
            />
          </button>

          {expanded === index && (
            <div className="pb-2">
              {item.module?.map((info, i) => (
                <Link
                  key={i}
                  href={info.link}
                  onClick={setnavFalse}
                  className="block px-8 py-2.5 text-sm text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-150"
                >
                  {info.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
