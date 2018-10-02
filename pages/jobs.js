import React from 'react';
import Section from 'components/_common_/Section/Section';
import FeaturedJobsData from 'components/FeaturedJobItem/featuredJobs.json';
import FeaturedJobItem from 'components/FeaturedJobItem/FeaturedJobItem';
import ZipRecruiterJobs from 'components/ZipRecruiterJobs/ZipRecruiterJobs';

export default () => (
  <>
    <h1>Jobs</h1>
    <Section theme="mist" title="Featured">
      {FeaturedJobsData.filter(job => job.status === 'active').map(job => (
        <FeaturedJobItem key={job.sourceUrl} {...job} />
      ))}
    </Section>
    <Section theme="white" title="ZipRecruiter">
      <ZipRecruiterJobs />
    </Section>
  </>
);
