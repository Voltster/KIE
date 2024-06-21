import React from "react";
import about from "../assets/about.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row md:justify-center md:items-center space-x-[8vw]  outline-none border-none mt-10 py-16">
      <div className="md:w-4/12">
        <img
          src={about}
          alt="about us"
          className=" rounded-tl-[15vh] md:rounded-tl-[10vw]"
        />
      </div>
      <div
        className="md:w-5/12  mt-8 md:mt-0"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <h3>About Us</h3>
        <h2 className="my-[1.5vw]">Experience the Power of Digital Printing</h2>
        <p className="mt-2">
          Koncept India Enterprises is a leading provider of high-quality
          printing solutions in Delhi, India. Established with a commitment to
          excellence, we've earned a reputation for exceptional service and
          flawless execution. Our state-of-the-art facilities house advanced
          printing technology, meticulously maintained by our team of experts.
        </p>
        <p className="mt-2">
          We take pride in our in-house graphics designing unit, ensuring a
          seamless workflow from concept to creation. Whether you require
          multi-color offset printing, intricate screen printing, or vibrant
          digital printing, we have the expertise and equipment to deliver
          stunning results.
        </p>
        <button className="btn mt-4 bg-blue-500 border-blue-500 group hover:bg-blue-600 hover:border-blue-500 ">
          <Link
            to="https://drive.google.com/file/d/1E1qrf0e1eL7GqFyj_PCQOZaZtkQYRCQz/view"
            target="blank"
            className="flex items-center gap-3  md:text-[1vw] hover:text-blue-500 group-hover:text-blue-500"
          >
            Learn More
            <FaArrowRight />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
