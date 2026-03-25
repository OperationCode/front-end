import { Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { validationErrorMessages } from '@/lib/constants/messages';
import { SelectSingle } from '@/components/Form/Select/SelectSingle';
import { SelectMulti } from '@/components/Form/Select/SelectMulti';
import type { OptionType } from '@/components/Form/Select/ThemedReactSelect';

MilitaryDetails.title = 'Military Details';

MilitaryDetails.validationSchema = z.object({
  branchOfService: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1, validationErrorMessages.required),
  payGrade: z.string().min(1, validationErrorMessages.required),
});

MilitaryDetails.initialValues = {
  branchOfService: [] as OptionType[],
  payGrade: '',
};

export type MilitaryDetailsFormShape = typeof MilitaryDetails.initialValues;

interface MilitaryDetailsProps {
  isSubmitting: boolean;
}

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
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="branchOfService"
        control={control}
        render={({ field, fieldState }) => (
          <SelectMulti
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Branch Of Service*"
            options={branchOptions.map((option) => ({ value: option, label: option }))}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />

      <Controller
        name="payGrade"
        control={control}
        render={({ field, fieldState }) => (
          <SelectSingle
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Pay Grade*"
            options={payGradeOptions.map((option) => ({ value: option, label: option }))}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />
    </div>
  );
}
