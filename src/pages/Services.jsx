import React from 'react';
import services from '../utils/data';
import ServiceCard from '../components/services/ServiceCard';
import SectionHeader from '../components/common/SectionHeader';

const Services = () => {
  return (
    <section className="bg-inherit z-20 relative">
      <SectionHeader heading={"Service"} text={"Our services are segmented into intuitive categories, ensuring you find exactly what you need for your printing requirements."}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h2 className="text-5xl  text-gray-900 mb-8 text-center">Printing Solutions for <br/>All Your Needs</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div> */}
        <div className="gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;