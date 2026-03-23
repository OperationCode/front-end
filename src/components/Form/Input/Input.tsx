import type { FieldInputProps, FormikHelpers, FormikState } from 'formik';
import { ErrorMessage } from 'formik';
import type { InputHTMLAttributes } from 'react';
import { INPUT, INPUT_ERROR, INPUT_FEEDBACK_GROUPING } from '@/common/constants/testIDs';
import { cx } from '@/common/utils/cva';
import Label from '@/components/Form/Label/Label';
import Alert from '@/components/Alert/Alert';

/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types */
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'form'> {
  field: FieldInputProps<string>;
  form: FormikState<Record<string, string>> & FormikHelpers<Record<string, string>>;
  hasValidationStyling?: boolean;
  isDisabled?: boolean;
  isLabelHidden?: boolean;
  label: string;
}

function Input({
  className,
  isDisabled = false,
  field: { name, value, ...field },
  form: { touched, errors },
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  label,
  type = 'text',
  ...props
}: InputProps) {
  const hasErrors = Boolean(errors[name]);
  const isLabelAfterInput = type === 'radio';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div className={className} data-testid={INPUT}>
      {isLabelBeforeInput && (
        <Label htmlFor={id || name} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}

      <div
        className="flex flex-col items-stretch lg:relative"
        data-testid={INPUT_FEEDBACK_GROUPING}
      >
        <input
          {...field}
          {...props}
          className={cx(
            'rounded-sm border border-secondary/50 bg-white p-2 text-lg',
            `min-w-48 disabled:opacity-60 hover:disabled:cursor-not-allowed`,
            `focus-visible:border-primary/50 focus-visible:shadow-xs focus-visible:shadow-primary/75 focus-visible:outline-none`,
            {
              'border-success-deep shadow-xs shadow-success-deep outline-none':
                touched[name] && !hasErrors && hasValidationStyling,
              'border-error-deep shadow-xs shadow-error-deep':
                touched[name] && hasErrors && hasValidationStyling,
            },
          )}
          disabled={isDisabled}
          id={id || name}
          name={name}
          type={type}
          value={value || ''}
        />

        <ErrorMessage name={name}>
          {(message: string) => {
            return hasErrors ? (
              <Alert
                className={cx(
                  '-mx-0.5 mt-2 max-w-full flex-1',
                  'lg:absolute lg:top-0 lg:left-full lg:mt-0 lg:ml-4',
                  'lg:w-auto lg:max-w-72 lg:min-w-36',
                  `lg:flex lg:min-h-full lg:items-center lg:justify-center lg:px-2.5 lg:py-0`,
                )}
                data-testid={INPUT_ERROR}
                type="error"
              >
                {message}
              </Alert>
            ) : null;
          }}
        </ErrorMessage>
      </div>

      {isLabelAfterInput && (
        <Label htmlFor={name} isHidden={isLabelHidden}>
          {label}
        </Label>
      )}
    </div>
  );
}

export default Input;
