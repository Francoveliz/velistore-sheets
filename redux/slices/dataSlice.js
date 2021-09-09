import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setProducts: (state, { payload }) => {
			state.products = [...payload];
		},
	},
});

export const { setProducts } = dataSlice.actions;

export default dataSlice.reducer;
