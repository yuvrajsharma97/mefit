import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Thunk to fetch bodyweight exercises from Firestore
export const fetchBodyweightExercises = createAsyncThunk(
  "bodyweightExercises/fetchBodyweightExercises",
  async (_, { getState }) => {
    const { bodyweightExercises } = getState().bodyweightExercises;
    if (bodyweightExercises.length > 0) {
      return bodyweightExercises;
    }

    // Fetch data from the 'bodyweightexercises' collection
    const querySnapshot = await getDocs(collection(db, "bodyweightexercises"));
    // const fetchedBodyweightExercises = querySnapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));

    console.log(querySnapshot);
    return querySnapshot;
  }
);

// Define the slice for bodyweight exercises
const bodyweightExercisesSlice = createSlice({
  name: "bodyweightExercises",
  initialState: {
    bodyweightExercises: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBodyweightExercises.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBodyweightExercises.fulfilled, (state, action) => {
        state.bodyweightExercises = action.payload;
        state.loading = false;
      })
      .addCase(fetchBodyweightExercises.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bodyweightExercisesSlice.reducer;
