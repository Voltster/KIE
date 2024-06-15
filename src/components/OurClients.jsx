import React from "react";
import InfinityMoving from "./InfinityMoving";

const OurClients = ({ text, customCLass }) => {
  return (
    <div className={`${customCLass}`}>
      <h3 className="text-center">{text}</h3>
      <InfinityMoving />
    </div>
  );
};

export default OurClients;
