import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import { SelectSingle } from 'components/Form/Select/SelectSingle';
import { mapStringsToSelectOptions } from 'common/utils/array-utils';
import { SelectMulti } from 'components/Form/Select/SelectMulti';
import type { OptionType } from 'components/Form/Select/ThemedReactSelect';

PersonalDetails.title = 'Personal Details';

PersonalDetails.validationSchema = Yup.object().shape({
  joinReason: Yup.array()
    .of(Yup.object().shape({ label: Yup.string(), value: Yup.string() }))
    .min(1, validationErrorMessages.required),
  gender: Yup.string().required(validationErrorMessages.required),
  ethnicity: Yup.array()
    .of(Yup.object().shape({ label: Yup.string(), value: Yup.string() }))
    .min(1, validationErrorMessages.required),
  educationLevel: Yup.string().required(validationErrorMessages.required),
});

PersonalDetails.initialValues = {
  joinReason: [] as OptionType[],
  gender: '',
  ethnicity: [] as OptionType[],
  educationLevel: '',
};

export type PersonalDetailsFormShape = typeof PersonalDetails.initialValues;

interface PersonalDetailsProps {
  isSubmitting: boolean;
}

const joinReasonOptions = mapStringsToSelectOptions([
  'I’d like access to jobs',
  'I’d like access to resources',
  'I’d like to mentor/help others',
  'I’m looking for community',
  'I’m looking to grow in my tech career',
  'I’m transitioning from my military career',
  'None of the above',
]);

const genderOptions = mapStringsToSelectOptions([
  'Male',
  'Female',
  'Non-binary/gender queer',
  'Transgendered',
]);

const ethnicityOptions = mapStringsToSelectOptions([
  'Aboriginal/Indigenous/Native American',
  'African American',
  'Caucasian',
  'East or South Asian',
  'Hispanic/Latino',
  'Middle Eastern/North African',
  'Pacific Islander or Native Hawaiian',
]);

const educationLevelOptions = mapStringsToSelectOptions([
  'High school',
  'College/Associates degree',
  '4 year Bachelor’s degree',
  'Graduate degree',
  'Post-Graduate degree',
  'Coding Bootcamp/other Professional Certifications',
  'No formal education / Self-taught',
]);

export function PersonalDetails({ isSubmitting }: PersonalDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Field
        name="joinReason"
        label="Join Reason*"
        component={SelectMulti}
        options={joinReasonOptions}
        isDisabled={isSubmitting}
      />

      <Field
        name="gender"
        label="Gender*"
        component={SelectSingle}
        options={genderOptions}
        isDisabled={isSubmitting}
      />

      <Field
        name="ethnicity"
        label="Ethnicity*"
        component={SelectMulti}
        options={ethnicityOptions}
        isDisabled={isSubmitting}
      />

      <Field
        name="educationLevel"
        label="Education Level*"
        component={SelectSingle}
        options={educationLevelOptions}
        isDisabled={isSubmitting}
      />
    </div>
  );
}
