import React from "react";
import PrimaryButton from "../common/PrimaryButton ";

const SpecialOffer = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      data-aos="flip-up"
    >
      <div className="w-screen h-[50vh]   md:h-[40vh]  flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat my-[8vw] shadow-xl rounded-br-[5rem] rounded-bl-[5rem] rounded md:rounded-none bg-black/40">
        <h2 className="text-white text-center mb-4 p-4  w-full font-extrabold">
          Get{" "}
          <span className="bg-gradient-to-l from-blue-400 to-blue-500 bg-clip-text text-transparent  stroke-2 stroke-indigo-200">
            Special Offer
          </span>{" "}
          For Today <br /> With Koncept India{" "}
        </h2>
        <PrimaryButton to={"contact"}>Let's Connect</PrimaryButton>
      </div>
    </div>
  );
};

export default SpecialOffer;
