import React from "react";
import LayoutGrid from "../ui/LayoutGrid";

export function LayoutGridDemo() {
  const cards = [
    {
      id: 1,
      content: <PrintingServices />,
      className: "md:col-span-2 md:row-span-3",
      thumbnail:
        "https://img.freepik.com/free-photo/modern-printing-press-produces-multi-colored-printouts-accurately-generated-by-ai_188544-15381.jpg?t=st=1714373198~exp=1714376798~hmac=4ab9ec70102735c83fc95ae1d9ac14903fed2ee5a7c440d26f0eef4f6ce7c77b&w=1380",
    },
    {
      id: 2,
      content: <LeafletsFlyers />,
      className: "col-span-1  md:row-span-2",
      thumbnail:
        "https://img.freepik.com/free-vector/gradient-core-values-flyers-pack_23-2149081664.jpg?t=st=1714373270~exp=1714376870~hmac=bc290f6febd99cea07c72882b49d3c290eac19708a39c93419f5b42b53fe6406&w=1380",
    },
    {
      id: 3,
      content: <CorporateStationery />,
      className: "col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/free-vector/red-professional-business-branding-stationery-set_1017-15303.jpg?t=st=1714373297~exp=1714376897~hmac=46752658b8536cd77611c7ffbc8710a2514b64b373f6355db9262a35da0cec98&w=1060",
    },
    {
      id: 4,
      content: <CoffeeTableBooks />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/free-photo/top-view-picture-frame-coffee-cup-eyeglasses-pen-notebook-textured-background_23-2147909934.jpg?t=st=1714373439~exp=1714377039~hmac=447bd04e6726fa4f11e62c7645d76ec3c9158d668b2e89a5a32bfa5d5dd9426d&w=1380",
    },
    {
      id: 5,
      content: <WeddingInvitations />,
      className: "col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/free-photo/wedding-invitation-flowers-arrangement_23-2150279546.jpg?t=st=1714373492~exp=1714377092~hmac=7f1327b6379d43462dd2eadafb62d7475feb993270d55e67590a5e921bf22474&w=740",
    },
    {
      id: 6,
      content: <PackagingBoxes />,
      className: "col-span-1  md:row-span-2",
      thumbnail:
        "https://img.freepik.com/premium-psd/view-cardboard-packaging-box-mock-up_23-2150097200.jpg?w=740",
    },
    {
      id: 7,
      content: <CorporateGifts />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/premium-psd/school-backpack-clothing-mockup_23-2151223399.jpg?w=826",
    },
    {
      id: 8,
      content: <PersonalizedStationery />,
      className: "col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/free-psd/business-stationery-mock-up_1389-69.jpg?t=st=1714373625~exp=1714377225~hmac=24796bb3c2303d3523ec92dd67bd9d2344e27d2a5cc813a6876e2d36adaba71a&w=1380",
    },
    {
      id: 9,
      content: <LaptopBags />,
      className: "col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/premium-photo/black-rolling-backpack-bag-isolated-white-background-with-copy-space-advertisement_847439-95464.jpg?w=1380",
    },
    {
      id: 10,
      content: <GymBags />,
      className: "md:col-span-1  md:row-span-3",
      thumbnail:
        "https://img.freepik.com/free-psd/bag-mockup-merchandising_15879-592.jpg?t=st=1714373701~exp=1714377301~hmac=88811305d1e86198110dc4497704ccff6ccedb35a63d2dff05f5175cf09473ca&w=1060",
    },
    {
      id: 11,
      content: <CurryBags />,
      className: "col-span-1  md:row-span-3",
      thumbnail: "https://cdn.shopify.com/s/files/1/0558/6413/1764/files/25_8d975002-1285-4f97-b471-78a248c202df.jpg?v=1624432096",
    },
   
    {
      id: 12,
      content: <NotepadsDiaries />,
      className: "md:col-span-1  md:row-span-4",
      thumbnail: "https://goodmockups.com/wp-content/uploads/2023/11/6-Free-Luxury-Personal-Diary-Journal-Mockup-PSD-Files-7.jpg",
    },
    {
      id: 13,
      content: <CorporateGifts />,
      className: "col-span-1 row-span-1  md:row-span-4",
      thumbnail: "https://img.freepik.com/free-photo/credit-card-shopping-bags_23-2147949877.jpg?t=st=1714379495~exp=1714383095~hmac=bb00f13cdef9162b17f8dd97c50fa6c4e0444c96162dfcb2f7ddf1b17efac163&w=1380",
    },
    {
      id: 14,
      content: <PassportHolders />,
      className: "col-span-1  md:row-span-3",
      thumbnail: "https://img.freepik.com/premium-psd/passport-holders-mockup_1332-3582.jpg?w=1380",
    },
    {
      id: 15,
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
      <p className="font-bold text-4xl text-white">Passport Holders</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Travel in style with durable and sleek passport holders designed to
        protect your travel documents.
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
