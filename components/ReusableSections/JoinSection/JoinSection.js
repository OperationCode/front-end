import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { addMailchimpSubscriber } from 'common/constants/api';
import successStateMessages from 'common/constants/successStateMessages';
import { validationErrorMessages } from 'common/constants/validations';
import Alert from 'components/Alert/Alert';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './JoinSection.css';

// eslint-disable-next-line react/prop-types
const CustomInput = ({ form, field, ...otherProps }) => (
  <Input
    className={styles.newsletterInput}
    shouldHideError
    shouldHideLabel
    form={form}
    field={field}
    {...otherProps}
  />
);

const newsletterSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
});

class JoinSection extends React.Component {
  state = {
    errorMsg: '',
    successMsg: '',
  };

  handleSubmit = async (values, actions) => {
    try {
      await addMailchimpSubscriber(values);

      actions.setSubmitting(false);
      actions.resetForm();

      this.setState({ successMsg: successStateMessages.newsletterSubscription });
    } catch (error) {
      actions.setSubmitting(false);

      const { data } = error.response;

      this.setState({ errorMsg: `Error ${data}` });
    }
  };

  render() {
    const { state } = this;

    return (
      <Container theme="white">
        <h3>Join Our Thriving Community</h3>

        <p>
          Are you ready to begin your journey towards a career in software development?
          <br />
          Get the support you need by joining our members only Slack community!
        </p>

        <Formik
          initialValues={{ email: '' }}
          onSubmit={this.handleSubmit}
          validationSchema={newsletterSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.row}>
                <Field
                  type="email"
                  name="email"
                  label="Email*"
                  component={CustomInput}
                  disabled={isSubmitting}
                  autoComplete="username email"
                />

                <Button type="submit" disabled={isSubmitting} className={styles.newsletterButton}>
                  Submit
                </Button>
              </div>

              <Alert isOpen={Boolean(state.successMsg)} type="success">
                {state.successMsg}
              </Alert>

              <Alert isOpen={Boolean(state.errorMsg)} type="error">
                {state.errorMsg}
              </Alert>
            </Form>
          )}
        </Formik>

        <p>Slack is a community based collaboration tool where all the magic happens!</p>

        <OutboundLink href="https://slack.com/" analyticsEventLabel="Learn More About Slack">
          Learn more
        </OutboundLink>
      </Container>
    );
  }
}

export default JoinSection;
