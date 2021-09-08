import { Container } from "@chakra-ui/react";
import CartButton from "../components/CartButton";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";

export default function Home() {
	return (
		<Container maxW="container.xl" pb={32}>
			<Header />
			<ProductsList />
			<CartButton />
		</Container>
	);
}
