import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, object, select, text } from '@storybook/addon-knobs';

import Input from '../Input';

const inputName = text('field.name', 'someInput');

storiesOf('Form/Input', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <>
        <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Please Note: This component&apos;s story has no context of Formik and will not function
          properly.
        </h3>

        <Input
          field={{ name: inputName }}
          form={object('form', { touched: { [inputName]: false }, errors: { [inputName]: '' } })}
          hasValidationStyling={boolean('hasValidationStyling', true)}
          id={text('id', '')}
          isLabelHidden={boolean('isLabelHidden', false)}
          label={text('label', 'Some Input:')}
          type={select(
            'type',
            [
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
            ],
            'text',
          )}
        />
      </>
    )),
  );
