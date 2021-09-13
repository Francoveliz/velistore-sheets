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
	Icon,
	Box,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectProductsInCart } from "../../redux/slices/cartSlice";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { validationSchema } from "./validationSchema";
import { BiErrorCircle } from "react-icons/bi";

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
				`- ${product.quantity === 1 ? "" : `*[ ${product.quantity} ]*`} ${
					product.titulo
				} > *$${product.quantity * product.precio}* \n`
			);
		}, "");

		const textToSend = productsText.concat(
			"",
			`\n *Total: $${totalAmount()}* \n\n Nombre: *${nombre}* \n Metodo de pago: *${metodoDePago}* \n Domicilio: *${domicilio}*`
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

	const handleInputError = (input, formik) => {
		if (formik.touched[input] && formik.errors[input]) {
			return (
				<HStack color="red">
					<Icon as={BiErrorCircle} />
					<Text>{formik.errors[input]}</Text>
				</HStack>
			);
		}
		return null;
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: values => handleSubmit(values),
	});

	return (
		<Box position="relative">
			<IconButton
				variant="ghost"
				onClick={() => setStep("summary")}
				aria-label="atras"
				position="absolute"
				fontSize="1.2rem"
				top="5px"
				icon={<AiOutlineArrowLeft />}
			/>

			<DrawerCloseButton />
			<DrawerHeader mt={6} borderBottomWidth="1px">
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
						{handleInputError("nombre", formik)}
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
									colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
									value="efectivo">
									Efectivo
								</Radio>
								<Divider />
								<Radio
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									size="lg"
									colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
									value="transferencia bancaria">
									Transferencia bancaria
								</Radio>
								<Divider />
								<Radio
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									size="lg"
									colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
									value="mercado pago">
									Mercado pago
								</Radio>
								<Divider />
							</VStack>
							{handleInputError("metodoDePago", formik)}
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
						{handleInputError("domicilio", formik)}
					</FormControl>
				</VStack>
			</DrawerBody>

			<DrawerFooter>
				<VStack spacing={4} w="full">
					<Button
						leftIcon={<AiOutlineWhatsApp fontSize="1.5rem" />}
						onClick={formik.handleSubmit}
						colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
						isFullWidth>
						Enviar a Whatsapp
					</Button>
				</VStack>
			</DrawerFooter>
		</Box>
	);
};

export default OrderDrawer;
