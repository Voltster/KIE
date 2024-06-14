import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import aloft from "../../assets/our clients/aloft.png";
import andaz from "../../assets/our clients/ANDAZ.png";
import bacardi from "../../assets/our clients/Bacardi.png";
import delhi from "../../assets/our clients/JW Delhi.webp";
import hyatt from "../../assets/our clients/Grand Hyatt Gurgaon.jpg";
import raffles from "../../assets/our clients/Raffles.png";
import TestimonialsCard from "./TestimonialsCard";

const testimonialsData = [
  {
    quote: `"Koncept India Enterprises has exceeded our expectations time and time  again. Their attention to detail, coupled with their commitment to  delivering on time, has made them an invaluable partner for our business"`,
    image: aloft,
  },
  {
    quote: `"Working with Koncept India Enterprises has been a game-changer for our  company. The quality of their printing is unmatched, and their team's  responsiveness and professionalism are truly impressive."`,
    image: andaz,
  },
  {
    quote: `"We've had a fantastic experience with Koncept India. Their team is incredibly professional and responsive, and the quality of their work is outstanding."`,
    image: hyatt,
  },
  {
    quote: `"Koncept India has been a game-changer for our business. They consistently deliver high-quality work on time and within budget. We couldn't be happier with their services."`,
    image: raffles,
  },
  {
    quote: `"I highly recommend Koncept India Enterprises! Their commitment to excellence is truly remarkable. They go above and beyond to ensure customer satisfaction."`,
    image: delhi,
  },
  {
    quote: `"Working with Koncept India has been a breath of fresh air. They're reliable, detail-oriented, and always deliver exceptional results."`,
    image: bacardi,
  },
];

const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="w-full mx-auto py-24 mt-8 bg-white">
      <h3 className="text-center no-underline">Testimonials</h3>
      <h2 className="w-5/6 mx-auto md:w-full text-center my-8 ">
        Get to Know Our Digital Print Services Closer <br />
        Through <span className="text-green-500">Customer Reviews</span>
      </h2>
      <div className="h-full w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className="mySwiper bg-white w-full"
        >
          {testimonialsData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <TestimonialsCard
                quote={testimonial.quote}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
