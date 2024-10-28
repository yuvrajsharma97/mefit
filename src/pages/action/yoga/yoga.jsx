import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchYogaPoses } from "../../../features/datafetch/yogaPoses";
import PoseCard from "../../../components/posecard";
import Loader from "../../../components/loader";

const Yoga = () => {
  const dispatch = useDispatch();
  const { yogaPoses, loading, error } = useSelector((state) => state.yoga);
  useEffect(() => {
    // Dispatch fetchYogaPoses if the yoga poses are not already fetched
    if (yogaPoses.length === 0) {
      dispatch(fetchYogaPoses());
    }
  }, [dispatch, yogaPoses.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error loading yoga poses: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
      <h1 className="text-4xl font-bold underline text-accent mb-12">
        Yoga Poses
      </h1>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {yogaPoses.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>
    </div>
  );
};

export default Yoga;
