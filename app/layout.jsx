"use client";
import React, { useState, useEffect } from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../public/Images/favicon.ico";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const RootLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [cookie, setCookie] = useState(null);
  useEffect(() => {
    setCookie(false);
  }, []);

  const List1 = [
    {
      title: "Products",
      module: [
        { name: "HAWK – Flight Operations", link: "/Product/DotVision" },
        { name: "Dot-AI/VI – Visual Intelligence", link: "/Product/Dotarvr" },
        { name: "AgniAI – AI Training Platform", link: "/Product/AgniAI" },
        { name: "RiskSense – Risk Assessment", link: "/Product/RiskSense" },
        { name: "IdeaLytics – Analytics Platform", link: "/Product/IdeaLytics" },
        { name: "MediSense – Clinical AI", link: "/Product/MediSense" },
        { name: "FactoryIQ – Manufacturing Intelligence", link: "/Product/FactoryIQ" },
      ],
    },
    {
      title: "Services",
      module: [
        {
          name: "Defence AI Solutions",
          link: "/services/defenceaisolutions",
        },
        {
          name: "Custom Software Development",
          link: "/services/customsoftwaredevelopment",
        },
        {
          name: "AI & Generative AI",
          link: "/services/AI&GenerativeAI",
        },
        {
          name: "Cyber Security Services",
          link: "/services/cybersecurityservices",
        },
        {
          name: "Cloud Computing Solutions",
          link: "/services/cloudcomputingsolutions",
        },
        {
          name: "IT Support & Managed Services",
          link: "/services/ITsupport&managedservices",
        },
      ],
    },
    {
      title: "Industries",
      module: [
        {
          name: "Defence & Military",
          link: "/industries/defencemilitary",
        },
        {
          name: "Government Sector",
          link: "/industries/governmentindustry",
        },
        {
          name: "Healthcare Industry",
          link: "/industries/healthindustry",
        },
        {
          name: "Manufacturing Industry",
          link: "/industries/manufacturingindustry",
        },
        {
          name: "Automobile Industry",
          link: "/industries/automobileindustry",
        },
        {
          name: "Banking & Finance",
          link: "/industries/bankingindustry",
        },
      ],
    },
    {
      title: "About",
      module: [
        {
          name: "About Us",
          link: "/About/AboutUs",
        },
        // {
        //   name: "Our Parteners",
        //   link: "/About/ourpartners",
        // },
        // {
        //   name: "Investors",
        //   link: "/About/investor",
        // },
        {
          name: "Contact Us",
          link: "/About/ContactUs",
        },
        // {
        //   name: "Testimonial",
        //   link: "/About/Testimonials",
        // },
      ],
    },
    {
      title: "Careers",
      module: [
        {
          name: "Career with Us",
          link: "/careers/careerwithus",
        },
      ],
    },
  ];

  return (
    <>
      <html lang="en">
        <head>
          <title>Ideaved Technologies — Intelligent Systems for Complex Environments</title>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="shortcut icon" href="/favicon.svg" />

          {/* Primary meta */}
          <meta name="description" content="Ideaved Technologies engineers AI products and software for defence, government, healthcare, and industry — systems that perform under operational pressure, not just in demos." />
          <meta name="keywords" content="AI, defence technology, government AI, healthcare AI, manufacturing intelligence, India, MSME" />
          <meta name="author" content="Ideaved Technologies" />

          {/* Open Graph — controls how the link appears on WhatsApp, LinkedIn, Slack, etc. */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ideaved.com" />
          <meta property="og:site_name" content="Ideaved Technologies" />
          <meta property="og:title" content="Ideaved Technologies — Intelligent Systems for Complex Environments" />
          <meta property="og:description" content="AI products and mission-critical software for defence, government, healthcare, and industry. Engineered to perform under real-world operational pressure." />
          <meta property="og:image" content="https://www.ideaved.com/Images/hawk-banner.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Ideaved Technologies — AI for Defence, Government & Enterprise" />
          <meta property="og:locale" content="en_IN" />

          {/* Twitter / X card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ideaved Technologies — Intelligent Systems for Complex Environments" />
          <meta name="twitter:description" content="AI products and mission-critical software for defence, government, healthcare, and industry. Engineered to perform under real-world operational pressure." />
          <meta name="twitter:image" content="https://www.ideaved.com/Images/hawk-banner.jpg" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
               {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "Ideaved Technologies",
                  "url": "https://www.ideaved.com",
                  "logo": "https://www.ideaved.com/favicon.svg",
                  "description": "AI products and mission-critical software for defence, government, healthcare, and industrial enterprises."
               }
            `,
            }}
          />
        </head>
        <body className={`${inter.variable} ${spaceGrotesk.variable} bg-slate-950 font-sans antialiased`}>
          <main>
            <Navigation List1={List1} />
            {/* <div
              className={
                cookie
                  ? "hidden"
                  : " fixed bottom-[40px] right-[40px] w-[200px] h-[200px] rounded-lg z-50 bg-gray-600 text-white text-xs p-3 flex flex-col items-center justify-around"
              }
            >
              <p>
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking "Accept All", you consent to our use of cookies.{" "}
                <b className=" text-blue-500 border-b-[1px] border-blue-500">
                  Cookie Policy
                </b>
              </p>
              <div className=" flex flex-row gap-2">
                <button
                  onClick={() => {
                    setCookie(true);
                  }}
                  className="bg-transparent w-fit p-1 text-xs rounded-lg border-[1px] border-white"
                >
                  Reject All
                </button>
                <button
                  onClick={() => {
                    setCookie(true);
                  }}
                  className="bg-white text-black w-fit p-1 text-xs rounded-lg"
                >
                  Accept All
                </button>
              </div>
            </div> */}
            {children}
            <Footer List1={List1} />
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
