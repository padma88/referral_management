import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {isLoggedIn: false},
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
})

export const { login } = userSlice.actions;
export default userSlice.reducer;