/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Section from '../Section';

describe('Section', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<Section>Test Children</Section>);
  });

  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <Section
        className="testing-123"
        hasHeadingLines={false}
        id="test-1"
        style={{ color: 'navy' }}
        theme="grayLight"
        title="Test"
      >
        Test Children 2
      </Section>,
    );
  });

  test('should render properly with the most common use case', () => {
    createSnapshotTest(
      <Section theme="white" title="Test 2">
        Test Children 3
      </Section>,
    );
  });

  test('should render properly with a common use case 1', () => {
    createSnapshotTest(
      <Section theme="mist" title="Test 3">
        Test Children 4
      </Section>,
    );
  });

  test('should render properly with a common use case 2', () => {
    createSnapshotTest(
      <Section hasHeadingLines={false} theme="slate" title="Test 4">
        Test Children 5
      </Section>,
    );
  });
});
