import { RegistrationForm } from '../RegistrationForm';

export default {
  component: RegistrationForm,
  title: 'Forms/RegistrationForm',
};

const Template = arguments_ => {
  return (
    <>
      <span>Registration form</span>
      <RegistrationForm {...arguments_} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    email: '',
    'confirm-email': '',
    password: '',
    'confirm-password': '',
    firstName: '',
    lastName: '',
    zipcode: '',
  },
  onSuccess: () => {},
};
