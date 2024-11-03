import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCuratedPlan } from "../../features/datafetch/myplan";
import MyPlanPoseCard from "../../components/myplanposecard";
import { useAuth } from "../../context/authContext";


const MyCuratedPlanList = ({ userId }) => {
  const dispatch = useDispatch();
  const { plans, loading, error } = useSelector(
    (state) => state.myCuratedPlanfetch
  );

  const { isUserLoggedIn } = useAuth();
  console.log(isUserLoggedIn);
  useEffect(() => {
    if (isUserLoggedIn.uid) {
      dispatch(fetchMyCuratedPlan(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (plans.length === 0) {
    return <p>No plans found.</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {plans.map((pose) => (
        <MyPlanPoseCard key={pose.id} pose={pose} />
      ))}
    </div>
  );
};

export default MyCuratedPlanList;
