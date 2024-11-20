import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";


export const setUserDetails = createAsyncThunk(
  "userDetails/setUserDetails",
  async ({ userId, name, email }, { rejectWithValue }) => {
    try {
      const userDataRef = doc(db, "users", userId, "userData", "userDetails");
      const docSnap = await getDoc(userDataRef);

      if (docSnap.exists()) {
        await setDoc(userDataRef, { name, email }, { merge: true });
      } else {
        await setDoc(userDataRef, { name, email });
      }
      return { name, email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "userDetails/fetchUserDetails",
  async ({ userId }, { rejectWithValue }) => {
    try {
      const userDetailsRef = doc(
        db,
        "users",
        userId,
        "userData",
        "userDetails"
      );
      const docSnap = await getDoc(userDetailsRef);
      
      
      if (docSnap.exists()) {
        const userDetails = docSnap.data();
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        return userDetails;
      } else {
        return rejectWithValue("User details not found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(setUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(setUserDetails.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default userDetailsSlice.reducer;
