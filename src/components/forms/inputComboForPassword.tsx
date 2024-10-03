"use client";

import { cn } from "@/utils";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
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

export const InputComboForPassword = ({
	icon,
	className,
	register,
	wrapperClassName,
	error,
	labelName,
	isShowError = true,
	...props
}: Props) => {
	const [isShow, setIsShow] = useState(false);
	const toggleShowPassword = () => {
		setIsShow((pre) => !pre);
	};
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
					type={isShow ? "text" : "password"}
					{...props}
					{...register}
				/>
				<button onClick={toggleShowPassword} className="absolute bottom-0 right-3 top-0 outline-none" type="button">
					{!isShow ? <EyeOff className="text-gray-600" /> : <Eye className="text-gray-600" />}
				</button>
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
