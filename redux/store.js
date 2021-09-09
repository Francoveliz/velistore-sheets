import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import dataReducer from "./slices/dataSlice";

export const store = configureStore({
	reducer: { cart: cartReducer, search: searchReducer, data: dataReducer },
});
