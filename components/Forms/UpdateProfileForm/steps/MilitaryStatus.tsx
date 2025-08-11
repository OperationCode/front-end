import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import { SelectSingle } from 'components/Form/Select/SelectSingle';
import Alert from 'components/Alert/Alert';

MilitaryStatus.title = 'Military Status';

MilitaryStatus.validationSchema = Yup.object().shape({
  militaryAffiliation: Yup.string().required(validationErrorMessages.required),
});

MilitaryStatus.initialValues = {
  militaryAffiliation: '',
};

export type MilitaryStatusFormShape = typeof MilitaryStatus.initialValues;

interface MilitaryStatusProps {
  isSubmitting: boolean;
}

const options = [
  'Non-Military / Civilian',
  'Active Duty U.S. Military Service Member',
  'Non-U.S. Military (current or Veteran)',
  'Military family member (non-spouse)',
  'Military spouse',
  'U.S. Reserve or National Guard member',
  'U.S. Veteran',
];

export function MilitaryStatus({ isSubmitting }: MilitaryStatusProps) {
  return (
    <div className="flex flex-col items-stretch my-4 px-4 gap-8">
      <Alert type="warning">
        Please note that many of our services are only for veterans or their spouses. Also, note
        that you may feel represented by multiple categories; however, you may only choose one for
        this registration form.
      </Alert>
      <p>How do you classify yourself in regards to being part of the military?</p>
      <div className="flex flex-col items-stretch my-4 px-4 gap-8">
        <Field
          className="w-full"
          name="militaryAffiliation"
          label="Military Affiliation*"
          component={SelectSingle}
          options={options.map(option => ({ value: option, label: option }))}
          isDisabled={isSubmitting}
        />
      </div>
    </div>
  );
}
