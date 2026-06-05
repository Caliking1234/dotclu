import React from "react";
import Link from "next/link";

const FooterLinks = ({ title, list1 }) => {
  return (
    <div>
      <p className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{title}</p>
      {list1.map((module, i) => (
        <div key={i} className="mb-2">
          <Link
            href={module.link}
            className="text-slate-400 text-sm hover:text-cyan-400 transition-colors duration-200"
          >
            {module.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
