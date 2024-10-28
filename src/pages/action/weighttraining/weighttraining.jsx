import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeightTrainingExercises } from "../../../features/datafetch/weighttrainning";
import PoseCard from "../../../components/posecard";
import Loader from "../../../components/loader";

const WeightTraining = () => {
  const dispatch = useDispatch();
  const { weightTrainingExercises, loading, error } = useSelector(
    (state) => state.weightTrainingExercises
  );

  useEffect(() => {
    if (weightTrainingExercises.length === 0) {
      dispatch(fetchWeightTrainingExercises());
    }
  }, [dispatch, weightTrainingExercises.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p>Error loading weight training exercises: {error}</p>;
  }

  // Categorize exercises based on the collection field
  const shoulders = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_shoulders"
  );
  const chest = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_chest"
  );
  const back = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_back"
  );
  const biceps = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_biceps"
  );
  const triceps = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_triceps"
  );
  const legs = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_legs"
  );
  const core = weightTrainingExercises.filter(
    (pose) => pose.collection === "weighttraining_core"
  );

  return (
    <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
      <h1 className="text-4xl font-bold underline text-accent">
        Weight Training Exercises
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

export default WeightTraining;
