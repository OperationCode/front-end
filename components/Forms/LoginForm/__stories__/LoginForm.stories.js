import LoginForm from '../LoginForm';

export default {
  component: LoginForm,
  title: 'Forms/LoginForm',
};

const Template = arguments_ => {
  return (
    <>
      <span>Log in form</span>
      <LoginForm {...arguments_} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    email: '',
    password: '',
  },
  login: () => {},
  onSuccess: () => {},
};
