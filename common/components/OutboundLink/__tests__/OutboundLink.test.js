/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import mockRouter from 'test-utils/mocks/router';

import { OutboundLink } from '../OutboundLink';

describe('OutboundLink', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com" router={mockRouter}>
        Test
      </OutboundLink>,
    );
  });

  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
        router={mockRouter}
      >
        Test
      </OutboundLink>,
    );
  });
});
