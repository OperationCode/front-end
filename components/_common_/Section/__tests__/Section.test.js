/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Section from '../Section';

describe('Section', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Section>Test Children</Section>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Section
        className="testing-123"
        hasHeadingLines={false}
        id="test-1"
        style={{ color: 'navy' }}
        theme="gray"
        title="Test"
        contentClassName="TestClassName"
      >
        Test Children 2
      </Section>,
    );
  });

  it('should render common use case', () => {
    createSnapshotTest(
      <Section theme="white" title="Test 2">
        Test Children 3
      </Section>,
    );
  });
});
