/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SocialLoginGroup from '../SocialLoginGroup';

describe('SocialLoginGroup', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <SocialLoginGroup
        className="test-class"
        onSocialFailure={jest.fn()}
        onSocialSuccess={jest.fn()}
      />,
    );
  });
});
