// Action.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Actionpageworkoutoptions from "../../components/actionpageworkoutoptions";
import { useSelector } from "react-redux";
import Yoga from "./yoga/yoga";
import WeightTraining from "./weighttraining/weighttraining";
import BodyWeightTraining from "./bodyweighttraining/bodyweighttraining";
import Running from "./running/running";


const Action = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const actionPageDisplays = useSelector(
    (state) => state.actionDisplay.actionPageDisplays
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, actionPageDisplays]);

  return (
    <div className="bg-background">
      <section>{showNavbar && <Navbar />}</section>

      <div className="action-content">
        {actionPageDisplays === "explore" && <Actionpageworkoutoptions />}
        {actionPageDisplays === "yoga" && <Yoga />}
        {actionPageDisplays === "weighttraining" && <WeightTraining />}
        {actionPageDisplays === "bodyweighttraining" && <BodyWeightTraining />}
        {actionPageDisplays === "running" && <Running />}
      </div>
    </div>
  );
};

export default Action;
