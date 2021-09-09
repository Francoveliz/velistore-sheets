import { Container } from "@chakra-ui/react";
import CartButton from "../components/CartButton";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Searchbar from "../components/Searchbar";

export default function Home() {
	return (
		<Container maxW="container.xl" pb={32}>
			<Header />
			<Categories mb={5} />
			<Searchbar mb={10} />
			<ProductsList />
			<CartButton />
		</Container>
	);
}
