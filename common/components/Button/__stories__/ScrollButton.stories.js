import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ScrollButton from '../ScrollButton';

storiesOf('Common/ScrollButton', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          height: '200vh',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          width: '90vw',
        }}
      >
        <ScrollButton
          fullWidth={boolean('fullWidth', false)}
          href={text('href', 'anchor')}
          onClick={action('ScrollButton Clicked!')}
          onKeyDown={action('Enter key pressed!')}
          tabIndex={number('tabIndex', 0)}
          theme={select('theme', ['primary', 'secondary', 'slate'])}
        >
          {text('children', 'Click Me! (will scroll down)')}
        </ScrollButton>

        <span id="anchor">Scroll To Me</span>
      </div>
    )),
  );
