/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
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
});
