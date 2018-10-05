/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormCheckBox from '../FormCheckBox';

describe('FormCheckBox', () => {
  it('should render with required props', () => {
    createSnapshotTest(<FormCheckBox>Test</FormCheckBox>);
  });

  it('should render with all props assigned', () => {
    createSnapshotTest(
      <FormCheckBox
        checkBox={{ display: 'inline-block', margin: '1rem' }}
        label={{ fontWeight: 'bold', margin: '1rem', textTransform: 'uppercase' }}
        name="test-checkbox"
        onChange={jest.fn()}
        value="test value"
      >
        Test
      </FormCheckBox>,
    );
  });
});
