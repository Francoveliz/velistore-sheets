import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/layout";
import axios from "axios";
import ProductCard from "./ProductCard";
import { getProducts } from "../utils/getProducts";

const ProductsList = () => {
	const [products, setProducts] = useState([]);

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
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</SimpleGrid>
		</div>
	);
};

export default ProductsList;
