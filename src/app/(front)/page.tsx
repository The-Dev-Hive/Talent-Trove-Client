import { TopJobCategoryList, FeatureJob, Hero } from '@/components/homepage';
import React from 'react';

const RootPage = () => {
  return (
    <div className="py-12">
      <Hero />
      <TopJobCategoryList />
      <FeatureJob />
    </div>
  );
};

export default RootPage;
