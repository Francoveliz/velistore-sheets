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

const Header = ({ ...rest }) => {
	return (
		<VStack spacing={0} {...rest}>
			<Box
				mx={{ base: -4, md: 0 }}
				h={{ base: 32, md: 64 }}
				overflow="hidden"
				borderBottomRadius={{ base: "", md: "lg" }}>
				<Image
					src="https://img.pystatic.com/chains/ar/grido-background-7ffb7294-859b-41e6-a7ad-e131ab03cb67.jpg?quality=90&width=414"
					alt="helados"
				/>
			</Box>
			<Grid
				w="full"
				templateColumns={{ md: "auto 1fr auto", base: "repeat(2,1fr)" }}
				templateRows={{ md: "1fr", base: "6rem 1fr" }}>
				<GridItem>
					<Box
						w={{ base: 28, md: 36 }}
						h={{ base: 28, md: 36 }}
						borderRadius="full"
						boxShadow="md"
						display="flex"
						backgroundColor="white"
						overflow="hidden"
						ml={{ base: 0, md: 4 }}
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
							colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
							aria-label="whatsapp"
							icon={<FaWhatsapp />}
							isRound
							fontSize="1.2rem"
						/>
						<IconButton
							colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
							aria-label="instagram"
							icon={<FaInstagram />}
							isRound
							fontSize="1.2rem"
						/>
						<IconButton
							colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
							aria-label="instagram"
							icon={<FaFacebookF />}
							isRound
							fontSize="1.2rem"
						/>
					</HStack>
				</GridItem>
				<GridItem
					ml={{ base: 0, md: 4 }}
					pt={{ base: 0, md: 4 }}
					colSpan={{ base: 2, md: 1 }}
					colStart={{ md: 2 }}>
					<Box>
						<Text
							fontSize={{ base: "2xl", md: "4xl" }}
							lineHeight={{ base: 1, md: 1.5 }}
							fontWeight="bold">
							Grido
						</Text>
						<Text mb={4}>
							Aquí puedes colocar la descripción de tu comercio.
						</Text>
						<Text
							color={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
							fontWeight="semibold"
							display="flex">
							<Icon as={GoLocation} fontSize="1.3rem" mr={1} /> Av.
							{`${"Calchaquí 6435, B1888 Florencio Varela, Provincia de Buenos Aires".slice(
								0,
								35
							)} ...`}
						</Text>
					</Box>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default Header;
