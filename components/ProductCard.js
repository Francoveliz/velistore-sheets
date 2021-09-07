import { VStack, Box, Stack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ imagen, titulo, precio }) => {
	return (
		<Stack
			direction="row"
			alignItems="start"
			p={4}
			borderBottom="1px"
			borderColor="gray.200"
			mx={-4}>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="flex-start"
				flex={1}
				spacing={0}
				h="full"
				ju>
				<Text fontSize="sm" fontWeight="semibold">
					{titulo}
				</Text>
				<Text fontSize="sm">descripcion</Text>
				<Text mt="auto" mb={0}>{`$${precio}`}</Text>
			</Box>
			<Box
				h={24}
				display="flex"
				alignItems="center"
				justifyContent="flex-end">
				<Image maxH="full" w="auto" src={imagen} />
			</Box>
		</Stack>
	);
};

export default ProductCard;
