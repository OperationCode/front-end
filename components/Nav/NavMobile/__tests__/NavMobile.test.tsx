import { fireEvent, render } from '@testing-library/react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mobileNavItems } from 'common/constants/navigation';
import { CLOSE_BUTTON } from 'common/constants/testIDs';

import NavMobile from '../NavMobile';

describe('NavMobile', () => {
  it('should render', () =>
    createShallowSnapshotTest(
      <NavMobile
        navItems={mobileNavItems}
        isOpen={false}
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    ));

  it('should not have a visible menu when isOpen prop is false', () => {
    const wrapper = render(
      <NavMobile
        navItems={mobileNavItems}
        isOpen={false}
        openMenu={() => {}}
        closeMenu={() => {}}
      />,
    );

    expect(wrapper.container.querySelector('ul')).toBeNull();
  });

  it('should have a visible menu when isOpen prop is true', () => {
    const wrapper = render(
      <NavMobile navItems={mobileNavItems} isOpen openMenu={() => {}} closeMenu={() => {}} />,
    );

    expect(wrapper.container.querySelector('ul')).not.toBeNull();
  });

  it('should invoke callback when hamburger button is clicked', () => {
    const mockOpen = vi.fn();

    const wrapper = render(
      <NavMobile
        navItems={mobileNavItems}
        isOpen={false}
        openMenu={mockOpen}
        closeMenu={() => {}}
      />,
    );

    const hamburgerButton = wrapper.queryByTestId('Hamburger Button')!;

    fireEvent.click(hamburgerButton);

    expect(mockOpen).toHaveBeenCalled();
  });

  it('should invoke callback when close button is pressed', () => {
    const mockClose = vi.fn();

    const wrapper = render(
      <NavMobile navItems={mobileNavItems} isOpen openMenu={() => {}} closeMenu={mockClose} />,
    );

    const closeButton = wrapper.queryByTestId(CLOSE_BUTTON)!;

    fireEvent.click(closeButton);

    expect(mockClose).toHaveBeenCalled();
  });
});
