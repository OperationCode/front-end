import type { Metadata } from 'next';
import Section from '@/components/Section/Section';
import FeaturedJobsData from '@/components/FeaturedJobItem/featuredJobs.json';
import FeaturedJobItem from '@/components/FeaturedJobItem/FeaturedJobItem';
import ZipRecruiterJobs from '@/components/ZipRecruiterJobs/ZipRecruiterJobs';

export const metadata: Metadata = { title: 'Jobs' };

function Jobs() {
  return (
    <>
      <Section theme="gray" title="Featured" underline>
        {FeaturedJobsData.filter((job) => job.status === 'active').map((job) => (
          <FeaturedJobItem key={job.sourceUrl} {...job} />
        ))}
      </Section>

      <Section theme="white" title="ZipRecruiter" underline>
        <ZipRecruiterJobs />
      </Section>
    </>
  );
}

export default Jobs;
