import React, { useRef } from "react";
import { Button, useDisclosure, Badge, Box } from "@chakra-ui/react";
import CartDrawer from "./CartDrawer";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../redux/slices/cartSlice";
import { FiShoppingCart } from "react-icons/fi";

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
					<Box
						position="sticky"
						bottom="1rem"
						left="50%"
						borderRadius="full"
						onClick={onOpen}
						transform="translateX(-50%)"
						h={14}
						w={14}
						bg="orange"
						display="flex"
						justifyContent="center"
						alignItems="center">
						<Box>
							<FiShoppingCart color="white" fontSize="1.5rem" />
						</Box>
						<Badge
							position="absolute"
							top={0}
							right={0}
							w={5}
							h={5}
							p={0}
							rounded="full"
							display="flex"
							justifyContent="center"
							alignItems="center"
							colorScheme="orange">{`${totalQuantity}`}</Badge>
					</Box>

					{/* {`Tu pedido ${totalQuantity} items $${totalAmount()}`} */}

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
