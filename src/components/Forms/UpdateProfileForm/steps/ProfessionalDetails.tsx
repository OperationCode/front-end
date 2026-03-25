import { Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { validationErrorMessages } from '@/lib/constants/messages';
import Input from '@/components/Form/Input/Input';
import { SelectSingle } from '@/components/Form/Select/SelectSingle';
import { mapStringsToSelectOptions } from '@/lib/utils/array-utils';

ProfessionalDetails.title = 'Professional Details';

ProfessionalDetails.validationSchema = z.object({
  employmentStatus: z.string().min(1, validationErrorMessages.required),
  companyName: z.string().optional().default(''),
  companyRole: z.string().optional().default(''),
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
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="employmentStatus"
        control={control}
        render={({ field, fieldState }) => (
          <SelectSingle
            className="w-full"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Employment Status*"
            options={options}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />

      <Controller
        name="companyName"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type="text"
            label="Company Name"
            isDisabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />

      <Controller
        name="companyRole"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type="text"
            label="Company Role"
            isDisabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />
    </div>
  );
}
