import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: "",
	category: "",
};

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchText: (state, { payload }) => {
			state.text = payload;
		},
		setCategory: (state, { payload }) => {
			state.category = payload;
		},
	},
});

export const { setSearchText, setCategory } = searchSlice.actions;

export default searchSlice.reducer;
