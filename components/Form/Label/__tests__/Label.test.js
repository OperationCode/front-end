/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Label from '../Label';

describe('Label', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Label for="someInputName">Test</Label>);
  });

  it('should be visually hidden with isHidden passed', () => {
    const wrapper = shallow(
      <Label for="someInputName" isHidden>
        Visually Hidden?
      </Label>,
    );

    const actualLabelElement = wrapper.find('label');

    expect(actualLabelElement).toContainExactlyOneMatchingElement('label');

    // proves that label is wrapped by the SR-only component
    expect(actualLabelElement.parent()).toMatchSelector('ScreenReaderOnly');
  });
});
