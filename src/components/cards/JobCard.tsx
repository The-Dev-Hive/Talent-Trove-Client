import { FaBookmark, FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { CiTimer } from 'react-icons/ci';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import Image from 'next/image';
import { cn } from '@/utils';
interface Props extends React.ComponentProps<'div'> {}

export const JobCard = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="flex flex-col p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-indigo-100 hover:shadow-lg transition-shadow duration-300   ">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-18 h-12 lg:w-12 md:w-12 bg-gray-200 rounded-full flex justify-center items-center">
              <Image
                src={'https://i.postimg.cc/0yx9LBwm/1-2.png'}
                alt={''}
                className="w-full h-full object-cover rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h2 className="lg:text-lg sm:text-sm   ">
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
          <div className="flex items-center    gap-2">
            <CiTimer className="h-5   hidden lg:block md:block   w-5 text-green-500" />
            <span className=" hidden lg:block md:block">11 hours ago</span>
          </div>
          <div className="flex items-center    gap-2">
            <FaMoneyBill1Wave className="h-5 w-5  hidden lg:block md:block text-yellow-500" />
            <span className="font-semibold  hidden lg:block md:block">
              $35k - $45k
            </span>
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
              className={cn('text-sm px-2  flex items-center py-1 rounded-lg', {
                'bg-blue-200 text-blue-600': tag.type === 'full-time',
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
    </div>
  );
};
