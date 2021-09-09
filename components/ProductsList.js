import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import ProductCard from "./ProductCard";
import { getProducts } from "../utils/getProducts";
import { useSelector } from "react-redux";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const searchText = useSelector(state => state.search.text);

	const filterProducts = products.filter(product =>
		product.titulo.toLowerCase().includes(searchText.toLowerCase())
	);

	const initialFunction = async () => {
		const initialProducts = await getProducts();
		setProducts(initialProducts);
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
