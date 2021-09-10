import React, { useState } from "react";
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react";
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
				size="sm"
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					{step === "summary" && <SummaryDrawer setStep={setStep} />}
					{step === "form" && <OrderDrawer setStep={setStep} />}
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default CartDrawer;
