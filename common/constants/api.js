import { get, post, patch } from 'common/utils/api-utils';
import wait from 'test-utils/wait';

/* THIRD-PARTY APIs */
// TODO: Make this method actually do stuff with mailchimp
export const addMailchimpSubscriber = async values => {
  console.log(values);
  await wait(1);
};

/* GET REQUESTS */
export const getCodeSchoolsPromise = () => get('code_schools');
export const getMentorPromise = id => get(`mentors/${id}`);
export const getMentorsPromise = () => get('mentors');
export const getRequestsPromise = () => get('requests');
export const getScholarshipPromise = id => get(`scholarships/${id}`);
export const getScholarshipsPromise = () => get('scholarships');
export const getServicesPromise = () => get('services');
export const getTeamMembersPromise = () => get('team_members');

/* POST REQUESTS */
export const createUser = ({ email, password, firstName, lastName, zipcode }) =>
  post('users', {
    user: {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      zip: zipcode,
    },
  }).then(({ data }) => data);

export const loginUser = ({ email, password }) =>
  post('sessions', {
    user: {
      email,
      password,
    },
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
export const patchUpdateMentorRequestPromise = ({ request, status, mentor }) =>
  patch(`requests/${request}`, {
    request: {
      status,
      mentor,
    },
  });
