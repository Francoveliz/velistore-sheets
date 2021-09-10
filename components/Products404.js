import React from "react";
import { VStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Products404 = () => {
	return (
		<VStack m="auto" color="gray.300">
			<Icon as={AiOutlineSearch} fontSize="9xl" />
			<Text fontSize="2xl" fontWeight="bold">
				No se encontraron productos
			</Text>
		</VStack>
	);
};

export default Products404;
