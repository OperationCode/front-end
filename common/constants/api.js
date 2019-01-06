import { get, post, patch } from 'common/utils/api-utils';

/* GET REQUESTS */
export const getCodeSchoolsPromise = () => get('code_schools');
export const getMentorPromise = id => get(`mentors/${id}`);
export const getMentorsPromise = () => get('mentors');
export const getRequestsPromise = () => get('requests');
export const getScholarshipPromise = id => get(`scholarships/${id}`);
export const getScholarshipsPromise = () => get('scholarships');
export const getServicesPromise = () => get('services');
<<<<<<< HEAD
export const getTeamMembersPromise = () => get('team_members');

/* POST REQUESTS */
export const postMentorRequestPromise = ({ language, additionalDetails, mentor, service, team }) =>
=======

/* POST REQUESTS */
export const postMentorRequestPromise = ({ language, additionalDetails, mentor, service }) =>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  post('requests', {
    request: {
      details: additionalDetails,
      language,
      requested_mentor_id: mentor,
      service_id: service,
<<<<<<< HEAD
      team:team

=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
