import ChangePasswordForm from '../ChangePasswordForm';

export default {
  component: ChangePasswordForm,
  title: 'Forms/ChangePasswordForm',
};

const Template = arguments_ => {
  return (
    <>
      <span>Change password form</span>
      <ChangePasswordForm {...arguments_} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    newPassword1: '',
    newPassword2: '',
  },
  onSubmit: () => {},
  onSuccess: () => {},
};
