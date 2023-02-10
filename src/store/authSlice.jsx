import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: 'Auth',
    initialState: { isLoggedIn: false },
    reducers: {
        Login(state) {
            state.isLoggedIn = true;
        },
        Logout(state) {
            state.isLoggedIn = false;
        }
    }
})

export const AuthActions = AuthSlice.actions;

export default AuthSlice;