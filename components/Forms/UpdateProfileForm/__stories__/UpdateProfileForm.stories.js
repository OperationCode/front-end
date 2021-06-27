import UpdateProfileForm from '../UpdateProfileForm';
import { ProfessionalDetails, MilitaryStatus, MilitaryDetails, Technology } from '../steps';

export default {
  component: UpdateProfileForm,
  title: 'Forms/UpdateProfileForm',
};

const Template = arguments_ => {
  return (
    <>
      <span>
        Update Profile Form <br />
        <b>TO FIX:</b> <i>cannot proceed to next steps as not authenticated in storybook</i>
      </span>
      <UpdateProfileForm {...arguments_} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    ...ProfessionalDetails.initialValues,
    ...MilitaryStatus.initialValues,
    ...MilitaryDetails.initialValues,
    ...Technology.initialValues,
  },
};
