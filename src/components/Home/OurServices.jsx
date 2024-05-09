import React from "react";
import BasicService from "../Home/BasicService";

const OurServices = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-950 to-blue-800 py-[5vw]">
      <div className="flex justify-around items-center w-11/12 mx-auto ">
        <h2 className="md:w-7/12 mt-8 text-white">
          Easy and Fast Print Customization with Digital Print Services
        </h2>
        <div>
          <button className="btn-primary bg-blue-500 hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
      <BasicService />
    </div>
  );
};

export default OurServices;
