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

const ProductDrawer = ({
	imagen,
	titulo,
	descripcion,
	isOpen,
	onOpen,
	onClose,
	btnRef,
}) => {
	const [amount, setAmount] = useState(1);

	const decreaseAmount = () => amount > 1 && setAmount(amount - 1);

	const increaseAmount = () => setAmount(amount + 1);

	return (
		<div>
			<Drawer
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
								<IconButton
									onClick={decreaseAmount}
									isRound
									size="sm"
									aria-label="restar"
									icon={<AiOutlineMinus />}
								/>
								<Text>{amount}</Text>
								<IconButton
									onClick={increaseAmount}
									isRound
									size="sm"
									aria-label="sumar"
									icon={<AiOutlinePlus />}
								/>
							</HStack>
						</HStack>
					</DrawerBody>

					<DrawerFooter>
						<Button colorScheme="blue" isFullWidth>
							{`Agregar ${amount} item`}
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default ProductDrawer;
