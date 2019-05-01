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
    // initialValues can be object of strings, where entire form's shape is described
    initialValues: PropTypes.object.isRequired,

    onFinalStepSuccess: PropTypes.func.isRequired,
    startingStepNumber: PropTypes.number,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        render: PropTypes.func.isRequired,
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
    errorMessage: '',
  };

  showNextStep = values => {
    const { steps } = this.props;
    const { stepNumber } = this.state;

    const { getNumberOfStepSkips } = steps[stepNumber];

    this.setState(previousState => ({
      stepNumber: previousState.stepNumber + 1 + getNumberOfStepSkips(values),
    }));
  };

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

    const isLastStep = stepNumber === steps.length - 1;

    if (isLastStep) {
      try {
        await onFinalStepSuccess(values);

        formikBag.setSubmitting(false);
        formikBag.resetForm();
        return;
      } catch (error) {
        formikBag.setSubmitting(false);
        this.handleError(error);
      }
    } else {
      // Not last step
      try {
        const currentStepSubmitHandler = steps[stepNumber].submitHandler;
        await currentStepSubmitHandler(values);

        formikBag.setSubmitting(false);
        this.showNextStep(values);
      } catch (error) {
        formikBag.setSubmitting(false);
        this.handleError(error);
      }
    }
  };

  render() {
    const { initialValues, steps } = this.props;
    const { errorMessage, stepNumber } = this.state;

    const currentStep = steps[stepNumber].render;
    const currentStepValidationSchema = steps[stepNumber].validationSchema;
    const isFirstStep = stepNumber === 0;
    const isLastStep = stepNumber === steps.length - 1;

    return (
      <Formik
        initialValues={initialValues}
        validationSchema={currentStepValidationSchema}
        onSubmit={this.handleSubmit}
        render={formikBag => (
          <Form className={styles.MultiStepForm} onSubmit={formikBag.handleSubmit}>
            {currentStep(formikBag)}

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

              {isLastStep ? (
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
