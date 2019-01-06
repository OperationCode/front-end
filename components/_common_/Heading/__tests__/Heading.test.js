/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Heading from '../Heading';

describe('Heading', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<Heading>Test</Heading>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Heading className="test-class" id="test-heading-1" hasHeadingLines={false}>
=======
  it('should render with required props', () => {
    createSnapshotTest(<Heading>Test</Heading>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading className="test-class" id="test-heading-1" hasHeadingLines={false} theme="secondary">
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        Test
      </Heading>,
    );
  });

<<<<<<< HEAD
  test('should render with "slate" in classNames when theme="slate"', () => {
    const HeaderInstance = shallow(<Heading theme="slate">Test</Heading>);

    expect(HeaderInstance).toHaveClassName('slate');
  });

  test('should render without "headingLines" in classNames when hasHeadingLines={false}', () => {
=======
  it('should render with "secondary" in classNames when theme="secondary"', () => {
    const HeaderInstance = shallow(<Heading theme="secondary">Test</Heading>);

    expect(HeaderInstance).toHaveClassName('secondary');
  });

  it('should render without "headingLines" in classNames when hasHeadingLines={false}', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    const HeaderInstance = shallow(<Heading hasHeadingLines={false}>Test</Heading>);

    expect(HeaderInstance).not.toHaveClassName('headingLines');
  });
});
