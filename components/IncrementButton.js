import React from "react";
import { IconButton } from "@chakra-ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { primaryColor } from "../utils/enviromentVariables";

const IncrementButton = ({ onClick, ...rest }) => {
	return (
		<IconButton
			{...rest}
			colorScheme={primaryColor}
			onClick={onClick}
			isRound
			size="sm"
			aria-label="sumar"
			icon={<AiOutlinePlus />}
		/>
	);
};

export default IncrementButton;
