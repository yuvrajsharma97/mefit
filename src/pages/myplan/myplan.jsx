// MyPlan.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/navbar";
import MyPlanPoseCard from "../../components/myplanposecard";
import { createUserPlanCollection } from "../../features/myPlan/myPlanPageSlice"; // Ensure correct path
import { useAuth } from "../../context/authContext"; // Your authentication context

const MyPlan = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const myPlan = useSelector((state) => state.myPlanPage.myPlan);
  const loadingStatus = useSelector((state) => state.myPlanPage.status);

  // Ensure user-specific collection exists when component mounts
  useEffect(() => {
    if (user) {
      dispatch(createUserPlanCollection(user.uid));
    }
  }, [user, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <div className="bg-bgDarkest min-h-screen md:py-[8rem]">
        <h1 className="text-3xl font-bold text-accent text-center py-[4rem]">
          Your Curated Plan
        </h1>
        {loadingStatus === "loading" ? (
          <p className="text-center text-accent">Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-6 md:px-6 justify-around text-accentText">
            {myPlan.map((pose, index) => (
              <MyPlanPoseCard key={index} pose={pose} userId={user.uid} />
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MyPlan;
