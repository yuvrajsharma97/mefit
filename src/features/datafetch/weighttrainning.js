import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Thunk to fetch weight training exercises from Firestore
export const fetchWeightTrainingExercises = createAsyncThunk(
  "weightTrainingExercises/fetchWeightTrainingExercises",
  async (_, { getState }) => {
    const { weightTrainingExercises } = getState().weightTrainingExercises;
    if (weightTrainingExercises.length > 0) {
      return weightTrainingExercises;
    }

    // Fetch data from the 'weighttrainingexercises' collection
    const querySnapshot = await getDocs(
      collection(db, "weighttrainingexcercises")
    );
    const fetchedWeightTrainingExercises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return fetchedWeightTrainingExercises;
  }
);

// Define the slice for weight training exercises
const weightTrainingExercisesSlice = createSlice({
  name: "weightTrainingExercises",
  initialState: {
    weightTrainingExercises: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeightTrainingExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeightTrainingExercises.fulfilled, (state, action) => {
        state.weightTrainingExercises = action.payload;
        state.loading = false;
      })
      .addCase(fetchWeightTrainingExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weightTrainingExercisesSlice.reducer;
