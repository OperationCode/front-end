import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import Pagination from '../Pagination';

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => <Pagination>{text('children', 'string or .node')}</Pagination>));
