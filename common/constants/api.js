import { get, post, patch } from 'common/utils/api-utils';

/* GET REQUESTS */
export const getCodeSchoolsPromise = () => get('code_schools');
export const getMentorPromise = id => get(`mentors/${id}`);
export const getMentorsPromise = () => get('mentors');
export const getRequestsPromise = () => get('requests');
export const getScholarshipPromise = id => get(`scholarships/${id}`);
export const getScholarshipsPromise = () => get('scholarships');
export const getServicesPromise = () => get('services');

/* POST REQUESTS */
export const postMentorRequest = ({ language, additionalDetails, mentor, service }) =>
  post('requests', {
    request: {
      details: additionalDetails,
      language,
      requested_mentor_id: mentor,
      service_id: service,
    },
  });

/* PATCH REQUESTS */
export const patchUpdateRequest = ({ request, status, mentor }) =>
  patch(`requests/${request}`, {
    request: {
      status,
      mentor,
    },
  });
