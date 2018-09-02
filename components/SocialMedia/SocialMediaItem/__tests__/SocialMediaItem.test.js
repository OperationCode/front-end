import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FacebookLogo from 'static/images/icons/facebook_logo.svg';
import SocialMediaItem from '../SocialMediaItem';

describe('SocialMediaItem', () => {
  test('it should render properly with required (all) props', () => {
    createSnapshotTest(
      <SocialMediaItem
        alt="Facebook"
        href="https://facebook.com"
        svg={<FacebookLogo fill="blue" />}
      />,
    );
  });
});
