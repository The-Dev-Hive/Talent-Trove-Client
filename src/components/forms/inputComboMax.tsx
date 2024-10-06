import { cn } from '@/utils';
import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

interface Props extends React.ComponentProps<'input'> {
  register: UseFormRegisterReturn;
  error: string | undefined;
  labelName: string;
  wrapperClassName?: string;
}

export const InputComboMax = ({
  className,
  register,
  wrapperClassName,
  labelName,
  type = 'text',
  ...props
}: Props) => {
  const { name, ...restRegister } = register;
  return (
    <div className={cn(wrapperClassName)}>
      <label
        className="mb-2 block text-sm capitalize text-gray-600 dark:text-gray-200"
        htmlFor={name}
      >
        {labelName}
      </label>
      <input
        type={type}
        className={cn(
          'mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400',
          className
        )}
        name={name}
        {...restRegister}
        {...props}
      />
    </div>
  );
};
