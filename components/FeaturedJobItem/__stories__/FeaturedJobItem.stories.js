import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FeaturedJobItem from '../FeaturedJobItem';

export default {
  title: 'FeaturedJobItem',
  decorators: [withKnobs],
};

export const Default = () => (
  <FeaturedJobItem
    title={text('title', 'Director of Awesome')}
    source={text('source', 'GitLab')}
    sourceUrl={text('sourceUrl', 'https://www.gitlab.com')}
    city={text('city', 'Los Angeles')}
    state={text('state', 'California')}
    country={text('country', 'USA')}
    remote={boolean('remote', false)}
    description={text('description', 'You will be awesome at this job, apply for it!')}
  />
);
