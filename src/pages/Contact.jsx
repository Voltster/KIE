import React from "react";
import SectionHeader from "../components/common/SectionHeader";

import ContactForm from "../components/common/ContactForm";
import Map from "../components/Home/Map";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import conatctImg from "../assets/contact.svg";
// import globe from "../assets/globe.svg";

const Contact = () => {
  return (
    <div className="relative z-50 bg-inherit ">
      <SectionHeader
        heading={"Get in Touch with KIE"}
        text={
          "At Koncept India Enterprises, we value open communication and strive to provide exceptional customer service. "
        }
      />
      <div className="w-11/12 mx-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2" data-aos="fade-right">
          <h2>Need More Help?</h2>
          <p>
            Connect with us on social media for updates, promotions, and
            inspiring design examples:
          </p>
          <ul className=" border-gray-600 text-black py-4 text-[2vh] md:text-[1vw] inline-block">
            <li>
              <Link
                to="tel:+ 12345 67890"
                className="hover:underline flex items-center gap-2"
              >
                <FaPhoneFlip />
                +91 12345 67890
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/konceptindia.enterprises/"
                className="hover:underline flex items-center gap-2"
              >
                <IoLogoInstagram />
                @konceptindia.enterprises
              </Link>
            </li>
            <li>
              <Link
                to="mailto:konceptindia.enterprises@gmail.com"
                className="hover:underline flex items-center gap-2"
              >
                <IoIosMail />
                konceptindia.enterprises@gmail.com
              </Link>
            </li>
          </ul>
          <div className="w-full ">
            <img
              src={conatctImg}
              loading="lazy"
              className="h-[40vh] md:h-[40vh] mx-auto  "
            />
          </div>
        </div>
        <div className="md:w-1/2" data-aos="fade-right">
          <ContactForm />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
