import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FeaturedJobItem from '../FeaturedJobItem';

storiesOf('Common/FeaturedJobItem', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <FeaturedJobItem
      title={text('title', 'Director of Awesome')}
      source={text('source', 'Gitlab')}
      sourceUrl={text('sourceUrl', 'https://www.gitlab.com')}
      city={text('city', 'Los Angeles')}
      state={text('state', 'California')}
      country={text('country', 'USA')}
      remote={boolean('remote', false)}
      description={text('description', 'You will be awesome at this job, apply for it!')}
    />
  ));
