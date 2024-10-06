import React from "react";
import { GoHome, GoSearch, GoPerson, GoPencil } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActionDisplay } from "../features/actionPage/actionDisplaySlice";

const navItems = [
  { href: "/", icon: <GoHome size={24} />, label: "Home" },
  { href: "/action", icon: <GoSearch size={24} />, label: "Explore" },
  { href: "/myplan", icon: <GoPencil  size={24} />, label: "MyPlan" },
  { href: "/profile", icon: <GoPerson  size={24} />, label: "Profile" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavbarClick = (path) => {
    navigate(path);

    if (path === "/action") {
      dispatch(setActionDisplay("explore"));
    }
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 md:top-0 md:bottom-auto flex justify-center px-5 py-3 md:py-5 z-10">
      <div className="flex justify-between items-center w-full max-w-md bg-accent backdrop-blur-lg border border-glassBorder rounded-2xl px-4 py-3 md:py-4 md:px-6 shadow-lg">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center px-6 md:px-7 ${
              index < navItems.length - 1 ? "border-r-4 border-glassBorder" : ""
            }`}>
            <button
              onClick={() => handleNavbarClick(item.href)}
              className="flex flex-col items-center text-white hover:scale-95 transition">
              {item.icon}
              <span className="hidden md:inline text-sm mt-1">
                {item.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
