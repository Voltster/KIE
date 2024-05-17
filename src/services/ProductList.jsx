import React from "react";
import {
  FaPrint,
  FaGift,
  FaRegGem,
  FaPenFancy,
  FaTshirt,
  FaBriefcase,
} from "react-icons/fa";

const products = [
  { name: "Any type of Paper Printing...", icon: <FaPrint /> },
  { name: "Leaflets/Fliers", icon: <FaPrint /> },
  { name: "Corporate Stationary", icon: <FaPrint /> },
  { name: "Newsletters/ Magazines", icon: <FaPrint /> },
  { name: "Calendars", icon: <FaPrint /> },
  { name: "Labels/ Tags", icon: <FaPrint /> },
  { name: "Catalogues/ Books/ Brochures", icon: <FaPrint /> },
  { name: "Coffee Table Books", icon: <FaPrint /> },
  { name: "Carry Bags", icon: <FaPrint /> },
  { name: "Wedding Invitations / Greeting Cards", icon: <FaPrint /> },
  { name: "Danglers/P.O.P Material", icon: <FaPrint /> },
  { name: "Invoice Jackets", icon: <FaPrint /> },
  { name: "Notepads, Diaries", icon: <FaPrint /> },
  { name: "Personalized Stationary", icon: <FaPrint /> },
  { name: "Packaging Boxes", icon: <FaPrint /> },
  { name: "Any Type Corporate Gifting...", icon: <FaGift /> },
  { name: "Pens, Pencils", icon: <FaPenFancy /> },
  { name: "Showpieces", icon: <FaRegGem /> },
  { name: "Gift Sets", icon: <FaGift /> },
  { name: "Phone Covers", icon: <FaGift /> },
  { name: "Power Banks", icon: <FaGift /> },
  { name: "Sticky Notes", icon: <FaPenFancy /> },
  { name: "T-shirts, Caps", icon: <FaTshirt /> },
  { name: "Mugs", icon: <FaGift /> },
  { name: "Any Type Leather Product...", icon: <FaBriefcase /> },
  { name: "Laptop Bags", icon: <FaBriefcase /> },
  { name: "Gym Bags", icon: <FaBriefcase /> },
  { name: "Duffle Bags", icon: <FaBriefcase /> },
  { name: "Passport Holders", icon: <FaBriefcase /> },
  { name: "Tablet Sleeves", icon: <FaBriefcase /> },
  { name: "Laptop Covers/ Laptop Sleeves", icon: <FaBriefcase /> },
  { name: "Wallets/ Money Clips", icon: <FaBriefcase /> },
];

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className=" text-center mb-4 md:w-1/2 mx-auto">
        Explore Our Wide Range of Products
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        From printing essentials to unique corporate gifts, we have everything
        you need!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-200 flex items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-2xl text-blue-500 mr-4">{product.icon}</span>
            <p className="text-lg font-medium text-gray-800">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
