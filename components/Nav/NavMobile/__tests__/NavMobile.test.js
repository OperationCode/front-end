import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () =>
    createShallowSnapshotTest(
      <NavMobile isMenuVisible={false} openMenu={() => {}} closeMenu={() => {}} />,
    ));

  it('should not immediately render nav items list', () => {
    const wrapper = shallow(
      <NavMobile isMenuVisible={false} openMenu={() => {}} closeMenu={() => {}} />,
    );

    expect(wrapper.find('ul')).not.toExist();
  });

  // it('should render dropdown after hamburger button is clicked', () => {
  //   const wrapper = shallow(<NavMobile isMenuVisible={false} />);
  //
  //   wrapper.find('.hamburger').simulate('click');
  //
  //   expect(wrapper.find('ul')).toExist();
  // });
  //
  // it('should hide dropdown after close button is pressed', () => {
  //   const wrapper = shallow(<NavMobile isMenuVisible={true} />);
  //
  //   expect(wrapper.find('ul')).toExist();
  //
  //   wrapper.find('CloseButton').simulate('click');
  //   expect(wrapper.find('ul')).not.toExist();
  // });
  //
  // it('should hide dropdown when navigation is performed', () => {
  //   const wrapper = shallow(<NavMobile />);
  //
  //   wrapper.setState({ isDropDownVisible: true });
  //   wrapper.update();
  //
  //   expect(wrapper.find('ul')).toExist();
  //   wrapper
  //     .find('.link')
  //     .first()
  //     .simulate('click');
  //
  //   expect(wrapper.find('ul')).not.toExist();
  // });
});
