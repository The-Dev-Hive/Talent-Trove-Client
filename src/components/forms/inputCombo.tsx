import { cn } from "@/utils";
import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface Props extends React.ComponentProps<"input"> {
	icon: React.ReactNode;
	register: UseFormRegisterReturn;
	error: string | undefined;
	wrapperClassName?: string;
	labelName?: string;
	isShowError?: boolean;
}

export const InputCombo = ({
	icon,
	className,
	register,
	wrapperClassName,
	error,
	labelName,
	isShowError = true,
	...props
}: Props) => {
	return (
		<div>
			{labelName && (
				<label htmlFor={register.name} className="inputCombo-label">
					{labelName}
				</label>
			)}

			<div className={cn("inputCombo-wrapper", wrapperClassName)}>
				<span className="absolute">{icon}</span>
				<input
					className={cn("inputCombo-field", className, {
						"border-red-700": error,
					})}
					{...register}
					{...props}
				/>
			</div>

			<AnimatePresence>
				{isShowError && (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="inputCombo-error"
					>
						{error || ""}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	);
};
