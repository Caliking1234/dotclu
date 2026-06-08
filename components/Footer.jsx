import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Images/dotClu-removebg-preview.png";
import FooterLinks from "./FooterLinks";

function Footer({ List1 }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 flex flex-col gap-5">
            <Link href="/">
              <Image src={logo} height={100} width={160} className="w-[140px]" alt="Ideaved" />
            </Link>
            <p className="text-slate-400 text-sm leading-7 max-w-xs">
              India-based AI and software engineering company. Delivering mission-critical systems for defence, government, healthcare, and enterprise. MSME-registered.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="mailto:info.ideaved@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                info.ideaved@gmail.com
              </a>
              <a href="tel:+918377827753" className="text-slate-400 hover:text-white transition-colors">
                +91 83778 27753
              </a>
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {List1.map((items, index) => (
              <div key={index}>
                <FooterLinks title={items.title} list1={items.module} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Ideaved Technologies LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="/privacy&policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link href="/term&condition" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
