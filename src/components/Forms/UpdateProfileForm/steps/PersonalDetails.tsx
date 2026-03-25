import { Controller, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { validationErrorMessages } from '@/lib/constants/messages';
import { SelectSingle } from '@/components/Form/Select/SelectSingle';
import { mapStringsToSelectOptions } from '@/lib/utils/array-utils';
import { SelectMulti } from '@/components/Form/Select/SelectMulti';
import type { OptionType } from '@/components/Form/Select/ThemedReactSelect';

PersonalDetails.title = 'Personal Details';

PersonalDetails.validationSchema = z.object({
  joinReason: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1, validationErrorMessages.required),
  gender: z.string().min(1, validationErrorMessages.required),
  ethnicity: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .min(1, validationErrorMessages.required),
  educationLevel: z.string().min(1, validationErrorMessages.required),
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
  'I\u2019d like access to jobs',
  'I\u2019d like access to resources',
  'I\u2019d like to mentor/help others',
  'I\u2019m looking for community',
  'I\u2019m looking to grow in my tech career',
  'I\u2019m transitioning from my military career',
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
  '4 year Bachelor\u2019s degree',
  'Graduate degree',
  'Post-Graduate degree',
  'Coding Bootcamp/other Professional Certifications',
  'No formal education / Self-taught',
]);

export function PersonalDetails({ isSubmitting }: PersonalDetailsProps) {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="joinReason"
        control={control}
        render={({ field, fieldState }) => (
          <SelectMulti
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Join Reason*"
            options={joinReasonOptions}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field, fieldState }) => (
          <SelectSingle
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Gender*"
            options={genderOptions}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />

      <Controller
        name="ethnicity"
        control={control}
        render={({ field, fieldState }) => (
          <SelectMulti
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Ethnicity*"
            options={ethnicityOptions}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />

      <Controller
        name="educationLevel"
        control={control}
        render={({ field, fieldState }) => (
          <SelectSingle
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            label="Education Level*"
            options={educationLevelOptions}
            disabled={isSubmitting}
            error={fieldState.error?.message}
            isTouched={fieldState.isTouched}
          />
        )}
      />
    </div>
  );
}
