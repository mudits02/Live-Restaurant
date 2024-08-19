import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // we have bascailly named the entire cartSlice as the name of the import(like a library)

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
}
);

export default appStore;
