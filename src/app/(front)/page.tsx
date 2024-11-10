import { TopJobCategoryList, FeatureJob, Hero } from '@/components/homepage';
import React, { Fragment } from 'react';
import WhyChooseUs from '@/components/homepage/WhyChooseUs';
import Banner from '@/components/footer/Banner';
import { Container } from '@/components/shared';

const RootPage = () => {
  return (
    <Fragment>
      <Hero />
      <Container className="space-y-12">
        <TopJobCategoryList />
        <FeatureJob />
        <WhyChooseUs />
        <Banner />
      </Container>
    </Fragment>
  );
};

export default RootPage;
