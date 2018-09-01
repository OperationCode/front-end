import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import AdBanner from '../AdBanner';

storiesOf('AdBanner', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <AdBanner
      altText={text('altText', 'Logo for AutoGravity')}
      imageSource={text(
        'imageSource',
        'http://speedlux.com/wp-content/uploads/2017/02/AutoGravity-logo-1.png',
      )}
      href={text('href', 'https://autogravity.com')}
    >
      {text('children', 'PropTypes.any')}
    </AdBanner>
  ));
