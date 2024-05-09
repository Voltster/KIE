// import React from "react";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// import aloft from "../assets/our clients/aloft.png";
// import andaz from "../assets/our clients/ANDAZ.png";
// import bacardi from "../assets/our clients/Bacardi.png";
// import bmw from "../assets/our clients/BMW.png";
// import delhi from "../assets/our clients/JW Delhi.webp";
// import hyatt from "../assets/our clients/Grand Hyatt Gurgaon.jpg";
// import raffles from "../assets/our clients/Raffles.png";
// import TestimonialsCard from "./TestimonialsCard";

// const Testimonials = () => {
//   return (
//     <div className="w-11/12 mx-auto py-20">
//       <h3 className="text-center no-underline">Testimonials</h3>
//       <h2 className="text-center my-8">
//         Get to Know Our Digital Print Services Closer <br />
//         Through <span className="">Customer Reviews</span>
//       </h2>
//       <div>
//         <Swiper
//           slidesPerView={4}
//           spaceBetween={30}
//           centeredSlides={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
//           className="mySwiper"
//         >
//           <SwiperSlide> <TestimonialsCard quote={"hey"} author={hey} image={aloft} /> </SwiperSlide>
//           <SwiperSlide>Slide 2</SwiperSlide>
//           <SwiperSlide>Slide 3</SwiperSlide>
//           <SwiperSlide>Slide 4</SwiperSlide>
//           <SwiperSlide>Slide 5</SwiperSlide>
//           <SwiperSlide>Slide 6</SwiperSlide>
//           <SwiperSlide>Slide 7</SwiperSlide>
//           <SwiperSlide>Slide 8</SwiperSlide>
//           <SwiperSlide>Slide 9</SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;




import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import aloft from "../../assets/our clients/aloft.png";
import andaz from "../../assets/our clients/ANDAZ.png";
import bacardi from "../../assets/our clients/Bacardi.png";
import bmw from "../../assets/our clients/BMW.png";
import delhi from "../../assets/our clients/JW Delhi.webp";
import hyatt from "../../assets/our clients/Grand Hyatt Gurgaon.jpg";
import raffles from "../../assets/our clients/Raffles.png";
import TestimonialsCard from "./TestimonialsCard";

const testimonialsData = [
  { quote: `"Koncept India Enterprises has exceeded our expectations time and time  again. Their attention to detail, coupled with their commitment to  delivering on time, has made them an invaluable partner for our business"`,  image: aloft },
  { quote: `"Working with Koncept India Enterprises has been a game-changer for our  company. The quality of their printing is unmatched, and their team's  responsiveness and professionalism are truly impressive."`,  image: andaz },
  { quote: `"We've had a fantastic experience with Koncept India. Their team is incredibly professional and responsive, and the quality of their work is outstanding."`, image: hyatt },
  { quote: `"Koncept India has been a game-changer for our business. They consistently deliver high-quality work on time and within budget. We couldn't be happier with their services."`, image: raffles },
  { quote: `"I highly recommend Koncept India Enterprises! Their commitment to excellence is truly remarkable. They go above and beyond to ensure customer satisfaction."`, image: delhi },
  { quote: `"Working with Koncept India has been a breath of fresh air. They're reliable, detail-oriented, and always deliver exceptional results."`, image: bacardi },
];

const Testimonials = () => {
  return (
    <div className="w-full mx-auto py-24 mt-8 bg-white">
      <h3 className="text-center no-underline">Testimonials</h3>
      <h2 className="w-4/6 mx-auto md:w-full text-center my-8">
        Get to Know Our Digital Print Services Closer <br />
        Through <span className="text-green-500">Customer Reviews</span>
      </h2>
      <div >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-white w-full"
        >
          {testimonialsData.map((testimonial,i) => (
            <SwiperSlide key={i}>
              <TestimonialsCard quote={testimonial.quote}  image={testimonial.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
