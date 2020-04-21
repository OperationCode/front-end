import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mobileLoggedOutNavItems } from 'common/constants/navigation';
import { CLOSE_BUTTON } from 'common/constants/testIDs';

import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () =>
    createShallowSnapshotTest(
      <NavMobile
        navItems={mobileLoggedOutNavItems}
        isOpen={false}
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    ));

  it('should not have a visible menu when isOpen prop is false', () => {
    const wrapper = render(
      <NavMobile
        navItems={mobileLoggedOutNavItems}
        isOpen={false}
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    );

    expect(wrapper.container.querySelector('ul')).toBeNull();
  });

  it('should have a visible menu when isOpen prop is true', () => {
    const wrapper = render(
      <NavMobile
        navItems={mobileLoggedOutNavItems}
        isOpen
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    );

    expect(wrapper.container.querySelector('ul')).not.toBeNull();
  });

  it('should invoke callback when hamburger button is clicked', () => {
    const mockOpen = jest.fn();

    const wrapper = render(
      <NavMobile
        navItems={mobileLoggedOutNavItems}
        isOpen={false}
        openMenu={mockOpen}
        closeMenu={() => {}}
      />,
    );

    fireEvent.click(wrapper.queryByTestId('Hamburger Button'));

    expect(mockOpen).toHaveBeenCalled();
  });

  it('should invoke callback when close button is pressed', () => {
    const mockClose = jest.fn();

    const wrapper = render(
      <NavMobile
        navItems={mobileLoggedOutNavItems}
        isOpen
        openMenu={() => {}}
        closeMenu={mockClose}
      />,
    );

    fireEvent.click(wrapper.queryByTestId(CLOSE_BUTTON));

    expect(mockClose).toHaveBeenCalled();
  });
});
