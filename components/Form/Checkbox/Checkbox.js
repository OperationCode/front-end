import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './Checkbox.module.css';

Checkbox.propTypes = {
  children: node.isRequired,
  className: string,
};

Checkbox.defaultProps = {
  className: undefined,
};


function Checkbox({
  field: { name, value, ...field },
  form: { touched, errors },
  hasValidationStyling,
  id,
  isLabelHidden,
  label,
  type,
  ...props // input simply has too many possible attributes... we'd be redocumenting the web
  // See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes_common_to_all_input_types
}) {
  const hasErrors = Boolean(errors[name]);
  const isLabelAfterInput = type === 'radio' || type === 'checkbox';
  const isLabelBeforeInput = !isLabelAfterInput;

  return (
    <div>
      <Field
        type="checkbox"
        name="codeOfConduct"
        label=" "
        component={Input}
        disabled={isSubmitting}
      />
      <p className={styles.floatLeft}>
      I agree to abide by the &nbsp;
        <OutboundLink
          href="https://github.com/OperationCode/operationcode_docs/blob/master/community/code_of_conduct.md"
          analyticsEventLabel="Code of Conduct"
        >
          Code of Conduct
        </OutboundLink>
      </p>

      <Field
        type="checkbox"
        name="communityGuidelines"
        label=" "
        component={Input}
        disabled={isSubmitting}
      />
      <p className={styles.floatLeft}>
      I have read the &nbsp;
        <OutboundLink
          href="https://github.com/OperationCode/START_HERE/blob/master/community_guidelines.md"
          analyticsEventLabel="Community Guidelines"
        >
          Community Guidelines
        </OutboundLink>
      </p>
  </div>
  )
}

export default Checkbox;