import React from 'react';
import { CategoryOfJob } from '../cards/JobCategoryCards';
interface Props extends React.ComponentProps<'div'> {}

export const TopJobCategoryList = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className=" mx-auto max-w-7xl  ">
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Popular Job Categories</h1>
          <p className="text-gray-600">2024 jobs live - 293 added today</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12 ">
          <CategoryOfJob />
          <CategoryOfJob />
          <CategoryOfJob />
          <CategoryOfJob />
        </div>
      </div>
    </div>
  );
};
