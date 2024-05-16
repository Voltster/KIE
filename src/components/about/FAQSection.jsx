import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import SpecialOffer from "../services/SpecialOffer";

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question:
        "1. What printing services does Koncept India Enterprises offer?",
      answer:
        " At Koncept India Enterprises, we provide a comprehensive range of printing services to meet all your needs. Our offerings include offset printing, digital printing, screen printing, leaf printing, and UV printing. With our state-of-the-art technology and skilled professionals, we ensure exceptional quality and precision in every print job.",
    },
    {
      id: 2,
      question: "2. Do you offer professional design services?",
      answer:
        "Yes, absolutely! Koncept India Enterprises has an in-house graphics designing unit equipped with the latest software and talented designers. From concept creation to final artwork, our team can assist you with stunning designs for brochures, catalogs, packaging, and more. We collaborate closely with you to understand your vision and bring it to life with creative and impactful designs.",
    },

    {
      id: 3,
      question:
        "3. What types of products can I create using digital printing?",
      answer:
        "Digital printing technology opens up a world of possibilities for creating a wide range of products. At Koncept India Enterprises, we use digital printing to produce high-quality marketing materials, brochures, catalogs, flyers, personalized stationery, labels, packaging, and more. With digital printing, you can enjoy vibrant colors, crisp details, and the flexibility to print variable data and personalized content.",
    },
    {
      id: 4,
      question: "4. Can I print photographs using digital printing?",
      answer:
        "Absolutely! Digital printing is an excellent choice for printing high-resolution photographs with stunning clarity and vivid color reproduction. Whether you're a professional photographer or an enthusiast, our digital printing services can bring your photographs to life on a variety of substrates, including photo paper, canvas, and more. The results are truly remarkable, capturing every detail and nuance of your imagery.",
    },
    {
      id: 5,
      question:
        "5. What unique products can I create using digital printing techniques?",
      answer:
        "Digital printing allows for endless creativity and personalization. At Koncept India Enterprises, we can help you create unique and eye-catching products using our digital printing capabilities. From custom-printed apparel and merchandise to personalized gifts and promotional items, the possibilities are limitless. Explore options like printed phone cases, mugs, canvas prints, and more to make your brand or message stand out.",
    },
    {
      id: 6,
      question: "6.   What are the typical turnaround times for print jobs?",
      answer:
        "At Koncept India Enterprises, we understand the importance of meeting deadlines. Our turnaround times vary depending on the complexity and scope of the project. For standard orders, we generally have a turnaround time of 3-5 business days. However, we also offer rush services for urgent print requirements. Our team works efficiently to ensure timely delivery without compromising on quality.",
    },
  ];

  return (
    <div className="pt-[6vw] mt-[3vh]">
      <h2 className="text-center mt-20 md:mt-0">FAQ</h2>
      <div className="md:w-11/12 mx-auto md:grid  md:grid-cols-2 ">
        {faqs.map((faq, index) => (
          <Fade key={faq.id} triggerOnce>
            <div
              className={`md:p-8 rounded-lg my-8 cursor-pointer ${
                activeFAQ === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
              data-aos="zoom-in"
            >
              <div className="flex justify-between  px-8">
                <h4 className=" font-semibold md:font-normal md:text-3xl text-lg ">
                  {faq.question}
                </h4>
                <span className="text-gray-700 font-bold text-3xl">
                  {activeFAQ === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div
                className={`faq-answer mx-8 w-[90%] max-h-0 overflow-hidden hidden ${
                  activeFAQ === index ? "show" : ""
                }`}
              >
                <p className="text-[2vh] md:text-[1vw] mt-2">{faq.answer}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <div className="hidden md:block">
        <SpecialOffer />
      </div>
    </div>
  );
};

export default FAQSection;
