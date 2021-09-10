import { Container, Divider, VStack } from "@chakra-ui/react";
import CartButton from "../components/CartButton";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Searchbar from "../components/Searchbar";

export default function Home() {
	return (
		<Container maxW="container.xl">
			<VStack spacing={8}>
				<Header />
				<Divider />
				<Searchbar />
				<Categories />
				<Divider />
				<ProductsList />
				<CartButton />
				<Footer />
			</VStack>
		</Container>
	);
}
