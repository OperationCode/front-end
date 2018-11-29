import React from 'react';
import { mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import FrontSchoolCard from '../FrontSchoolCard';

const locations = [
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94111',
  },
  {
    va_accepted: false,
    address1: '123 Battery Street',
    address2: 'Ste 1',
    city: 'San FDiego',
    zip: '90111',
  },
];

describe('FrontSchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <FrontSchoolCard
        cardFlipCallback={jest.fn()}
        hasHardwareIncluded
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="logoSource"
        name="school name"
        website="website"
      />,
    );
  });

  it('should call callback function when button is clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <FrontSchoolCard
        cardFlipCallback={onClickMock}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="logoSource"
        name="school name"
        website="website"
      />,
    );
    wrapper
      .find('button')
      .filterWhere(node => node.text() === 'See Locations')
      .simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
