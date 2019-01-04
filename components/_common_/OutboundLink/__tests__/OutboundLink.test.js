/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import ReactGA from 'react-ga';

import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com">
        Test
      </OutboundLink>,
    );
  });

  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
      >
        Test
      </OutboundLink>,
    );
  });

  test('should render ReactGA.OutboundLink when in prod environment', () => {
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

    expect(OutboundLinkShallowInstance.find('OutboundLink').length).toEqual(1);
  });
});
