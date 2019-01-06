import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
<<<<<<< HEAD
import { withKnobs, boolean, number, object, select, text } from '@storybook/addon-knobs';
=======
import {
 withKnobs, boolean, number, object, select, text 
} from '@storybook/addon-knobs';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import { googleAnalyticsEventStoryObjectFactory } from 'common/constants/custom-props';
import { action } from '@storybook/addon-actions';

import Button from '../Button';

storiesOf('Common/Button', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Button
        analyticsObject={object('analyticsObject', {
          ...googleAnalyticsEventStoryObjectFactory(),
          category: 'Interactions',
          action: 'Button Selected',
        })}
        disabled={boolean('disabled', false)}
        fullWidth={boolean('fullWidth', false)}
<<<<<<< HEAD
        href={text('href', '')}
        onClick={action('Button Clicked!')}
        tabIndex={number('tabIndex', 0)}
        theme={select('theme', ['primary', 'secondary', 'slate'])}
=======
        onClick={action('Button Clicked!')}
        tabIndex={number('tabIndex', 0)}
        theme={select('theme', ['primary', 'secondary'], 'primary')}
        type={select('type', ['button', 'reset', 'submit'], 'button')}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      >
        {text('children', 'Click Me!')}
      </Button>
    )),
  );
