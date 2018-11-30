import React from 'react';
import { mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import BackSchoolCard from '../BackSchoolCard';

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
    city: 'San Diego',
    state: 'CA',
    va_accepted: false,
    zip: 90111,
  },
];

describe('BackSchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <BackSchoolCard
        cardFlipCallback={jest.fn()}
        locations={locations}
        logoSource="logoSource"
        schoolName="alt"
      />,
    );
  });

  it('should call callback function when button is clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <BackSchoolCard
        cardFlipCallback={onClickMock}
        locations={locations}
        logoSource="logoSource"
        schoolName="alt"
      />,
    );
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
