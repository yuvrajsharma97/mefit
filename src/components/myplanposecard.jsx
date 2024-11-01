import React from "react";

const MyPlanPoseCard = ({ pose }) => {
  
  return (
    <div className="relative w-80 p-4 bg-bgDarker rounded-lg shadow-lg overflow-hidden">
      {/* Pose Image */}
      <div
        className="relative h-40 bg-cover bg-center rounded-lg mb-4"
        style={{
          backgroundImage: `url(${pose.image})`,
        }}>
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-2 rounded-lg">
          <span className="text-white font-semibold">View Pose</span>
        </div> */}
      </div>

      {/* Pose Title and Description */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-semibold text-accent">{pose.poseTitle}</h2>
      </div>
      <p className="text-sm text-accentText mb-2">
        {pose.poseShortDescription}
      </p>

      {/* Instruction */}
      {/* <p className="text-sm text-accentText mb-4 truncate ">
        {pose.instruction}
      </p> */}

      {/* Sets and Footer */}
      <div className="flex justify-between items-center text-accent">
        <div className="collapse bg-base-200 w-full">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Sets: {pose.noOfSets}
          </div>
          <div className="collapse-content flex flex-wrap gap-2">
            {Array.from({ length: pose.noOfSets }, (_, index) => (
              <input
                key={index}
                type="checkbox"
                className="checkbox checkbox-sm mx-3"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPoseCard;
