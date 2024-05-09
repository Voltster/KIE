import React from "react";

const WalletCard = ({icon,heading,para}) => {
  return (
    <div class="card wallet cursor-pointer rounded-lg p-2">
      <div class="overlay">

      </div>
      <div class="circle">
        <img src={icon} alt=""  className="z-40"/>
      </div>
      <h3 className="text-2xl font-semibold text-center">{heading}</h3>
      <p className="p-4">{para}</p>
      
    </div>
  );
};

export default WalletCard;
