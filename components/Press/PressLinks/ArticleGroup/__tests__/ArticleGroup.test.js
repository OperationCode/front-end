import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { mount, shallow } from 'enzyme';

import ArticleGroup from '../ArticleGroup';

describe('ArticleGroup', () => {
<<<<<<< HEAD
  test('should render properly with required props', () =>
=======
  it('should render with required props', () =>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createShallowSnapshotTest(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={1}
      />,
    ));

<<<<<<< HEAD
  test('should render properly with required props and 3 links and a button', () =>
=======
  it('should render with required props and 3 links and a button', () =>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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

<<<<<<< HEAD
  test('should setState when clicking Show All button', () => {
=======
  it('should setState when clicking Show All button', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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

<<<<<<< HEAD
    expect(ArticleGroupShallowInstance.state().areAllLinksVisible).toEqual(true);
  });

  test('should not create a button if not enough links', () => {
=======
    expect(ArticleGroupShallowInstance.state().areAllLinksVisible).toStrictEqual(true);
  });

  it('should not create a button if not enough links', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const wrap = mount(
      <ArticleGroup
        region="test"
        articles={[{ title: 'Example', url: 'https://example.com' }]}
        numberOfInitiallyVisibleLinks={5}
      />,
    );

<<<<<<< HEAD
    expect(wrap.find('button').exists()).toEqual(false);
  });

  test('should create a button if enough links are available', () => {
=======
    expect(wrap.find('button').exists()).toStrictEqual(false);
  });

  it('should create a button if enough links are available', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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

<<<<<<< HEAD
    expect(wrap.find('button').exists()).toEqual(true);
=======
    expect(wrap.find('button').exists()).toStrictEqual(true);
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
