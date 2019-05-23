import { get, post, patch } from 'common/utils/api-utils';
import { formatUserData } from 'common/utils/formatters';

/* GET REQUESTS */
export const getUserPromise = ({ token } = {}) => get('auth/user', { token });
export const getCodeSchoolsPromise = () => get('api/v1/codeschools/');
export const getTeamMembersPromise = () => get('api/v1/teamMembers/');

/* POST REQUESTS */
export const createUser = ({ email, password, firstName, lastName, zipcode }) =>
  post('auth/registration/', {
    email,
    firstName,
    lastName,
    password,
    zip: zipcode,
  }).then(({ data }) => data);

export const loginUser = ({ email, password }) =>
  post('auth/login/', {
    email,
    password,
  }).then(({ data }) => data);

export const passwordReset = ({ email }) =>
  post('auth/password/reset/', { email }).then(({ data }) => data);

export const passwordResetSubmit = values =>
  post('auth/password_reset/confirm/', values).then(({ data }) => data);

/* PATCH REQUESTS */
export const updateUser = userInfo => {
  return patch('auth/profile', {
    ...formatUserData(userInfo),
  }).then(({ data }) => data);
};
