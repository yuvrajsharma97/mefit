import { configureStore } from "@reduxjs/toolkit";
import actionDisplayReducer from "../features/actionPage/actionDisplaySlice";
import myCuratedPlanSlice from "../features/myPlan/myCuratedPlanSlice";
import yogafetchSlice from "../features/datafetch/yogaPoses";
import bodyweightExercisesSlice from "../features/datafetch/bodyweight";
import weightTrainingExercisesSlice from "../features/datafetch/weighttrainning";
import runningExercisesSlice from "../features/datafetch/running";

const store = configureStore({
  reducer: {
    actionDisplay: actionDisplayReducer,
    myCuratedPlan: myCuratedPlanSlice,
    yoga: yogafetchSlice,
    bodyweightExercises: bodyweightExercisesSlice,
    weightTrainingExercises: weightTrainingExercisesSlice,
    runningExercises: runningExercisesSlice,
  },
});

export default store;
