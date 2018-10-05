/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Heading from '../Heading';

describe('Heading', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<Heading>Test</Heading>);
  });

  it('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Heading className="test-class" id="test-heading-1" hasHeadingLines={false}>
        Test
      </Heading>,
    );
  });

  it('should render with "slate" in classNames when theme="slate"', () => {
    const HeaderInstance = shallow(<Heading theme="slate">Test</Heading>);

    expect(HeaderInstance).toHaveClassName('slate');
  });

  it('should render without "headingLines" in classNames when hasHeadingLines={false}', () => {
    const HeaderInstance = shallow(<Heading hasHeadingLines={false}>Test</Heading>);

    expect(HeaderInstance).not.toHaveClassName('headingLines');
  });
});
