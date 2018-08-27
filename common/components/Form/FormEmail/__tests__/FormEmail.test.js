/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import FormInput from '../FormInput/FormInput';
import FormEmail from '../FormEmail';

describe('FormEmail', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormEmail>Test</FormEmail>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <FormInput
        validationErrorMessage="Validation message here"
      >
        Test
      </FormInput>,
    );
  });
});