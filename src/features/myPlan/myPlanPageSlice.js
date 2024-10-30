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
      state.myPlan = state.myPlan.filter((plan) => plan.poseId !== poseId); 
    },
    editPlan: (state, action) => {
      const { poseId, noOfSets } = action.payload;
      const existingPlan = state.myPlan.find((plan) => plan.poseId === poseId); 
      if (existingPlan) {
        existingPlan.noOfSets = noOfSets;
      }
    },
  },
});

export const { addPlan, removePlan, editPlan } = myPlanPageSlice.actions;
export default myPlanPageSlice.reducer;
