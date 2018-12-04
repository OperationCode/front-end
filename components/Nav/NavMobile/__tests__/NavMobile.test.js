import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () => createShallowSnapshotTest(<NavMobile />));

  it('should not show dropdown', () => {
    const wrapper = shallow(<NavMobile />);

    expect(wrapper.find('ul')).not.toExist();
  });

  it('should show dropdown on hamburgericon click', () => {
    const wrapper = shallow(<NavMobile />);

    wrapper.find({ role: 'button' }).simulate('click');

    expect(wrapper.find('ul')).toExist();
  });
});
