import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import CartSlice from "./CartSlice";

const store = configureStore({
reducer: {
    auth: AuthSlice.reducer,
    Cart: CartSlice.reducer,
},
})

export default store;