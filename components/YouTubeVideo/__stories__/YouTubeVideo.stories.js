import React from 'react';

import YouTubeVideo from '../YouTubeVideo';

export default {
  component: YouTubeVideo,
  title: 'YouTubeVideo',
};

const Template = arguments_ => <YouTubeVideo {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  videoId: 'dQw4w9WgXcQ',
};
