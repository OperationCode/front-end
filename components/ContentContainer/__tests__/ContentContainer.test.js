/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ContentContainer from '../ContentContainer';

describe('ContentContainer', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ContentContainer>Test</ContentContainer>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<ContentContainer className="test-class">Test</ContentContainer>);
  });
});
