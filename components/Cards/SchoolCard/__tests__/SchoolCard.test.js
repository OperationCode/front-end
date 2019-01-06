<<<<<<< HEAD
/* eslint-env jest */
import React from 'react';
import s3 from 'common/constants/urls';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import SchoolCard from '../SchoolCard';

describe('SchoolCard', () => {
  test('should render properly with all props assigned', () => {
    createSnapshotTest(
      <SchoolCard
        schoolWebsite="https://www.codeplatoon.org"
        schoolName="Code Platoon"
        schoolAddress="123 Baker Street"
        schoolCity="Chicago"
        schoolState="IL"
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        acceptsGIBill
        isFullTime
        hasHardware={false}
      />,
    );
  });

  test('should render properly with all required assigned', () => {
    createSnapshotTest(
      <SchoolCard
        schoolWebsite="https://www.codeplatoon.org/not-real"
        schoolName="Code Platoon Fake"
        schoolAddress="123 Baker Street"
        logoSource={`${s3}codeSchoolLogos/code_platoon.jpg`}
        acceptsGIBill={false}
        isFullTime={false}
        hasHardware
      />,
    );
=======
import React from 'react';
import { mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import SchoolCard from '../SchoolCard';

const locations = [
  {
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    state: 'CA',
    va_accepted: true,
    zip: 94111,
  },
  {
    address1: '123Battery Street',
    address2: 'Ste 1',
    city: 'San Diego',
    state: 'CA',
    va_accepted: false,
    zip: 90111,
  },
];

describe('SchoolCard', () => {
  let componentInstance;
  let wrapper;
  let onClickMock;
  beforeEach(() => {
    componentInstance = (
      <SchoolCard
        cardFlipCallback={onClickMock}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="source"
        name="school name"
        website="website"
      />
    );
    onClickMock = jest.fn();
    wrapper = mount(componentInstance);
  });

  it('should render with required props', () => {
    createShallowSnapshotTest(componentInstance);
  });

  it('should change state when see locations button is clicked', () => {
    expect(wrapper.state('isFrontOfCardShowing')).toBe(true);
    wrapper
      .find('button')
      .filterWhere(node => node.text() === 'See Locations')
      .simulate('click');
    expect(wrapper.state('isFrontOfCardShowing')).toBe(false);
  });

  it('should render the "See Locations" button when multiple locations exist', () => {
    // ensure wrapper has multiple locations at this point
    expect(wrapper.prop('locations').length).toBeGreaterThan(1);
    expect(wrapper.find('button').filterWhere(node => node.text() === 'See Locations')).toExist();
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
