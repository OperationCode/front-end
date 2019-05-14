import { get, post, patch } from 'common/utils/api-utils';

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
export const updateUser = ({
  branchOfService,
  companyName,
  companyRole,
  disciplines,
  doesWantMentor, // TODO: Use in form
  doesWantScholarshipInfo, // TODO: Use in form
  doesWantToVolunteer, // TODO: Use in form
  employmentStatus,
  militaryStatus,
  payGrade,
  programmingLanguages,
  yearsOfService,
}) =>
  patch('users', {
    user: {
      branch_of_service: branchOfService,
      company_name: companyName,
      company_role: companyRole,
      mentor: doesWantMentor,
      scholarship_info: doesWantScholarshipInfo,
      volunteer: doesWantToVolunteer,
      employment_status: employmentStatus,
      military_status: militaryStatus,
      pay_grade: payGrade,
      interests: [...programmingLanguages, ...disciplines].join(', '),
      years_of_service: yearsOfService,
    },
  }).then(({ data }) => data);

export const patchUpdateMentorRequestPromise = ({ request, status, mentor }) =>
  patch(`requests/${request}`, {
    request: {
      status,
      mentor,
    },
  });
