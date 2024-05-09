import React from "react";
import SectionHeader from "../components/common/SectionHeader";

import ContactForm from "../components/common/ContactForm";
import Map from "../components/Home/Map";
import { FaArrowRight, FaPhoneFlip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative z-50 bg-inherit ">
      <SectionHeader
        heading={"Get in Touch with Koncept India Enterprises"}
        text={
          "At Koncept India Enterprises, we value open communication and strive to provide exceptional customer service. Whether you have a specific project in mind or need guidance on the best printing solution for your needs, our team is here to assist you."
        }
      />
      <div className="w-11/12 mx-auto flex flex-row ">
        <div className="w-1/2">
          <h2>Need More Help?</h2>
          <p>
            Connect with us on social media for updates, promotions, and
            inspiring design examples:
          </p>
          <ul className=" border-gray-600 text-black py-4 text-[1vw]">
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
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
