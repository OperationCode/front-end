/* eslint-env jest */
import React from 'react';
import { mount, shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ScrollButton from '../ScrollButton';

describe('ScrollButton', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<ScrollButton href="#test">Test</ScrollButton>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <ScrollButton disabled fullWidth href="#test" theme="secondary" type="submit">
        Test
      </ScrollButton>,
    );
  });

  test('should render without a generated span when children is PropTypes.node', () => {
    const testText = 'Testing No Span';

    const ScrollButtonInstance = mount(
      <ScrollButton href="#test">
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

    const ScrollButtonInstance = mount(<ScrollButton href="#test">{testText}</ScrollButton>);

    expect(ScrollButtonInstance.containsAllMatchingElements([<span>{testText}</span>])).toEqual(
      true,
    );
  });

  test('should send log to console when clickHandler is called in non-prod environment', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();

    const ScrollButtonShallowInstance = shallow(<ScrollButton href="#test">Testing</ScrollButton>);

    ScrollButtonShallowInstance.instance().clickHandler();

    expect(console.log.mock.calls.length).toEqual(1);
    /* eslint-enable no-console */
  });
});
