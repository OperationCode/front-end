/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SectionContent from '../SectionContent';

describe('SectionContent', () => {
  it('should render with required props', () => {
    createSnapshotTest(<SectionContent columns={2}>Test</SectionContent>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <SectionContent className="test-class" title="test-title" id="test-id" columns={3}>
        Test
      </SectionContent>,
    );
  });
});
