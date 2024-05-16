import React from "react";
import heroImg from "../assets/heroImg.jpeg";
// import heroImg from "../assets/bgpng.png";
import OurClients from "../components/OurClients";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/about/WhyUs";
import OurServices from "../components/Home/OurServices";
import OurTeam from "../components/team/OurTeam";
import SpecialOffer from "../components/services/SpecialOffer";
// import Gallery from "../components/Home/Gallery";
import Testimonials from "../components/Home/Testimonials";
import Map from "../components/Home/Map";
import SocialProof from "../components/common/SocialProof";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import PrimaryButton from "../components/common/PrimaryButton ";

const Home = () => {
  return (
    <>
      <div className=" w-[100vw] h-[90vh] md:h-[100vh] relative bgHome flex flex-col md:flex-row  justify-center items-center space-x-4 z-30">
        {/* Left div */}
        <div
          className="w-11/12 md:w-4/12"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="bg-gradient-to-l from-blue-500 to-blue-800 bg-clip-text text-transparent">
            Precision, Innovation, and Excellence in Every Print
          </h1>
          <p className="my-8">
            Explore our comprehensive printing services, including offset,
            digital, screen, leaf, and UV printing, each designed to bring your
            vision to life.
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
        {/* Right div */}
        <div className="w-5/12 hidden md:block">
          <img
            src={heroImg}
            alt="Every Print"
            className="absolute rounded-md right-[10%] top-[25%]  w-[30vw] h-[85vh]"
            data-aos="fade-up"
            data-aos-offset="100"
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
        <OurClients />
        <AboutUs />
        <SocialProof />
        <WhyUs />
        <OurServices />
        <OurTeam />
        <SpecialOffer />
        {/* <Gallery/> */}
        <Testimonials />
        {/* <Map/> */}
      </div>
    </>
  );
};

export default Home;
