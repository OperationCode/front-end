import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import YouTubeVideo from '../YouTubeVideo';

storiesOf('YouTubeVideo', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <YouTubeVideo
      height={number('height', 390)}
      width={number('width', 640)}
      videoId={text('videoId', 'dQw4w9WgXcQ')}
    />
  ));
