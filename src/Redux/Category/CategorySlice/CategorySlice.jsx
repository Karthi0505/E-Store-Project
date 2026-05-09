import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./Action";

const initialState = {
    categories: [],
    status: "idle", // idle, loading, success, error
    error: ""
}

const categorySlice = createSlice({
    name:"Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addCase(getCategories.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.status = "success";
            state.categories = action.payload;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.status = "error";
            state.error = action.error.message;
        });
    }
});

export default categorySlice.reducer;