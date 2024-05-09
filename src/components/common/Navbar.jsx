import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-[#EDF4FA] to-[#F1F8FD] shadow-md fixed top-0 z-[90] w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-11/12">
            <Link
              path={"/"}
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <img
                src={logo}
                alt="Koncept India Enterprises  mix-blend-multiply"
                width={35}
              />
              <h1 className="text-black font-bold text-lg ">
                Koncept India Enterprises
              </h1>
            </Link>
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      ` hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md  font-medium ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `  hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md  font-medium ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    c
                    className={({ isActive }) =>
                      ` hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md  font-medium ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      }`
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    c
                    className={({ isActive }) =>
                      ` hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md  font-medium ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      }`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    c
                    className={({ isActive }) =>
                      ` hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md  font-medium ${
                        isActive ? "text-blue-500" : "text-gray-700"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <NavLink
              to="/"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {" "}
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
