import createSnapshotTest from 'test-utils/createSnapshotTest';
import FeaturedJobItem from '../FeaturedJobItem';

describe('FeaturedJobItem', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <FeaturedJobItem
        title="DevOps Engineer"
        source="GitLab"
        sourceUrl="https://about.gitlab.com/jobs/apply/?gh_jid=4055708002"
        description="This is a fake role, since GitLab always has remote."
      />,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <FeaturedJobItem
        title="Experienced React Engineer"
        source="Formidable Labs"
        sourceUrl="https://jobs.lever.co/formidable/82919058-b73c-4a02-8589-87e2433f0a90"
        city="Seattle"
        state="WA"
        country="United States"
        description="As an Experienced React Engineer, you will do React things."
        remote
      />,
    );
  });
});
