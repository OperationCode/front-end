import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
 withKnobs, boolean, select, text 
} from '@storybook/addon-knobs';

import { s3 } from 'common/constants/urls';
import Container from '../Container';

const defaultImageUrl = `${s3}redesign/heroBanners/homepage.jpg`;

storiesOf('Common/Container', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Container
        backgroundImageSource={text('backgroundImageSource', defaultImageUrl)}
        isFullViewportHeight={boolean('isFullViewportHeight', false)}
        theme={select('theme', ['gray', 'secondary', 'white'], 'gray')}
      >
        {text('children', 'You can put anything here!')}
      </Container>
    )),
  );
