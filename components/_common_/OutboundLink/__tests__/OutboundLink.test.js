/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import ReactGA from 'react-ga';

import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com" router={MockedRouter}>
        Test
      </OutboundLink>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
        router={MockedRouter}
      >
        Test
      </OutboundLink>,
    );
  });

  it('should render ReactGA.OutboundLink when in prod environment', () => {
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';

    const OutboundLinkShallowInstance = shallow(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
        router={MockedRouter}
      >
        Testing
      </OutboundLink>,
    );

    expect(OutboundLinkShallowInstance.find('OutboundLink')).toHaveLength(1);
  });
});
