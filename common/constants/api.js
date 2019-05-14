import { get, post, patch } from 'common/utils/api-utils';
import { coerceEmptyStringToUndefined } from 'common/utils/string-utils';

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
}) => {
  const interestItems = [...programmingLanguages, ...disciplines];

  // Interests could be an array of many filled strings, one filled string, or one empty string
  const interests =
    interestItems.length > 1
      ? interestItems.join(', ')
      : [coerceEmptyStringToUndefined(interestItems[0])];

  return patch('users', {
    user: {
      branch_of_service: coerceEmptyStringToUndefined(branchOfService),
      company_name: coerceEmptyStringToUndefined(companyName),
      company_role: coerceEmptyStringToUndefined(companyRole),
      mentor: doesWantMentor,
      scholarship_info: doesWantScholarshipInfo,
      volunteer: doesWantToVolunteer,
      employment_status: coerceEmptyStringToUndefined(employmentStatus),
      military_status:
        militaryStatus === 'civilian' ? undefined : coerceEmptyStringToUndefined(militaryStatus),
      pay_grade: coerceEmptyStringToUndefined(payGrade),
      interests,
      years_of_service: coerceEmptyStringToUndefined(yearsOfService),
    },
  }).then(({ data }) => data);
};

export const patchUpdateMentorRequestPromise = ({ request, status, mentor }) =>
  patch(`requests/${request}`, {
    request: {
      status,
      mentor,
    },
  });
