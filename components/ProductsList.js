import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import ProductCard from "./ProductCard";
import { getProducts } from "../utils/getProducts";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/dataSlice";

const ProductsList = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.data.products);
	const category = useSelector(state => state.search.category);

	const searchText = useSelector(state => state.search.text);

	const filterProducts = products.filter(
		product =>
			product.titulo.toLowerCase().includes(searchText.toLowerCase()) &&
			product.categoria.includes(category)
	);

	const initialFunction = async () => {
		const initialProducts = await getProducts();
		dispatch(setProducts(initialProducts));
	};

	useEffect(() => {
		initialFunction();
	}, []);

	return (
		<div>
			<SimpleGrid columns={{ base: 1, lg: 2 }}>
				{filterProducts.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</SimpleGrid>
		</div>
	);
};

export default ProductsList;
