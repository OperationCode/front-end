import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import CloseButton from 'components/_common_/CloseButton/CloseButton';
import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () => createShallowSnapshotTest(<NavMobile />));

  it('dropdown is not visible without hamburger cutton click', () => {
    const wrapper = shallow(<NavMobile />);

    expect(wrapper.find('ul')).not.toExist();
  });

  it('dropdown is visible with hamburger button click', () => {
    const wrapper = shallow(<NavMobile />);

    wrapper.find('.hamburgerButtonWrapper').simulate('click');

    expect(wrapper.find('ul')).toExist();
  });

  it('visible dropdown should have 10 links', () => {
    const wrapper = shallow(<NavMobile />);

    wrapper.find('.hamburgerButtonWrapper').simulate('click');

    expect(wrapper.find('ul').find('a')).toHaveLength(10);
  });

  it('visible dropdown dissappears on close button click', () => {
    const wrapper = shallow(<NavMobile />);

    wrapper.find('.hamburgerButtonWrapper').simulate('click');
    expect(wrapper.find('ul')).toExist();
    wrapper.find(CloseButton).simulate('click');

    expect(wrapper.find('ul')).not.toExist();
  });
});
