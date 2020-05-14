import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, object, array, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Select from '../Select';

const setFieldTouched = action('setFieldTouched');
const setFieldValue = action('setFieldValue');

storiesOf('Form/Select', module)
  .addDecorator(withKnobs)
  .add(
    'Single default',
    withInfo()(() => {
      return (
        <>
          <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
            Please Note: This component&apos;s story has no context of Formik and will not function
            properly.
          </h3>

          <Select
            disabled={boolean('disabled', false)}
            field={{ name: 'someSelect', value: '' }}
            form={object('form', {
              touched: { someSelect: false },
              errors: { someSelect: '' },
              setFieldTouched,
              setFieldValue,
            })}
            hasValidationStyling={boolean('hasValidationStyling', true)}
            id={text('id', '')}
            isLabelHidden={boolean('isLabelHidden', false)}
            isMulti={false}
            label={text('label', 'Some Select:')}
            options={[text('options', { label: 'Some Option', value: 'option1' })]}
            placeholder={text('placeholder', '')}
          />
        </>
      );
    }),
  )
  .add(
    'Multi default',
    withInfo()(() => {
      return (
        <>
          <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
            Please Note: This component&apos;s story has no context of Formik and will not function
            properly.
          </h3>

          <Select
            disabled={boolean('disabled', false)}
            field={{ name: 'someSelect', value: [] }}
            form={object('form', {
              touched: { someSelect: false },
              errors: { someSelect: '' },
              setFieldTouched,
              setFieldValue,
            })}
            hasValidationStyling={boolean('hasValidationStyling', true)}
            id={text('id', '')}
            isLabelHidden={boolean('isLabelHidden', false)}
            isMulti
            label={text('label', 'Some Select:')}
            options={array('options', [
              { label: 'Option #1', value: 'option1' },
              { label: 'Option #2', value: 'option2' },
            ])}
            placeholder={text('placeholder', '')}
          />
        </>
      );
    }),
  );
