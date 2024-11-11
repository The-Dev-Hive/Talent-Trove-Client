import { JobCard } from '../cards/JobCard';
import { SectionHeader } from '../shared';

interface Props extends React.ComponentProps<'div'> {}

export const FeatureJob = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionHeader
        title="Featured Jobs"
        subtitle="Top Opportunities Await"
        description="Know your worth and find the job that qualifies your life"
      />

      <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-12">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};
