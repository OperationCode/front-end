import React from 'react';
import { cleanup } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Heading from '../Heading';

describe('Heading', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Heading text="Test" />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading
        text="Test"
        className="test-class"
        id="test-heading-1"
        hasHeadingLines={false}
        theme="secondary"
      />,
    );
  });
});
