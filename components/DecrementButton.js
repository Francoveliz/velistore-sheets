import React from "react";
import { IconButton } from "@chakra-ui/button";
import { AiOutlineMinus } from "react-icons/ai";

const DecrementButton = ({ onClick, ...rest }) => {
	return (
		<IconButton
			{...rest}
			colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
			onClick={onClick}
			isRound
			size="sm"
			aria-label="restar"
			icon={<AiOutlineMinus />}
		/>
	);
};

export default DecrementButton;
