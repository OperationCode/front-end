/* eslint-env jest */
import React from 'react';
<<<<<<< HEAD
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import ReactGA from 'react-ga';
=======
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com">
        Test
      </OutboundLink>,
    );
  });

<<<<<<< HEAD
  test('should render properly with all props assigned', () => {
    createSnapshotTest(
=======
  it('should render SVG when `hasIcon` is true', () => {
    const wrapperWithIcon = mount(
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
<<<<<<< HEAD
        hasIcon={false}
=======
        hasIcon
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      >
        Test
      </OutboundLink>,
    );
<<<<<<< HEAD
  });

  test('should render ReactGA.OutboundLink when in prod environment', () => {
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';

    const OutboundLinkShallowInstance = shallow(
=======

    expect(wrapperWithIcon.find('svg')).toExist();
  });

  it('should not render SVG when `hasIcon` is false', () => {
    const wrapperWithoutIcon = mount(
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
<<<<<<< HEAD
        router={MockedRouter}
      >
        Testing
      </OutboundLink>,
    );

    expect(OutboundLinkShallowInstance.find('OutboundLink').length).toEqual(1);
=======
      >
        Test
      </OutboundLink>,
    );

    expect(wrapperWithoutIcon.find('svg')).not.toExist();
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
