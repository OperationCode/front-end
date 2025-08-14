import type { FormikProps, Field, FormikValues } from 'formik';
import { ErrorMessage } from 'formik';
import { CHECKBOX, CHECKBOX_ERROR } from 'common/constants/testIDs';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import { cx } from 'common/utils/cva';

interface CheckboxProps extends Omit<React.HTMLAttributes<HTMLInputElement>, 'disabled'> {
  field: ReturnType<typeof Field>;
  form: FormikProps<FormikValues>;
  label: React.ReactNode | string;
  isDisabled?: boolean;
}

function Checkbox({
  className,
  field: { name, value, ...field },
  form: { errors },
  id,
  isDisabled = false,
  label,
}: CheckboxProps) {
  const hasErrors = Boolean(errors[name]);
  return (
    <div className={cx('relative', className)} data-testid={CHECKBOX}>
      <Label
        htmlFor={name}
        isHidden={false}
        className={cx(
          'group flex items-start gap-3 outline outline-1 outline-transparent outline-offset-2',
          'cursor-pointer has-[input:disabled]:cursor-not-allowed [&>input:focus-visible]:outline-secondary/50',
        )}
      >
        <input
          {...field}
          className={cx(
            'border border-secondary/50 size-5 rounded-sm disabled:opacity-60 cursor-[inherit] group-hover:border-secondary',
            'outline-transparent outline-offset-2 outline-1 outline',
            'group-hover:outline-secondary/25',
          )}
          disabled={isDisabled}
          id={id || name}
          name={name}
          type="checkbox"
          value={value || ''}
        />

        {/* negative margin here is to align the text with the checkbox bubble while allowing the field to use `flex items start` for if the label wraps lines */}
        <span className="select-none -mt-[0.1875rem]">{label}</span>
      </Label>

      <ErrorMessage name={name}>
        {message => {
          return hasErrors ? (
            <Alert className="mt-2 flex-1 text-center" data-testid={CHECKBOX_ERROR} type="error">
              {message}
            </Alert>
          ) : null;
        }}
      </ErrorMessage>
    </div>
  );
}

export default Checkbox;
