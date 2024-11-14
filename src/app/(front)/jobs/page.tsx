// reference :  https://preview.cruip.com/job-board/

import React, { Fragment } from 'react';
import { Hero, ShowJobs } from './components';
import { RootFooter } from '@/components/shared';

const JobPage = () => {
  return (
    <div className="  mt-14 ">
      <Hero />
      <ShowJobs />
    </div>
  );
};

export default JobPage;
