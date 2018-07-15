import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import IconTextGrouping from '../IconTextGrouping';

storiesOf('Common/IconTextGrouping', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <IconTextGrouping
      fontAwesomeIcon={faExclamationTriangle}
      isIconAboveHeading={boolean('isIconAboveHeading', false)}
      iconSize={select(
        'iconSize',
        ['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
        '6x',
      )}
      subText={text('subText', 'Please read our Terms of Service before continuing...')}
      theme={select('theme', ['primary', 'secondary', 'gray'], 'secondary')}
      title={text('title', 'ToS')}
      url={text('url', 'https://operationcode.org/terms')}
    />
  ));
