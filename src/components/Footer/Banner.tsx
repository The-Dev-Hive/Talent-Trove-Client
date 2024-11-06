const Banner = () => {
  return (
    <div className="bg-indigo-600 lg:max-w-7xl lg:mx-auto   lg:h-80 rounded-xl p-8 ml-4 mr-4 flex flex-col md:flex-row items-center justify-between text-white">
      <div className="space-y-4 mb-6 md:mb-0 md:w-1/2">
        <h2 className="text-2xl font-bold">
          Set up personalized job search alerts
        </h2>
        <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md shadow hover:bg-indigo-200">
          Sign Up →
        </button>
      </div>

      <div className="relative hidden lg:block  md:w-1/2 w-full max-w-sm">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg transform rotate-6 shadow-lg">
          <div className="h-4 bg-white bg-opacity-20 rounded-full mb-4 w-3/4"></div>
          <div className="h-4 bg-white bg-opacity-20 rounded-full mb-2 w-1/2"></div>
          <div className="flex justify-between items-center mt-6">
            <div className="h-4 w-1/4 bg-white bg-opacity-20 rounded-full"></div>
            <div className="h-4 w-1/6 bg-white bg-opacity-20 rounded-full"></div>
            <div className="h-4 w-1/4 bg-white bg-opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
