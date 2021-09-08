import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalAmount: 0,
	totalQuantity: 0,
	products: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct: (state, { payload }) => {
			state.products = [...state.products, payload];
		},
		incrementProductQuantity: (state, { payload }) => {
			state.products = state.products.map(product => {
				if (product.id === payload) {
					product.quantity += 1;
				}
				return product;
			});
		},
		decrementProductQuantity: (state, { payload }) => {
			state.products = state.products.map(product => {
				if (product.id === payload && product.quantity > 1) {
					product.quantity -= 1;
				}
				return product;
			});
		},
		increaseProductQuantityByAmount: (state, { payload }) => {
			state.products = state.products.map(product => {
				if (product.id === payload.id) {
					product.quantity += payload.quantity;
				}
				return product;
			});
		},
		removeProduct: (state, { payload }) => {
			state.products = state.products.filter(
				product => product.id !== payload
			);
		},
	},
});

export const selectProductsInCart = state => state.cart.products;

export const {
	addProduct,
	incrementProductQuantity,
	decrementProductQuantity,
	incrementProductQuantityByAmount,
	removeProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
