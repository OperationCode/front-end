/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import JoinThrivingSection from '../JoinThrivingSection';

describe('JoinThrivingSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<JoinThrivingSection>Test</JoinThrivingSection>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<JoinThrivingSection className="test-class">Test</JoinThrivingSection>);
  });
});
