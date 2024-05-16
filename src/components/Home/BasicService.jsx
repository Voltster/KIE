// ServicesSection.jsx
import React from 'react';
import servicesData from '../../utils/data';

const ServicesSection = () => {
  return (
    <div className="p-10">
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {servicesData.map((service) => (
          <div key={service.id} className="w-full sm:w-1/2 lg:w-1/4 p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-blue-50  group cursor-pointer rounded-2xl" >
            <div className=" rounded-lg overflow-hidden ">
              <img src={service.image} alt={service.name} className="aspect-square group-hover:scale-[105%] transition-all duration-300 ease-in-out"/>
              <div className="p-4 ">
                <h3 className="text-xl">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
