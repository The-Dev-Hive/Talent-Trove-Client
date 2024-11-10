import React from 'react';
import { CategoryOfJob } from '../cards/JobCategoryCards';
import { SectionHeader } from '../shared';
interface Props extends React.ComponentProps<'div'> {}

export const TopJobCategoryList = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionHeader
        title="Popoular Job Categories"
        subtitle="Explore Top Categories"
        description="Browse through various job categories to find the perfect fit for your skills and interests."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12 ">
        <CategoryOfJob />
        <CategoryOfJob />
        <CategoryOfJob />
        <CategoryOfJob />
      </div>
    </div>
  );
};
