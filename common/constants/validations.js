export const minPasswordCharNum = 8;

export const validationErrorMessages = {
  email: 'This does not appear to be a valid email.',
  emailMatch: 'Emails must match',
  password: 'Must include the following: lowercase letter, uppercase letter, number',
  passwordMatch: 'Passwords must match',
  length: val => `Must be at least ${val} characters`,
};
