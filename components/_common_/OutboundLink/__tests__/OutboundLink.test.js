/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com">
        Test
      </OutboundLink>,
    );
  });

  it('should render SVG when `hasIcon` is true', () => {
    const wrapperWithIcon = mount(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon
      >
        Test
      </OutboundLink>,
    );

    expect(wrapperWithIcon.find('svg')).toExist();
  });

  it('should not render SVG when `hasIcon` is false', () => {
    const wrapperWithoutIcon = mount(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
      >
        Test
      </OutboundLink>,
    );

    expect(wrapperWithoutIcon.find('svg')).not.toExist();
  });
});
