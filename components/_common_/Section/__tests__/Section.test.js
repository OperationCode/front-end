/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Section from '../Section';

describe('Section', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<Section>Test Children</Section>);
  });

  test('should render properly with all props assigned', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<Section>Test Children</Section>);
  });

  it('should render with many props assigned', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <Section
        className="testing-123"
        hasHeadingLines={false}
        id="test-1"
<<<<<<< HEAD
        style={{ color: 'navy' }}
        theme="grayLight"
=======
        style={{ color: 'black' }}
        theme="gray"
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        title="Test"
        contentClassName="TestClassName"
      >
        Test Children 2
      </Section>,
    );
  });

<<<<<<< HEAD
  test('should render properly with the most common use case', () => {
=======
  it('should render common use case', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <Section theme="white" title="Test 2">
        Test Children 3
      </Section>,
    );
  });
<<<<<<< HEAD

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

  test('should render properly with a common use case 3', () => {
    createSnapshotTest(<Section contentClassName="TestClassName">Test Children 5</Section>);
  });
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
});
