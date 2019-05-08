import React from 'react';
import { string, bool, func, number, shape, arrayOf, oneOfType, objectOf } from 'prop-types';
import { ErrorMessage } from 'formik';
import Alert from 'components/Alert/Alert';
import Label from 'components/Form/Label/Label';
import ThemedReactSelect from './ThemedReactSelect';
import styles from './Select.css';

class Select extends React.Component {
  static propTypes = {
    field: shape({
      name: string.isRequired,
      value: oneOfType([
        string,
        arrayOf(shape({ label: string.isRequired, value: string.isRequired })),
      ]).isRequired,
    }).isRequired,
    form: shape({
      touched: objectOf(bool).isRequired,
      errors: objectOf(string).isRequired,
      setFieldTouched: func.isRequired,
      setFieldValue: func.isRequired,
    }).isRequired,
    id: oneOfType([string, number]),
    isLabelHidden: bool,
    isMulti: bool,
    label: string.isRequired,
    options: arrayOf(shape({ label: string.isRequired, value: string.isRequired }).isRequired)
      .isRequired,
  };

  static defaultProps = {
    id: '',
    isLabelHidden: false,
    isMulti: false,
  };

  /**
   * @memberof Select
   * @description handle changing of non-multi select
   * @param {string} selected
   */
  onChangeSingle = selected => {
    const { field, form } = this.props;

    form.setFieldValue(field.name, selected.value);
  };

  /**
   * @memberof Select
   * @description handle changing of multi select
   * @param {string[]} selectedArray
   */
  onChangeMulti = selectedArray => {
    const { field, form } = this.props;

    form.setFieldValue(field.name, selectedArray.map(item => item.value));
  };

  /**
   * @memberof Select
   * @description Return the selected value as a string
   * @returns {string}
   */
  getValueFromSingle = () => {
    const { field, options } = this.props;

    return options.find(option => option.value === field.value);
  };

  /**
   * @memberof Select
   * @description Return an array of selected values for multi selects
   * @returns {string[]}
   */
  getValueFromMulti = () => {
    const { field, options } = this.props;

    return options.filter(option => field.value.includes(option.value));
  };

  handleBlur = () => {
    const { field, form } = this.props;

    form.setFieldTouched(field.name, true);
  };

  render() {
    const {
      field: { name },
      form: { errors, touched },
      id,
      isLabelHidden,
      isMulti,
      label,
      options,
      ...props // disabled, placeholder, etc.
    } = this.props;

    const hasErrors = Boolean(errors[name]);

    // handlers and value depend on whether or not select allows for multiple selections.
    const value = isMulti ? this.getValueFromMulti() : this.getValueFromSingle();
    const onChangeHandler = isMulti ? this.onChangeMulti : this.onChangeSingle;

    return (
      <div className={styles.field}>
        <Label for={name} isHidden={isLabelHidden}>
          {label}
        </Label>

        <div>
          <ThemedReactSelect
            {...props}
            hasErrors={hasErrors}
            isTouched={touched[name]}
            id={id}
            isMulti={isMulti}
            name={name}
            onBlur={this.handleBlur}
            onChange={onChangeHandler}
            options={options}
            value={value}
          />

          <ErrorMessage
            name={name}
            render={message => (
              <Alert isOpen={hasErrors} className={styles.errorMessage}>
                {message}
              </Alert>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Select;
