import React from "react";
import AboutUs from "../components/AboutUs";
import WhyUs from "../components/about/WhyUs";
import OurClients from "../components/OurClients";
import Testimonials from "../components/Home/Testimonials";
import SectionHeader from "../components/common/SectionHeader";
import SocialProof from "../components/common/SocialProof";

const Teams = [
  {
    heading: "Monika Mam",
    description: "",
    img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    heading: "Roshan Jha",
    description: "",
    img: "https://images.unsplash.com/photo-1591078771377-d06325f68465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    heading: "Anil Kumar",
    description: "",
    img: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHNoaXJ0fGVufDB8fDB8fHww",
  },

  {
    heading: "Gagan Sir",
    description: "",
    img: "https://images.unsplash.com/photo-1591078771377-d06325f68465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAzfHxzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const About = () => {
  return (
    <section className="w-screen min-h-[100vh] relative bg-gray-50 z-30 pb-20 outline-none">
      <SectionHeader
        heading={"About Us"}
        text={
          "Koncept India Enterprises stands as a beacon of high-quality printing,  powered by cutting-edge technology and a relentless pursuit of  excellence since its inception."
        }
      />
      <AboutUs />
      <SocialProof />
      <WhyUs />
      <div className=" flex flex-col-reverse md:flex-row justify-center items-center w-11/12 mx-auto gap-20">
        {/* left */}
        <div
          className="md:w-6/12 "
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <h3 className="no-underline font-extralight ">Who we are</h3>
          <h2>
            Welcome To <span className="text-green-500">Koncept India</span>,
            Helping You Find the best digital printing solutions.
          </h2>
          <p className="my-4">
            Koncept India Enterprises: Your Partner in Exceptional Digital
            Printing At Koncept India Enterprises, we are dedicated to
            empowering businesses and individuals with unparalleled digital
            printing solutions. As a leading provider in the industry, we
            combine cutting-edge technology, meticulous craftsmanship, and a
            deep understanding of our clients' needs to bring their visions to
            life.
          </p>
          <h5>Paramveer - Founder of Koncept India</h5>
        </div>
        {/* Right */}
        <div
          className="md:w-5/12"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <img
            className="rounded-t-full"
            src="https://plus.unsplash.com/premium_photo-1682430259342-427ec43ebc38?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <OurClients />
      <div className="w-10/12 mx-auto">
        <h2 className="text-center my-10 text-3xl font-semibold md:font-bold  md:text-[3vw] ">
          Creative Production Team
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4  ">
          {Teams.map((e, i) => (
            <div
              key={i}
              className="relative cursor-pointer    overflow-hidden group  transition-all duration-700 ease-in rounded-br-3xl rounded-tl-3xl rounded-md"
              data-aos="zoom-in"
              data-aos-delay={`${i * 80}`}
              data-aos-duration="500"
            >
              <img
                src={e.img}
                alt=""
                className=" object-cover group-hover:scale-[1.1] transition-all "
              />
              <span className="text-center absolute bottom-0 bg-black/80 md:bg-black/50 w-full py-4 md:py-10  rounded-t-3xl md:opacity-0 group-hover:opacity-100  transition-opacity">
                <h3 className="mx-auto text-gray-50 no-underline text-2xl font-light md:text-[1.5vw]  md:font-semibold">
                  {e.heading}
                </h3>
                <p>{e.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default About;
