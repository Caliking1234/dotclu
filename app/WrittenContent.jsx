import React from "react";

const WrittenContent = ({ title, content }) => {
  return (
    <div className="w-full px-8 py-16 sm:px-12 md:px-20 bg-slate-950">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-8" data-aos="fade-up">
        {title}
      </h1>
      <div className="w-full sm:w-[90%]" data-aos="fade-up">
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WrittenContent;
