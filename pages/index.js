import { Container, Divider, VStack, Stack, Text } from "@chakra-ui/react";
import CartButton from "../components/CartButton";
import Categories from "../components/Categories";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Searchbar from "../components/Searchbar";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
	return (
		<Container maxW="container.xl">
			<VStack spacing={8}>
				<Header mb={12} />
				<SectionTitle text="Destacados" />
				<FeaturedSection />
				<Divider />
				<Stack
					direction={{ md: "row-reverse", base: "column" }}
					w="full"
					justifyContent="flex-end"
					spacing={4}>
					<Searchbar />
					<Categories />
				</Stack>
				<Divider />
				<SectionTitle text="Productos" />
				<ProductsList />
				<CartButton />
				<Footer />
			</VStack>
		</Container>
	);
}
