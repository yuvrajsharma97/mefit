import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myPlan: [],
};

const myPlanPageSlice = createSlice({
  name: "myPlanPage",
  initialState,
  reducers: {
    addPlan: (state, action) => {
      if (state.myPlan.find((plan) => plan.poseId === action.payload.poseId)) {
        return;
      }
      const {
        poseId,
        poseTitle,
        poseShortDescription,
        image,
        instruction,
        noOfSets,
      } = action.payload;
      const newPlan = {
        poseId,
        poseTitle,
        poseShortDescription,
        image,
        instruction,
        noOfSets,
      };
      state.myPlan.push(newPlan);
    },
    removePlan: (state, action) => {
      const { poseId } = action.payload;
      state.myPlan = state.myPlan.filter((plan) => plan.poseId !== poseId); // Mutate myPlan, don't return new array
    },
    editPlan: (state, action) => {
      const { poseId, noOfSets } = action.payload;
      const existingPlan = state.myPlan.find((plan) => plan.poseId === poseId); // Access myPlan array
      if (existingPlan) {
        existingPlan.noOfSets = noOfSets;
      }
    },
  },
});

export const { addPlan, removePlan, editPlan } = myPlanPageSlice.actions;
export default myPlanPageSlice.reducer;
