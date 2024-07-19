import React from "react";

const cardsData = [
  {
    id: 1,
    bgColor: "#F92316",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Exceptional Quality Work",
    description: "We deliver top-notch work that exceeds expectations.",
  },
  {
    id: 2,
    bgColor: "#F97D16",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    title: "Efficient Solutions",
    description: "We provide efficient solutions tailored to meet your needs.",
  },
  {
    id: 3,
    bgColor: "#F0C401",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    title: "Professional Guidance",
    description:
      "Our expert team provides professional guidance for your success.",
  },
  {
    id: 4,
    bgColor: "#20CD2A ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Innovative Solutions",
    description:
      "We provide innovative solutions to address your unique challenges.",
  },
  {
    id: 5,
    bgColor: "#2096CD",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Robust Solutions",
    description:
      "Our solutions are robust and reliable, ensuring long-term success for our clients.",
  },
  {
    id: 6,
    bgColor: "#7920CD ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Creative Solutions",
    description:
      "We offer creative solutions that push the boundaries of conventional thinking.",
  },
];

const cardComponents = cardsData.map((card) => {
  const styles = {
    backgroundColor: `${card.bgColor}`,
    boxShadow: `0 5px 15px ${card.bgColor} `,
  };

  return (
    <div
      key={card.id}
      className={`p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-100 cursor-pointer`}
      data-aos="zoom-in"
    >
      <span
        className={`p-5  rounded-full  text-white shadow-lg shadow-[${card.bgColor}] `}
        style={styles}
      >
        {card.icon}
      </span>
      <p className="text-xl font-medium text-slate-700 mt-3">{card.title}</p>
      <p className="mt-2 text-sm text-slate-500">{card.description}</p>
    </div>
  );
});

const WhyUs = () => {
  return (
    <div className="py-[2vw]">
      <h3 className="text-center">Why Us</h3>
      <h2 className="text-center w-11/12 md:w-6/12 mx-auto my-4">
        Fast, Reasonable and High-Quality Digital Prints, Why Not?
      </h2>

      <div className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
        <div className="grid grid-cols-1 lg:md:grid-cols-3 group md:bg-white shadow-xl shadow-neutral-100 md:border ">
          {cardComponents}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
