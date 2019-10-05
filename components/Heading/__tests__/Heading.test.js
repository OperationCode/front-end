import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line no-restricted-imports
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Heading from '../Heading';

describe('Heading', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Heading>Test</Heading>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading className="test-class" id="test-heading-1" hasHeadingLines={false} theme="secondary">
        Test
      </Heading>,
    );
  });

  it('should render with "secondary" in classNames when theme="secondary"', () => {
    const HeaderInstance = shallow(<Heading theme="secondary">Test</Heading>);

    expect(HeaderInstance).toHaveClassName('secondary');
  });

  it('should render without "headingLines" in classNames when hasHeadingLines={false}', () => {
    const HeaderInstance = shallow(<Heading hasHeadingLines={false}>Test</Heading>);

    expect(HeaderInstance).not.toHaveClassName('headingLines');
  });
});
