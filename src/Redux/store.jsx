import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice"
const store = configureStore({
    reducer:{
       Cart:cartReducer,
       Product:productReducer,
    }
})

export default store;