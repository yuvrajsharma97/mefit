import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCuratedPlan } from "../../features/datafetch/myplandata";
import MyPlanPoseCard from "../../components/myplanposecard";
import { useAuth } from "../../context/authContext";
import Loader from "../../components/loader";

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
    return <p>Loading...</p>;
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
      {componentLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-4">
          {myPlanPoses.map((pose) => (
            <MyPlanPoseCard key={pose.id} pose={pose} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default MyCuratedPlanList;
