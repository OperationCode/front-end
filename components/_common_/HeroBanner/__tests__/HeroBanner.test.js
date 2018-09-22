/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

// TODO: Remove this
/* prettier-disable */
describe('HeroBanner', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <HeroBanner title="Test" imageSource={`${s3}heroBanner/stock_family-2.jpg`} />,
    );
  });

  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <HeroBanner
        className="testing-123"
        title="Test"
        imageSource={`${s3}heroBanner/stock_family-2.jpg`}
      >
        Testing 123
      </HeroBanner>,
    );
  });
});
