import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Badge from '../Badge';

storiesOf('Common/Badge', module)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => <Badge>{text('children', 'PropTypes.string or .node')}</Badge>));
