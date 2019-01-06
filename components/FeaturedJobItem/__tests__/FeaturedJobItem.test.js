/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import FeaturedJobItem from '../FeaturedJobItem';

describe('FeaturedJobItem', () => {
<<<<<<< HEAD
  it('should render with just required props passed', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <FeaturedJobItem
        title="DevOps Engineer"
        source="GitLab"
        sourceUrl="https://about.gitlab.com/jobs/apply/?gh_jid=4055708002"
        description="This is a fake role, since GitLab always has remote."
      />,
    );
  });

<<<<<<< HEAD
  it('should render properly with all props assigned', () => {
=======
  it('should render with many props assigned', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
