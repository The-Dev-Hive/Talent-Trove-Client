import { TopJobCategoryList, FeatureJob } from '@/components/homepage';
import React from 'react';

const RootPage = () => {
  return (
    <div className="py-12">
      <TopJobCategoryList />
      <FeatureJob />
    </div>
  );
};

export default RootPage;
