import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports

import ArticleGroup from '../ArticleGroup';

describe('ArticleGroup', () => {
  it('should render with required props', () =>
    createShallowSnapshotTest(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={1}
      />,
    ));

  it('should render with required props and 3 links and a button', () =>
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

  it('should show all links when clicking Show All button', () => {
    const ArticleGroupShallowInstance = mount(
      <ArticleGroup
        region="test"
        articles={[
          { title: 'Example1', url: 'https://example1.com' },
          { title: 'Example2', url: 'https://example2.com' },
          { title: 'Example3', url: 'https://example3.com' },
        ]}
        numberOfInitiallyVisibleLinks={1}
      />,
    );

    expect(ArticleGroupShallowInstance.find('li')).toHaveLength(1);

    ArticleGroupShallowInstance.find('button').simulate('click');

    expect(ArticleGroupShallowInstance.find('li')).toHaveLength(3);
  });

  it('should not create a button if not enough links', () => {
    const wrap = mount(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={5}
      />,
    );

    expect(wrap.find('button').exists()).toStrictEqual(false);
  });

  it('should create a button if enough links are available', () => {
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

    expect(wrap.find('button').exists()).toStrictEqual(true);
  });
});
