import React from "react";
import logo from "../../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 h-screen w-screen overflow-hidden">
      <div className="loader ease-linear  w-1/2 mx-auto flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="h-20 w-20" />
        <h1 className="bg-gradient-to-l from-blue-500 to-blue-800 bg-clip-text text-transparent text-[2vw]">
          Koncept India Enterprises
        </h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;
