import React from "react";
import {
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	VStack,
	Text,
	HStack,
	Button,
	Box,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import { selectProductsInCart } from "../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { primaryColor } from "../utils/enviromentVariables";

const SummaryDrawer = ({ setStep }) => {
	const productsInCart = useSelector(selectProductsInCart);

	const totalAmount = () =>
		productsInCart.reduce(
			(accumulator, product) =>
				accumulator + product.precio * product.quantity,
			0
		);

	return (
		<>
			<Box>
				<DrawerCloseButton />
			</Box>
			<DrawerHeader mt={6} borderBottomWidth="1px">
				Carrito
			</DrawerHeader>
			<DrawerBody>
				{productsInCart.map(product => (
					<CartItem key={product.id} {...product} />
				))}
			</DrawerBody>

			<DrawerFooter>
				<VStack spacing={4} w="full">
					<HStack justifyContent="space-between" w="full">
						<Text fontSize="lg" fontWeight="semibold">
							Total estimado:
						</Text>
						<Text fontSize="lg" fontWeight="semibold">
							{`$${totalAmount()}`}
						</Text>
					</HStack>
					<Button
						onClick={() => setStep("form")}
						colorScheme={primaryColor}
						isFullWidth>
						Siguiente
					</Button>
				</VStack>
			</DrawerFooter>
		</>
	);
};

export default SummaryDrawer;
