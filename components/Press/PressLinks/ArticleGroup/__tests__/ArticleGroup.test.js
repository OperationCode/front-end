import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mount, shallow } from 'enzyme';

import ArticleGroup from '../ArticleGroup';

describe('ArticleGroup', () => {
  test('should render properly with required props', () =>
    createShallowSnapshotTest(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={1}
      />,
    ));

  test('should render properly with required props and 3 links and a button', () =>
    createShallowSnapshotTest(
      <ArticleGroup
        region="test"
        articles={[
          { title: 'Example', url: 'https://example.com' },
          { title: 'Example', url: 'https://example.com' },
          { title: 'Example', url: 'https://example.com' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    ));

  test('should setState when clicking Show All button', () => {
    const ArticleGroupShallowInstance = shallow(
      <ArticleGroup
        region="test"
        articles={[
          { title: 'Example', url: 'https://example.com' },
          { title: 'Example', url: 'https://example.com' },
          { title: 'Example', url: 'https://example.com' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    );

    ArticleGroupShallowInstance.instance().clickHandler();

    expect(ArticleGroupShallowInstance.state().areAllLinksVisible).toEqual(true);
  });

  test('should not create a button if not enough links', () => {
    const wrap = mount(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={5}
      />,
    );

    expect(wrap.find('button').exists()).toEqual(false);
  });

  test('should create a button if enough links are available', () => {
    const wrap = mount(
      <ArticleGroup
        region="test"
        articles={[
          { title: 'Example', url: 'https://example.com' },
          { title: 'Example', url: 'https://example.com' },
          { title: 'Example', url: 'https://example.com' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    );

    expect(wrap.find('button').exists()).toEqual(true);
  });
});
