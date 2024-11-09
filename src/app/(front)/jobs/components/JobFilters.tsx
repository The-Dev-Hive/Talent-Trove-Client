import { useState } from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const JobFilters = ({ ...props }: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const [widthIncrease, setWidthIncrease] = useState(false);

  const handleSwitchChange = () => {
    setIsToggle(!isToggle);
    setWidthIncrease(!widthIncrease);
  };

  return (
    <div className="lg:w-1/4 w-full p-4" {...props}>
      <p className=" text-indigo-600 tex-xl      font-bold mb-1">Clear</p>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="font-bold text-lg mb-6">Job Type</h3>

        <div className="flex justify-between flex-row lg:flex-col mb-6">
          <div className="flex flex-col w-full">
            <label className="inline-flex items-center ">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600 "
              />
              <span className="ml-2 text-gray-700">Full-time</span>
            </label>
          </div>

          <div className="flex flex-col w-full">
            <h3 className="font-bold mb-2 lg:mt-6">Remote Only</h3>
            <div
              className={`${
                isToggle ? 'bg-blue-500' : 'bg-gray-300'
              } relative w-14 h-8 rounded-full transition-colors cursor-pointer p-1`}
              onClick={handleSwitchChange}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`${isToggle ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[25px]' : '!w-[22px]'} w-[22px] h-[22px] rounded-full bg-white transition-all duration-200`}
                ></div>
              </div>
            </div>
            <div className="mt-2 text-gray-700 font-semibold">
              {isToggle ? 'ON' : 'OFF'}
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-row lg:flex-col mb-6">
          <div className="flex flex-col w-full">
            <h3 className="font-bold mb-4 lg:mt-6">Job Roles</h3>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600"
              />
              <span className="ml-2 text-gray-700">Developer</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600"
              />
              <span className="ml-2 text-gray-700">Developer</span>
            </label>
          </div>

          <div className="flex flex-col w-full">
            <h3 className="font-bold mb-4 lg:mt-6">Salary Range</h3>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600"
              />
              <span className="ml-2 text-gray-700">$20K - $50K</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600"
              />
              <span className="ml-2 text-gray-700">$20K - $50K</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4  text-blue-600"
              />
              <span className="ml-2 text-gray-700">$20K - $50K</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col p-5 mt-6 border-t border-gray-200">
          <label htmlFor="location" className="mb-2 font-bold text-gray-700">
            Location
          </label>
          <select
            id="location"
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">Anywhere</option>
            <option value="option1">Bogura</option>
            <option value="option2">Dhaka</option>
            <option value="option3">Barishal</option>
          </select>
        </div>
      </div>
    </div>
  );
};
