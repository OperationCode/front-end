/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ContentContainer from '../ContentContainer';

describe('ContentContainer', () => {
  it('should render with many props assigned', () => {
    createSnapshotTest(
      <ContentContainer className="test-class" backgroundImageSource="testImage" theme="gray">
        Test Children
      </ContentContainer>,
    );
  });

  it('should render common use case', () => {
    createSnapshotTest(
      <ContentContainer className="test-class" theme="secondary">
        Test Children 2
      </ContentContainer>,
    );
  });
});
