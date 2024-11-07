import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCuratedPlan } from "../../features/datafetch/myplandata";
import MyPlanPoseCard from "../../components/myplanposecard";
import { useAuth } from "../../context/authContext";
import Loader from "../../components/loader";
import Navbar from "../../components/navbar";

const MyCuratedPlanList = () => {
  const dispatch = useDispatch();
  const { plans, loading, error } = useSelector(
    (state) => state.myCuratedPlanfetch
  );

  const [componentLoading, setComponentLoading] = useState(true);
  const myPlanPoses = plans.plans;

  
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      dispatch(fetchMyCuratedPlan(user.uid)); // Fetch data when user is available
    }
  }, [user]);
  
  useEffect(() => {
     setTimeout(() => {
      setComponentLoading(false);
    }, 1000);}, [plans]);
  

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (myPlanPoses) {
    if (myPlanPoses.length === 0) {
      return <p>No plans found.</p>;
    }
  }

  
  return (
    <React.Fragment>
      <Navbar />

      {componentLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
          <h1 className="text-4xl font-bold underline text-accent my-8">
            Your Curated Plan
          </h1>
          <div className="flex flex-wrap gap-4">
            {myPlanPoses.map((pose) => (
              <MyPlanPoseCard key={pose.id} pose={pose} />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MyCuratedPlanList;
