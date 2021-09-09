import React, { useEffect, useState } from "react";
import { Box, Input, Icon, HStack } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/slices/searchSlice";

const Searchbar = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	const handleOnChange = e => {
		setText(e.target.value);
		dispatch(setSearchText(e.target.value));
	};

	return (
		<>
			<HStack>
				<Box
					bg="orange"
					h={10}
					w={12}
					borderRadius="md"
					display="flex"
					justifyContent="center"
					alignItems="center">
					<Icon as={AiOutlineSearch} color="white" />
				</Box>
				<Input
					type="text"
					value={text}
					onChange={e => handleOnChange(e)}
				/>
			</HStack>
		</>
	);
};

export default Searchbar;
