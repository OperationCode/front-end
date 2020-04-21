import { get, post, patch, ResourcesAPI } from 'common/utils/api-utils';
import { formatUserData } from 'common/utils/formatters';

/* GET REQUESTS */
export const getUserPromise = ({ token }) => get('auth/user/', { token });
export const getCodeSchoolsPromise = () => get('api/v1/codeschools/');
export const getTeamMembersPromise = () => get('api/v1/teamMembers/');
/***/
/* Resources API */
export const getResourcesPromise = parameters => {
  const { page = 1 } = parameters;

  return get(
    'api/v1/resources/',
    {
      parameters: {
        ...parameters,
        page,
      },
    },
    ResourcesAPI,
  );
};

export const searchResourcesPromise = parameters => {
  const { page = 1 } = parameters;

  return get(
    'api/v1/search/',
    {
      parameters: {
        ...parameters,
        page,
      },
    },
    ResourcesAPI,
  );
};

/* POST REQUESTS */
export const createUser = ({ email, password, firstName, lastName, zipcode }) =>
  post('auth/registration/', {
    email,
    firstName,
    lastName,
    password,
    zipcode,
  }).then(({ data }) => data);

export const loginUser = ({ email, password }) =>
  post('auth/login/', {
    email,
    password,
  }).then(({ data }) => data);

export const loginSocial = (provider, body) =>
  post(`auth/social/${provider}/`, body).then(({ data }) => data);

export const passwordReset = ({ email }) =>
  post('auth/password/reset/', { email }).then(({ data }) => data);

export const passwordResetSubmit = values =>
  post('auth/password/reset/confirm/', values).then(({ data }) => data);

export const changePassword = values =>
  post('auth/password/change/', values).then(({ data }) => data);

export const confirmEmail = key => post('auth/verify-email/', key).then(({ data }) => data);

/* PATCH REQUESTS */
export const updateUser = userInfo => {
  return patch('auth/profile/', {
    ...formatUserData(userInfo),
  }).then(({ data }) => data);
};
