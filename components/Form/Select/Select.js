import {
  arrayOf,
  bool,
  func,
  number,
  object,
  objectOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import { ErrorMessage } from 'formik';
import { ThemedReactSelect } from './ThemedReactSelect';
import styles from './Select.module.css';
import { Alert } from '@/components/Alert/Alert';
import { Label } from '@/components/Form/Label/Label';

Select.propTypes = {
  field: shape({
    name: string.isRequired,
    value: oneOfType([string, number, bool, arrayOf(string), arrayOf(number), arrayOf(bool)])
      .isRequired,
  }).isRequired,
  form: shape({
    // TODO: Resolve why multiselects can end up with touched: { key: array }
    // see ThemedReactSelect as well
    // touched: objectOf(bool).isRequired,
    touched: object.isRequired,
    errors: objectOf(string).isRequired,
    setFieldTouched: func.isRequired,
    setFieldValue: func.isRequired,
  }).isRequired,
  hasValidationStyling: bool,
  id: oneOfType([string, number]),
  isLabelHidden: bool,
  isMulti: bool,
  isSearchable: bool,
  label: string.isRequired,
  options: arrayOf(shape({ label: string.isRequired, value: string.isRequired }).isRequired)
    .isRequired,
};

Select.defaultProps = {
  hasValidationStyling: true,
  id: undefined,
  isLabelHidden: false,
  isMulti: false,
  isSearchable: true,
};

export function Select({
  field: { name, value: fieldValue },
  form: { errors, setFieldTouched, setFieldValue, touched },
  hasValidationStyling,
  id,
  isLabelHidden,
  isMulti,
  isSearchable,
  label,
  options,
  ...props // disabled, placeholder, etc.
}) {
  /**
   * @description handle changing of non-multi select
   * @param {string} selected
   */
  const onChangeSingle = selected => {
    setFieldValue(name, selected === null ? '' : selected.value);
  };

  /**
   * @description handle changing of multi select
   * @param {string[]} selectedArray
   */
  const onChangeMulti = selectedArray => {
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
    return options.filter(option => fieldValue.includes(option.value));
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
          onChange={onChangeHandler}
          options={options}
          value={value || ''}
        />

        <ErrorMessage name={name}>
          {message => {
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
