import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Heading from '../Heading';

describe('Heading', () => {
  const requiredProps = {
    text: 'Test',
  };

  it('should render with required props', () => {
    createSnapshotTest(<Heading {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading {...requiredProps} headingLevel={5} hasHashLink={false} hasTitleUnderline />,
    );
  });
});
