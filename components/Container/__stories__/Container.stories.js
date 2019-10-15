import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Container from '../Container';

export default {
  title: 'Container',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Container
    backgroundImageSource={text('backgroundImageSource', '')}
    isFullViewportHeight={boolean('isFullViewportHeight', false)}
    theme={select('theme', ['gray', 'secondary', 'white'], 'secondary')}
  >
    {text('children', 'You can put anything here!')}
  </Container>
);
