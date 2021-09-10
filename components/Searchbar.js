import React, { useEffect, useRef, useState } from "react";
import { Box, Input, Icon, HStack } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/slices/searchSlice";

const Searchbar = ({ ...rest }) => {
	const [text, setText] = useState("");
	const searchInputRef = useRef();
	const dispatch = useDispatch();

	const handleOnChange = e => {
		setText(e.target.value);
		dispatch(setSearchText(e.target.value));
	};

	const handleInputFocus = () => searchInputRef.current.focus();

	return (
		<HStack {...rest} spacing={0} w="full">
			<Box
				bg="orange"
				h={10}
				w={12}
				onClick={handleInputFocus}
				borderRadius="md"
				borderRightRadius={0}
				display="flex"
				justifyContent="center"
				alignItems="center">
				<Icon as={AiOutlineSearch} color="white" />
			</Box>
			<Input
				ref={searchInputRef}
				borderLeftRadius={0}
				placeholder="buscar..."
				type="text"
				value={text}
				onChange={e => handleOnChange(e)}
			/>
		</HStack>
	);
};

export default Searchbar;
