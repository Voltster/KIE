import React from 'react';
import services from '../utils/data';
import ServiceCard from '../components/services/ServiceCard';
import SectionHeader from '../components/common/SectionHeader';
import ProductList from '../services/ProductList';

const Services = () => {
  return (
    <section className="bg-inherit z-20 relative">
      <SectionHeader heading={"Service"} text={"Our services are segmented into intuitive categories, ensuring you find exactly what you need for your printing requirements."}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-5xl  mb-14 text-center">Printing Solutions for <br/>All Your Needs</h2>
        <div className="gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      <ProductList/>
    </section>
  );
};

export default Services;