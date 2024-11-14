import { HeroUser } from './HeroUser';

export const Hero = () => {
  return (
    <div
      className="mx-auto max-w-6xl   
     px-4 py-8 md:py-12    "
    >
      <div className=" w-full md:w-4/5 lg:w-5/6 p-4 text-center md:text-left">
        <h1 className="text-4xl  sm:text-7xl md:text-7xl font-bold">
          Join the best tech startups in the{' '}
          <span className="text-blue-500 italic">industry</span>
        </h1>
      </div>
      <div className="mt-4 text-gray-600 text-lg w-full md:w-4/6   text-center md:text-left">
        <p>
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8 space-y-4 md:space-y-0 md:space-x-4">
        <button className="  bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-6 rounded-full text-lg font-medium text-nowrap">
          Post a job - $299
        </button>
        <HeroUser />
        <span className="text-gray-500">Reach 100K+ Professionals</span>
      </div>
    </div>
  );
};
