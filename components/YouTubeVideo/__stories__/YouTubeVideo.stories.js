import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';

import YouTubeVideo from '../YouTubeVideo';

export default {
  title: 'YouTubeVideo',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <YouTubeVideo
    height={number('height', 390)}
    width={number('width', 640)}
    videoId={text('videoId', 'dQw4w9WgXcQ')}
  />
);
