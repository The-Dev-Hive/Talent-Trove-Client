import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const JobCard = ({ ...props }: Props) => {
  return <div {...props}>JobCard</div>;
};
