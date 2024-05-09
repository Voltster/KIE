import React from "react";

const WalletCard = ({icon,heading,para}) => {
  return (
    <div className="card wallet cursor-pointer rounded-lg p-2 bg-blue-100 rounded-tr-lg overflow-hidden flex flex-col justify-center items-center relative shadow-md transition-all duration-300 ease-out">
      <div className="overlay">

      </div>
      <div className="circle w-32 h-32 rounded-full bg-white border-2 border-gray-200 flex flex-col md:flex-row justify-center items-center relative z-10 transition-all duration-300 ease-out overflow-hidden">
        <img src={icon} alt=""  className="z-90  absolute" width={80}/>
      </div>
      <h3 className="text-2xl font-semibold text-center relative z-20 mt-4">{heading}</h3>
      <p className="p-4">{para}</p>
      
    </div>
  );
};

export default WalletCard;
