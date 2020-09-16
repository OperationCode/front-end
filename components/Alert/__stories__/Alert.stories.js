import React from 'react';

import Alert from '../Alert';

export default {
  component: Alert,
  title: 'Alert',
};

const Template = arguments_ => <Alert {...arguments_} />;

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  children: 'Error Alert JSX or Text',
  type: 'error',
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  children: 'Success Alert JSX or Text',
  type: 'success',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  children: 'Warning Alert JSX or Text',
  type: 'warning',
};
