import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Element } from 'react-scroll';
import ScrollButton from '../ScrollButton';

storiesOf('Common/ScrollButton', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '200vh',
        justifyContent: 'space-between',
        paddingTop: '1rem',
      }}
    >
      <ScrollButton
        fullWidth={boolean('fullWidth', false)}
        href={text('href', 'anchor')}
        onClick={action('ScrollButton Clicked!')}
        tabIndex={number('tabIndex', 0)}
        theme={select('theme', ['primary', 'secondary', 'slate'])}
      >
        {text('children', 'Click Me! (will scroll down) (PropTypes.node)')}
      </ScrollButton>

      <Element name="anchor">
        <h1>Scroll To Me</h1>
      </Element>
    </div>
  ));
