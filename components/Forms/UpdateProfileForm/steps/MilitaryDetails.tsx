import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import { SelectSingle } from 'components/Form/Select/SelectSingle';
import { SelectMulti } from 'components/Form/Select/SelectMulti';
import type { OptionType } from 'components/Form/Select/ThemedReactSelect';

MilitaryDetails.title = 'Military Details';

MilitaryDetails.validationSchema = Yup.object().shape({
  branchOfService: Yup.array()
    .of(Yup.object().shape({ label: Yup.string(), value: Yup.string() }))
    .min(1, validationErrorMessages.required),
  payGrade: Yup.string().required(validationErrorMessages.required),
});

MilitaryDetails.initialValues = {
  branchOfService: [] as OptionType[],
  payGrade: '',
};

interface MilitaryDetailsProps {
  isSubmitting: boolean;
}

/**
 * There is also 'Military family member' and 'Not affiliated with the military'; however, these
 * selections are automatically chosen based on previous step answers.
 */
const branchOptions = [
  'U.S. Air Force',
  'U.S. Army',
  'U.S. Coast Guard',
  'U.S. Marine Corps',
  'U.S. Navy',
  'U.S. Space Force',
];

const payGradeOptions = ['E1-E5', 'E6-E9+', 'O1-O3', 'O4-O7+', 'WO1-3', 'WO3+'];

export function MilitaryDetails({ isSubmitting }: MilitaryDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Field
        name="branchOfService"
        label="Branch Of Service*"
        component={SelectMulti}
        options={branchOptions.map(option => ({ value: option, label: option }))}
        isDisabled={isSubmitting}
      />

      <Field
        name="payGrade"
        label="Pay Grade*"
        component={SelectSingle}
        options={payGradeOptions.map(option => ({ value: option, label: option }))}
        isDisabled={isSubmitting}
      />
    </div>
  );
}
