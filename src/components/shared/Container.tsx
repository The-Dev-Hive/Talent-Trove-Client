import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
};
export const Container = ({
  children,
  className = '',
  size = 'lg',
}: ContainerProps) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-3xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };
  return (
    <div className={`mx-auto ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
