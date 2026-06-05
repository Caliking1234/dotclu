"use client";
import React, { useState, useEffect } from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../public/Images/favicon.ico";
import { Montserrat, Poppins } from "next/font/google";

const monts = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
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
        {
          name: "HAWK-Flight Operations",
          link: "/Product/DotVision",
        },
        {
          name: "Dot-AI/VI",
          link: "/Product/Dotarvr",
        },
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
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <head>
          <title>Ideaved</title>
          <meta name="description" content="Advanced AI solutions for Defence, Government, and Enterprise. Personalized training and risk assessment systems powered by cutting-edge artificial intelligence." />
          <meta property="og:title" content="Ideaved - Defence AI Solutions" />
          <meta
            property="og:description"
            content="Advanced AI solutions for Defence, Government, and Enterprise. Personalized training and risk assessment systems."
          />
          <link rel="icon" href="/logo.png" type="image/png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
               {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "ideaved",
                  "url": "https://www.ideaved.com",
                  "logo": "/logo.png",
                  "description": "Advanced AI solutions for Defence, Government, and Enterprise. Specializing in personalized training, risk assessment, and intelligent operations."
               }
            `,
            }}
          />
        </head>
        <body className="">
          <main className={monts.className}>
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
