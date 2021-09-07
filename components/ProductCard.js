import {
	VStack,
	Box,
	Stack,
	Image,
	Text,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ProductDrawer from "./ProductDrawer";

const ProductCard = ({ imagen, titulo, precio, descripcion }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Stack
				ref={btnRef}
				onClick={onOpen}
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
					<Text fontSize="sm" mb={4}>
						{`${descripcion.slice(0, 30)}...`}
					</Text>
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
			<ProductDrawer
				isOpen={isOpen}
				onClose={onClose}
				onOpen={onOpen}
				imagen={imagen}
				titulo={titulo}
				descripcion={descripcion}
				btnRef={btnRef}
			/>
		</>
	);
};

export default ProductCard;
