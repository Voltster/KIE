import React from "react";
import servicesData from "../../utils/data";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-1/2 lg:w-1/4 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-blue-50  group rounded-2xl"
            data-aos="zoom-in"
          >
            <div className=" rounded-lg overflow-hidden ">
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="aspect-square group-hover:scale-[110%] transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="p-4 ">
                <h3 className="text-xl">{service.name}</h3>
                <p>{service.description}</p>
                <Link
                  to={`/service/${service.id}`}
                  className="text-blue-500 hover:underline"
                >
                  See More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
