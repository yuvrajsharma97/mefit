import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Thunk to fetch running exercises from Firestore
export const fetchRunningExercises = createAsyncThunk(
  "runningExercises/fetchRunningExercises",
  async (_, { getState }) => {
    const { runningExercises } = getState().runningExercises;
    if (runningExercises.length > 0) {
      return runningExercises;
    }

    // Fetch data from the 'runningexercises' collection
    const querySnapshot = await getDocs(collection(db, "runningexercises"));
    const fetchedRunningExercises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return fetchedRunningExercises;
  }
);

// Define the slice for running exercises
const runningExercisesSlice = createSlice({
  name: "runningExercises",
  initialState: {
    runningExercises: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRunningExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRunningExercises.fulfilled, (state, action) => {
        state.runningExercises = action.payload;
        state.loading = false;
      })
      .addCase(fetchRunningExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default runningExercisesSlice.reducer;
