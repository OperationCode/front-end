import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line no-restricted-imports
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import NavListItem from '../NavListItem';

describe('NavListItem', () => {
  const testDataWithoutSublinks = {
    href: '/test',
    name: 'Test',
    shouldPrefetch: false,
    sublinks: [],
  };

  const testDataWithSublinks = {
    ...testDataWithoutSublinks,
    sublinks: [
      {
        href: '/test/1',
        name: 'Test - 1',
      },
      {
        href: '/test/2',
        name: 'Test - 2',
      },
    ],
  };

  it('should render with required props passed', () =>
    createShallowSnapshotTest(<NavListItem {...testDataWithoutSublinks} />));

  it('should not render unordered list without passed sublinks', () => {
    const wrapper = shallow(<NavListItem {...testDataWithoutSublinks} />);

    expect(wrapper.find('ul')).not.toExist();
  });

  it('should render an invisible, unordered list when passed sublinks', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    expect(wrapper.find('ul')).toExist();
    expect(wrapper.find('ul')).toHaveClassName('invisible');
  });

  it('should have visible sublinks on mouse hover', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    wrapper
      .find('a')
      .first()
      .simulate('mouseenter');

    expect(wrapper.find('ul')).not.toHaveClassName('invisible');

    wrapper
      .find('a')
      .first()
      .simulate('mouseleave');

    expect(wrapper.find('ul')).toHaveClassName('invisible');
  });

  it('should have visible sublinks on when button is clicked', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('ul')).not.toHaveClassName('invisible');
  });

  it('should change plus icon to minus icon, when sublinks are visible', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    expect(wrapper.state().areSublinksVisible).toStrictEqual(false);
    expect(wrapper.find('[data-testid="minus-icon"]')).not.toExist();
    expect(wrapper.find('[data-testid="plus-icon"]')).toExist();

    wrapper.setState({ areSublinksVisible: true });
    expect(wrapper.find('[data-testid="minus-icon"]')).toExist();
    expect(wrapper.find('[data-testid="plus-icon"]')).not.toExist();
  });

  it('should show sublinks on hover, and then hide them on button click', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    wrapper
      .find('a')
      .first()
      .simulate('mouseenter');

    expect(wrapper.find('ul')).not.toHaveClassName('invisible');

    wrapper.find('button').simulate('click');

    expect(wrapper.find('ul')).toHaveClassName('invisible');
  });

  it('should hide sublinks on pressing Shift+Tab on first sublink', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    wrapper.find('button').simulate('click');
    wrapper
      .find('[data-testid="Nav Item Test - 1"]')
      .simulate('keyDown', { key: 'Tab', shiftKey: true });

    expect(wrapper.find('ul')).toHaveClassName('invisible');
  });

  it('should hide sublinks on pressing Tab on last sublink', () => {
    const wrapper = shallow(<NavListItem {...testDataWithSublinks} />);

    wrapper.find('button').simulate('click');
    wrapper
      .find('[data-testid="Nav Item Test - 2"]')
      .simulate('keyDown', { key: 'Tab', shiftKey: false });

    expect(wrapper.find('ul')).toHaveClassName('invisible');
  });
});
