import React from "react";
import Image from "next/image";

const Piclongcard = () => {
  const people = [
    {
      imageUrl:
        "https://img.freepik.com/free-vector/mobile-testing-concept-illustration_114360-1585.jpg?t=st=1734761174~exp=1734764774~hmac=3c4438a0a245b6b245ae6707c8be77da247db7a3d9c186597a02e70a00e8ff66&w=740",
    },
  ];

  return (
    <>
      <div className=" my-16 mt-16 lg:mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto lg:mx-0">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold"
              data-aos="fade-up"
            >
              Dive Into the Future With Custom Software Development
            </h2>
          </div> */}
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 xl:grid-cols-1 ">
            {people.map((person) => (
              <li key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[16/13] w-full lg:h-[80vh] rounded-2xl object-fit "
                  src={person.imageUrl}
                  alt=""
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
