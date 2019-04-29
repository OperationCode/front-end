import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Alert from 'components/Alert/Alert';
import styles from './MultiStepForm.css';

class MultiStepForm extends React.Component {
  static propTypes = {
    // initialValues can be object of strings, where entire form's shape is described
    initialValues: PropTypes.object.isRequired,

    onSubmit: PropTypes.func.isRequired,
    startingStepNumber: PropTypes.number,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        stepRender: PropTypes.func.isRequired,
        stepSubmit: PropTypes.func,
        validationSchema: PropTypes.object.isRequired, // specifically a Yup object shape
      }),
    ).isRequired,
  };

  static defaultProps = {
    startingStepNumber: 0,
  };

  state = {
    // eslint-disable-next-line react/destructuring-assignment
    stepNumber: this.props.startingStepNumber,
    containerFormErrorMessage: '',
  };

  showNextStep = () => {
    this.setState(previousState => ({
      stepNumber: previousState.stepNumber + 1,
    }));
  };

  showPreviousStep = () => {
    this.setState(previousState => ({
      stepNumber: previousState.stepNumber - 1,
    }));
  };

  handleSubmit = async (values, formikBag) => {
    const { steps, onSubmit } = this.props;
    const { stepNumber } = this.state;

    const isLastStep = stepNumber === steps.length - 1;

    if (isLastStep) {
      await onSubmit(values, formikBag);
      return;
    }

    // Not required
    const currentStepCustomSubmit = steps[stepNumber].stepSubmit || undefined;

    if (currentStepCustomSubmit) {
      await currentStepCustomSubmit(values, formikBag);
    } else {
      this.showNextStep();
      formikBag.setSubmitting(false);
    }
  };

  render() {
    const { initialValues, steps } = this.props;
    const { containerFormErrorMessage, stepNumber } = this.state;

    const currentStep = steps[stepNumber].stepRender;
    const isLastStep = stepNumber === steps.length - 1;
    const currentStepValidationSchema = steps[stepNumber].validationSchema;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={currentStepValidationSchema}
        onSubmit={this.handleSubmit}
        render={formikBag => (
          <Form className={styles.MultiStepForm} onSubmit={formikBag.handleSubmit}>
            {currentStep(formikBag)}

            <div className={styles.containerFormErrorMessage}>
              <Alert isOpen={Boolean(containerFormErrorMessage)} type="error">
                {containerFormErrorMessage}
              </Alert>
            </div>

            <div className={styles.buttonGrouping}>
              {stepNumber > 0 && (
                <Button
                  theme="secondary"
                  disabled={formikBag.isSubmitting}
                  onClick={this.showPreviousStep}
                >
                  « Previous
                </Button>
              )}

              {isLastStep ? (
                <Button type="submit" theme="secondary" disabled={formikBag.isSubmitting}>
                  Submit
                </Button>
              ) : (
                <Button type="submit" theme="secondary" disabled={formikBag.isSubmitting}>
                  Next »
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
