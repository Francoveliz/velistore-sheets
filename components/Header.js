import React from "react";
import {
	Box,
	Text,
	Stack,
	Image,
	HStack,
	IconButton,
	Grid,
	GridItem,
} from "@chakra-ui/react";

import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const Header = () => {
	return (
		<Box>
			<Box h={64} overflow="hidden" borderBottomRadius="lg">
				<Image
					src="https://img.pystatic.com/chains/ar/grido-background-7ffb7294-859b-41e6-a7ad-e131ab03cb67.jpg?quality=90&width=414"
					alt="helados"
				/>
			</Box>
			<Grid templateRows="1fr, 1fr" templateColumns="1fr, 1fr" gap={4}>
				<GridItem colSpan={1} rowSpan={1}>
					<Box
						w={36}
						h={36}
						ms={6}
						borderRadius="full"
						boxShadow="md"
						display="flex"
						backgroundColor="white"
						overflow="hidden"
						justifyContent="center"
						transform="translateY(-30%)"
						justifyItems="center">
						<Image
							m="auto"
							zIndex="-1"
							src="https://infonegocios.info/uploads/logo-grido-1800x453.jpg"
							alt="logo"
						/>
					</Box>
				</GridItem>

				<GridItem colSpan={1} rowSpan={1}>
					<HStack>
						<IconButton
							colorScheme="orange"
							aria-label="whatsapp"
							icon={<FaWhatsapp />}
							isRound
							fontSize="25px"
						/>
						<IconButton
							colorScheme="orange"
							aria-label="instagram"
							icon={<FaInstagram />}
							isRound
							fontSize="25px"
						/>
						<IconButton
							colorScheme="orange"
							aria-label="instagram"
							icon={<FaFacebookF />}
							isRound
							fontSize="23px"
						/>
					</HStack>
				</GridItem>
				<GridItem colSpan={2} rowSpan={1}>
					<Box>
						<Text fontSize="5xl">Grido</Text>
						<Text>Aquí puedes colocar la descripción de tu comercio.</Text>
						<Text>
							Av. Calchaquí 6435, B1888 Florencio Varela, Provincia de
							Buenos Aires
						</Text>
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default Header;
