import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
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
    const { container } = render(
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

    expect(container.querySelectorAll('li').length).toBe(1);

    fireEvent.click(container.querySelector('button'));

    expect(container.querySelectorAll('li').length).toBe(3);
  });

  it('should not create a button if not enough links', () => {
    const { container } = render(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={5}
      />,
    );

    expect(container.querySelector('button')).toBeNull();
  });

  it('should create a button if enough links are available', () => {
    const { container } = render(
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

    expect(container.querySelector('button')).not.toBeNull();
  });
});
