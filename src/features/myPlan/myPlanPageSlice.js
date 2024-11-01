import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig"; // Firebase config file
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const initialState = {
  myPlan: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create a new collection for the user in Firestore
export const createUserPlanCollection = createAsyncThunk(
  "myPlanPage/createUserPlanCollection",
  async (userId, { rejectWithValue }) => {
    const docRef = doc(db, "users", userId, "userData", "myPlan");
    try {
      // Check if the document already exists
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        // Create a new document with an empty plan array
        await setDoc(docRef, { myPlan: [] });
      }
      return { userId, created: !docSnap.exists() }; // Return a status indicating if the collection was newly created
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Add a plan to Firestore
export const addPlanToFirestore = createAsyncThunk(
  "myPlanPage/addPlan",
  async ({ userId, plan }, { rejectWithValue }) => {
    const docRef = doc(db, "users", userId, "userData", "myPlan");
    try {
      const currentPlans = await getUserPlan(docRef);
      await updateDoc(docRef, {
        myPlan: [...currentPlans, plan],
      });
      return plan;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Helper function to get user plans from Firestore
async function getUserPlan(docRef) {
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data().myPlan || [] : [];
}

const myPlanPageSlice = createSlice({
  name: "myPlanPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserPlanCollection.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (action.payload.created) {
          console.log(
            `New collection created for user ${action.payload.userId}`
          );
        }
      })
      .addCase(addPlanToFirestore.fulfilled, (state, action) => {
        state.myPlan.push(action.payload);
      })
      .addCase(createUserPlanCollection.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addPlanToFirestore.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default myPlanPageSlice.reducer;
