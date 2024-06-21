import React from "react";

const SectionHeader = ({ heading, text }) => {
  return (
    <div className="bg-blue-700 min-h-[40vh] max-h-[80vh] px-4 md:px-0 md:h-[40vh] flex flex-col justify-center items-center  text-center mb-20 rounded-b-[5rem] md:rounded-b-[9rem]">
      <h2
        className="text-gray-100 "
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        {heading}
      </h2>
      <p
        className="text-gray-100 md:w-[50%] text-center m-1"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
