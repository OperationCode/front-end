import React from 'react';
import { mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import FrontSchoolCard from '../FrontSchoolCard';

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
    address1: '123 Battery Street',
    address2: 'Ste 1',
    city: 'San FDiego',
    va_accepted: false,
    zip: 90111,
  },
];

describe('FrontSchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <FrontSchoolCard
        cardFlipCallback={jest.fn()}
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

  it('should not render locations button with single location ', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <FrontSchoolCard
        cardFlipCallback={onClickMock}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={[{ ...locations[0] }]}
        logoSource="logoSource"
        name="school name"
        website="website"
      />,
    );
    const button = wrapper.find('button').filterWhere(node => node.text() === 'See Locations');
    expect(button.exists()).toBeFalsy();
  });
});
