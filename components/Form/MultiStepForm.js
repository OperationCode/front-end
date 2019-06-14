import React from 'react';
import { arrayOf, func, object } from 'prop-types';
import noop from 'lodash/noop';
import { Formik } from 'formik';
import { validStep } from 'common/constants/custom-props';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Alert from 'components/Alert/Alert';
import styles from './MultiStepForm.css';

export class MultiStepForm extends React.Component {
  static propTypes = {
    // initialValues must be object where entire form's shape is described
    initialValues: object.isRequired,

    getErrorMessage: func.isRequired,
    onEachStepSubmit: func,
    onFinalSubmit: func.isRequired, // to be considered onSuccess
    steps: arrayOf(validStep).isRequired,
  };

  static defaultProps = {
    onEachStepSubmit: noop,
  };

  state = {
    errorMessage: '',
    stepNumber: 0,
  };

  isLastStep = () => {
    const { steps } = this.props;
    const { stepNumber } = this.state;

    return stepNumber === steps.length - 1;
  };

  // We assume this method cannot be called on the last step
  showNextStep = ({ setFieldTouched }) => {
    const { steps } = this.props;
    const { stepNumber } = this.state;

    // TODO: Only untouch if value is '' or []
    const nextStepFieldNames = Object.keys(steps[stepNumber + 1].initialValues);
    nextStepFieldNames.forEach(fieldName => setFieldTouched(fieldName, false));

    this.setState(previousState => ({
      stepNumber: previousState.stepNumber + 1,
    }));
  };

  // We assume this method cannot be called on the first step
  showPreviousStep = ({ setFieldTouched }) => {
    const { steps } = this.props;
    const { stepNumber } = this.state;

    // TODO: Only untouch if value is '' or []
    const previousStepFieldNames = Object.keys(steps[stepNumber - 1].initialValues);
    previousStepFieldNames.forEach(fieldName => setFieldTouched(fieldName, false));

    this.setState(previousState => ({
      stepNumber: previousState.stepNumber - 1,
    }));
  };

  handleError = error => {
    const { getErrorMessage } = this.props;

    this.setState({ errorMessage: getErrorMessage(error) });
  };

  handleSubmit = async (values, formikBag) => {
    const { steps, onEachStepSubmit, onFinalSubmit } = this.props;
    const { errorMessage, stepNumber } = this.state;

    if (errorMessage) {
      // reset error message each submit
      this.setState({ errorMessage: '' });
    }

    try {
      await onEachStepSubmit(values);

      const currentStepSubmitHandler = steps[stepNumber].submitHandler;
      await currentStepSubmitHandler(values);

      if (this.isLastStep()) {
        await onFinalSubmit(values);
        formikBag.setSubmitting(false);
        formikBag.resetForm();
      } else {
        formikBag.setSubmitting(false);
        this.showNextStep(formikBag);
      }
    } catch (error) {
      formikBag.setSubmitting(false);
      this.handleError(error);
    }
  };

  render() {
    const { initialValues, steps } = this.props;
    const { errorMessage, stepNumber } = this.state;

    const CurrentStep = steps[stepNumber];
    const isFirstStep = stepNumber === 0;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={CurrentStep.validationSchema}
        onSubmit={this.handleSubmit}
        render={formikBag => (
          <Form className={styles.MultiStepForm} onSubmit={formikBag.handleSubmit}>
            <CurrentStep {...formikBag} />

            <div className={styles.errorMessage}>
              <Alert isOpen={Boolean(errorMessage)} type="error">
                {errorMessage}
              </Alert>
            </div>

            <div className={styles.buttonGrouping}>
              {!isFirstStep && (
                <Button
                  theme="secondary"
                  disabled={formikBag.isSubmitting}
                  onClick={() => this.showPreviousStep(formikBag)}
                  data-testid="Previous Step Button"
                >
                  ← Previous
                </Button>
              )}

              {this.isLastStep() ? (
                <Button
                  type="submit"
                  theme="secondary"
                  disabled={formikBag.isSubmitting}
                  data-testid="Submit Multi-Step Form"
                >
                  Submit ✓
                </Button>
              ) : (
                <Button
                  type="submit"
                  theme="secondary"
                  disabled={formikBag.isSubmitting}
                  fullWidth={isFirstStep}
                  data-testid="Submit Step Button"
                >
                  Next →
                </Button>
              )}
            </div>
          </Form>
        )}
      />
    );
  }
}

export default MultiStepForm;
