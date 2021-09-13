import React from "react";
import { Divider, Box, Text, VStack } from "@chakra-ui/layout";

const SectionTitle = ({ text }) => {
	return (
		<VStack w="full" alignItems="flex-start">
			<Text color="gray.600" fontSize="4xl" lineHeight="1">
				{text}
			</Text>
			<Divider />
		</VStack>
	);
};

export default SectionTitle;
