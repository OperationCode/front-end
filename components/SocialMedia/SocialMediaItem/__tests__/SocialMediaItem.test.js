import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FacebookLogo from 'static/images/icons/facebook_logo.svg';
import SocialMediaItem from '../SocialMediaItem';

describe('SocialMediaItem', () => {
<<<<<<< HEAD
  test('it should render properly with required (all) props', () => {
    createSnapshotTest(
      <SocialMediaItem
        alt="Facebook"
=======
  it('should render with required props', () => {
    createSnapshotTest(
      <SocialMediaItem
        alt="Facebook"
        name="social-media-nate-test"
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        href="https://facebook.com"
        svg={<FacebookLogo fill="blue" />}
      />,
    );
  });
});
