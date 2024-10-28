import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBodyweightExercises } from  "../../../features/datafetch/bodyweight";
import PoseCard from "../../../components/posecard";
import Loader from "../../../components/loader";

const BodyWeightTraining = () => {
  const dispatch = useDispatch();
  const { bodyweightExercises, loading, error } = useSelector(
    (state) => state.bodyweightExercises
  ); 
  
  useEffect(() => {
    // Dispatch fetchBodyweightExercises if the exercises are not already fetched
    if (bodyweightExercises.length === 0) {
      dispatch(fetchBodyweightExercises());
    }
  }, [dispatch, bodyweightExercises.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error loading bodyweight exercises: {error}</p>;
  }

  const shoulders = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_shoulders");
  const chest = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_chest");
  const back = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_back");
  const biceps = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_biceps");
  const triceps = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_triceps");
  const legs = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_legs");
  const core = bodyweightExercises.filter(
    (pose) => pose.collection === "bodyweightexercises_core");

  return (
    <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
      <h1 className="text-4xl font-bold underline text-accent">
        BodyWeight Training Exercises
      </h1>

      {/* Shoulders */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Shoulders
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {shoulders.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Chest */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">Chest</h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {chest.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Back */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">Back</h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {back.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Biceps */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">Biceps</h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {biceps.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Triceps */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Triceps
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {triceps.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Legs */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">Legs</h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {legs.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Core */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">Core</h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {core.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>
    </div>
  );
};

export default BodyWeightTraining;
