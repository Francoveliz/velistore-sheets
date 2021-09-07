import axios from "axios";
import Papa from "papaparse";

export const getProducts = async () => {
	try {
		const response = await axios.get(
			"https://docs.google.com/spreadsheets/d/e/2PACX-1vRHcSmnhlEn6dTBFJ91qO0w2UbaUuuj_4kOaEu3BKX85z3jhuJCbtBqXJxZ4naMnBhp5bXJwWDUmYgW/pub?output=csv"
		);

		const products = await Papa.parse(response.data, {
			header: true,
		});

		return products.data;
	} catch (error) {
		console.log(error);
	}
};
