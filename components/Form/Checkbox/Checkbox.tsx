import type { FormikProps, Field } from 'formik';
import { ErrorMessage } from 'formik';
import { CHECKBOX, CHECKBOX_ERROR } from 'common/constants/testIDs';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  field: ReturnType<typeof Field>;
  form: FormikProps<{ name: string }>;
  label: React.ReactNode | string;
}

function Checkbox({
  field: { name, value, ...field },
  form: { errors },
  id,
  label,
}: CheckboxProps) {
  const hasErrors = !!errors.name;

  return (
    <div className="relative m-4" data-testid={CHECKBOX}>
      <Label for={name} isHidden={false}>
        <input
          {...field}
          className="border border-secondary/5 rounded-[3px] text-lg p-2 scale-150 mr-3 disabled:opacity-60 hover:disabled:cursor-not-allowed"
          id={id || name}
          name={name}
          type="checkbox"
          value={value || ''}
        />

        {label}
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
