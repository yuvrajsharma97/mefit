import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRunningExercises } from "../../../features/datafetch/running";
import PoseCard from "../../../components/posecard";
import Loader from "../../../components/loader";

const Running = () => {
  const dispatch = useDispatch();
  const { runningExercises, loading, error } = useSelector(
    (state) => state.runningExercises
  );

  useEffect(() => {
    // Dispatch fetchRunningExercises if the exercises are not already fetched
    if (runningExercises.length === 0) {
      dispatch(fetchRunningExercises());
    }
  }, [dispatch, runningExercises.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error loading running exercises: {error}</p>;
  }

  // Categorize exercises
  const sprinting = runningExercises.filter(
    (exercise) => exercise.category === "sprinting"
  );
  const longDistance = runningExercises.filter(
    (exercise) => exercise.category === "longDistance"
  );
  const speedWork = runningExercises.filter(
    (exercise) => exercise.category === "speedWork"
  );
  const enduranceRunning = runningExercises.filter(
    (exercise) => exercise.category === "enduranceRunning"
  );
  const recoveryRuns = runningExercises.filter(
    (exercise) => exercise.category === "recoveryRuns"
  );

  return (
    <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
      <h1 className="text-4xl font-bold underline text-accent">
        Running Exercises
      </h1>

      {/* Sprinting */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Sprinting
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {sprinting.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Long Distance */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Long Distance
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {longDistance.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Speed Work */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Speed Work
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {speedWork.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Endurance Running */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Endurance Running
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {enduranceRunning.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>

      {/* Recovery Runs */}
      <h3 className="text-2xl font-bold underline my-12 text-accent">
        Recovery Runs
      </h3>
      <div className="flex flex-row flex-wrap justify-center w-full max-w-7xl">
        {recoveryRuns.map((pose) => (
          <PoseCard key={pose.id} pose={pose} />
        ))}
      </div>
    </div>
  );
};

export default Running;
