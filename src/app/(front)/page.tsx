import { TopJobCategoryList, FeatureJob, Hero } from '@/components/homepage';
import React from 'react';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
const RootPage = () => {
  return (
    <div className="py-12">
      <Hero />
      <TopJobCategoryList />
      <FeatureJob />
      <WhyChooseUs />
    </div>
  );
};

export default RootPage;
