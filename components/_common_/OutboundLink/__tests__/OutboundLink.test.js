/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com">
        Test
      </OutboundLink>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
      >
        Test
      </OutboundLink>,
    );
  });
});
