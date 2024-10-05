import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const JobCategoryCards = ({ ...props }: Props) => {
  return <div {...props}>JobCategoryCards</div>;
};
