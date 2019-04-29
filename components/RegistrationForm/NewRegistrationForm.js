// import React from 'react';
// import PropTypes from 'prop-types';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Button from 'components/Button/Button';

// class MultiPageForm extends React.Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired,
//     initialValues: PropTypes.shape({
//       email: PropTypes.string,
//       'confirm-email': PropTypes.string,
//       password: PropTypes.string,
//       'confirm-password': PropTypes.string,
//       firstName: PropTypes.string,
//       lastName: PropTypes.string,
//       zipcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     }),
//     onSubmit: PropTypes.func.isRequired,
//     startingPageNumber: PropTypes.number,
//     validationSchema: PropTypes.oneOf(Yup.object().shape()).isRequired,
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
//     startingPageNumber: 0,
//   };

//   static Page = ({ children }) => children;

//   state = {
//     /* eslint-disable react/destructuring-assignment */
//     pageNumber: this.props.startingPageNumber,
//     values: this.props.initialValues,
//     /* eslint-enable react/destructuring-assignment */
//   };

//   goToNextPage = values => {
//     this.setState(previousState => ({
//       pageNumber: previousState.pageNumber + 1,
//       values,
//     }));
//   };

//   goToPreviousPage = () => {
//     this.setState(previousState => ({
//       pageNumber: previousState.pageNumber - 1,
//     }));
//   };

//   validateCurrentPage = values => {
//     const { props, state } = this;
//     const activePage = React.Children.toArray(props.children)[state.pageNumber];
//     return activePage.props.validate ? activePage.props.validate(values) : {};
//   };

//   handleSubmit = (values, formikBag) => {
//     const { children, onSubmit } = this.props;
//     const { pageNumber } = this.state;

//     const isLastPage = pageNumber === React.Children.count(children) - 1;
//     if (isLastPage) {
//       return onSubmit(values, formikBag);
//     }

//     formikBag.setTouched({});
//     formikBag.setSubmitting(false);
//     this.goToNextPage(values);
//   };

//   render() {
//     const { props, state } = this;

//     const activePage = React.Children.toArray(props.children)[state.pageNumber];
//     const isLastPage = state.pageNumber === React.Children.count(props.children) - 1;

//     return (
//       <Formik
//         initialValues={state.values}
//         validate={this.validateCurrentPage}
//         onSubmit={this.handleSubmit}
//         render={({ handleSubmit, isSubmitting }) => (
//           <form onSubmit={handleSubmit}>
//             {activePage}

//             <div className="buttons">
//               {state.pageNumber > 0 && (
//              <Button theme="secondary" disabled={isSubmitting} onClick={this.goToPreviousPage}>
//                   « Previous
//                 </Button>
//               )}

//               {isLastPage ? (
//                 <Button type="submit" theme="secondary" disabled={isSubmitting}>
//                   Submit
//                 </Button>
//               ) : (
//                 <Button type="submit" theme="secondary" disabled={isSubmitting}>
//                   Next »
//                 </Button>
//               )}
//             </div>
//           </form>
//         )}
//       />
//     );
//   }
// }

// const App = () => (
//   <div className="App">
//     <MultiPageForm
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         favoriteColor: '',
//       }}
//       onSubmit={(values, actions) => {
//         window.alert(JSON.stringify(values, null, 2)); // eslint-disable-line no-alert
//         actions.setSubmitting(false);
//       }}
//     >
//       <MultiPageForm.Page>
//         <div>
//           <label>First Name</label>
//           <Field
//             name="firstName"
//             component="input"
//             type="text"
//             placeholder="First Name"
//             validate={required}
//           />
//           <ErrorMessage name="firstName" component="div" className="field-error" />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <Field
//             name="lastName"
//             component="input"
//             type="text"
//             placeholder="Last Name"
//             validate={required}
//           />
//           <ErrorMessage name="lastName" component="div" className="field-error" />
//         </div>
//       </MultiPageForm.Page>
//       <MultiPageForm.Page
//         validate={values => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = 'Required';
//           }
//           if (!values.favoriteColor) {
//             errors.favoriteColor = 'Required';
//           }
//           return errors;
//         }}
//       >
//         <div>
//           <label>Email</label>
//           <Field name="email" component="input" type="email" placeholder="Email" />
//           <ErrorMessage name="email" component="div" className="field-error" />
//         </div>
//         <div>
//           <label>Favorite Color</label>
//           <Field name="favoriteColor" component="select">
//             <option value="">Select a Color</option>
//             <option value="#ff0000">❤️ Red</option>
//             <option value="#00ff00">💚 Green</option>
//             <option value="#0000ff">💙 Blue</option>
//           </Field>
//           <ErrorMessage name="favoriteColor" component="div" className="field-error" />
//         </div>
//       </MultiPageForm.Page>
//     </MultiPageForm>
//   </div>
// );

// export default App;
