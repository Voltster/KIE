import React from "react";
import heroImg from "../assets/heroImg.png";
import OurClients from "../components/OurClients";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/about/WhyUs";
import OurServices from "../components/Home/OurServices";
import OurTeam from "../components/team/OurTeam";
import SpecialOffer from "../components/services/SpecialOffer";
import Testimonials from "../components/Home/Testimonials";
import SocialProof from "../components/common/SocialProof";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className=" w-[100vw] h-[90vh] md:h-[80vh] relative bgHome flex flex-col-reverse md:flex-row  justify-center items-center space-x-4 z-30">
        <div
          className="w-11/12 md:w-4/12"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="bg-gradient-to-l from-blue-500 to-blue-800 bg-clip-text text-transparent">
            High Quality Printing with Guaranteed Satisfaction
          </h1>
          <p className="my-8">
            Get all your design and printing needs covered in one convenient
            location with our services. We assure high-quality prints that will
            bring you joy.
          </p>
          <button className="btn mt-4 bg-blue-500 border-blue-500 group hover:bg-blue-600 hover:border-blue-500 ">
            <Link
              to="/service"
              className="flex items-center gap-3  md:text-[1vw] hover:text-blue-500 group-hover:text-blue-500"
            >
              Explore Our Services
              <FaArrowRight />
            </Link>
          </button>
        </div>
        <div className="md:w-6/12 ">
          <img
          className="mix-blend-screen"
            src={heroImg}
            alt="Every Print" 
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          />
        </div>
      </div>
      <div className="relative z-20 bg-inherit">
        <OurClients customCLass={"-mt-14"} />
        <AboutUs />
        <SocialProof />
        <WhyUs />
        <OurServices />
        <OurTeam />
        <SpecialOffer />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
