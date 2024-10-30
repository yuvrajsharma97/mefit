// MyPlan.jsx
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import MyPlanPoseCard from "../../components/myplanposecard";

const MyPlan = () => {
  const myPlan = useSelector((state) => state.myPlanPage.myPlan);

  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-wrap gap-6 p-6 bg-bgDarkest text-accentText">
        {myPlan.map((pose, index) => (
          <MyPlanPoseCard key={index} pose={pose} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default MyPlan;
