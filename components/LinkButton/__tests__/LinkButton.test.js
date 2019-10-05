import React from 'react';
import ReactGA from 'react-ga';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports
import createSnapshotTest from 'test-utils/createSnapshotTest';
import LinkButton from '../LinkButton';

const OutboundLinkButton = (
  <LinkButton
    href="https://tests.com"
    analyticsEventLabel="Test"
    className="test-class"
    fullWidth
    theme="secondary"
  >
    Test
  </LinkButton>
);

describe('LinkButton', () => {
  ReactGA.initialize('foo', { testMode: true });

  it('should render with required props', () => {
    createSnapshotTest(<LinkButton href="https://tests.com">Test</LinkButton>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(OutboundLinkButton);
  });

  it('should not create ReactGA event on click when in dev environment', () => {
    const wrapper = mount(OutboundLinkButton);

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
    wrapper.find('a').simulate('click');
    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
  });

  it('should create ReactGA event on click when in prod environment', () => {
    process.env.NODE_ENV = 'production';
    const wrapper = mount(OutboundLinkButton);

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
    wrapper.find('a').simulate('click');
    expect(ReactGA.testModeAPI.calls).toHaveLength(2);

    const newGAEventPayload = ReactGA.testModeAPI.calls[1][1];
    expect(newGAEventPayload.eventLabel).toStrictEqual('OUTBOUND [Test]');

    ReactGA.testModeAPI.calls = [];
  });
});
