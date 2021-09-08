import React, { useRef } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../redux/slices/cartSlice";

const CartButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	const productsInCart = useSelector(selectProductsInCart);

	const totalAmount = () =>
		productsInCart.reduce(
			(accumulator, product) =>
				accumulator + product.precio * product.quantity,
			0
		);

	const totalQuantity = productsInCart.reduce(
		(accumulator, product) => accumulator + product.quantity,
		0
	);

	return (
		<>
			{Boolean(productsInCart.length) && (
				<>
					<Button
						onClick={onOpen}
						colorScheme="orange"
						position="sticky"
						bottom="1rem"
						isFullWidth>
						{`Carrito ${totalQuantity} items $${totalAmount()}`}
					</Button>
					<CartDrawer
						isOpen={isOpen}
						onClose={onClose}
						onOpen={onOpen}
						btnRef={btnRef}
					/>
				</>
			)}
		</>
	);
};

export default CartButton;
