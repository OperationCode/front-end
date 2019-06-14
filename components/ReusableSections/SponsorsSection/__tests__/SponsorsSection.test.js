import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SponsorsSection from '../SponsorsSection';

describe('SponsorsSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<SponsorsSection>Test</SponsorsSection>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<SponsorsSection className="test-class">Test</SponsorsSection>);
  });
});
