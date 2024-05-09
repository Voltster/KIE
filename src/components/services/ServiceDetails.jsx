import React from "react";
import { useParams } from "react-router-dom";
import services from "../../utils/data";
import SectionHeader from "../common/SectionHeader";
import { GoClockFill } from "react-icons/go";
import SpecialOffer from "../services/SpecialOffer";
import Card from "../services/Card";
import print from "../../assets/PrintingServices.svg";
import CPS from "../../assets/CPS.svg";
import DP from "../../assets/DP.svg";
import FTP from "../../assets/FTP.svg";

const servicesProvided = [
  {
    icon: `${print}`,
    heading: "Printing Services",
    para: "We offer a wide range of printing solutions, ensuring high-quality prints for all your needs, from flyers to posters.",
  },
  {
    icon: `${CPS}`,
    heading: "Custom Printing Solutions",
    para: "Tailored printing solutions designed to meet your specific requirements, ensuring your projects stand out with precision and clarity.",
  },
  {
    icon: `${DP}`,
    heading: "Document Services",
    para: "Streamline your document workflow with our comprehensive services, including photocopying, binding, and lamination, for professional results every time.",
  },
  {
    icon: `${FTP}`,
    heading: "Fast Turnaround Printing",
    para: "Need your prints in a hurry? Our fast turnaround printing service ensures quick delivery without compromising quality, so you can meet tight deadlines with ease.",
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
            <Card icon={e.icon} heading={e.heading} para={e.para} key={i} />
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
