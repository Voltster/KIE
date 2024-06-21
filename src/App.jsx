import React, { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import whatsappIcon from "./assets/whatsapp.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const Footer = lazy(() => import("./components/common/Footer"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-[100vw] bg-[#F6F9FE] scroll-smooth min-h-[100vh] overflow-x-hidden relative">
          <Navbar />
          <ScrollToTop />
          <Outlet />
          
          <Suspense fallback={<LoadingSpinner />}>
            <Footer />
          </Suspense>

          <Link
            to="https://api.whatsapp.com/send?phone=918860331991"
            target="_blank"
            className="bottom-8 right-4 sm:right-8 md:right-16 fixed z-50 cursor-pointer transition-all duration-400 ease-in-out animate-bounce"
          >
            <img
              src={whatsappIcon}
              alt="contact on whatsapp"
              className="w-[8vh] md:w-[4vw]"
            />
          </Link>
          <ToastContainer autoClose={1000} hideProgressBar closeOnClick />
        </div>
      )}
    </>
  );
}

export default App;
