import { Signal, User2Icon } from 'lucide-react';
import { HowWorksCard } from '../cards';

export const HowWorks = () => {
  return (
    <div className=" mx-auto max-w-7xl">
      <div className="text-center py-16 bg-white">
        <div className="inline-block hover:bg-indigo-100 mb-4 px-4 py-1 border border-indigo-500 text-indigo-500 rounded-full font-semibold text-xs uppercase tracking-wide">
          HOW IT WORKS
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Getting started is easy.
        </h2>

        <p className="text-gray-600 max-w-md mx-auto">
          Create a profile and we will match you will the best dream companies
          and jobs the world
        </p>
      </div>
      <div className=" border-2 border-gray-300 flex flex-col md:flex-row items-center justify-center  rounded-lg p-6 md:p-10 m-4 space-y-4 md:space-y-0 md:space-x-6">
        <div className="hidden bg-gradient-to-r from-blue-200 to-purple-300  rounded-lg p-4 lg:flex md:flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-md w-64 h-80 flex flex-col items-center">
            <div className="rounded-full bg-gray-200 w-12 h-12 mb-4 flex items-center justify-center">
              <span className="text-indigo-600 text-xl font-bold">
                <User2Icon />
              </span>
            </div>
            <button className="text-white bg-indigo-600 rounded-full py-1 px-4 mb-4">
              Upload Photo
            </button>
            <p className="text-gray-500 font-semibold mb-2">Personal Data</p>
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-xl font-bold text-indigo-600 mb-2">01</h2>
          <h1 className="text-2xl font-semibold text-gray-800 mb-3">
            Login or Register{' '}
          </h1>
          <p className="text-gray-600 mb-4">
            Follow The whole step and you are just ready to get started
          </p>
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="text-indigo-600 text-lg mr-2">
                <Signal />
              </span>
              <p className="text-gray-700">
                <strong>One workflow.</strong> Easily collaborate with teams to
                find & hire the right candidate.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-indigo-600 text-lg mr-2">
                <Signal />
              </span>
              <p className="text-gray-700">
                <strong>Easier Applying.</strong> Create an account that will
                engage your profile.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="     gap-6    m-12 lg:m-0 md:m-0 md:p-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <HowWorksCard />
        <HowWorksCard />
        <HowWorksCard />
        <HowWorksCard />
      </div>
    </div>
  );
};
