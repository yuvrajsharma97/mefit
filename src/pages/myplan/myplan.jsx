import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCuratedPlan } from "../../features/datafetch/myplandata";
import MyPlanPoseCard from "../../components/myplanposecard";
import { useAuth } from "../../context/authContext";

const MyCuratedPlanList = () => {
  const dispatch = useDispatch();
  const { plans, loading, error } = useSelector(
    (state) => state.myCuratedPlanfetch
  );

  // Ensure plans is an array, if not, return an empty array
  const myplanPoses = Array.isArray(plans) ? plans : [];

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      dispatch(fetchMyCuratedPlan(user.uid)); // Fetch data when user is available
    }
  }, [user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (myplanPoses.length === 0) {
    return <p>No plans found.</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {myplanPoses.map((pose) => (
        <MyPlanPoseCard key={pose.id} pose={pose} />
      ))}
    </div>
  );
};

export default MyCuratedPlanList;
