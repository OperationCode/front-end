// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
// import { minPasswordCharNum, validationErrorMessages } from 'common/constants/validations';
// import { capitalizeFirstLetter } from 'common/utils/string-utils';
// import { isMinPasswordStrength, isValidZipcode } from 'common/utils/validator-utils';
// import Button from 'components/Button/Button';
// import Form from 'components/Form/Form';
// import Input from 'components/Form/Input/Input';
// import Alert from 'components/Alert/Alert';
// // import {
// //   EmailPasswordStep,
// //   MilitaryStep,
// //   PersonaStep,
// //   TechnologyStep,
// //   UserDetailsStep,
// // } from './Steps';
// import styles from './RegistrationForm.css';

// /*
//  * NOTE: We're repeating hardcode between the registration schema and passing an asterisk
//  * to the label of required fields. This seems to an unfortunate negative aspect of an otherwise
//  * awesome library. More importantly, it looks like the lib's author has plans to remedy the
//  * situation. For now, our forms wont change much, so we should be okay.
//  */
// const registrationSchema = Yup.object().shape({
//   email: Yup.string()
//     .required(validationErrorMessages.required)
//     .email(validationErrorMessages.email),
//   'confirm-email': Yup.string()
//     .required(validationErrorMessages.required)
//     .oneOf([Yup.ref('email')], validationErrorMessages.emailMatch),
//   password: Yup.string()
//     .required(validationErrorMessages.required)
//     .min(minPasswordCharNum, validationErrorMessages.length(minPasswordCharNum))
//     .test('password-strength', validationErrorMessages.password, isMinPasswordStrength),
//   'confirm-password': Yup.string()
//     .required(validationErrorMessages.required)
//     .oneOf([Yup.ref('password')], validationErrorMessages.passwordMatch),
// });

// class EmailPasswordStep extends Component {
//   static propTypes = {
//     register: PropTypes.func.isRequired, // essentially onSubmit
//     onSuccess: PropTypes.func.isRequired,
//     initialValues: PropTypes.shape({
//       email: PropTypes.string,
//       'confirm-email': PropTypes.string,
//       password: PropTypes.string,
//       'confirm-password': PropTypes.string,
//       firstName: PropTypes.string,
//       lastName: PropTypes.string,
//       zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     }),
//   };

//   static defaultProps = {
//     initialValues: {
//       email: '',
//       'confirm-email': '',
//       password: '',
//       'confirm-password': '',
//       firstName: '',
//       lastName: '',
//       zipcode: '',
//     },
//   };

//   state = {
//     errorMsg: '',
//   };

//   handleSubmit = async (values, actions) => {
//     const { register, onSuccess } = this.props;

//     try {
//       const { token } = await register(values);
//       actions.setSubmitting(false);
//       actions.resetForm();

//       await onSuccess({ user: { ...values, slackName: '', isMentor: false }, token });
//     } catch (error) {
//       actions.setSubmitting(false);

//       const { data } = error.response;

//       // TODO: Create back-end ticket for checking if email has been taken for a debounced,
//       // client-side validation of emails instead of waiting for submission.
//       const errorMessage = Object.keys(data)
//         .map(key => {
//           const fieldName = capitalizeFirstLetter(key);

//           // example: Email has already been taken.
//           return `${fieldName} ${data[key][0]}.`;
//         })
//         .join('\n');

//       this.setState({ errorMessage });
//     }
//   };

//   render() {
//     const { props } = this;

//     return (
//       <>
//         <div className={styles.row}>
//           <Field
//             type="email"
//             name="email"
//             label="Email*"
//             component={Input}
//             disabled={props.isSubmitting}
//             autoComplete="username email"
//           />

//           <Field
//             type="email"
//             name="confirm-email"
//             label="Confirm Email*"
//             component={Input}
//             disabled={props.isSubmitting}
//             autoComplete="username email"
//           />
//         </div>

//         <div className={styles.row}>
//           <Field
//             type="password"
//             name="password"
//             label="Password*"
//             component={Input}
//             disabled={props.isSubmitting}
//             autoComplete="new-password"
//           />

//           <Field
//             type="password"
//             name="confirm-password"
//             label="Confirm Password*"
//             component={Input}
//             disabled={props.isSubmitting}
//             autoComplete="new-password"
//           />
//         </div>
//       </>
//     );
//   }
// }

// export default EmailPasswordStep;
