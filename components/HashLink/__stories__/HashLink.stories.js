import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import HashLink from '../HashLink';

storiesOf('HashLink', module)
  .addDecorator(withKnobs)
  .add('default', withInfo()(() => <HashLink>{text('children', 'string or .node')}</HashLink>));
