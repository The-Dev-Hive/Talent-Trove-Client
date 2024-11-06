import { cn } from '@/utils';
import Image from 'next/image';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const HeroUser = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn('flex -space-x-2 overflow-hidden', className)}
      {...props}
    >
      <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://i.pravatar.cc/150?img=1"
        alt="Profile 1"
        width={100}
        height={100}
      />
      <Image
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://i.pravatar.cc/150?img=1"
        alt="Profile 1"
        width={100}
        height={100}
      />
      <Image
        width={100}
        height={100}
        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://i.pravatar.cc/150?img=1"
        alt="Profile 1"
      />
    </div>
  );
};
