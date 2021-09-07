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

	console.log(products);

	return (
		<div>
			<SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
				{products.map(product => (
					<ProductCard key={product.id} {...product} />
				))}
			</SimpleGrid>
		</div>
	);
};

export default ProductsList;
