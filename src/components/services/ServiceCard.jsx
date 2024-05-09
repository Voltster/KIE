import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div
      className={` overflow-hidden flex  justify-center items-center ${
        service.id === 2 ||
        service.id === 4 ||
        service.id === 6 ||
        service.id === 8 ||
        service.id === 10
          ? "flex-row-reverse"
          : "flex-row"
      }`}
    >
      <div className="w-6/12 md:h-48 lg:h-[40vh]">
        <img
          src={service.image}
          alt={service.name}
          className="w-full md:h-48 lg:h-[40vh]"
        />
      </div>
      <div className=" w-6/12 px-16">
        <h3 className="text-2xl font-semibold mb-2 no-underline mx-auto">
          {service.name}
        </h3>
        <p className="text-gray-700 mb-4">{service.description}</p>
        <Link
          to={`/service/${service.id}`}
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded mt-2"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
