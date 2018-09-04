/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ScrollButton from '../ScrollButton';

describe('ScrollButton', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<ScrollButton>Test</ScrollButton>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <ScrollButton
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        theme="secondary"
        type="submit"
      >
        Test
      </ScrollButton>,
    );
  });

  test('should render without a generated span when children is PropTypes.node', () => {
    const testText = 'Testing No Span';

    const ScrollButtonInstance = mount(
      <ScrollButton>
        <b>{testText}</b>
      </ScrollButton>,
    );

    expect(
      ScrollButtonInstance.containsAnyMatchingElements([
        <span>{testText}</span>,
        <span>
          <b>{testText}</b>
        </span>,
      ]),
    ).toEqual(false);
  });

  test('should render with a generated span when children is PropTypes.string', () => {
    const testText = 'Testing With Span';

    const ScrollButtonInstance = mount(<ScrollButton>{testText}</ScrollButton>);

    expect(ScrollButtonInstance.containsAllMatchingElements([<span>{testText}</span>])).toEqual(
      true,
    );
  });
});
