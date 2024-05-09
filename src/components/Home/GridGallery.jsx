import React from "react";
import img from "../../assets/img.jpeg"

const items = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/8c/ef/be/8cefbec1367150d0d2d70a891fd58e60.jpg",
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-vector/coffee-stationery_23-2147598594.jpg?t=st=1713519080~exp=1713522680~hmac=ab6883e6841bdcc72fb0e59980980283a8527a36c684d513946021d6eaa0ff50&w=826",
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/0e/95/37/0e9537e18e5d75e25e3e482e6e5cb855.jpg",
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 4,
    image:
      "https://img.freepik.com/free-vector/corporate-brand-identity-mockup-set-with-digital-elements_8829-2806.jpg?t=st=1713519129~exp=1713522729~hmac=e35966943ec2f312088e52da76c09cf8d3563f55691c46ca961859e844c9590d&w=1380",
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 5,
    image:
      `${img}`,
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/564x/18/42/b1/1842b1416d727ef2b5813acb3ddaf0a9.jpg",
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 7,
    image:
      "https://i.pinimg.com/564x/ba/e7/a5/bae7a5e82141f0c0c38a0c3d712cdad9.jpg",
    title: "Card Title 1",
    text: "Description for card 1",
  },
  {
    id: 8,
    image:
      "https://i.pinimg.com/564x/b8/23/1b/b8231bcd17cd46b94aa064c6c81a0ae0.jpg",
    title: "Card Title 1",
    text: "Description for card 1",
  },
];

const GridGallery = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-auto gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.title}
            
            className="w-full h-full object-cover object-center bg-gray-200 transition duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out flex flex-col items-center justify-center text-center">
            <h3 className="font-bold text-2xl mb-2  text-white no-underline">{item.title}</h3>
            <p className="text-base text-white">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
