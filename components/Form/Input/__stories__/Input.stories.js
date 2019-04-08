import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
 withKnobs, boolean, object, select, text 
} from '@storybook/addon-knobs';

import Input from '../Input';

const inputName = text('field.name', 'someInput');

storiesOf('Form/Input', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <Input
        field={{ name: inputName }}
        form={object('form', { touched: { [inputName]: false }, errors: { [inputName]: '' } })}
        id={text('id', '')}
        shouldHideError={boolean('shouldHideError', false)}
        shouldHideLabel={boolean('shouldHideLabel', false)}
        label={text('label', 'Some Input:')}
        type={select('type', [
          'button',
          'checkbox',
          'color',
          'date',
          'datetime-local',
          'email',
          'file',
          'hidden',
          'image',
          'month',
          'number',
          'password',
          'radio',
          'range',
          'reset',
          'search',
          'submit',
          'tel',
          'text',
          'time',
          'url',
          'week',
        ])}
      />
    )),
  );
