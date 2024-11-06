import { Leaf } from 'lucide-react';

const WhyChooseUsCard = () => {
  return (
    <div className="max-w-sm p-6 bg-white hover:bg-indigo-100 hover:shadow-md rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-200 text-teal-700 font-bold text-lg mb-4">
        <Leaf className=" text-black" />
      </div>
      <h2 className="text-xl font-semibold text-gray-900">
        Manage candidates easily
      </h2>
      <p className="text-gray-600 mt-2">
        Our easy-to-use software lets you evaluate candidates and move them
        faster.
      </p>
      <button className="text-indigo-600 font-semibold mt-4 inline-flex items-center">
        Learn More
        <span className="ml-1">→</span>
      </button>
    </div>
  );
};

export default WhyChooseUsCard;
