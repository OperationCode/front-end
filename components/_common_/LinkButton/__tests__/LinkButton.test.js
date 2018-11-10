/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import LinkButton from '../LinkButton';

describe('LinkButton', () => {
  it('should render with required props', () => {
    createSnapshotTest(<LinkButton href="https://tests.com">Test</LinkButton>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <LinkButton href="https://tests.com" isFilled>
        Test
      </LinkButton>,
    );
  });
});
