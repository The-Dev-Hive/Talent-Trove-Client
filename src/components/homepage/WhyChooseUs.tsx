import WhyChooseUsCard from '../cards/WhyChooseUsCard';

const WhyChooseUs = () => {
  return (
    <div className="  mx-auto max-w-7xl">
      <div className="text-center py-16 bg-white">
        <div className="inline-block hover:bg-indigo-100 mb-4 px-4 py-1 border border-indigo-500 text-indigo-500 rounded-full font-semibold text-xs uppercase tracking-wide">
          Why Hirace
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          New way to get a Job
        </h2>

        <p className="text-gray-600 max-w-md mx-auto">
          Once you gain access to the Hirace platform you start out by adding
          your first team roles.
        </p>
      </div>
      <div className="    gap-6    m-12 lg:m-0 md:m-0 md:p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <WhyChooseUsCard />
        <WhyChooseUsCard />
        <WhyChooseUsCard />
      </div>
    </div>
  );
};

export default WhyChooseUs;
