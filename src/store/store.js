import { configureStore } from "@reduxjs/toolkit";
import actionDisplayReducer from "../features/actionPage/actionDisplaySlice";
import myPlanPageReducer from "../features/myPlan/myPlanPageSlice";

const store = configureStore({
  reducer: {
    actionDisplay: actionDisplayReducer,
    myPlanPage: myPlanPageReducer,
  },
});

export default store;
