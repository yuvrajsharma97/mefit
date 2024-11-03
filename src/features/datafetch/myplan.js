import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Thunk to fetch data from the 'myCuratedPlan' collection
export const fetchMyCuratedPlan = createAsyncThunk(
  "myCuratedPlan/fetchMyCuratedPlan",
  async (userId, { rejectWithValue }) => {
    try {
      // Fetch data from the user's 'myCuratedPlan' collection
      const userCollectionRef = collection(
        db, 
        `users/${userId}/userData/myCuratedPlan`
      );
      const querySnapshot = await getDocs(userCollectionRef);
      const fetchedPlans = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return fetchedPlans;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the slice for myCuratedPlan
const myCuratedPlanFetchSlice = createSlice({
  name: "myCuratedPlanfetch",
  initialState: {
    plans: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyCuratedPlan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyCuratedPlan.fulfilled, (state, action) => {
        state.plans = action.payload;
        state.loading = false;
      })
      .addCase(fetchMyCuratedPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default myCuratedPlanFetchSlice.reducer;
