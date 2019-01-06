<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import Head from 'components/head';
import Section from 'components/_common_/Section/Section';
import FeaturedJobsData from 'components/FeaturedJobItem/featuredJobs.json';
import FeaturedJobItem from 'components/FeaturedJobItem/FeaturedJobItem';
import ZipRecruiterJobs from 'components/ZipRecruiterJobs/ZipRecruiterJobs';

export default () => (
  <>
    <Head title="Jobs" />

    <h1>Jobs</h1>

<<<<<<< HEAD
    <Section theme="mist" title="Featured">
=======
    <Section theme="gray" title="Featured">
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      {FeaturedJobsData.filter(job => job.status === 'active').map(job => (
        <FeaturedJobItem key={job.sourceUrl} {...job} />
      ))}
    </Section>
    <Section theme="white" title="ZipRecruiter">
      <ZipRecruiterJobs />
    </Section>
  </>
);
