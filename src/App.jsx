import React, { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Link, Outlet } from "react-router-dom";
import whatsappIcon from "./assets/whatsapp.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./components/common/LoadingSpinner";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";

function App() {
  AOS.init();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-[100vw] bg-[#F6F9FE] scroll-smooth  min-h-[100vh] overflow-x-hidden relative">
          <Navbar />
          <Outlet />
          <Footer />
          <Link
            to="https://api.whatsapp.com/send?phone=918860331991"
            target="_blank"
            className="bottom-8 right-4 sm:right-8  md:right-16 fixed z-50 cursor-pointer  transition-all duration-400 ease-in-out animate-bounce "
          >
            <img
              src={whatsappIcon}
              alt="contact on whatsapp"
              className="w-[8vh] md:w-[4vw]"
            />
          </Link>
          <SpeedInsights />
        </div>
      )}
    </>
  );
}

export default App;
