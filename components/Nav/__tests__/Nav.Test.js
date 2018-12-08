import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import NavMobile from '../NavMobile/NavMobile';
import { Nav } from '../Nav';

describe('Nav', () => {
  const smallScreen = { isXs: true };

  const largeScreen = { isXs: false };

  it('should render with no props passed', () => createShallowSnapshotTest(<Nav />));

  it('should render with props passed', () => createShallowSnapshotTest(<Nav {...largeScreen} />));

  it('should render the mobile navigation bar when screen size is Xs', () => {
    const wrapper = shallow(<Nav {...smallScreen} />);
    expect(wrapper.find(NavMobile)).toExist();
  });

  // make more specific than relying on presence of nav
  it('should render the regular navigation bar when screen size is not Xs', () => {
    const wrapper = shallow(<Nav {...largeScreen} />);
    expect(wrapper.find(NavMobile)).not.toExist();
  });
});
