import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mount, shallow } from 'enzyme';

import LinkGroup from '../LinkGroup';

describe('PressLinks > LinkGroups', () => {
  test('should render properly with required props', () =>
    createShallowSnapshotTest(
      <LinkGroup
        title="test"
        links={[{ url: 'https://example.com', title: 'Example' }]}
        numberOfInitiallyVisibleLinks={1}
      />,
    ));

  test('should render properly with required props and 3 links and a button', () =>
    createShallowSnapshotTest(
      <LinkGroup
        title="test"
        links={[
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    ));

  test('should setState when clicking Show All button', () => {
    const LinkGroupShallowInstance = shallow(
      <LinkGroup
        title="test"
        links={[
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    );

    LinkGroupShallowInstance.instance().clickHandler();

    expect(LinkGroupShallowInstance.state().areAllLinksVisible).toEqual(true);
  });

  test('should not create a button if not enough links', () => {
    const wrap = mount(
      <LinkGroup
        title="test"
        links={[{ url: 'https://example.com', title: 'Example' }]}
        numberOfInitiallyVisibleLinks={5}
      />,
    );

    expect(wrap.find('button').exists()).toEqual(false);
  });

  test('should create a button if enough links are available', () => {
    const wrap = mount(
      <LinkGroup
        title="test"
        links={[
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    );

    expect(wrap.find('button').exists()).toEqual(true);
  });
});
