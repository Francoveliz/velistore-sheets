import React from "react";
import { IconButton } from "@chakra-ui/button";
import { AiOutlinePlus } from "react-icons/ai";

const IncrementButton = ({ onClick, ...rest }) => {
	return (
		<IconButton
			{...rest}
			colorScheme={process.env.NEXT_PUBLIC_PRIMARY_COLOR}
			onClick={onClick}
			isRound
			size="sm"
			aria-label="sumar"
			icon={<AiOutlinePlus />}
		/>
	);
};

export default IncrementButton;
