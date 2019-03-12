export const minPasswordCharNum = 8;

export const validationErrorMessages = {
  required: 'Required',
  email: 'Must be a valid email',
  emailMatch: 'Emails must match',
  password: 'Must include the following: lowercase letter, uppercase letter, number',
  passwordMatch: 'Passwords must match',
  length: val => `Must be at least ${val} characters`,
  zipcode: 'Must be a valid zipcode',
};
