// reference :  https://preview.cruip.com/job-board/

import React from 'react';
import { Hero, ShowJobs } from './components';
import { RootFooter } from '@/components/shared';

const JobPage = () => {
  return (
    <>
      <Hero />
      <ShowJobs />
      <RootFooter />
    </>
  );
};

export default JobPage;
