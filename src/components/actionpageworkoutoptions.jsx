import React from "react";
import {
  YogaImage,
  WeightliftingImage,
  RunningImage,
  BodyweightImage,
} from "./assetsimport";
import { useDispatch } from "react-redux";
import { setActionDisplay } from "../features/actionPage/actionDisplaySlice";

const Actionpageworkoutoptions = () => {

  const dispatch = useDispatch();

  const workoutOptions = [
    {
      name: "Yoga",
      description: "Improve flexibility and relax.",
      image: YogaImage,
      link: "yoga",
    },
    {
      name: "Weight Training",
      description: "Build strength and power.",
      image: WeightliftingImage,
      link: "weighttraining",
    },
    {
      name: "Body Weight Training",
      description: "Train using your body weight.",
      image: BodyweightImage,
      link: "bodyweighttraining",
    },
    {
      name: "Running",
      description: "Cardio and endurance workout.",
      image: RunningImage,
      link: "running",
    },
    // {
    //   name: "Other",
    //   description: "Choose from other options.",
    //   image: "https://source.unsplash.com/featured/?fitness",
    // },
  ];
  

  return (
    <div className="min-h-screen bg-[#060A0D] flex flex-col items-center px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl underline font-bold text-[#C5630C] mb-8 md:pt-[8rem]">
        Choose Your Workout
      </h1>

      {/* Workout Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl py-5 pb-[4rem]">
        {workoutOptions.map((workout, index) => (
          <button
            onClick={() => dispatch(setActionDisplay(workout.link))}
            key={index}
            className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            style={{
              backgroundImage: `url(${workout.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h2 className="text-xl font-semibold text-white mb-2">
                {workout.name}
              </h2>
              <p className="text-sm text-white opacity-80 text-center">
                {workout.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Actionpageworkoutoptions;
