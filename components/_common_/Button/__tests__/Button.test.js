/* eslint-env jest */
import React from 'react';
import { mount, shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Button from '../Button';

describe('Button', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<Button>Test</Button>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Button
        theme="secondary"
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        type="submit"
      >
        Test
      </Button>,
    );
  });

  test('should render without a generated span when children is PropTypes.node', () => {
    const testText = 'Testing No Span';

    const ButtonInstance = mount(
      <Button>
        <b>{testText}</b>
      </Button>,
    );

    expect(
      ButtonInstance.containsAnyMatchingElements([
        <span>{testText}</span>,
        <span>
          <b>{testText}</b>
        </span>,
      ]),
    ).toEqual(false);
  });

  test('should render with a generated span when children is PropTypes.string', () => {
    const testText = 'Testing With Span';

    const ButtonInstance = mount(<Button>{testText}</Button>);

    expect(ButtonInstance.containsAllMatchingElements([<span>{testText}</span>])).toEqual(true);
  });

  test('should send log to console when clickHandler is called in non-prod environment', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();

    const ButtonShallowInstance = shallow(<Button>Testing</Button>);

    ButtonShallowInstance.instance().clickHandler();

    expect(console.log.mock.calls.length).toEqual(1);
    /* eslint-enable no-console */
  });
});
