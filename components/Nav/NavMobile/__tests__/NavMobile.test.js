import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () => createShallowSnapshotTest(<NavMobile />));

  it('should not immediately render nav items list', () => {
    const wrapper = shallow(<NavMobile />);

    expect(wrapper.find('ul')).not.toExist();
  });

  it('should render nav items list after hamburger button is clicked', () => {
    const wrapper = shallow(<NavMobile />);

    wrapper.find('.hamburgerButton').simulate('click');

    expect(wrapper.find('ul')).toExist();
  });

  it('should hide nav items list after close button is pressed', () => {
    const wrapper = shallow(<NavMobile />);

    wrapper.setState({ isDropDownVisible: true });
    wrapper.update();

    expect(wrapper.find('ul')).toExist();

    wrapper.find('CloseButton').simulate('click');
    expect(wrapper.find('ul')).not.toExist();
  });
});
