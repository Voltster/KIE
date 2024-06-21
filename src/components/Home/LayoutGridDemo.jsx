import React from "react";
import LayoutGrid from "../ui/LayoutGrid";
import table from "../../assets/mockup/print.jpg";
import Flyers from "../../assets/mockup/Leaflets & Flyers.jpg";
import coprate from "../../assets/mockup/coprate.jpg";
import Invitations from "../../assets/mockup/Invitations.jpg";
import box from "../../assets/mockup/box.jpg";
import Merchandise from "../../assets/mockup/Merchandise.jpg";
import GymBag from "../../assets/mockup/Gym Bag.jpg";
import PromotionalMerchandise from "../../assets/mockup/Promotional Merchandise.jpg";
import diary from "../../assets/mockup/diary.jpg";
import Bag from "../../assets/mockup/Bag.jpg";
import Cover from "../../assets/mockup/Cover.jpg";
import printing from "../../assets/mockup/printing.jpg";

export function LayoutGridDemo() {
  const cards = [
    {
      id: 1,
      content: <PrintingServices />,
      className: "md:col-span-2 md:row-span-3",
      thumbnail: printing,
    },
    {
      id: 2,
      content: <LeafletsFlyers />,
      className: "col-span-1  md:row-span-2",
      thumbnail: Flyers,
    },
    {
      id: 3,
      content: <CorporateStationery />,
      className: "col-span-1  md:row-span-3",
      thumbnail: coprate,
    },
    {
      id: 4,
      content: <CoffeeTableBooks />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail: table,
    },
    {
      id: 5,
      content: <WeddingInvitations />,
      className: "col-span-1  md:row-span-3",
      thumbnail: Invitations,
    },
    {
      id: 6,
      content: <PackagingBoxes />,
      className: "col-span-1  md:row-span-2",
      thumbnail: box,
    },
    {
      id: 7,
      content: <CorporateGifts />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail: Merchandise,
    },
    {
      id: 8,
      content: <PersonalizedStationery />,
      className: "col-span-1  md:row-span-3",
      thumbnail: PromotionalMerchandise,
    },
    {
      id: 9,
      content: <LaptopBags />,
      className: "col-span-1  md:row-span-3",
      thumbnail: Bag,
    },
    {
      id: 10,
      content: <GymBags />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail: GymBag,
    },
    {
      id: 11,
      content: <CurryBags />,
      className: "col-span-1  md:row-span-6",
      thumbnail:
        "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/25_8d975002-1285-4f97-b471-78a248c202df.jpg?v=1624432096",
    },

    {
      id: 12,
      content: <NotepadsDiaries />,
      className: "md:col-span-1  md:row-span-4",
      thumbnail: diary,
    },
    {
      id: 13,
      content: <PassportHolders />,
      className: "col-span-1  md:row-span-4",
      thumbnail: Cover,
    },
    {
      id: 14,
      content: <CataloguesBookletsBrochures />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail:
        "https://yi-files.yellowimages.com/products/1220000/1220162/2027876-full.jpg",
    },
  ];

  return (
    <div className="h-screen py-10 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

function PrintingServices() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Printing Services</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Koncept India Enterprises offers high-quality printing services
        including multi-color offset printing, digital printing, screen
        printing, leaf printing, and UV printing.
      </p>
    </div>
  );
}

function LeafletsFlyers() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Leaflets & Flyers</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Engage your audience with eye-catching leaflets and flyers designed and
        printed by Koncept India Enterprises.
      </p>
    </div>
  );
}

function CorporateStationery() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Corporate Stationery</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Impress clients and partners with professionally designed corporate
        stationery, including business cards, letterheads, and envelopes.
      </p>
    </div>
  );
}

function CoffeeTableBooks() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Coffee Table Books</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Create beautifully designed coffee table books to showcase your
        company's achievements, products, or services.
      </p>
    </div>
  );
}

function WeddingInvitations() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Wedding Invitations</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Add a personal touch to your special day with elegant and customized
        wedding invitations from Koncept India Enterprises.
      </p>
    </div>
  );
}

function PackagingBoxes() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Packaging Boxes</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Ensure your products arrive safely and in style with custom-designed
        packaging boxes tailored to your brand.
      </p>
    </div>
  );
}

function CorporateGifts() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Corporate Gifts</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Strengthen client relationships and employee morale with thoughtful
        corporate gifts featuring your company's logo or branding.
      </p>
    </div>
  );
}

function PersonalizedStationery() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Personalized Stationery</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Stand out from the crowd with personalized stationery items customized
        to your preferences and brand identity.
      </p>
    </div>
  );
}

function LaptopBags() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Laptop Bags</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Carry your tech essentials in style with durable and fashionable laptop
        bags designed by Koncept India Enterprises.
      </p>
    </div>
  );
}

function GymBags() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Gym Bags</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Hit the gym with confidence using spacious and trendy gym bags that
        showcase your unique style.
      </p>
    </div>
  );
}

function CurryBags() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Curry Bags</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Add a unique twist to your packaging with stylish and functional curry
        bags from Koncept India Enterprises.
      </p>
    </div>
  );
}

function NotepadsDiaries() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Notepads & Diaries</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Stay organized with stylish notepads and diaries, essential for everyday
        tasks and planning.
      </p>
    </div>
  );
}

function PassportHolders() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Card Holders</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Travel in style with durable and sleek card holders designed to protect
        your cards.
      </p>
    </div>
  );
}

function CataloguesBookletsBrochures() {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Catalogues, Booklets & Brochures
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Showcase your products and services effectively with professionally
        designed catalogues, booklets, and brochures.
      </p>
    </div>
  );
}
