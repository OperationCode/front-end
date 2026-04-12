'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { AxiosError } from 'axios';
import axios from 'axios';
import { getServerErrorMessage } from '@/lib/utils/api-utils';
import { validationErrorMessages } from '@/lib/constants/messages';
import { codeOfConduct, slackGuidelines } from '@/lib/constants/urls';
import { Button } from '@/components/ui/button';
import Checkbox from '@/components/Form/Checkbox/Checkbox';
import Input from '@/components/Form/Input/Input';
import { Alert } from '@/components/ui/alert';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import { InlineLoadingSpinner } from '@/components/InlineLoadingSpinner';
import { REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON } from '@/lib/constants/testIDs';
import { Field, FieldError } from '@/components/ui/field';

const registrationSchema = z
  .object({
    email: z.string().min(1, validationErrorMessages.required).email(validationErrorMessages.email),
    'confirm-email': z
      .string()
      .min(1, validationErrorMessages.required)
      .email(validationErrorMessages.email),
    firstName: z.string().trim().min(1, validationErrorMessages.required),
    lastName: z.string().trim().min(1, validationErrorMessages.required),
    zipcode: z.string().trim().min(1, validationErrorMessages.required),
    codeOfConduct: z.literal(true, {
      message: validationErrorMessages.codeOfConduct,
    }),
    slackGuidelines: z.literal(true, {
      message: validationErrorMessages.slackGuidelines,
    }),
  })
  .refine((data) => data.email === data['confirm-email'], {
    message: validationErrorMessages.emailsMatch,
    path: ['confirm-email'],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

const defaultValues = {
  email: '',
  'confirm-email': '',
  firstName: '',
  lastName: '',
  zipcode: '',
  codeOfConduct: false as unknown as true,
  slackGuidelines: false as unknown as true,
};

interface RegistrationFormProps {
  initialValues?: typeof defaultValues;
  onSubmit?: () => void;
  onSuccess: () => void;
}

export function RegistrationForm({
  initialValues = defaultValues,
  onSubmit: onSubmitProp,
  onSuccess,
}: RegistrationFormProps) {
  const [errorMessage, setErrorMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(registrationSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (values: typeof defaultValues) => {
    try {
      onSubmitProp?.();
      await axios.post('/api/registration/new', values);
      onSuccess();
    } catch (_error: unknown) {
      const axiosError = (_error as AxiosError).response?.data as
        | Record<string, string>
        | undefined;

      const axiosErrorMessage = axiosError?.message;

      if (axiosErrorMessage) {
        setErrorMessage(axiosErrorMessage);
      } else {
        setErrorMessage(getServerErrorMessage(_error));
      }
    }
  };

  return (
    <form
      className="m-0! flex w-full max-w-prose flex-col gap-4 px-4"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input
              {...field}
              type="email"
              label="Email*"
              isDisabled={isSubmitting}
              autoComplete="username email"
              error={fieldState.error?.message}
              isTouched={fieldState.isTouched}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        name="confirm-email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input
              {...field}
              type="email"
              label="Confirm Email*"
              isDisabled={isSubmitting}
              autoComplete="username email"
              error={fieldState.error?.message}
              isTouched={fieldState.isTouched}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <div className="hidden">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Password*"
              name="password"
              isDisabled={isSubmitting}
              autoComplete="new-password"
            />
          )}
        />
      </div>

      <div className="hidden">
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Confirm Password*"
              name="confirm-password"
              isDisabled={isSubmitting}
              autoComplete="new-password"
            />
          )}
        />
      </div>

      <Controller
        name="firstName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input
              {...field}
              type="text"
              label="First Name*"
              isDisabled={isSubmitting}
              autoComplete="given-name"
              error={fieldState.error?.message}
              isTouched={fieldState.isTouched}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input
              {...field}
              type="text"
              label="Last Name*"
              isDisabled={isSubmitting}
              autoComplete="family-name"
              error={fieldState.error?.message}
              isTouched={fieldState.isTouched}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        name="zipcode"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input
              {...field}
              type="text"
              label="Zipcode*"
              isDisabled={isSubmitting}
              autoComplete="postal-code"
              error={fieldState.error?.message}
              isTouched={fieldState.isTouched}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        name="codeOfConduct"
        control={control}
        render={({ field: { value, onChange, ...field }, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Checkbox
              {...field}
              checked={value === true}
              onChange={(e) => onChange(e.target.checked)}
              label={
                <>
                  I have read and agree to{' '}
                  <OutboundLink
                    hasIcon
                    href={codeOfConduct}
                    analyticsEventLabel="Registration CoC Checkbox Link"
                  >
                    Operation Code's Code of Conduct.
                  </OutboundLink>{' '}
                  *
                </>
              }
              isDisabled={isSubmitting}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      <Controller
        name="slackGuidelines"
        control={control}
        render={({ field: { value, onChange, ...field }, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Checkbox
              {...field}
              checked={value === true}
              onChange={(e) => onChange(e.target.checked)}
              label={
                <>
                  I have read and agree to{' '}
                  <OutboundLink
                    hasIcon
                    href={slackGuidelines}
                    analyticsEventLabel="Registration Slack Guidelines Checkbox Link"
                  >
                    Operation Code's Slack Community Guidelines.
                  </OutboundLink>{' '}
                  *
                </>
              }
              isDisabled={isSubmitting}
            />
            <FieldError errors={[fieldState.error]} />
          </Field>
        )}
      />

      {errorMessage && <Alert variant="destructive">{errorMessage}</Alert>}

      <Button
        type="submit"
        variant="secondary"
        className="w-full"
        disabled={isSubmitting}
        data-testid={REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON}
      >
        <span className="flex items-center justify-center gap-x-2">
          {isSubmitting && <InlineLoadingSpinner />}
          <span>Submit ✓</span>
        </span>
      </Button>

      <aside className="mx-auto rounded-md border border-dashed border-warning-deep bg-warning p-3 text-xs">
        <p>
          The demographic information you provide, helps us understand our community needs, ensure
          diversity, and provide specific resources to reach our mission. Thank you in advance for
          providing honest answers.&nbsp;
          <span className="font-bold">We do not sell your information to anyone.</span>
        </p>
      </aside>
    </form>
  );
}
