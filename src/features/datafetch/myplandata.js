import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Thunk to fetch data from the 'myCuratedPlan' sub-collection (Document reference)
export const fetchMyCuratedPlan = createAsyncThunk(
  "myCuratedPlan/fetchMyCuratedPlan",
  async (userId, { rejectWithValue }) => {
    
    if (!userId) {
      return rejectWithValue("User ID is not provided or authenticated");
    }

    try {
      // Correct reference to the 'myCuratedPlan' document inside 'userData'
      const userDocRef = doc(db, `users/${userId}/userData/myCuratedPlan`);

      // Fetch the document for 'myCuratedPlan'
      const docSnap = await getDoc(userDocRef);

      if (!docSnap.exists()) {
        return rejectWithValue("No curated plan found.");
      }

      // Return the data of the 'myCuratedPlan' document
      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the slice for handling the fetching logic
const myCuratedPlanFetchSlice = createSlice({
  name: "myCuratedPlanFetch",
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
        state.plans = action.payload; // Save fetched plans to the state
        state.loading = false;
      })
      .addCase(fetchMyCuratedPlan.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch curated plan data";
      });
  },
});

export default myCuratedPlanFetchSlice.reducer;
