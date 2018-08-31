import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SocialMediaItem from '../SocialMediaItem';

describe('SocialMediaItem', () => {
  test('it should render properly with required (all) props', () => {
    createSnapshotTest(
      <SocialMediaItem
        href="https://facebook.com"
        imageSource="/static/images/icons/facebook_logo.svg"
        alt="Facebook"
      />,
    );
  });
});
