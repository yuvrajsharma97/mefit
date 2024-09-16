import React from "react";
import { FaHome, FaCompass, FaChartLine, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed left-4 right-4 bottom-4 md:top-4 md:bottom-auto md:left-4 md:right-4 z-50">
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-lg rounded-full flex justify-around py-4 px-6 md:px-8 mx-auto max-w-3xl">
        <a
          href="#home"
          className="text-xl text-primaryAccent flex flex-col items-center hover:text-primaryAccentLight transition-all duration-300">
          <FaHome className="text-2xl mb-1" />
          <span className="text-sm">Home</span>
        </a>

        <a
          href="#explore"
          className="text-xl text-primaryAccent flex flex-col items-center hover:text-primaryAccentLight transition-all duration-300">
          <FaCompass className="text-2xl mb-1" />
          <span className="text-sm">Explore</span>
        </a>

        <a
          href="#activity"
          className="text-xl text-primaryAccent flex flex-col items-center hover:text-primaryAccentLight transition-all duration-300">
          <FaChartLine className="text-2xl mb-1" />
          <span className="text-sm">Activity</span>
        </a>

        <a
          href="#profile"
          className="text-xl text-primaryAccent flex flex-col items-center hover:text-primaryAccentLight transition-all duration-300">
          <FaUser className="text-2xl mb-1" />
          <span className="text-sm">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
