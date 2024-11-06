import { TopJobCategoryList, FeatureJob, Hero } from '@/components/homepage';
import React from 'react';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import Banner from '@/components/footer/Banner';
const RootPage = () => {
  return (
    <div className="py-12">
      <Hero />
      <TopJobCategoryList />
      <FeatureJob />
      <WhyChooseUs />
      <Banner />
    </div>
  );
};

export default RootPage;
