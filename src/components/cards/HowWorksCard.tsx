import React from 'react';

export const HowWorksCard = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col  border-t-4 border-gray-300 hover:border-indigo-600 p-4 m-2   transition duration-300 ease-in-out">
        <h2 className="text-xl font-bold text-gray-500 mb-2">01</h2>
        <h1 className="text-lg font-semibold text-gray-800 mb-1 hover:text-indigo-700">
          Login or Register
        </h1>
        <p className="text-gray-600  ">
          Follow the whole step and you are just ready to get started.
        </p>
      </div>
    </div>
  );
};
