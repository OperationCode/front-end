import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SocialMediaContainer from '../SocialMediaContainer';

describe('SocialMediaContainer', () => {
<<<<<<< HEAD
  test('it should render properly with required (all) props', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <SocialMediaContainer>
        <div>Testing 1</div>
        <div>Testing 2</div>
      </SocialMediaContainer>,
    );
  });
});
