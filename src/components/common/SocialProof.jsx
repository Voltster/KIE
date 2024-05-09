import React from "react";

const SocialProof = () => {
  return (
    <div className="w-full h-[20vh] bg-blue-900 shadow-lg shadow-blue-200 my-20 flex justify-around items-center md: flex-row">
      <span className="text-center">
        <h3 className="text-[3vh] md:text-[3vw] text-white">5+</h3>
        <p className="text-white">Years Experience</p>
      </span>
      <span className="text-center">
        <h3  className="text-[3vh] md:text-[3vw] text-white">342 +</h3>
        <p className="text-white">Completed Projects</p>
      </span>
      <span className="text-center">
        <h3  className="text-[3vh] md:text-[3vw] text-white">99 %</h3>
        <p className="text-white">Satisfied Clients</p>
      </span>
    </div>
  );
};

export default SocialProof;
