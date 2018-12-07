import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import ContentContainer from '../ContentContainer';

storiesOf('Common/ContentContainer', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <ContentContainer>{text('children', 'PropTypes.string or .node')}</ContentContainer>
    )),
  );
