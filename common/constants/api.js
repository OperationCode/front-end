import { get, post, patch } from 'common/utils/api-utils';
import { formatUserData } from 'common/utils/formatters';

/* GET REQUESTS */
export const getCodeSchoolsPromise = () => get('api/v1/codeschools/');
export const getTeamMembersPromise = () => get('api/v1/teamMembers/');
export const getMentorPromise = id => get(`mentors/${id}`);
export const getMentorsPromise = () => get('mentors');
export const getRequestsPromise = () => get('requests');
export const getScholarshipPromise = id => get(`scholarships/${id}`);
export const getScholarshipsPromise = () => get('scholarships');
export const getServicesPromise = () => get('services');

/* POST REQUESTS */
export const createUser = ({ email, password, firstName, lastName, zipcode }) =>
  post('auth/registration/', {
    email,
    firstName,
    lastName,
    password1: password,
    password2: password,
    zip: zipcode,
  }).then(({ data }) => data);

export const loginUser = ({ email, password }) =>
  post('auth/login/', {
    email,
    password,
  }).then(({ data }) => data);

export const postMentorRequestPromise = ({ language, additionalDetails, mentor, service }) =>
  post('requests', {
    request: {
      details: additionalDetails,
      language,
      requested_mentor_id: mentor,
      service_id: service,
    },
  });

/* PATCH REQUESTS */
export const updateUser = userInfo => {
  return patch('auth/profile', {
    ...formatUserData(userInfo),
  }).then(({ data }) => data);
};

export const patchUpdateMentorRequestPromise = ({ request, status, mentor }) =>
  patch(`requests/${request}`, {
    request: {
      status,
      mentor,
    },
  });
