import React from "react";

const SectionHeader = ({ heading, text }) => {
  return (
    <div className="bg-blue-700 h-[40vh] px-4 md:px-0 md:h-[60vh] flex flex-col justify-center items-center box border-none outline-none">
      <h2 className="text-gray-100 ">{heading}</h2>
      <p className="text-gray-100 md:w-[50%] text-center">{text}</p>
    </div>
  );
};

export default SectionHeader;
