import React, { useState } from "react";
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
import OrderDrawer from "./order-drawer/OrderDrawer";
import SummaryDrawer from "./SummaryDrawer";

const CartDrawer = ({ isOpen, onOpen, onClose, btnRef }) => {
	const [step, setStep] = useState("summary");
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
					{/* <DrawerCloseButton />
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
							<Button
								onClick={() => setStep("form")}
								colorScheme="orange"
								isFullWidth>
								Siguiente
							</Button>
						</VStack>
					</DrawerFooter> */}
					{step === "summary" && <SummaryDrawer setStep={setStep} />}
					{step === "form" && <OrderDrawer setStep={setStep} />}
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default CartDrawer;
