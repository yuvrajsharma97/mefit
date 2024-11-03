import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig"; // Path to Firebase config file
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const initialState = {
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  created: null, // Indicates if the collection was created
};

export const checkAndCreateCollection = createAsyncThunk(
  "myCuratedPlan/checkAndCreateCollection",
  async ({ userId, newPlan }, { rejectWithValue }) => {
    const docRef = doc(db, "users", userId, "userData", "myCuratedPlan");

    try {
      // Check if the collection exists
      const docSnap = await getDoc(docRef);

      console.log("reached here");
      

      const newDocument = {
        collection: newPlan.collection,
        id: newPlan.id,
        noOfSets: newPlan.noOfSets,
        image: newPlan.image,
        instruction: newPlan.instruction,
        name: newPlan.name,
        short_description: newPlan.short_description,
      };


      if (!docSnap.exists()) {
        // Create the collection with the initial document
        await setDoc(docRef, { plans: [newDocument] });
        return { created: true, newDocument };
      } else {
        // Add the new document to the existing collection
        const currentPlans = docSnap.data().plans || [];
        await updateDoc(docRef, {
          plans: [...currentPlans, newDocument],
        });
        return { created: false, newDocument };
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const myCuratedPlanSlice = createSlice({
  name: "myCuratedPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAndCreateCollection.pending, (state) => {
        state.status = "loading";
        state.created = null;
      })
      .addCase(checkAndCreateCollection.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.created = action.payload.created;
      })
      .addCase(checkAndCreateCollection.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default myCuratedPlanSlice.reducer;