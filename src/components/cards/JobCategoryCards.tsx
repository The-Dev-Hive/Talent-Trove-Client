import { DollarSign } from 'lucide-react';
import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const CategoryOfJob = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <div className="group flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md hover:bg-indigo-100">
        <div className="bg-slate-100 p-4 rounded-lg text-blue-600 group-hover:bg-indigo-500 transition-bg duration-300 group-hover:text-white">
          <DollarSign />
        </div>
        <div>
          <h2 className="text-slate-600 font-semibold">Accounting / Finance</h2>
          <p className="text-gray-500 text-sm">(2 open positions)</p>
        </div>
      </div>
    </div>
  );
};
