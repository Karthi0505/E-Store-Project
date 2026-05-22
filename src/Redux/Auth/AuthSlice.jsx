import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("googleUser");

const initialState = {
    user: savedUser ? JSON.parse(savedUser) : null,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("googleUser", JSON.stringify(action.payload));
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("googleUser");
        }
    }
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
