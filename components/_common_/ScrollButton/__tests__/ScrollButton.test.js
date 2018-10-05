/* eslint-env jest */
import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactGA from 'react-ga';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ScrollButton from '../ScrollButton';

describe('ScrollButton', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ScrollButton href="#test">Test</ScrollButton>);
  });

  it('should render with all props assigned', () => {
    createSnapshotTest(
      <ScrollButton
        className="test"
        fullWidth
        href="#test"
        onClick={jest.fn()}
        tabIndex={-1}
        theme="secondary"
      >
        Test
      </ScrollButton>,
    );
  });

  it('should render without a generated span when children is PropTypes.node', () => {
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
    ).toStrictEqual(false);
  });

  it('should render with a generated span when children is PropTypes.string', () => {
    const testText = 'Testing With Span';

    const ScrollButtonInstance = mount(<ScrollButton href="#test">{testText}</ScrollButton>);

    expect(
      ScrollButtonInstance.containsAllMatchingElements([<span>{testText}</span>]),
    ).toStrictEqual(true);
  });

  it('should send log to console when clickHandler is called in non-prod environment', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();

    const ScrollButtonShallowInstance = shallow(<ScrollButton href="#test">Testing</ScrollButton>);

    ScrollButtonShallowInstance.instance().clickHandler();

    expect(console.log.mock.calls).toHaveLength(1);
    /* eslint-enable no-console */
  });

  it('should call ReactGA when in prod environment', () => {
    /* eslint-disable no-console */
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';

    const ScrollButtonShallowInstance = shallow(<ScrollButton href="#test">Testing</ScrollButton>);

    ScrollButtonShallowInstance.instance().clickHandler();

    expect(ReactGA.testModeAPI.calls).toContainEqual(['create', 'foo', 'auto']);
  });
});
