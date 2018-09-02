import React from 'react';
import { s3 } from 'common/constants/urls';
import Section from '../common/components/Section/Section';
import HeroBanner from '../common/components/HeroBanner/HeroBanner';
import Timeline from '../components/Timeline/Timeline';

export default function() {
  return (
    <>
      <HeroBanner
        imageSource={`${s3}heroBanners/colin-powell.jpg`}
        title="&quot;There are no secrets to success. It is the result of preparation, 
        hard work, learning from failure.&quot;"
      >
        <h3>-Colin Powell</h3>
      </HeroBanner>

      <Section theme="white" title="History">
        <Timeline />
      </Section>
    </>
  );
};
