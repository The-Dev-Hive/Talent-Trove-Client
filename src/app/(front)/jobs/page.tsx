// reference :  https://preview.cruip.com/job-board/

import React from 'react';
import Hero from './components/Hero';
import RootFooter from '@/components/shared/RootFooter';
import { JobCard } from './components/JobCard';

const JobPage = () => {
  return (
    <div>
      {' '}
      <Hero />
      <JobCard />
      <RootFooter />{' '}
    </div>
  );
};

export default JobPage;
