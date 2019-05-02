import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { getErrorMessage } from 'common/utils/api-utils';
import { capitalizeFirstLetter } from 'common/utils/string-utils';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Alert from 'components/Alert/Alert';
import styles from './MultiStepForm.css';

class MultiStepForm extends React.Component {
  static propTypes = {
    // initialValues must be object where entire form's shape is described
    initialValues: PropTypes.object.isRequired,

    onFinalStepSuccess: PropTypes.func.isRequired,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        render: PropTypes.func.isRequired,
        validationSchema: PropTypes.object.isRequired, // specifically a Yup object shape
        submitHandler: PropTypes.func,
      }),
    ).isRequired,
  };

  state = {
    // eslint-disable-next-line react/destructuring-assignment
    stepNumber: 0,
    errorMessage: '',
  };

  isLastStep = () => {
    const { steps } = this.props;
    const { stepNumber } = this.state;

    return stepNumber === steps.length - 1;
  };

  // We assume this method cannot be called on the last step
  showNextStep = () => {
    this.setState(previousState => ({
      stepNumber: previousState.stepNumber + 1,
    }));
  };

  // We assume this method cannot be called on the first step
  showPreviousStep = () => {
    this.setState(previousState => ({
      stepNumber: previousState.stepNumber - 1,
    }));
  };

  handleError = error => {
    const { data } = error.response;

    if (data) {
      // TODO: Create back-end ticket for checking if email has been taken for a debounced,
      // client-side validation of emails instead of waiting for submission.
      const errorMessage = Object.keys(data)
        .map(key => {
          const fieldName = capitalizeFirstLetter(key);

          // example: Email has already been taken.
          return `${fieldName} ${data[key][0]}.`;
        })
        .join('\n');

      this.setState({ errorMessage });
    } else {
      this.setState({ errorMessage: getErrorMessage(error) });
    }
  };

  handleSubmit = async (values, formikBag) => {
    const { steps, onFinalStepSuccess } = this.props;
    const { errorMessage, stepNumber } = this.state;

    if (errorMessage) {
      // reset error message each submit
      this.setState({ errorMessage: '' });
    }

    if (this.isLastStep()) {
      try {
        await onFinalStepSuccess(values);
        formikBag.setSubmitting(false);
        formikBag.resetForm();
      } catch (error) {
        formikBag.setSubmitting(false);
        this.handleError(error);
      }
      return;
    }

    // Not last step
    try {
      const currentStepSubmitHandler = steps[stepNumber].submitHandler;
      await currentStepSubmitHandler(values);

      formikBag.setSubmitting(false);
      this.showNextStep();
    } catch (error) {
      formikBag.setSubmitting(false);
      this.handleError(error);
    }
  };

  render() {
    const { initialValues, steps } = this.props;
    const { errorMessage, stepNumber } = this.state;

    const currentStep = steps[stepNumber];
    const isFirstStep = stepNumber === 0;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={currentStep.validationSchema}
        onSubmit={this.handleSubmit}
        render={formikBag => (
          <Form className={styles.MultiStepForm} onSubmit={formikBag.handleSubmit}>
            {currentStep.render(formikBag)}

            <div className={styles.errorMessage}>
              <Alert isOpen={Boolean(errorMessage)} type="error">
                {errorMessage}
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

              {this.isLastStep() ? (
                <Button type="submit" theme="secondary" disabled={formikBag.isSubmitting}>
                  Submit ✓
                </Button>
              ) : (
                <Button
                  type="submit"
                  theme="secondary"
                  disabled={formikBag.isSubmitting}
                  fullWidth={isFirstStep}
                >
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
