'use client';

import { JobCard } from '@/components/cards/JobCard';
import { JobSearch } from './JobSearch';
import { JobFilters } from './JobFilters';

interface Props extends React.ComponentProps<'div'> {}

export const ShowJobs = ({ ...props }: Props) => {
  return (
    <div
      className=" pt-16 pb-12 flex justify-between p-6 lg:p-0  flex-col-reverse mx-auto  max-w-7xl lg:flex-row"
      {...props}
    >
      <div className="w-full   ">
        <JobSearch className=" w-full mx-2" />

        <h1 className="px-4 text-3xl font-bold mb-6 mt-7">Latest Jobs</h1>

        <div id="job container" className="space-y-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>
      </div>

      <JobFilters />
    </div>
  );
};
