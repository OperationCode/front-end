import React from 'react';
import cookie from 'js-cookie';
import { fireEvent, render } from '@testing-library/react';
import { CLOSE_BUTTON } from 'common/constants/testIDs';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { VALID_AUTH_TOKEN } from 'test-utils/mocks/jwtMock';

import { Nav } from '../Nav';

describe('Nav', () => {
  beforeEach(() => {
    cookie.get = jest.fn().mockImplementation(() => undefined);
  });

  it('should render with no props passed', () => createShallowSnapshotTest(<Nav />));

  it('should render both desktop and mobile navigations', () => {
    // we conditionally display them via CSS, but always render them
    const wrapper = render(<Nav />);

    expect(wrapper.queryByTestId('Desktop Nav Container')).not.toBeNull();
    expect(wrapper.queryByTestId('Mobile Nav Container')).not.toBeNull();
  });

  it('should render logout link when logged in', () => {
    cookie.get = jest.fn().mockImplementation(() => VALID_AUTH_TOKEN);

    const wrapper = render(<Nav />);

    expect(wrapper.container.querySelector('a[href="/login?loggedOut=true"]')).not.toBeNull();
  });

  it('should render who we serve section when logged out', () => {
    const wrapper = render(<Nav />);

    expect(wrapper.container.querySelector('a[href="/who_we_serve"]')).not.toBeNull();
    expect(wrapper.container.querySelector('a[href="/login"]')).not.toBeNull();
    expect(wrapper.container.querySelector('a[href="/join"]')).not.toBeNull();
  });

  it('should only reveal mobile nav when hamburger button is clicked', () => {
    const wrapper = render(<Nav />);

    expect(wrapper.queryByTestId('Mobile Nav')).toBeNull();

    const HamburgerButton = wrapper.queryByTestId('Hamburger Button');
    fireEvent.click(HamburgerButton);

    expect(wrapper.findByTestId('Mobile Nav')).not.toBeNull();
  });

  it('should hide mobile nav when hamburger button is clicked', async () => {
    const wrapper = render(<Nav />);

    const HamburgerButton = wrapper.queryByTestId('Hamburger Button');
    fireEvent.click(HamburgerButton);

    const CloseButton = await wrapper.findByTestId(CLOSE_BUTTON);
    fireEvent.click(CloseButton);

    expect(wrapper.queryByTestId('Mobile Nav')).toBeNull();
  });
});
