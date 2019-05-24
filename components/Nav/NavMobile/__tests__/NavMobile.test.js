import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { loginLinks, navItems } from 'common/constants/navigation';

import NavMobile from '../NavMobile';

const loggedOutLinks = [...navItems, loginLinks];

describe('NavMobile', () => {
  it('should render', () =>
    createShallowSnapshotTest(
      <NavMobile
        isLoggedIn={false}
        logout={jest.fn()}
        navLinks={loggedOutLinks}
        isMenuVisible={false}
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    ));

  it('should not have a visible menu when isMenuVisible prop is false', () => {
    const wrapper = shallow(
      <NavMobile
        isLoggedIn={false}
        logout={jest.fn()}
        navLinks={loggedOutLinks}
        isMenuVisible={false}
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    );

    expect(wrapper.find('ul')).not.toExist();
  });

  it('should have a visible menu when isMenuVisible prop is true', () => {
    const wrapper = shallow(
      <NavMobile
        isLoggedIn={false}
        logout={jest.fn()}
        navLinks={loggedOutLinks}
        isMenuVisible
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    );

    expect(wrapper.find('ul')).toExist();
  });

  it('should invoke callback when hamburger button is clicked', () => {
    const mockOpen = jest.fn();
    const wrapper = shallow(
      <NavMobile
        isLoggedIn={false}
        logout={jest.fn()}
        navLinks={loggedOutLinks}
        isMenuVisible={false}
        openMenu={mockOpen}
        closeMenu={() => {}}
      />,
    );

    wrapper.find('.hamburger').simulate('click');

    expect(mockOpen).toHaveBeenCalled();
  });

  it('should invoke callback when close button is pressed', () => {
    const mockClose = jest.fn();
    const wrapper = shallow(
      <NavMobile
        isLoggedIn={false}
        logout={jest.fn()}
        navLinks={loggedOutLinks}
        isMenuVisible
        openMenu={() => {}}
        closeMenu={mockClose}
      />,
    );

    wrapper.find('CloseButton').simulate('click');

    expect(mockClose).toHaveBeenCalled();
  });
});
