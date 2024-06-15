import React from "react";
import aloft from "../assets/our clients/aloft.png";
import andaz from "../assets/our clients/ANDAZ.png";
import bacardi from "../assets/our clients/Bacardi.png";
import bmw from "../assets/our clients/BMW.png";
import delhi from "../assets/our clients/JW Delhi.webp";
import hyatt from "../assets/our clients/Grand Hyatt Gurgaon.jpg";
import raffles from "../assets/our clients/Raffles.png";
import yogh from "../assets/our clients/Yogh.png";
import pullman from "../assets/our clients/pngwing.com (1).png";
import novotel from "../assets/our clients/pngwing.com (2).png";
import hyattR from "../assets/our clients/pngwing.com (4).png";
import ibis from "../assets/our clients/pngwing.com (5).png";
import holiday from "../assets/our clients/pngwing.com (6).png";
import Maxxis from "../assets/our clients/Maxxis-Tires.png";
import goa from "../assets/our clients/W goa.jpg";

// const clients = [
//     { image: aloft },
//     // { image: clientImage2 },
// ]

const InfinityMoving = () => {
  return (
    <div className=" w-[100vw] overflow-hidden group mx-2 scroll-smooth ">
      <div className="flex space-x-6 animate-loop-scroll   bg-[#F6F9FE] w-[215vw] shadow-2xl shadow-gray-300/30 group-hover:paused hover:cursor-pointer scroll-smooth">
        <img
          src={aloft}
          className="w-[auto] h-[7vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="aloft"
        />
        <img
          src={andaz}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="andaz"
        />
        <img
          src={bacardi}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="bacardi"
        />
        <img
          src={bmw}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="bmw"
        />
        <img
          src={delhi}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="delhi"
        />
        <img
          src={hyatt}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="hyatt"
        />
        <img
          src={raffles}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="raffles"
        />
        <img
          src={yogh}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="yogh"
        />
        <img
          src={pullman}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="pullman"
        />
        <img
          src={novotel}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="novotel"
        />
        <img
          src={hyattR}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="hyattR"
        />
        <img
          src={ibis}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="ibis"
        />
        <img
          src={holiday}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="holiday"
        />
        <img
          src={Maxxis}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="Maxxis"
        />
        <img
          src={goa}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="goa"
        />
        {/* repeat */}
        <img
          src={aloft}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="aloft"
        />
        <img
          src={andaz}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="andaz"
        />
        <img
          src={bacardi}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="bacardi"
        />
        <img
          src={bmw}
          className="w-[auto] h-[10vh] md:h-[15vh] mix-blend-multiply py-2 my-8"
          alt="bmw"
        />
      </div>
    </div>
  );
};

export default InfinityMoving;
