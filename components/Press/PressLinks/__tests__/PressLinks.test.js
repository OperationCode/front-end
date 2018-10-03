import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mount, shallow } from 'enzyme';

import PressLinks from '../PressLinks';
import LinkGroup from '../LinkGroup';

describe('PressLinks', () => {
  test('it should render properly no props', () => createShallowSnapshotTest(<PressLinks />));
});

describe('PressLinks > LinkGroups', () => {
  test('it should render properly with required props', () =>
    createShallowSnapshotTest(
      <LinkGroup
        title="test"
        links={[{ url: 'https://example.com', title: 'Example' }]}
        MaxLinks={1}
      />,
    ));

  test('it should render a button', () =>
    createShallowSnapshotTest(
      <LinkGroup
        title="test"
        links={[
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
        ]}
        MaxLinks={1}
      />,
    ));

  test('LinkGroup should setState when clicking Show All button', () => {
    const LinkGroupShallowInstance = shallow(
      <LinkGroup
        title="test"
        links={[
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
          { url: 'https://example.com', title: 'Example' },
        ]}
        MaxLinks={1}
      />,
    );

    LinkGroupShallowInstance.instance().clickHandler();

    expect(LinkGroupShallowInstance.state().ShowAll).toEqual(true);
  });

  test('LinkGroup should not create a button if not enough links', () => {
    const wrap = mount(
      <LinkGroup
        title="test"
        links={[{ url: 'https://example.com', title: 'Example' }]}
        MaxLinks={5}
      />,
    );

    expect(wrap.find('button').exists()).toEqual(false);
  });
});
