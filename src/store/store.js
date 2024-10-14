import { configureStore } from "@reduxjs/toolkit";
import actionDisplayReducer from "../features/actionPage/actionDisplaySlice";
import myPlanPageReducer from "../features/myPlan/myPlanPageSlice";
import yogafetchSlice from "../features/datafetch/yogaPoses";

const store = configureStore({
  reducer: {
    actionDisplay: actionDisplayReducer,
    myPlanPage: myPlanPageReducer,
    yoga: yogafetchSlice,
  },
});

export default store;
