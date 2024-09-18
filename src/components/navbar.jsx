import React from "react";
import { FaHome, FaRunning, FaHandSpock, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { href: "/", icon: <FaHome size={24} />, label: "Home" },
  { href: "#explore", icon: <FaRunning size={24} />, label: "Explore" },
  { href: "#myplan", icon: <FaHandSpock size={24} />, label: "MyPlan" },
  { href: "#profile", icon: <FaUser size={24} />, label: "Profile" },
];

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 md:top-0 md:bottom-auto flex justify-center px-5 py-3 md:py-5 z-10	">
      <div className="flex justify-between items-center w-full max-w-md bg-accent backdrop-blur-lg border border-glassBorder rounded-2xl px-4 py-3 md:py-4 md:px-6 shadow-lg">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center px-6 md:px-7 ${
              index < navItems.length - 1 ? "border-r-4 border-glassBorder" : ""
            }`}>
            <NavLink
              to={item.href}
              className="flex flex-col items-center text-white hover:scale-95 transition"
              activeClassName="text-accent"
              exact>
              {item.icon}
              <span className="hidden md:inline text-sm mt-1">
                {item.label}
              </span>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
