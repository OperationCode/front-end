import React from 'react';
import { mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import SchoolCard, { getSchoolLocationText } from '../SchoolCard';

const locations = [
  {
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    state: 'CA',
    vaAccepted: true,
    zip: 94111,
  },
  {
    address1: '123Battery Street',
    address2: 'Ste 1',
    city: 'San Diego',
    state: 'CA',
    vaAccepted: false,
    zip: 90111,
  },
];

describe('SchoolCard', () => {
  let componentInstance;
  let wrapper;
  const toggleModal = jest.fn();
  beforeEach(() => {
    componentInstance = (
      <SchoolCard
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="source"
        name="school name"
        website="website"
        toggleModal={toggleModal}
      />
    );
    wrapper = mount(componentInstance);
  });

  it('should render with required props', () => {
    createShallowSnapshotTest(componentInstance);
  });

  it('should call toggleModal on click', () => {
    wrapper.find('button').simulate('click');
    expect(toggleModal).toHaveBeenCalled();
  });

  it('should display correct text based on location', () => {
    const [location] = locations;

    expect(getSchoolLocationText(false, [location])).toBe(`${location.city}, ${location.state}`);
    expect(getSchoolLocationText(false, locations)).toBe('Multiple locations');
    expect(getSchoolLocationText(true, locations)).toBe('Online only');
  });

  it('should render the "(view all)" button when multiple locations exist', () => {
    // ensure wrapper has multiple locations at this point
    expect(wrapper.prop('locations').length).toBeGreaterThan(1);
    expect(
      wrapper.find('button.modalToggler').filterWhere(node => node.text() === 'view all'),
    ).toExist();
  });
});
