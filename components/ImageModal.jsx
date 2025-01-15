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
            "https://img.freepik.com/free-photo/female-mechanic-observing-undercarriage-lifted-car_7502-4430.jpg?t=st=1736934133~exp=1736937733~hmac=3a7ee8f568f804b30592a6c8d5c274e6b7f2a349ed8f3c17de480bfd60fe117b&w=996",
            "https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?t=st=1736934216~exp=1736937816~hmac=e03443beabe884320ef0c536c5b423c84345ff2bbc23397843321c23ef0e400a&w=996",
            "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14039.jpg?t=st=1736934295~exp=1736937895~hmac=0901bbb09f68e4c8c67bed1e3a31e95671d8dceeb75c9d1d3e8ed31bc3d64c95&w=996",
            "https://img.freepik.com/free-photo/happy-customer-buying-new-car_342744-708.jpg?t=st=1736934345~exp=1736937945~hmac=c2818e3ab5b05cd4d39f9906d5f86e9df2fb7e3b802b5d8b903bdecdbc8fdc4b&w=996",
            "https://img.freepik.com/free-photo/warehouse-industrial-building-interior-with-people-forklifts-handling-goods-storage-area_342744-1498.jpg?t=st=1736934384~exp=1736937984~hmac=88afc3577c1dc5e5bcac3fb71b6565096a39ae75f19765ccdec40eb47eba49b0&w=996",
            "https://img.freepik.com/free-photo/pharmacist-day-celebration-with-male-pharmacist_23-2151734669.jpg?t=st=1736934565~exp=1736938165~hmac=a6cc047ffbff3632fc97d834aaa6f6ee662a40712f974d4ccce9b9619aa78e81&w=1060",
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
