import React from "react";
import Image from "next/image";

const Piclongcard = () => {
  const people = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1677442d019cecf8ea1da8fc147d2c1b19839073?w=1000&h=800&fit=crop",
    },
  ];

  return (
    <>
      <div className=" my-16 mt-16 lg:mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 xl:grid-cols-1 ">
            {people.map((person) => (
              <li key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[16/13] w-full lg:h-[80vh] rounded-2xl object-fit "
                  src={person.imageUrl}
                  alt="Defence AI Solutions"
                  // data-aos="fade-up" data-aos-duration="1500"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Piclongcard;
