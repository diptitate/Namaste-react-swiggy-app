import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({ 
    reducer: {                 // one big reducer for our appStore    //
        cart: cartReducer,    //cart is name of slice that is created inside the cartSlice
    },
});
export default appStore;