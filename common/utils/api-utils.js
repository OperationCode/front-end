import axios from 'axios';
import { apiUrl } from 'common/config/environment';
import Cookies from 'universal-cookie';

const setAuthorizationHeader = () => {
  const cookies = new Cookies();
  return { Authorization: `bearer ${cookies.get('token')}` };
};

<<<<<<< HEAD
export const get = endpoint =>
  axios.get(`${apiUrl}/${endpoint}`, { headers: setAuthorizationHeader() });

export const post = (path, body) =>
  axios.post(`${apiUrl}/${path}`, body, { headers: setAuthorizationHeader() });

export const patch = (path, body) =>
  axios.patch(`${apiUrl}/${path}`, body, { headers: setAuthorizationHeader() });
=======
export const get = async endpoint => {
  const result = await axios.get(`${apiUrl}/${endpoint}`, {
    headers: setAuthorizationHeader(),
  });
  return result;
};

export const post = async (path, body) => {
  const result = await axios.post(`${apiUrl}/${path}`, body, {
    headers: setAuthorizationHeader(),
  });
  return result;
};

export const patch = async (path, body) => {
  const result = await axios.patch(`${apiUrl}/${path}`, body, {
    headers: setAuthorizationHeader(),
  });
  return result;
};
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
