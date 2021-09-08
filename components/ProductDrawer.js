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
	Box,
	Button,
	Input,
	Stack,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
	incrementProductQuantityByAmount,
	addProduct,
	selectProductsInCart,
	incrementProductQuantity,
} from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

const ProductDrawer = ({
	imagen,
	titulo,
	descripcion,
	isOpen,
	onOpen,
	onClose,
	id,
	btnRef,
	precio,
}) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	const productsInCart = useSelector(selectProductsInCart);

	const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

	const increaseQuantity = () => setQuantity(quantity + 1);

	const handleAddProduct = () => {
		const productExistInCart = Boolean(
			productsInCart.find(product => product.id === id)
		);
		if (productExistInCart) {
			dispatch(incrementProductQuantityByAmount({ id, quantity }));
		} else {
			dispatch(addProduct({ titulo, precio, id, quantity }));
		}
		onClose();
	};

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

					<DrawerBody>
						<Box h={40} overflow="hidden" mx={-6}>
							<Image m="auto" maxH="full" src={imagen} />
						</Box>
						<Text fontSize="lg" fontWeight="bold" mb={2}>
							{titulo}
						</Text>
						<Text color="gray.600" mb={8}>
							{descripcion}
						</Text>
						<HStack justifyContent="space-between">
							<Text>Cantidad</Text>
							<HStack>
								<DecrementButton onClick={decreaseQuantity} />
								<Text>{quantity}</Text>
								<IncrementButton onClick={increaseQuantity} />
							</HStack>
						</HStack>
					</DrawerBody>

					<DrawerFooter>
						<Button
							onClick={handleAddProduct}
							colorScheme="orange"
							isFullWidth>
							{`Agregar ${quantity} item`}
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default ProductDrawer;
