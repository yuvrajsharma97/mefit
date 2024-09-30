import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    actionPageDisplays: "explore",
    };

export const actionDisplaySlice = createSlice({
    name: "actionDisplay",
    initialState,
    reducers: {
        setActionDisplay: (state, action) => {
            state.actionPageDisplays = action.payload;
            console.log(state.actionPageDisplays);
        },
    },
});

export const { setActionDisplay } = actionDisplaySlice.actions; 

export default actionDisplaySlice.reducer;