import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const cartStore = configureStore({
	reducer:{
		cart:cartReducer
	}
})

// use in to dispatch the function