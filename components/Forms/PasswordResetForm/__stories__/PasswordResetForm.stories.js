import { PasswordResetForm } from '../PasswordResetForm';

export default {
  component: PasswordResetForm,
  title: 'Forms/PasswordResetForm',
};

const Template = arguments_ => {
  return (
    <>
      <span>Password reset form</span>
      <PasswordResetForm {...arguments_} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    email: '',
  },
  onSuccess: () => {},
  passwordReset: () => {},
};
