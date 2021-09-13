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

const ProductCard = ({ imagen, titulo, precio, descripcion, id }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<Box
			borderRadius={{ base: 0, md: "md" }}
			boxShadow={{ base: "", md: "lg" }}
			p={{ base: 0, md: 4 }}
			cursor="pointer">
			<Stack
				position="relative"
				ref={btnRef}
				onClick={onOpen}
				direction="row"
				alignItems="start"
				p={4}
				borderBottom={{ base: "1px", md: 0 }}
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
					<Text fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
						{titulo}
					</Text>
					<Text fontSize="sm" mb={4}>
						{`${descripcion.slice(0, 30)}...`}
					</Text>
					<Text
						mt="auto"
						mb={0}
						fontWeight="semibold"
						color={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
						position="absolute"
						left={4}
						bottom={0}>{`$${precio}`}</Text>
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
				precio={precio}
				id={id}
			/>
		</Box>
	);
};

export default ProductCard;
