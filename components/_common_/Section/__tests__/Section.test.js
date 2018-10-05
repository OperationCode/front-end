/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Section from '../Section';

describe('Section', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<Section>Test Children</Section>);
  });

  it('should render properly with all props assigned', () => {
    createSnapshotTest(
      <Section
        className="testing-123"
        hasHeadingLines={false}
        id="test-1"
        style={{ color: 'navy' }}
        theme="grayLight"
        title="Test"
        contentClassName="TestClassName"
      >
        Test Children 2
      </Section>,
    );
  });

  it('should render properly with the most common use case', () => {
    createSnapshotTest(
      <Section theme="white" title="Test 2">
        Test Children 3
      </Section>,
    );
  });

  it('should render properly with a common use case 1', () => {
    createSnapshotTest(
      <Section theme="mist" title="Test 3">
        Test Children 4
      </Section>,
    );
  });

  it('should render properly with a common use case 2', () => {
    createSnapshotTest(
      <Section hasHeadingLines={false} theme="slate" title="Test 4">
        Test Children 5
      </Section>,
    );
  });

  it('should render properly with a common use case 3', () => {
    createSnapshotTest(<Section contentClassName="TestClassName">Test Children 5</Section>);
  });

  it('should render properly with a default theme', () => {
    createSnapshotTest(
      <Section hasHeadingLines={false} theme="default" title="Test 6">
        Test Children 6
      </Section>,
    );
  });
});
