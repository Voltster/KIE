import React, { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import whatsappIcon from "./assets/whatsapp.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "./components/common/LoadingSpinner";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

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
          <Footer />
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
          <ToastContainer  autoClose={1000} hideProgressBar closeOnClick/>
        </div>
      )}
    </>
  );
}

export default App;

// {
//   "name": "koncept",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "@react-three/drei": "^9.105.6",
//     "@react-three/fiber": "^8.16.6",
//     "@tabler/icons-react": "^3.2.0",
//     "@vercel/speed-insights": "^1.0.10",
//     "aos": "^3.0.0-beta.6",
//     "axios": "^1.6.8",
//     "clsx": "^2.1.1",
//     "framer-motion": "^11.2.3",
//     "react": "^18.2.0",
//     "react-awesome-reveal": "^4.2.8",
//     "react-dom": "^18.2.0",
//     "react-icons": "^5.1.0",
//     "react-tilt": "^1.0.2",
//     "simplex-noise": "^4.0.1",
//     "swiper": "^11.1.1",
//     "tailwind-merge": "^2.3.0",
//     "three-globe": "^2.31.0"
//   },
//   "devDependencies": {
//     "@types/react": "^18.2.66",
//     "@types/react-dom": "^18.2.22",
//     "@vitejs/plugin-react": "^4.2.1",
//     "autoprefixer": "^10.4.19",
//     "eslint": "^8.57.0",
//     "eslint-plugin-react": "^7.34.1",
//     "eslint-plugin-react-hooks": "^4.6.0",
//     "eslint-plugin-react-refresh": "^0.4.6",
//     "postcss": "^8.4.38",
//     "react-router-dom": "^6.22.3",
//     "tailwindcss": "^3.4.3",
//     "vite": "^5.2.0"
//   }
// }

