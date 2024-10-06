import { cn } from '@/utils';
import React from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Input, Label } from '../ui';

interface Props extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  register: UseFormRegisterReturn;
  error: string | undefined;
  wrapperClassName?: string;
  labelName?: string;
  isShowError?: boolean;
}

export const InputCombo = ({
  //   icon,
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
        <Label htmlFor={register.name} className="inputCombo-label">
          {labelName}
        </Label>
      )}

      <div className={cn('inputCombo-wrapper ', wrapperClassName)}>
        <Input
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            { 'border-red-700': error },
            className
          )}
          {...register}
          {...props}
        />
      </div>

      {isShowError && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="inputCombo-error"
        >
          {error || ''}
        </motion.p>
      )}
    </div>
  );
};
