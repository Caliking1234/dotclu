import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSlider = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      containerRef.current,
      {
        translateY: 0,
      },
      {
        translateY: "-500vh",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          start: "top 80px",
          end: "+=500vh",
          scrub: 1,
        },
      }
    );

    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${index * 100}vh 80px`,
        end: `+=${(index + 1) * 100}vh`,
        onEnter: () => handleBarAnimation(index),
        onLeaveBack: () => handleBarAnimation(index),
      });
    });

    const handleBarAnimation = (activeIndex) => {
      bars.forEach((bar, index) => {
        gsap.to(bar, {
          width: index === activeIndex ? "50px" : "20px",
          ease: "power2.out",
          duration: 0.5,
        });
      });
    };

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={triggerRef} className="relative w-full h-screen">
        {/* Section indicators */}
        <div className="absolute top-1/4 left-0 w-full h-1/2 flex flex-col justify-around items-end gap-4 text-white z-[100] px-5">
          {[
            "Automotive Manufacture",
            "Automotive Logistics",
            "Automotor Aftermarket",
            "Vehicle Insurance",
            "Warehousing",
            "Pharma",
          ].map((section, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-2xl font-bold text-shadow">{section}</div>
              <div className="bar w-[12px] h-[1.5px] bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Vertical sliding images */}
        <div
          ref={containerRef}
          className="h-[600vh] w-screen relative flex flex-col"
        >
          {[
            "/images/carmanufacture.jpg",
            "/images/carlogistics.webp",
            "/images/caraftermarket.webp",
            "/images/carinsurance.webp",
            "/images/warehouse.webp",
            "/images/pharma.webp",
          ].map((img, index) => (
            <div
              key={index}
              className={`image-slide-${index} w-full h-screen relative flex flex-col justify-center items-center`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black to-black/10 z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
