/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import TeamMemberCard from '../TeamMemberCard';

describe('TeamMemberCard', () => {
  it('should render properly with all required props assigned', () => {
    createSnapshotTest(
      <TeamMemberCard
        imageAlternateText="Kyle's beautiful face"
        imageSource="https://kylemh.com/public/img/me.jpg"
        name="Kyle Holmberg"
        staffRole="Front-end Lead Engineer"
      />,
    );
  });

  it('should render properly with all props assigned', () => {
    createSnapshotTest(
      <TeamMemberCard
        email="inbox@kylemh.com"
        imageAlternateText="Kyle's beautiful face"
        imageSource="https://kylemh.com/public/img/me.jpg"
        name="Kyle Holmberg"
        staffRole="Front-end Lead Engineer"
        twitterHandle="kylemh"
      />,
    );
  });
});
