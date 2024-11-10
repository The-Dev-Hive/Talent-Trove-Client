import WhyChooseUsCard from '../cards/WhyChooseUsCard';
import { SectionHeader } from '../shared';

const WhyChooseUs = () => {
  return (
    <div className="">
      <SectionHeader
        title="Why Talent Trove"
        subtitle="New way to get a job"
        description="Once you gain access to the Hirace platform you start out by adding your first team roles."
      />
      <div className="gap-6 m-12 lg:m-0 md:m-0 md:p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <WhyChooseUsCard />
        <WhyChooseUsCard />
        <WhyChooseUsCard />
      </div>
    </div>
  );
};

export default WhyChooseUs;
