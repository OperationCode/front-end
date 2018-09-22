import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FeaturedJobItem from '../FeaturedJobItem';

storiesOf('Common/FeaturedJobItem', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <FeaturedJobItem
      title={text('title', 'Technical Product Marketing Manager')}
      source={text('source', 'GitLab')}
      sourceUrl={text('sourceUrl', 'https://www.gitlab.com')}
      city={text('city', 'Los Angeles')}
      state={text('state', 'California')}
      country={text('country', 'USA')}
      remote={boolean('remote', false)}
      description={text(
        'description',
        'As a Technical Product Marketing Manager, you will work closely with our marketing, engineering, business development and sales team, and partners to help them understand how core GitLab technical value offerings solve customer problems as well as educate them about market competitors. You will be responsible for technical marketing content and representing GitLab as a technical evangelist at key trade shows and customer meetings.',
      )}
    />
  ));
