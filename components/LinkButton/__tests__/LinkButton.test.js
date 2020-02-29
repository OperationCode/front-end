import React from 'react';
import ReactGA from 'react-ga';
import noop from 'lodash/noop';
import { fireEvent, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import LinkButton from '../LinkButton';

describe('LinkButton', () => {
  const requiredProps = {
    children: 'Test',
    href: 'https://tests.com',
  };

  const OutboundLinkButton = (
    <LinkButton
      {...requiredProps}
      analyticsEventLabel="Test"
      className="test-class"
      fullWidth
      theme="secondary"
    />
  );

  ReactGA.initialize('foo', { testMode: true });

  it('should render with required props', () => {
    createSnapshotTest(<LinkButton {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(OutboundLinkButton);
  });

  it('should not create ReactGA event on click when in dev environment', () => {
    const component = render(OutboundLinkButton);

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);

    fireEvent.click(component.container.querySelector('a'));

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
  });

  it('should create ReactGA event on click when in prod environment', () => {
    process.env.NODE_ENV = 'production';

    /* eslint-disable no-console */
    const realConsoleError = console.error;
    console.error = noop;
    /* eslint-enable no-console */

    const component = render(OutboundLinkButton);

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);

    fireEvent.click(component.container.querySelector('a'));

    expect(ReactGA.testModeAPI.calls).toHaveLength(2);

    const newGAEventPayload = ReactGA.testModeAPI.calls[1][1];
    expect(newGAEventPayload.eventLabel).toStrictEqual('OUTBOUND [Test]');

    ReactGA.testModeAPI.calls = [];

    // eslint-disable-next-line no-console
    console.error = realConsoleError;
  });
});
