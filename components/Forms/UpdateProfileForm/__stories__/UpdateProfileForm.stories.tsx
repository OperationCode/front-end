import { ProfessionalDetails } from 'components/Forms/UpdateProfileForm/steps/ProfessionalDetails';
import { MilitaryDetails } from 'components/Forms/UpdateProfileForm/steps/MilitaryDetails';
import { MilitaryStatus } from 'components/Forms/UpdateProfileForm/steps/MilitaryStatus';
import { PersonalDetails } from 'components/Forms/UpdateProfileForm/steps/PersonalDetails';
import type { UpdateProfileFormProps } from '../UpdateProfileForm';
import UpdateProfileForm from '../UpdateProfileForm';

export default {
  component: UpdateProfileForm,
  title: 'Forms/UpdateProfileForm',
};

const Template = (args: UpdateProfileFormProps) => {
  return (
    <>
      <span>
        Update Profile Form <br />
        <b>TO FIX:</b> <i>cannot proceed to next steps as not authenticated in storybook</i>
      </span>
      <UpdateProfileForm {...args} />
    </>
  );
};

// Default Input supplied with only required args
export const Default = Template.bind({});

// @ts-expect-error - Storybook thing with static properties.
Default.args = {
  initialValues: {
    ...ProfessionalDetails.initialValues,
    ...MilitaryStatus.initialValues,
    ...MilitaryDetails.initialValues,
    ...PersonalDetails.initialValues,
  },
};
