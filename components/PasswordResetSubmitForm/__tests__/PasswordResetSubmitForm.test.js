/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PasswordResetSubmitForm from '../PasswordResetSubmitForm';

describe('PasswordResetSubmitForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<PasswordResetSubmitForm>Test</PasswordResetSubmitForm>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <PasswordResetSubmitForm className="test-class">
        Test
      </PasswordResetSubmitForm>,
    );
  });
});
