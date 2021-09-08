import React, { useState } from "react";
import { useFormik } from "formik";
import {
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	VStack,
	Text,
	HStack,
	Button,
	Input,
	FormControl,
	FormLabel,
	RadioGroup,
	Radio,
	Divider,
	IconButton,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../redux/slices/cartSlice";

const OrderDrawer = ({ setStep }) => {
	const productsInCart = useSelector(selectProductsInCart);

	const totalAmount = () =>
		productsInCart.reduce(
			(accumulator, product) =>
				accumulator + product.precio * product.quantity,
			0
		);

	const initialValues = {
		nombre: "",
		metodoDePago: "",
		domicilio: "",
	};

	const handleSubmit = values => {
		const { nombre, metodoDePago, domicilio } = values;
		const productsText = productsInCart.reduce((accumulator, product) => {
			return accumulator.concat(
				"",
				`- [${product.quantity}]* ${product.titulo} > *$${
					product.quantity * product.precio
				} \n`
			);
		}, "");

		const textToSend = productsText.concat(
			"",
			`\n Total: $${totalAmount()} \n\n Nombre: ${nombre} \n Metodo de pago: ${metodoDePago} \n Domicilio: ${domicilio}`
		);
		console.log({ textToSend });
		window.open(
			`https://api.whatsapp.com/send/?phone=541166969916&text=${encodeURIComponent(
				textToSend
			)}`,
			"_blank"
		);
		console.log(values);
	};

	const formik = useFormik({
		initialValues,
		// validationSchema: validationSchema,
		onSubmit: values => handleSubmit(values),
	});

	return (
		<>
			<HStack>
				<IconButton
					variant="ghost"
					onClick={() => setStep("summary")}
					aria-label="atras"
					icon={<AiOutlineArrowLeft />}
				/>
				<DrawerCloseButton />
			</HStack>
			<DrawerHeader borderBottomWidth="1px">
				Completa tu pedido
			</DrawerHeader>
			<DrawerBody>
				<VStack spacing={10}>
					{/* nombre field */}
					<FormControl>
						<FormLabel>Nombre</FormLabel>
						<Input
							type="text"
							id="nombre"
							value={formik.values.nombre}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FormControl>
					{/* metodoDePago field */}
					<FormControl>
						<FormLabel>Método de pago</FormLabel>
						<RadioGroup
							name="metodoDePago"
							id="metodoDePago"
							value={formik.values.metodoDePago}>
							<VStack alignItems="flex-start">
								<Radio
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									size="lg"
									colorScheme="orange"
									value="efectivo">
									efectivo
								</Radio>
								<Divider />
								<Radio
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									size="lg"
									colorScheme="orange"
									value="transferencia bancaria">
									transferencia bancaria
								</Radio>
								<Divider />
								<Radio
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									size="lg"
									colorScheme="orange"
									value="mercado pago">
									mercado pago
								</Radio>
								<Divider />
							</VStack>
						</RadioGroup>
					</FormControl>
					{/* domicilio  field */}
					<FormControl>
						<FormLabel>Domicilio de entrega</FormLabel>
						<Input
							type="text"
							id="domicilio"
							value={formik.values.domicilio}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</FormControl>
				</VStack>
			</DrawerBody>

			<DrawerFooter>
				<VStack spacing={4} w="full">
					<Button
						as="a"
						onClick={formik.handleSubmit}
						colorScheme="green"
						isFullWidth>
						Enviar a Whatsapp
					</Button>
				</VStack>
			</DrawerFooter>
		</>
	);
};

export default OrderDrawer;
