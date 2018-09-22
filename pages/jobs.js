import React from 'react';
import Section from 'components/_common_/Section/Section';
import FeaturedJobsData from 'components/FeaturedJobItem/featuredJobs.json';
import FeaturedJobItem from 'components/FeaturedJobItem/FeaturedJobItem';
import ZipRecruiterJobs from 'components/ZipRecruiterJobs/ZipRecruiterJobs';

export default () => (
  <>
    <Section theme="mist" title="Featured Jobs">
      {FeaturedJobsData.filter(job => job.status === 'active').map(job => (
        <FeaturedJobItem key={job.sourceUrl} {...job} />
      ))}
    </Section>
    <Section theme="white" title="All Jobs">
      <ZipRecruiterJobs />
    </Section>
  </>
);
