import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const HomeNav = ({ ...props }: Props) => {
  return <div {...props}>HomeNav</div>;
};
