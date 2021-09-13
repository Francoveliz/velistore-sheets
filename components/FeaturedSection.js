import { HStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedSection = () => {
	const products = useSelector(state => state.data.products);

	const featuredProducts = products.reduce((accumulator, product) => {
		if (product.destacado === "si") {
			return [...accumulator, product];
		}
		return accumulator;
	}, []);

	console.log(featuredProducts);

	return (
		<HStack
			spacing={8}
			overflowX="scroll"
			maxW="full"
			py={12}
			px={8}
			boxShadow="inner"
			borderRadius="md"
			alignItems="flex-start">
			{featuredProducts.map(product => (
				<FeaturedProductCard key={product.id} {...product} />
			))}
		</HStack>
	);
};

export default FeaturedSection;
