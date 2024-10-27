import { configureStore } from "@reduxjs/toolkit";
import actionDisplayReducer from "../features/actionPage/actionDisplaySlice";
import myPlanPageReducer from "../features/myPlan/myPlanPageSlice";
import yogafetchSlice from "../features/datafetch/yogaPoses";
import bodyweightExercisesSlice from "../features/datafetch/bodyweight";

const store = configureStore({
  reducer: {
    actionDisplay: actionDisplayReducer,
    myPlanPage: myPlanPageReducer,
    yoga: yogafetchSlice,
    bodyweightExercises: bodyweightExercisesSlice,
  },
});

export default store;
