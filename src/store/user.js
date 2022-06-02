import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {isLoggedIn: false, user: null, allUsers: []},
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        fetchAll: (state, action) => {
            state.allUsers = action.payload
        }
    }
})

export const { login, setUser, fetchAll } = userSlice.actions;
export default userSlice.reducer;