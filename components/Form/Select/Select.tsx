import { ErrorMessage, FieldProps } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import ThemedReactSelect from './ThemedReactSelect';
import styles from './Select.module.css';

type SelectOptionType = {
  label: string;
  value: string;
};

type SelectOptionsType = SelectOptionType[];

export type SelectPropsType = {
  options: SelectOptionsType;
  label: string;
  hasValidationStyling?: boolean;
  id?: string;
  isLabelHidden?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
} & FieldProps;

export default function Select({
  field: { name, value: fieldValue },
  form: { errors, setFieldTouched, setFieldValue, touched },
  hasValidationStyling = true,
  id,
  isLabelHidden = false,
  isMulti = false,
  isSearchable = true,
  label,
  options,
  ...props // disabled, placeholder, etc.
}: SelectPropsType) {
  /**
   * @description handle changing of non-multi select
   * @param {string} selected
   */
  const onChangeSingle = (selected: SelectOptionType) => {
    setFieldValue(name, selected === null ? '' : selected.value);
  };

  /**
   * @description handle changing of multi select
   * @param {string[]} selectedArray
   */
  const onChangeMulti = (selectedArray: SelectOptionsType) => {
    if (selectedArray) {
      setFieldValue(
        name,
        selectedArray.map(item => item.value),
      );
    } else {
      setFieldValue(name, []);
    }
  };

  /**
   * @description Return the selected value as a string
   * @returns {{ label: string; value: string; }}
   */
  const getValueFromSingle = () => {
    return options.find(option => option.value === fieldValue);
  };

  /**
   * @description Return an array of selected values for multi selects
   * @returns {{ label: string; value: string; }[]}
   */
  const getValueFromMulti = () => {
    if (Array.isArray(fieldValue)) {
      return fieldValue
        .map(
          value =>
            options.find((option: SelectOptionType) => option.value === value) as SelectOptionType,
        )
        .filter(Boolean);
    } else {
      return [];
    }
    // return options.filter(option => fieldValue.includes(option.value));
  };

  const handleBlur = () => {
    setFieldTouched(name);
  };

  const hasErrors = Boolean(errors[name]);

  // handlers and value depend on whether or not select allows for multiple selections.
  const value = isMulti ? getValueFromMulti() : getValueFromSingle();
  const onChangeHandler = isMulti ? onChangeMulti : onChangeSingle;

  return (
    <div className={styles.field}>
      <Label for={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <div className={styles.selectFeedbackGrouping}>
        <ThemedReactSelect
          {...props}
          hasErrors={hasErrors}
          hasValidationStyling={hasValidationStyling}
          isTouched={touched[name]}
          id={id || name}
          isMulti={isMulti}
          isSearchable={isSearchable}
          name={name}
          onBlur={handleBlur}
          onChange={() => onChangeHandler}
          options={options}
          value={value || ''}
        />

        <ErrorMessage name={name}>
          {(message: string) => {
            return hasErrors ? (
              <Alert className={styles.errorMessage} type="error">
                {message}
              </Alert>
            ) : null;
          }}
        </ErrorMessage>
      </div>
    </div>
  );
}
