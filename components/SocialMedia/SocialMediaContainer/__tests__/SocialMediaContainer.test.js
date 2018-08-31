import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SocialMediaContainer from '../SocialMediaContainer';

describe('SocialMediaContainer', () => {
  test('it should render properly with required (all) props', () => {
    createSnapshotTest(
      <SocialMediaContainer><div>Testing 1</div><div>Testing 2</div></SocialMediaContainer>,
    );
  });
});
