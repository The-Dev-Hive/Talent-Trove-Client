import React from "react";
import {
  DollarSign,
  Code,
  Clipboard,
  Briefcase,
  Layout,
  Rocket,
  Headphones,
  Heart,
  Car,
} from "lucide-react";
 

interface JobCategory {
  title: string;
  positions: number;
  icon: React.ReactNode;
}
interface Props extends React.ComponentProps<"div"> {}
const jobCategories: JobCategory[] = [
  { title: "Accounting / Finance", positions: 2, icon: <DollarSign /> },
  { title: "Marketing", positions: 86, icon: <Briefcase /> },
  { title: "Design", positions: 43, icon: <Layout /> },
  { title: "Development", positions: 12, icon: <Code /> },
  { title: "Human Resource", positions: 55, icon: <Clipboard /> },
  { title: "Project Management", positions: 2, icon: <Rocket /> },
  { title: "Customer Service", positions: 2, icon: <Headphones /> },
  { title: "Health and Care", positions: 25, icon: <Heart /> },
  { title: "Automotive Jobs", positions: 92, icon: <Car /> },
];

export const JobCategoryCards = ({...props}:Props) => {
  return (
    <div  {...props} >
        <div className="mx-auto max-w-7xl  ">
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Popular Job Categories</h1>
        <p className="text-gray-600">2024 jobs live - 293 added today</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-12">
        {jobCategories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md"
          >
            <div className="bg-slate-100 p-4 rounded-lg text-blue-600 hover:bg-indigo-500 transition-bg duration-300   hover:text-white">
              {category.icon}
            </div>
            <div  >
              <h2 className=" text-slate-600 font-semibold">{category.title}</h2>
              <p className="text-gray-500 text-sm">({category.positions} open positions)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  );
};
