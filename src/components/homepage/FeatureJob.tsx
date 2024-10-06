import { JobCard } from '../cards/JobCard';

interface Props extends React.ComponentProps<'div'> {}

export const FeatureJob = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="  mx-auto max-w-screen-xl">
        <div className="p-10 text-center">
          <h1 className="text-3xl font-bold">Featured Jobs</h1>
          <p className="text-gray-600">
            Know your worth and find the job that qualifies your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-12">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};
