import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import AdBanner from '../AdBanner';

describe('AdBanner', () => {
  it('it should render properly with required props', () => {
    createShallowSnapshotTest(
      <AdBanner altText="Some text" href="www.test.com" imageSource="www.imagetest.com">
        Test
      </AdBanner>,
    );
  });

  it('should render properly with some props assigned', () => {
    createShallowSnapshotTest(
      <AdBanner
        altText="Alt text test"
        className="AdBanner-class"
        href="www.testMe.com"
        imageSource="test-image.jpg"
      >
        Test
      </AdBanner>,
    );
  });
});
