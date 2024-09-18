// Action.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Actionpageworkoutoptions from "../../components/actionpageworkoutoptions";


const Action = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="bg-background">
      <section>{showNavbar && <Navbar />}</section>

      <div className="action-content">
        < Actionpageworkoutoptions />
      </div>
    </div>
  );
};

export default Action;
