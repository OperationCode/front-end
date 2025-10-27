import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import Input from 'components/Form/Input/Input';
import { SelectSingle } from 'components/Form/Select/SelectSingle';
import { mapStringsToSelectOptions } from 'common/utils/array-utils';

ProfessionalDetails.title = 'Professional Details';

ProfessionalDetails.validationSchema = Yup.object().shape({
  employmentStatus: Yup.string().nullable().required(validationErrorMessages.required),
  companyName: Yup.string().nullable(),
  companyRole: Yup.string().nullable(),
});

ProfessionalDetails.initialValues = {
  employmentStatus: '',
  companyName: '',
  companyRole: '',
};

export type ProfessionalDetailsFormShape = typeof ProfessionalDetails.initialValues;

interface ProfessionalDetailsProps {
  isSubmitting: boolean;
}

const options = mapStringsToSelectOptions(['Full-Time', 'Part-Time', 'Unemployed']);

export function ProfessionalDetails({ isSubmitting }: ProfessionalDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Field
        className="w-full"
        name="employmentStatus"
        label="Employment Status*"
        component={SelectSingle}
        options={options}
        isDisabled={isSubmitting}
      />

      <Field
        type="text"
        name="companyName"
        label="Company Name"
        component={Input}
        isDisabled={isSubmitting}
      />

      <Field
        type="text"
        name="companyRole"
        label="Company Role"
        component={Input}
        isDisabled={isSubmitting}
      />
    </div>
  );
}
