import { jobCategories } from '@/data/temporary';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const JobCategoryCards = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="mx-auto max-w-7xl  ">
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Popular Job Categories</h1>
          <p className="text-gray-600">2024 jobs live - 293 added today</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md"
            >
              <div className="bg-slate-100 p-4 rounded-lg text-blue-600 hover:bg-indigo-500 transition-bg duration-300   hover:text-white">
                {category.icon}
              </div>
              <div>
                <h2 className=" text-slate-600 font-semibold">
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  ({category.positions} open positions)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
