import axios from 'axios';
import config from 'config/environment';
import Cookies from 'universal-cookie';

// TODO: Map config from environment
export const setAuthorizationHeader = () => {
  const cookies = new Cookies();
  return { Authorization: `bearer ${cookies.get('token')}` };
};

function makeGenericGet(endpoint) {
  const authHeader = setAuthorizationHeader();
  return axios
    .get(`${config.backendUrl}/${endpoint}`, { headers: authHeader })
    .then(({ data }) => data);
}

export function postBackend(path, body) {
  const authHeader = setAuthorizationHeader();
  return axios.post(
    `${config.backendUrl}/${path}`, body, { headers: authHeader },
  );
}

export function patchBackend(path, body) {
  const authHeader = setAuthorizationHeader();
  return axios.patch(
    `${config.backendUrl}/${path}`, body, { headers: authHeader },
  );
}

export const getServices = () => makeGenericGet('services');

export const getMentors = () => makeGenericGet('mentors');
export const getMentor = id => makeGenericGet(`mentors/${id}`);

export const getRequests = () => makeGenericGet('requests');

export const getScholarships = () => makeGenericGet('scholarships');
export const getScholarship = id => makeGenericGet(`scholarships/${id}`);

export function postRequest({
  language, additionalDetails, mentor, service,
}) {
  const authHeader = setAuthorizationHeader();

  return axios.post(
    `${config.backendUrl}/requests`,
    {
      request: {
        details: additionalDetails,
        requested_mentor_id: mentor,
        service_id: service,
        language,
      },
    },
    { headers: authHeader },
  );
}

export function updateRequest({
  request, status, mentor,
}) {
  const authHeader = setAuthorizationHeader();

  return axios.patch(
    `${config.backendUrl}/requests/${request}`,
    {
      request: {
        status,
        mentor,
      },
    },
    { headers: authHeader },
  );
}
