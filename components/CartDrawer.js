import React from "react";
import {
	Image,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	HStack,
	DrawerCloseButton,
	DrawerFooter,
	IconButton,
	VStack,
	Box,
	Button,
	Input,
	Stack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../redux/slices/cartSlice";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onOpen, onClose, btnRef }) => {
	const productsInCart = useSelector(selectProductsInCart);

	const totalAmount = () =>
		productsInCart.reduce(
			(accumulator, product) =>
				accumulator + product.precio * product.quantity,
			0
		);

	return (
		<div>
			<Drawer
				size="lg"
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">Carrito</DrawerHeader>
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
							<Button colorScheme="orange" isFullWidth>
								Siguiente
							</Button>
						</VStack>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default CartDrawer;
