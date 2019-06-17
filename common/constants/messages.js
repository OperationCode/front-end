export const validationErrorMessages = {
  required: 'Required',
  name: 'No numbers please',
  email: 'Must be a valid email',
  emailMatch: 'Emails must match',
  password: 'Must include the following: lowercase letter, uppercase letter, number',
  passwordMatch: 'Passwords must match',
  length: value => `Must be at least ${value} characters`,
  zipcode: 'Must be a valid zipcode',
};

export const networkErrorMessages = {
  serverDown: 'Something is wrong on our end. Please try again later.',
};
