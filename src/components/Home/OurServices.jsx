import React from "react";
import BasicService from "../Home/BasicService";
import PrimaryButton from "../common/PrimaryButton ";

const OurServices = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-950 to-blue-800 py-[5vw]">
      <div className="md:flex justify-around items-center w-11/12 mx-auto ">
        <h2 className="md:w-7/12 mt-8 text-white text-4xl font-light md:text-[4vw] leading-[1] ">
          Easy and Fast Print Customization with Digital Print Services
        </h2>
        <div>
          <PrimaryButton to={"/service"}>Learn More</PrimaryButton>
        </div>
      </div>  
      <BasicService />
    </div>
  );
};

export default OurServices;
