import { configureStore } from "@reduxjs/toolkit";
import actionDisplayReducer from "../features/actionPage/actionDisplaySlice";

const store = configureStore({
  reducer: {
    actionDisplay: actionDisplayReducer
  },
});

export default store;
