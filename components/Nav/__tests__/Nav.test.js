import React from 'react';
import { shallow, mount } from 'enzyme';
import cookie from 'js-cookie';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { VALID_AUTH_TOKEN } from 'test-utils/mocks/jwtMock';

import { Nav } from '../Nav';

beforeEach(() => {
  cookie.get = jest.fn().mockImplementation(() => undefined);
});

describe('Nav', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<Nav />));

  it('should render both desktop and mobile navigations', () => {
    // we conditionally display them via CSS
    const wrapper = shallow(<Nav />);

    expect(wrapper.find('[data-testid="Desktop Nav"]')).toExist();
    expect(wrapper.find('NavMobile')).toExist();
  });

  it('should render logout link when logged in', () => {
    cookie.get = jest.fn().mockImplementation(() => VALID_AUTH_TOKEN);

    const wrapper = mount(<Nav />);

    expect(wrapper.find('a[href="/login?loggedOut=true"]')).toExist();
  });

  it('should render who we serve section when logged out', () => {
    const wrapper = mount(<Nav />);

    expect(wrapper.find('a[href="/who_we_serve"]')).toExist();
    expect(wrapper.find('a[href="/login"]')).toExist();
    expect(wrapper.find('a[href="/join"]')).toExist();
  });

  it('should change state accordingly when child component invokes openMenu callback', () => {
    const wrapper = mount(<Nav />);

    wrapper.find('.hamburger').simulate('click');

    expect(wrapper.state('isMobileNavOpen')).toBe(true);
  });

  it('should change state accordingly when child component invokes closeMenu callback', () => {
    const wrapper = mount(<Nav />);

    wrapper.setState({ isMobileNavOpen: true });
    wrapper.update();

    wrapper.find('CloseButton').simulate('click');
    wrapper.update();

    expect(wrapper.state('isMobileNavOpen')).toBe(false);
  });
});
