import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : localStorage.getItem("user") ? true : false,
    userData : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;