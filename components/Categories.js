import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { setCategory } from "../redux/slices/searchSlice";
import { useDispatch } from "react-redux";

const Categories = ({ ...rest }) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const products = useSelector(state => state.data.products);

	const categories = products.reduce((accumulator, product) => {
		if (!accumulator.includes(product.categoria)) {
			return [...accumulator, product.categoria];
		}
		return accumulator;
	}, []);

	const handleOnChange = e => {
		setValue(e.target.value);
		dispatch(setCategory(e.target.value));
	};

	return (
		<Select
			{...rest}
			cursor="pointer"
			placeholder="Categorias..."
			w={{ base: "full", md: 60 }}
			value={value}
			boxShadow="md"
			onChange={e => handleOnChange(e)}>
			{categories.map(category => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</Select>
	);
};

export default Categories;
