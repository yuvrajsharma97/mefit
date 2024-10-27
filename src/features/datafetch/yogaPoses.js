import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// Thunk to fetch yoga poses from Firestore
export const fetchYogaPoses = createAsyncThunk(
  "yoga/fetchYogaPoses",
  async (_, { getState }) => {
    const { yogaPoses } = getState().yoga;
    if (yogaPoses.length > 0) {
      return yogaPoses;
    }
    

    const querySnapshot = await getDocs(collection( db ,"yogaPoses"));
    const fetchedYogaPoses = querySnapshot.docs.map((doc) => ({  
      id: doc.id,
      ...doc.data(),
    }));
    return fetchedYogaPoses;
  }
);

// Define the yoga slice
const yogafetchSlice = createSlice({
  name: "yoga",
  initialState: {
    yogaPoses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYogaPoses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchYogaPoses.fulfilled, (state, action) => {
        state.yogaPoses = action.payload;
        state.loading = false;
      })
      .addCase(fetchYogaPoses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default yogafetchSlice.reducer;
