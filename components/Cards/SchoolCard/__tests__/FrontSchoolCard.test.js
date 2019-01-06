import React from 'react';
import { mount, shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import FrontSchoolCard from '../FrontSchoolCard';

const withGIBill = {
  address1: '825 Battery Street',
  address2: '3rd Floor',
  city: 'San Francisco',
  state: 'CA',
  va_accepted: true,
  zip: 94111,
};

const withoutGIBill = {
  address1: '123 Battery Street',
  address2: 'Ste 1',
  city: 'San FDiego',
  va_accepted: false,
  zip: 90111,
};

const locations = [
  {
    ...withGIBill,
  },
  {
    ...withoutGIBill,
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

  it('should fire callback function when button is clicked', () => {
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
    const wrapper = shallow(
      <FrontSchoolCard
        cardFlipCallback={jest.fn()}
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

    expect(button.exists()).toStrictEqual(false);
  });

  it('should render a disabled icon for GI Bill if no location accepts the GI Bill', () => {
    const wrapper = mount(
      <FrontSchoolCard
        cardFlipCallback={jest.fn()}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={[{ ...withGIBill }]}
        logoSource="logoSource"
        name="school name"
        website="website"
      />,
    );

    const badgeGIBill = wrapper.find('Badge').first();

    expect(badgeGIBill.text()).toStrictEqual('G.I. Bill');
    expect(badgeGIBill).toHaveClassName('active');
  });

  it('should render an active icon for GI Bill if a location accepts the GI Bill', () => {
    const wrapper = mount(
      <FrontSchoolCard
        cardFlipCallback={jest.fn()}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={[{ ...withoutGIBill }]}
        logoSource="logoSource"
        name="school name"
        website="website"
      />,
    );

    const badgeGIBill = wrapper.find('Badge').first();

    expect(badgeGIBill.text()).toStrictEqual('G.I. Bill');
    expect(badgeGIBill).toHaveClassName('disabled');
  });
});
