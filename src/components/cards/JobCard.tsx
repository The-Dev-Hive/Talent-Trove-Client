 

import { FaBookmark, FaMapMarkerAlt, FaShoppingBag } from 'react-icons/fa';
import { CiTimer } from 'react-icons/ci';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import Image from 'next/image';
interface Props extends React.ComponentProps<"div"> {}

interface Job {
  title: string;
  company: string;
  location: string;
  time: string;
  salary: string;
  tags: { type: string; label: string }[];
  img?: string;  
}

const jobs: Job[] = [
  {
    img: 'https://i.postimg.cc/0yx9LBwm/1-2.png',
    title: 'Software Engineer (Android), Libraries',
    company: 'Segment',
    location: 'London, UK',
    time: '11 hours ago',
    salary: '$35k - $45k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'private', label: 'Private' },
      { type: 'urgent', label: 'Urgent' }
    ],
  },
  {
    img: 'https://i.postimg.cc/FHZhmVy6/1-3.png',
    title: 'Frontend Developer',
    company: 'Google',
    location: 'Mountain View, CA',
    time: '2 days ago',
    salary: '$100k - $120k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'public', label: 'Public' },
      { type: 'urgent', label: 'Urgent' }
    ],
  },
  {
    img: 'https://i.postimg.cc/WpBN73p5/1-4.png',
    title: 'Backend Engineer',
    company: 'Facebook',
    location: 'New York, USA',
    time: '5 hours ago',
    salary: '$85k - $100k',
    tags: [
      { type: 'part-time', label: 'Part Time' },
      { type: 'private', label: 'Private' }
    ],
  },
  {
    img: 'https://i.postimg.cc/QMdhMKSd/1-5.png',
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Seattle, WA',
    time: '1 day ago',
    salary: '$90k - $110k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'public', label: 'Public' }
    ],
  },
  {
    img: 'https://i.postimg.cc/hGZgQ43b/1-6.png',
    title: 'Mobile App Developer',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    time: '12 hours ago',
    salary: '$75k - $95k',
    tags: [
      { type: 'contract', label: 'Contract' },
      { type: 'private', label: 'Private' }
    ],
  },
  {
    img: 'https://i.postimg.cc/Wb02YvhT/1-1.png',
    title: 'DevOps Engineer',
    company: 'Spotify',
    location: 'Stockholm, Sweden',
    time: '3 hours ago',
    salary: '$80k - $100k',
    tags: [
      { type: 'full-time', label: 'Full Time' },
      { type: 'public', label: 'Public' }
    ],
  }
];

export const JobCard  = ({...props}:Props) => {
  return (
   <div {...props} >
       <div className="mx-auto max-w-screen-xl">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Featured Jobs</h1>
        <p className="text-gray-600">
          Know your worth and find the job that qualifies your life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-12">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-indigo-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
            
                <div className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center">
                  {job.img ? (
                    <Image src={job.img} alt={job.title} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full bg-gray-400 rounded-full"></div> // Placeholder for no image
                  )}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{job.title}</h2>
                </div>
              </div>
              <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <FaBookmark className="h-6 w-6" />
              </div>
            </div>
            <div className="flex items-center text-gray-600 space-x-6 text-sm mb-4">
              <div className="flex items-center gap-2">
                <FaShoppingBag className="h-5 w-5 text-blue-500" />
                <span className="font-medium">{job.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-5 w-5 text-red-500" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CiTimer className="h-5 w-5 text-green-500" />
                <span>{job.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMoneyBill1Wave className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">{job.salary}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-sm px-2 py-1 rounded-lg ${
                    tag.type === 'full-time'
                      ? 'bg-blue-100 text-blue-600'
                      : tag.type === 'private'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors duration-300">
          Load More Listings
        </button>
      </div>
    </div>
   </div>
 
  );
};
