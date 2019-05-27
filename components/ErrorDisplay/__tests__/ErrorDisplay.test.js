import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ErrorDisplay from '../ErrorDisplay';

describe('ErrorDisplay', () => {
  it('should render with just required props', () => {
    createSnapshotTest(<ErrorDisplay statusCode={404} />);
  });

  it('should render h1, even when no statusCode is passed', () => {
    const wrapper = mount(<ErrorDisplay />);
    expect(wrapper.find('h1').text()).toStrictEqual('Oh no!');
  });
});
