"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import logo from "../public/Images/dotClu-removebg-preview.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import DropDown from "./DropDown";
import Image from "next/image";
import Accordions from "./Accordians";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";
import ChatWithUS from "./ChatWithUS";
import { Toaster, toast } from "sonner";

const Navbar = ({ List1 }) => {
  const router = useRouter();
  const [navOpen, setnavOpen] = useState(false);
  const [showForm, setshowForm] = useState(false);
  const navRef = useRef();
  const fromRef = useRef();
  const [Name, setName] = useState("");
  const [Emails, setEmails] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [Query, setQuery] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ymay2qu", "template_8n87dwi", e.target, "P7_MtSDARHReL2JVO")
      .then(() => {
        setName(""); setEmails(""); setPhoneno(""); setQuery("");
      })
      .catch((err) => console.log(err));
    hideForm();
    setName(""); setPhoneno(""); setQuery(""); setEmails("");
  };

  useEffect(() => {
    const handler = (e) => { if (!fromRef.current.contains(e.target)) setshowForm(false); };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    const handler = (e) => { if (!navRef.current.contains(e.target)) setnavOpen(false); };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleForm = () => setshowForm(true);
  const hideForm = () => setshowForm(false);
  const handelnav = () => setnavOpen(!navOpen);
  const setnavFalse = () => setnavOpen(false);

  return (
    <header
      id="nav"
      className={`z-50 h-[72px] w-screen flex items-center justify-between px-6 lg:px-10 fixed top-0 left-0 text-white transition-all duration-300 ${
        scrolling
          ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
          : "bg-slate-950/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Contact Form Overlay */}
      <div
        ref={fromRef}
        className={`absolute top-[80px] left-1/2 -translate-x-1/2 w-[92vw] sm:w-[560px] rounded-xl border border-slate-700 bg-slate-900 shadow-2xl z-50 transition-all duration-300 ${
          showForm ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-800">
          <h2 className="text-white font-semibold tracking-wide">Get in Touch</h2>
          <CancelIcon onClick={hideForm} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
        </div>
        <form onSubmit={sendEmail} className="p-6 flex flex-col gap-5">
          {[
            { label: "Full Name", name: "user_name", type: "text", value: Name, set: setName },
            { label: "Email Address", name: "user_email", type: "email", value: Emails, set: setEmails },
            { label: "Mobile Number", name: "user_phone", type: "number", value: Phoneno, set: setPhoneno },
          ].map(({ label, name, type, value, set }) => (
            <div key={name} className="flex flex-col gap-1">
              <label className="text-xs text-slate-400">{label} <span className="text-red-400">*</span></label>
              <input
                type={type}
                required
                name={name}
                value={value}
                onChange={(e) => set(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-white outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          ))}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-slate-400">Message <span className="text-red-400">*</span></label>
            <textarea
              name="user_query"
              required
              value={Query}
              onChange={(e) => setQuery(e.target.value)}
              rows={3}
              className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-white outline-none focus:border-cyan-500 transition-colors resize-none"
            />
          </div>
          <div className="flex items-start gap-2 text-xs text-slate-400">
            <input type="checkbox" required className="mt-0.5 accent-cyan-500" />
            <span>
              I agree to the{" "}
              <Link href="/term&condition" className="text-cyan-400 hover:underline">Terms</Link>{" "}
              &{" "}
              <Link href="/privacy&policy" className="text-cyan-400 hover:underline">Privacy Policy</Link>
            </span>
          </div>
          <button
            type="submit"
            onClick={() => toast.success("We've received your query and will reach out soon.")}
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2.5 rounded-md transition-colors duration-200 text-sm"
          >
            Send Message
          </button>
          <Toaster richColors position="top-center" />
        </form>
      </div>

      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image src={logo} height={80} width={120} className="h-[52px] w-auto" alt="Ideaved" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-1">
        <ul className="flex items-center">
          {List1.map((item, index) => (
            <li
              key={index}
              className="py-2 px-1 hover:text-cyan-400 transition-colors duration-200 cursor-pointer text-sm font-medium text-slate-300"
            >
              <DropDown title={item.title} list1={item.module} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 ml-4">
          <ChatWithUS />
          <button
            onClick={handleForm}
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <ul
        ref={navRef}
        className={`z-40 bg-slate-950 border-r border-slate-800 text-white w-[75%] min-h-screen fixed top-[72px] left-0 transition-all duration-300 ease-in-out md:hidden overflow-y-auto ${
          navOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <Accordions List1={List1} navOpen={navOpen} setnavFalse={setnavFalse} />
        <li className="mx-6 mt-8">
          <button
            onClick={handleForm}
            className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold rounded-md transition-colors"
          >
            Contact Us
          </button>
        </li>
        <li className="mx-6 mt-4 pb-10">
          <ChatWithUS />
        </li>
      </ul>

      {/* Hamburger */}
      <button
        onClick={handelnav}
        className="md:hidden flex items-center justify-center text-white"
        aria-label="Toggle menu"
      >
        {navOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
      </button>
    </header>
  );
};

export default Navbar;
