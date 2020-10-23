import React from 'react';

import Checkbox from '../Checkbox';

export default {
  component: Checkbox,
  title: 'Form/Checkbox',
};

const Template = arguments_ => (
  <>
    <span>
      NOTE: This component&apos;s story has no context outside of Formik and will not function
      properly
    </span>
    <Checkbox {...arguments_} />
  </>
);

const fieldName = 'someCheckbox';

export const Default = Template.bind({});

/** Default Checkbox supplied with only required args */
Default.args = {
  field: {
    name: fieldName,
  },
  form: {
    touched: { [fieldName]: false },
    errors: { [fieldName]: '' },
  },
  label: 'Checkbox label',
};
