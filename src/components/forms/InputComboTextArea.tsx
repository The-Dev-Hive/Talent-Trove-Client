import { cn } from "@/utils";
import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"textarea"> {
	register: UseFormRegisterReturn;
	error: string | undefined;
	wrapperClassName?: string;
}

export const InputComboTextArea = ({ className, register, wrapperClassName, error, ...props }: Props) => {
	return (
		<div className={cn("mt-2", wrapperClassName)}>
			<textarea
				className={cn("inputCombo-field px-2", className, {
					"border-red-700": error,
				})}
				{...register}
				{...props}
			/>
		</div>
	);
};
