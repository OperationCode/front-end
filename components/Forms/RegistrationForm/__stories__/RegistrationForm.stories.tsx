import type { StoryFn } from '@storybook/react';
import { RegistrationForm, type RegistrationFormValues } from '../RegistrationForm';

export default {
  component: RegistrationForm,
  title: 'Forms/RegistrationForm',
};

interface RegistrationFormArgs {
  initialValues: RegistrationFormValues;
  onSuccess: () => void;
}

const Template: StoryFn<RegistrationFormArgs> = args => {
  return (
    <>
      <span>Registration form</span>
      <RegistrationForm {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    email: '',
    'confirm-email': '',
    firstName: '',
    lastName: '',
    zipcode: '',
    codeOfConduct: false,
    slackGuidelines: false,
  },
  onSuccess: () => {
    // Empty handler for Storybook
  },
};
