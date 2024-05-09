import React from "react";
import { useParams } from "react-router-dom";
import services from "../../utils/data";
import SectionHeader from "../common/SectionHeader";
import { GoClockFill } from "react-icons/go";
import SpecialOffer from "../services/SpecialOffer";
import Card from "../services/Card";

const servicesProvided = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 15V5C22 3.897 21.103 3 20 3H4C2.897 3 2 3.897 2 5V15C2 16.103 2.897 17 4 17H20C21.103 17 22 16.103 22 15Z" />
        <path d="M16 21H8C6.897 21 6 20.103 6 19V9C6 7.897 6.897 7 8 7H16C17.103 7 18 7.897 18 9V19C18 20.103 17.103 21 16 21Z" />
        <path d="M9 11V9H15V11" />
      </svg>
    ),
    heading: "Printing Services",
    para: "We offer a wide range of printing solutions, ensuring high-quality prints for all your needs, from flyers to posters."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 21V14" />
        <path d="M12 10V3" />
        <path d="M5 18H2V4H5C6.656 4 8 5.343 8 7V15C8 16.657 6.657 18 5 18Z" />
        <path d="M19 18H16C14.344 18 13 16.657 13 15V7C13 5.343 14.344 4 16 4H19V18Z" />
      </svg>
    ),
    heading: "Custom Printing Solutions",
    para:"Tailored printing solutions designed to meet your specific requirements, ensuring your projects stand out with precision and clarity."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M2 10V14C2 15.657 3.343 17 5 17H19C20.657 17 22 15.657 22 14V10" />
        <path d="M18 4H6C4.343 4 3 5.343 3 7V17H21V7C21 5.343 19.657 4 18 4Z" />
      </svg>
    ),
    heading: "Document Services",
    para:"Streamline your document workflow with our comprehensive services, including photocopying, binding, and lamination, for professional results every time."
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4Z" />
        <path d="M7 14L10 17L17 10" />
      </svg>
    ),
    heading: "Fast Turnaround Printing",
    para:"Need your prints in a hurry? Our fast turnaround printing service ensures quick delivery without compromising quality, so you can meet tight deadlines with ease."
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className=" w-full relative z-10 bg-inherit">
      <SectionHeader
        heading={"Services Detail"}
        text={
          "At Koncept India Enterprises, we offer a comprehensive range of printing solutions designed to meet your diverse needs and exceed your expectations."
        }
      />
      <div className="md:w-[75vw]  mx-auto px-4 sm:px-6 lg:px-8  pt-24  mt-20 ">
        <div className="md:w-[75vw] mx-auto md:pr-8 object-cover">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-[60vh] mb-8 rounded-md"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between  items-center pt-6 mb-20">
          <div className="w-1/2">
            <h2 className=" text-gray-800 mb-8">{service.name}</h2>
            <p className="text-gray-700 mb-8">{service.details}</p>
          </div>
          <div className="flex flex-col md:flex-col w-1/3 gap-2">
            <h3 className="no-underline text-gray-700">Available Hours*</h3>
            <p className="flex justify-between py-4 ">
              Monday - Friday{" "}
              <span className="flex gap-2 items-center ">
                <GoClockFill />
                10.00 am - 08.00 pm
              </span>
            </p>
            <p className="flex justify-between py-4 border-t border-gray-950">
              Saturday - Sunday{" "}
              <span className="flex gap-2 items-center">
                <GoClockFill />
                10.00 am - 02.00 pm
              </span>
            </p>
          </div>
        </div>

        <h3 className="text-center no-underline my-10">Services Provided</h3>
        <div className="flex gap-8  justify-center">
          {servicesProvided.map((e, i) => (
            <Card icon={e.icon} heading={e.heading}  para={e.para}/>
            // <div key={i} className="border border-gray-200 py-8 rounded-md shadow-sm">
            //     <img src={e.img} alt="" className="w-1/2 mx-auto rounded-sm" />
            //     <h4 className="text-center mt-4">{e.heading}</h4>
            // </div>
          ))}
        </div>
      </div>
      <SpecialOffer />
      <h2 className=" mx-auto text-center mt-20 py-24 w-11/12">
        One Stop Shop for All Your Printing Needs, Let Us Help You Today!
      </h2>
    </div>
  );
};

export default ServiceDetails;
