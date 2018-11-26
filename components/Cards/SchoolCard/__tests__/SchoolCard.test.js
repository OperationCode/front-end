import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import SchoolCard from '../SchoolCard';

const locations = [
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    zip: '94111',
  },
];

describe('SchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <SchoolCard
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="logoSource.com"
        name="school name"
        website="website.com"
      >
        <p>Testing!</p>
      </SchoolCard>,
    );
  });
  it('call to showBackOfCard/showFrontOfTheCard flips isFrontOfCardShowing', () => {
    const wrapper = shallow(
      <SchoolCard
        cardFlipCallback={() => {}}
        hasHardwareIncluded
        hasHousing
        hasOnline
        hasOnlyOnline={false}
        isFullTime
        locations={locations}
        logoSource="source"
        name="school name"
        website="website"
      >
        Test
      </SchoolCard>,
    );
    const instance = wrapper.instance();
    wrapper.setState({ isFrontOfCardShowing: true });
    expect(wrapper.state('isFrontOfCardShowing')).toBe(true);
    instance.showBackOfCard();
    expect(wrapper.state('isFrontOfCardShowing')).toBe(false);
    instance.showFrontOfCard();
    expect(wrapper.state('isFrontOfCardShowing')).toBe(true);
  });
});
