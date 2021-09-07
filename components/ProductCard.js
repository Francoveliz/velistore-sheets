import { Box, VStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ imagen, titulo, precio }) => {
	return (
		<VStack alignItems="start" boxShadow="lg" p={4} borderRadius="lg">
			<Box
				w="full"
				h={48}
				display="flex"
				alignItems="center"
				justifyContent="center">
				<Image maxH="full" w="auto" src={imagen} />
			</Box>
			<Text>{titulo}</Text>
			<Text>{`$${precio}`}</Text>
		</VStack>
	);
};

export default ProductCard;
