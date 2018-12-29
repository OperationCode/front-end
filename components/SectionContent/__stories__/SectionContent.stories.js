import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import SectionContent from '../SectionContent';

storiesOf('Common/SectionContent', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <SectionContent>{text('children', 'PropTypes.string or .node')}</SectionContent>
    )),
  );
