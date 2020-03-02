import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ReactGA from 'react-ga';
import { BUTTON } from 'common/constants/testIDs';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Button from '../Button';

describe('Button', () => {
  ReactGA.initialize('foo', { testMode: true });

  it('should render with required props', () => {
    createSnapshotTest(<Button>Test</Button>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Button
        analyticsObject={{ action: 'Test Button Selected', category: 'Testing' }}
        className="test-class"
        disabled
        fullWidth
        onClick={jest.fn()}
        tabIndex={-1}
        theme="secondary"
        type="submit"
        data-id="test-id"
      >
        Test
      </Button>,
    );
  });

  it('should send log to console when button is clicked in non-prod environment', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();

    const { queryByTestId } = render(<Button data-testid={BUTTON}>Testing</Button>);

    fireEvent.click(queryByTestId(BUTTON));

    // eslint-disable-next-line no-console
    expect(console.log.mock.calls).toHaveLength(1);
  });

  it('call props.onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { queryByTestId } = render(<Button onClick={onClickMock}>Testing</Button>);

    expect(onClickMock).toHaveBeenCalledTimes(0);

    fireEvent.click(queryByTestId(BUTTON));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not create ReactGA event on click when in dev environment', () => {
    const { queryByTestId } = render(<Button>Testing</Button>);

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);

    fireEvent.click(queryByTestId(BUTTON));

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
  });

  it('should create ReactGA event on click when in prod environment', () => {
    process.env.NODE_ENV = 'production';
    const { queryByTestId } = render(<Button>Testing</Button>);

    const buttonEventPayload = [
      'send',
      {
        eventAction: 'Button Selected',
        eventCategory: 'Interactions',
        hitType: 'event',
      },
    ];

    expect(ReactGA.testModeAPI.calls).not.toContainEqual(buttonEventPayload);

    fireEvent.click(queryByTestId(BUTTON));

    expect(ReactGA.testModeAPI.calls).toContainEqual(buttonEventPayload);
  });
});
