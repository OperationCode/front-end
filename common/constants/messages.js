export const validationErrorMessages = {
  required: 'Required',
  email: 'Must be a valid email',
  emailsMatch: 'Emails must match',
  emailExists: 'The e-mail provided is already registered',
  password:
    'Minimum password requirements: 8 characters, 1 Lowercase Letter, 1 Uppercase Letter, 1 Number',
  passwordMatch: 'Passwords must match',
  length: value => `Must be at least ${value} characters`,
  zipcode: 'Must be a valid zipcode',
};

export const networkErrorMessages = {
  serverDown: 'Something is wrong on our end. Please try again later.',
};
