/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ResourceCard from '../ResourceCard';

describe('ResourceCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <ResourceCard
        imageSource="/static/images/icons/javascript_logo.svg"
        name="JavaScript for Dummies"
      />,
    );
  });
});
