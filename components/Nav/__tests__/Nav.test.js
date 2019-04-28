import React from 'react';
import { shallow, mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import { Nav } from '../Nav';

describe('Nav', () => {
  const smallScreen = { isDesktopView: false };

  const largeScreen = { isDesktopView: true };

  it('should render with no props passed', () => createShallowSnapshotTest(<Nav />));

  it('should render with props passed', () => createShallowSnapshotTest(<Nav {...largeScreen} />));

  it('should render the mobile navigation bar when screen size is Xs', () => {
    const wrapper = shallow(<Nav {...smallScreen} />);
    expect(wrapper.find('NavMobile')).toExist();
  });

  it('should render the regular navigation bar when screen size is not Xs', () => {
    const wrapper = shallow(<Nav {...largeScreen} />);
    expect(wrapper.find('NavMobile')).not.toExist();
  });

  it('should change state accordingly when child component invokes openMenu callback', () => {
    const wrapper = mount(<Nav {...smallScreen} />);

    wrapper.find('.hamburger').simulate('click');

    expect(wrapper.state('isMobileMenuVisible')).toBe(true);
  });

  it('should change state accordingly when child component invokes closeMenu callback', () => {
    const wrapper = mount(<Nav {...smallScreen} />);

    wrapper.setState({ isMobileMenuVisible: true });
    wrapper.find('CloseButton').simulate('click');

    expect(wrapper.state('isMobileMenuVisible')).toBe(false);
  });
});
