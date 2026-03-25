import { Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { validationErrorMessages } from '@/lib/constants/messages';
import { SelectSingle } from '@/components/Form/Select/SelectSingle';
import { Alert } from '@/components/ui/alert';

MilitaryStatus.title = 'Military Status';

MilitaryStatus.validationSchema = z.object({
  militaryAffiliation: z.string().min(1, validationErrorMessages.required),
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
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Alert variant="warning">
        Please note that many of our services are only for veterans or their spouses. Also, note
        that you may feel represented by multiple categories; however, you may only choose one for
        this registration form.
      </Alert>

      <p>How do you classify yourself in regards to being part of the military?</p>

      <Controller
        name="militaryAffiliation"
        control={control}
        render={({ field, fieldState }) => (
          <SelectSingle
            className="w-full"
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Military Affiliation*"
            options={options.map((option) => ({ value: option, label: option }))}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />
    </div>
  );
}
