import React from 'react';
import { mount } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import BackSchoolCard from '../BackSchoolCard';

const locations = [
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    zip: '94111',
  },
  {
    va_accepted: true,
    address1: '825 Battery Street',
    address2: '3rd Floor',
    city: 'San Francisco',
    zip: '94111',
  },
];

describe('BackSchoolCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <BackSchoolCard
        cardFlipCallback={jest.fn()}
        locations={locations}
        logoSource="logoSource"
        alt="alt"
      >
        <p>Testing!</p>
      </BackSchoolCard>,
    );
  });

  it('should call callback function', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <BackSchoolCard
        cardFlipCallback={onClickMock}
        locations={locations}
        logoSource="logoSource"
        alt="alt"
      />,
    );
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
