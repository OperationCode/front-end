/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormCheckBox from '../FormCheckBox';

describe('FormCheckBox', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormCheckBox>Test</FormCheckBox>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <FormCheckBox
        className="somename"
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        type="checkbox"
=======
  it('should render with required props', () => {
    createSnapshotTest(
      <FormCheckBox name="test-checkbox" value="test value">
        Test
      </FormCheckBox>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <FormCheckBox
        checkBox={{ display: 'inline-block', margin: '1rem' }}
        label={{ fontWeight: 'bold', margin: '1rem', textTransform: 'uppercase' }}
        name="test-checkbox"
        onChange={jest.fn()}
        value="test value"
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      >
        Test
      </FormCheckBox>,
    );
  });
});
