import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import { BUTTON } from 'common/constants/testIDs';
import SchoolCard, { getSchoolLocationText, ONLINE_ONLY, UNKNOWN, MULTIPLE } from '../SchoolCard';

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
  const toggleModal = jest.fn();

  const requiredProps = {
    hasHardwareIncluded: true,
    hasHousing: true,
    hasOnline: true,
    hasOnlyOnline: false,
    isFullTime: true,
    locations,
    logoSource: 'source',
    name: 'school name',
    website: 'website',
    toggleModal,
  };

  it('should render with required props', () => {
    createShallowSnapshotTest(<SchoolCard {...requiredProps} />);
  });

  it('should open modal when clicking button', () => {
    const { queryByTestId } = render(<SchoolCard {...requiredProps} />);

    expect(toggleModal).not.toHaveBeenCalled();

    fireEvent.click(queryByTestId(BUTTON));

    expect(toggleModal).toHaveBeenCalledTimes(1);
  });

  it('should not render a button when passed a single location', () => {
    const arrayOfOneLocation = [locations[0]];
    expect(arrayOfOneLocation.length).toBe(1);

    const { queryByTestId } = render(
      <SchoolCard {...requiredProps} locations={arrayOfOneLocation} />,
    );

    expect(queryByTestId(BUTTON)).toBeNull();
  });

  it('should not render a button when passed no locations', () => {
    const emptyArray = [];
    expect(emptyArray.length).toBe(0);

    const { queryByTestId } = render(<SchoolCard {...requiredProps} locations={emptyArray} />);

    expect(queryByTestId(BUTTON)).toBeNull();
  });
});

describe('getSchoolLocationText', () => {
  const [firstLocation] = locations;
  const { city, state } = firstLocation;

  it('returns expectedly with online-only school', () => {
    expect(getSchoolLocationText(true, locations)).toBe(ONLINE_ONLY);
  });

  it('returns expectedly when locations is undefined and school is not online-only', () => {
    expect(getSchoolLocationText(false, undefined)).toBe(UNKNOWN);
  });

  it('returns expectedly when passed multiple locations', () => {
    expect(getSchoolLocationText(false, locations)).toBe(MULTIPLE);
  });

  it('returns expectedly when passed a single non-online location', () => {
    expect(getSchoolLocationText(false, [firstLocation])).toBe(`${city}, ${state}`);
  });
});
