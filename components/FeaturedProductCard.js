import React, { useRef } from "react";
import { VStack, Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import { primaryColor } from "../utils/enviromentVariables";
import ProductDrawer from "./ProductDrawer";

const FeaturedProductCard = ({
	titulo,
	id,
	precio,
	imagen,
	descripcion,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	return (
		<>
			<VStack
				bg="white"
				boxShadow="lg"
				borderRadius="md"
				p={4}
				minW={80}
				maxW={80}
				w={80}
				alignItems="flex-start"
				onClick={onOpen}
				cursor="pointer">
				<Box w="full" mx="auto">
					<Image w="full" src={imagen} alt={titulo} />
				</Box>
				<VStack
					h="full"
					justifyContent="space-between"
					alignItems="flex-start">
					<Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
						{titulo}
					</Text>
					<Text
						color={primaryColor}
						fontWeight="semibold">{`$${precio}`}</Text>
				</VStack>
			</VStack>
			<ProductDrawer
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				imagen={imagen}
				titulo={titulo}
				descripcion={descripcion}
				btnRef={btnRef}
				precio={precio}
				id={id}
			/>
		</>
	);
};

export default FeaturedProductCard;
