/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PasswordResetForm from '../PasswordResetForm';

describe('PasswordResetForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<PasswordResetForm>Test</PasswordResetForm>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <PasswordResetForm className="test-class">
        Test
      </PasswordResetForm>,
    );
  });
});
