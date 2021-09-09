import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	text: "",
};

export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchText: (state, { payload }) => {
			state.text = payload;
		},
	},
});

export const { setSearchText } = searchSlice.actions;

export default searchSlice.reducer;
