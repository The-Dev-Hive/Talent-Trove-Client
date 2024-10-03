import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface Props extends React.ComponentProps<"div"> {
	register: UseFormRegisterReturn;
	error: string | undefined;
	labelName?: string;
	isShowError?: boolean;
}

export const InputComboSelectArray = ({ ...props }: Props) => {
	return <div {...props}>InputComboSelectArray</div>;
};
