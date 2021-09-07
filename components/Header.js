import React from "react";
import {
	Box,
	Text,
	VStack,
	Image,
	HStack,
	IconButton,
	Grid,
	Icon,
	GridItem,
} from "@chakra-ui/react";

import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Header = () => {
	return (
		<VStack spacing={0} mb={10}>
			<Box
				mx={{ base: -4, md: 0 }}
				h={32}
				overflow="hidden"
				borderBottomRadius={{ base: "", md: "lg" }}>
				<Image
					src="https://img.pystatic.com/chains/ar/grido-background-7ffb7294-859b-41e6-a7ad-e131ab03cb67.jpg?quality=90&width=414"
					alt="helados"
				/>
			</Box>
			<Grid
				templateColumns={{ md: "repeat(3, 1fr)", base: "repeat(2,1fr)" }}
				templateRows={{ md: "1fr", base: "6rem 1fr" }}>
				<GridItem>
					<Box
						w={28}
						h={28}
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

				<GridItem colStart={{ md: 3 }} rowStart={{ md: 1 }}>
					<HStack justifyContent="flex-end" pt={4}>
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
				<GridItem colSpan={{ base: 2, md: 1 }} colStart={{ md: 2 }}>
					<Box>
						<Text fontSize="2xl" fontWeight="bold">
							Grido
						</Text>
						<Text mb={4}>
							Aquí puedes colocar la descripción de tu comercio.
						</Text>
						<Text color="orange" fontWeight="semibold" display="flex">
							<Icon as={GoLocation} fontSize="1.3rem" mr={1} /> Av.
							Calchaquí 6435, B1888 Florencio Varela, Provincia de Buenos
							Aires
						</Text>
					</Box>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default Header;
