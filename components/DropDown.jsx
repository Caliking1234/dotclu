"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropDown = ({ title, list1 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-[72px] flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-0.5 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200 px-3">
        {title}
        <KeyboardArrowDownIcon
          fontSize="small"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-[72px] left-1/2 -translate-x-1/2 min-w-[200px] bg-slate-900 border border-slate-700 rounded-xl shadow-2xl shadow-black/40 z-50 py-2 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0" />
          {list1.map((module, i) => (
            <Link
              key={i}
              href={module.link}
              className="block px-5 py-2.5 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-150"
            >
              {module.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
