import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import SocialLoginButtons from '../SocialLoginButtons';

describe('SocialLoginButtons', () => {
  it('should render with required props', () => {
    createSnapshotTest(<SocialLoginButtons onGoogleFailure={jest.fn()} onSuccess={jest.fn()} />);
  });
});
