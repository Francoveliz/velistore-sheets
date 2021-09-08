import { HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import DecrementButton from "./DecrementButton";
import {
	decrementProductQuantity,
	incrementProductQuantity,
	removeProduct,
} from "../redux/slices/cartSlice";
import IncrementButton from "./IncrementButton";

const CartItem = ({ titulo, quantity, precio, id }) => {
	const dispatch = useDispatch();
	const subtotal = quantity * precio;

	const handleDecrement = () => {
		if (quantity === 1) {
			dispatch(removeProduct(id));
		} else {
			dispatch(decrementProductQuantity(id));
		}
	};

	const handleIncrement = () => {
		dispatch(incrementProductQuantity(id));
	};

	return (
		<HStack
			justifyContent="space-between"
			alignItems="flex-start"
			mb={4}
			spacing={4}>
			<VStack alignItems="flex-start" spacing={1}>
				<Text fontWeight="medium">{titulo}</Text>
				<HStack>
					<DecrementButton onClick={handleDecrement} />
					<Text>{quantity}</Text>
					<IncrementButton onClick={handleIncrement} />
				</HStack>
			</VStack>
			<Text fontWeight="medium">{`$${subtotal}`}</Text>
		</HStack>
	);
};

export default CartItem;
