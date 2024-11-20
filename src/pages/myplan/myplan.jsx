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
  const { user, isUserLoggedIn } = useAuth();

  const [bodyweightexercisesArray, setBodyweightexercisesArray] = useState([]);
  const [runningArray, setRunningArray] = useState([]);
  const [weighttrainingArray, setWeighttrainingArray] = useState([]);
  const [yogaPosesArray, setYogaPosesArray] = useState([]);

  const myPlanPoses = plans.plans || []; // Fallback to empty array if undefined

  const keywords = [
    "bodyweightexercises",
    "running",
    "weighttraining",
    "yogaPoses",
  ];

  useEffect(() => {
    const groupedItems = myPlanPoses.reduce(
      (acc, item) => {
        const matchedKeyword = keywords.find(
          (keyword) =>
            item.poseSubCollection && item.poseSubCollection.includes(keyword)
        );
        const key = matchedKeyword || "others";

        if (!acc[key]) {
          acc[key] = [];
        }

        acc[key].push(item);

        return acc;
      },
      {
        bodyweightexercises: [],
        running: [],
        weighttraining: [],
        yogaPoses: [],
      }
    );

    setBodyweightexercisesArray(groupedItems.bodyweightexercises || []);
    setRunningArray(groupedItems.running || []);
    setWeighttrainingArray(groupedItems.weighttraining || []);
    setYogaPosesArray(groupedItems.yogaPoses || []);
  }, [JSON.stringify(myPlanPoses)]); // Serialize `myPlanPoses` to avoid constant changes

  useEffect(() => {
    if (user) {
      dispatch(fetchMyCuratedPlan(user.uid)); // Fetch data when user is available
    }
  }, [user]);

  if (loading) return <Loader />;
  if (error) return (
    <React.Fragment>
      <Navbar />
      <p></p>
      <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
        <h1 className="text-4xl font-bold underline text-accent my-8">
          {error}
        </h1>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Navbar />
      {isUserLoggedIn ? (
        <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
          <h1 className="text-4xl font-bold underline text-accent my-8">
            Your Curated Plan
          </h1>
          <div className="flex flex-col">
            {bodyweightexercisesArray.length !== 0 && (
              <React.Fragment>
                <h2 className="text-3xl font-bold underline text-accent">
                  Bodyweight Exercises
                </h2>
                <div className="flex flex-wrap gap-4 justify-around my-[5rem]">
                  {bodyweightexercisesArray.map((pose) => (
                    <MyPlanPoseCard key={pose.id} pose={pose} />
                  ))}
                </div>
              </React.Fragment>
            )}
            {runningArray.length !== 0 && (
              <React.Fragment>
                <h2 className="text-3xl font-bold underline text-accent">
                  Running
                </h2>
                <div className="flex flex-wrap gap-4 justify-around my-[5rem]">
                  {runningArray.map((pose) => (
                    <MyPlanPoseCard key={pose.id} pose={pose} />
                  ))}
                </div>
              </React.Fragment>
            )}
            {weighttrainingArray.length !== 0 && (
              <React.Fragment>
                <h2 className="text-3xl font-bold underline text-accent">
                  Weight Training
                </h2>
                <div className="flex flex-wrap gap-4 justify-around my-[5rem]">
                  {weighttrainingArray.map((pose) => (
                    <MyPlanPoseCard key={pose.id} pose={pose} />
                  ))}
                </div>
              </React.Fragment>
            )}
            {yogaPosesArray.length !== 0 && (
              <React.Fragment>
                <h2 className="text-3xl font-bold underline text-accent">
                  Yoga Poses
                </h2>
                <div className="flex flex-wrap gap-4 justify-around my-[5rem]">
                  {yogaPosesArray.map((pose) => (
                    <MyPlanPoseCard key={pose.id} pose={pose} />
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-bgDarkest text-white px-4 py-8 md:py-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold underline text-accent mb-8 text-center">
            Your Curated Plan
          </h1>
          <p>Please login to view your curated plan.</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default MyCuratedPlanList;
