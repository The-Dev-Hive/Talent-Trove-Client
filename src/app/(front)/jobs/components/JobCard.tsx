'use client';
import { FaBookmark, FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { CiTimer } from 'react-icons/ci';
import { FaMoneyBill1Wave } from 'react-icons/fa6';

import Image from 'next/image';
import { cn } from '@/utils';
import { useState } from 'react';

interface Props extends React.ComponentProps<'div'> {}

export const JobCard = ({ ...props }: Props) => {
  const [isToggle, setIsToggle] = useState(false);
  const [widthIncrease, setWidthIncrease] = useState(false);

  const handleSwitchChange = () => {
    setIsToggle(!isToggle);
    setWidthIncrease(!widthIncrease);
  };
  return (
    <div className=" pt-16 pb-12 flex justify-between  flex-col-reverse mx-auto  max-w-7xl lg:flex-row">
      {/* Main Content */}
      <div className="lg:w-3/4 w-full flex flex-col p-1">
        {/* Search Bar */}
        <div className="flex items-center max-w-lg mx-auto">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Search Your Jobs.."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>

        {/* Title */}
        <h1 className="px-4 text-3xl font-bold mb-6 mt-7">Latest Jobs</h1>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 px-4">
          <div
            {...props}
            className="flex flex-col p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-indigo-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  <Image
                    src={'https://i.postimg.cc/0yx9LBwm/1-2.png'}
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="lg:text-lg sm:text-sm">
                    Software Engineer (Android), Libraries
                  </h2>
                </div>
              </div>
              <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FaBookmark className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center text-gray-600 space-x-6 text-sm mb-4">
              <div className="flex items-center gap-2">
                <FaShoppingBag className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Segment</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-5 w-5 text-red-500" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <CiTimer className="h-5 w-5 text-green-500" />
                <span>11 hours ago</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <FaMoneyBill1Wave className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">$35k - $45k</span>
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { type: 'full-time', label: 'Full Time' },
                { type: 'private', label: 'Private' },
                { type: 'urgent', label: 'Urgent' },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className={cn('text-sm px-2 py-1 rounded-lg', {
                    'bg-blue-100 text-blue-600': tag.type === 'full-time',
                    'bg-green-100 text-green-600': tag.type === 'private',
                    'bg-yellow-100 text-yellow-600':
                      tag.type !== 'full-time' && tag.type !== 'private',
                  })}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div
            {...props}
            className="flex flex-col p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-indigo-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  <Image
                    src={'https://i.postimg.cc/0yx9LBwm/1-2.png'}
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="lg:text-lg sm:text-sm">
                    Software Engineer (Android), Libraries
                  </h2>
                </div>
              </div>
              <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FaBookmark className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center text-gray-600 space-x-6 text-sm mb-4">
              <div className="flex items-center gap-2">
                <FaShoppingBag className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Segment</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-5 w-5 text-red-500" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <CiTimer className="h-5 w-5 text-green-500" />
                <span>11 hours ago</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <FaMoneyBill1Wave className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">$35k - $45k</span>
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { type: 'full-time', label: 'Full Time' },
                { type: 'private', label: 'Private' },
                { type: 'urgent', label: 'Urgent' },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className={cn('text-sm px-2 py-1 rounded-lg', {
                    'bg-blue-100 text-blue-600': tag.type === 'full-time',
                    'bg-green-100 text-green-600': tag.type === 'private',
                    'bg-yellow-100 text-yellow-600':
                      tag.type !== 'full-time' && tag.type !== 'private',
                  })}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div
            {...props}
            className="flex flex-col p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-indigo-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  <Image
                    src={'https://i.postimg.cc/0yx9LBwm/1-2.png'}
                    alt="Company Logo"
                    className="w-full h-full object-cover rounded-full"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2 className="lg:text-lg sm:text-sm">
                    Software Engineer (Android), Libraries
                  </h2>
                </div>
              </div>
              <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FaBookmark className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center text-gray-600 space-x-6 text-sm mb-4">
              <div className="flex items-center gap-2">
                <FaShoppingBag className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Segment</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-5 w-5 text-red-500" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <CiTimer className="h-5 w-5 text-green-500" />
                <span>11 hours ago</span>
              </div>
              <div className="flex items-center gap-2 hidden lg:flex">
                <FaMoneyBill1Wave className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">$35k - $45k</span>
              </div>
            </div>
            <div className="flex gap-2">
              {[
                { type: 'full-time', label: 'Full Time' },
                { type: 'private', label: 'Private' },
                { type: 'urgent', label: 'Urgent' },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className={cn('text-sm px-2 py-1 rounded-lg', {
                    'bg-blue-100 text-blue-600': tag.type === 'full-time',
                    'bg-green-100 text-green-600': tag.type === 'private',
                    'bg-yellow-100 text-yellow-600':
                      tag.type !== 'full-time' && tag.type !== 'private',
                  })}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          {/* add more card */}
        </div>
      </div>
      <div className="lg:w-1/4 w-full p-4">
        <p className=" text-indigo-600 tex-xl      font-bold mb-1">Clear</p>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-bold text-lg mb-6">Job Type</h3>

    
          <div className="flex justify-between flex-row lg:flex-col mb-6">
            <div className="flex flex-col w-full">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">Full-time</span>
              </label>
            </div>

      
            <div className="flex flex-col w-full">
              <h3 className="font-bold mb-2 lg:mt-6">Remote Only</h3>
              <div
                className={`${isToggle ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[55px] cursor-pointer transition-all h-[30px] duration-200`}
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
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">Developer</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">Developer</span>
              </label>
            </div>

            <div className="flex flex-col w-full">
              <h3 className="font-bold mb-4 lg:mt-6">Salary Range</h3>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">$20K - $50K</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">$20K - $50K</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
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
    </div>
  );
};
 
