import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import IconCard from '../IconCard';

storiesOf('Single-Purpose/SpecificCards/IconCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <IconCard
      fontAwesomeIcon={faExclamationTriangle}
      iconAboveHeading={boolean('iconAboveHeading', false)}
      iconSize={select(
        'iconSize',
        ['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
        '6x',
      )}
      subText={text('subText', 'staff@operationcode.org (PropTypes.node)')}
      title={text('title', 'Email')}
      url={text('url', 'mailto:staff@operationcode.org')}
    />
  ));
