/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

describe('HeroBanner', () => {
  const testImageUrl = `${s3}heroBanner/stock_family-2.jpg`;

  it('should render with required props', () => {
    createSnapshotTest(<HeroBanner title="Test" backgroundImageSource={testImageUrl} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <HeroBanner title="Test" backgroundImageSource={testImageUrl} isFullViewportHeight>
        Testing 123
      </HeroBanner>,
    );
  });
});
