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
  const actionPageDisplays = useSelector(
    (state) => state.actionDisplay.actionPageDisplays
  );

  return (
    <div className="bg-background">
      <section><Navbar /></section>

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
